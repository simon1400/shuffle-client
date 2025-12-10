# Strapi Webhook Configuration for Auto-Revalidation

## Overview
This guide explains how to configure Strapi webhooks to automatically revalidate Next.js pages when content changes.

## How It Works
1. Content is updated in Strapi admin panel
2. Strapi sends webhook POST request to Next.js
3. Next.js receives the request and revalidates affected pages
4. Changes are immediately visible on the website

## Configuration Steps

### 1. Access Strapi Admin Panel
Navigate to: `https://shuffle-strapi.hardart.cz/admin`

### 2. Go to Webhooks Settings
- Click on **Settings** in the sidebar
- Click on **Webhooks**
- Click **Create new webhook**

### 3. Configure Webhook

#### Basic Settings
- **Name:** `Next.js Auto-Revalidation`
- **URL:** `http://localhost:3002/api/revalidate`
  - ⚠️ Use `localhost` because both apps are on the same server
  - This avoids external network calls and is faster

#### Headers
Add the authorization header:
- **Key:** `Authorization`
- **Value:** `Bearer shuffle-secret-key-2024`

#### Events
Select ALL of the following events:
- **Entry:**
  - ☑ Create
  - ☑ Update
  - ☑ Delete
  - ☑ Publish
  - ☑ Unpublish

### 4. Content Types to Monitor

Make sure webhook is configured for these content types:
- `homepage`
- `product` / `products`
- `catalog`
- `article` / `articles`
- `compare`
- `contact`
- `navigation`

### 5. Save and Test

1. Click **Save**
2. Test the webhook:
   - Edit any content in Strapi
   - Click **Save** or **Publish**
   - Check Next.js logs: `pm2 logs shuffle-client`
   - You should see: `[Revalidate] Received webhook`

## Webhook Request Format

Strapi sends requests in this format:
```json
{
  "event": "entry.update",
  "createdAt": "2025-12-11T00:00:00.000Z",
  "model": "product",
  "entry": {
    "id": 1,
    "slug": "product-slug",
    ...
  }
}
```

## Revalidation Logic

The Next.js API route handles revalidation based on content type:

| Content Type | Revalidated Paths |
|--------------|-------------------|
| `homepage` | `/` (homepage) |
| `product` | `/catalog`, `/{slug}` |
| `catalog` | `/catalog` |
| `article` | `/article/{slug}` |
| `compare` | `/compare` |
| `contact` | `/contact` |
| `navigation` | All pages (layout) |

## Troubleshooting

### Webhook Not Firing
1. Check Strapi webhook logs in Settings → Webhooks
2. Ensure URL is correct: `http://localhost:3002/api/revalidate`
3. Check authorization header is set

### 401 Unauthorized
- Verify `Authorization` header value matches:
  ```
  Bearer shuffle-secret-key-2024
  ```

### Changes Not Appearing
1. Check Next.js logs:
   ```bash
   pm2 logs shuffle-client
   ```
2. Look for `[Revalidate]` messages
3. Verify ISR is configured (should see revalidate times in logs)

### Manual Revalidation
You can manually trigger revalidation:
```bash
curl -X POST http://localhost:3002/api/revalidate \
  -H "Authorization: Bearer shuffle-secret-key-2024" \
  -H "Content-Type: application/json" \
  -d '{"model":"homepage","event":"entry.update"}'
```

## Health Check

Test if the revalidation API is running:
```bash
curl http://localhost:3002/api/revalidate
```

Expected response:
```json
{
  "status": "ok",
  "service": "shuffle-client-revalidation",
  "timestamp": 1702339200000
}
```

## Security Notes

- The secret key `shuffle-secret-key-2024` should be changed in production
- Update in both:
  1. `/opt/shuffle-client/.env.production`
  2. Strapi webhook configuration
- Always use HTTPS for external webhooks (not needed for localhost)

## Performance

- Revalidation is instant (happens on save)
- No need to rebuild the entire site
- Only affected pages are regenerated
- ISR cache expires every hour automatically

## Logs Location

- **Next.js logs:** `/var/log/pm2/shuffle-client-out.log`
- **Strapi webhook logs:** Strapi Admin → Settings → Webhooks → View details
