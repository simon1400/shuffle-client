# Deployment Guide - Shuffle Client

## Server Setup

### Prerequisites
- Ubuntu/Debian server
- Node.js 18+ installed
- Nginx installed
- PM2 installed globally
- Git configured with SSH keys

### Server Information
- **Server IP:** 157.90.169.205
- **Domain:** shuffle.hardart.cz
- **Project Path:** /opt/shuffle-client
- **Port:** 3002 (internal)
- **Strapi API:** http://localhost:1337 (internal)

## Initial Setup

### 1. Connect to Server
```bash
ssh root@157.90.169.205
```

### 2. Install Dependencies
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2 globally
npm install -g pm2

# Install Nginx (if not installed)
apt install -y nginx

# Create log directory for PM2
mkdir -p /var/log/pm2
```

### 3. Clone Repository
```bash
cd /opt
git clone git@github.com:simon1400/shuffle-client.git
cd shuffle-client
```

### 4. Install Project Dependencies
```bash
npm install
```

### 5. Build Project
```bash
npm run build
```

### 6. Start with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Nginx Configuration

Create Nginx configuration file:

```bash
nano /etc/nginx/sites-available/shuffle-client
```

**Content:**
```nginx
# Upstream для Next.js приложения
upstream shuffle_client {
    server localhost:3002;
    keepalive 64;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name shuffle.hardart.cz;

    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name shuffle.hardart.cz;

    # SSL Configuration (adjust paths if needed)
    ssl_certificate /etc/letsencrypt/live/shuffle.hardart.cz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/shuffle.hardart.cz/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    # Client body size
    client_max_body_size 100M;

    # Logging
    access_log /var/log/nginx/shuffle-client-access.log;
    error_log /var/log/nginx/shuffle-client-error.log;

    # Root location
    location / {
        proxy_pass http://shuffle_client;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Next.js static files
    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://shuffle_client;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Next.js images
    location /_next/image {
        proxy_cache STATIC;
        proxy_pass http://shuffle_client;
        add_header Cache-Control "public, max-age=2592000";
    }

    # Public assets
    location /assets {
        proxy_cache STATIC;
        proxy_pass http://shuffle_client;
        add_header Cache-Control "public, max-age=2592000";
    }

    # Favicon
    location /favicon.ico {
        proxy_pass http://shuffle_client;
        add_header Cache-Control "public, max-age=86400";
    }
}

# Cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;
```

### Enable Site
```bash
ln -s /etc/nginx/sites-available/shuffle-client /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

## SSL Certificate (if not exists)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d shuffle.hardart.cz
```

## Strapi Webhook Configuration

### 1. Create Revalidation API Route

On the server, ensure Next.js can receive revalidation requests.

### 2. Configure Webhook in Strapi Admin

Go to: `https://shuffle-strapi.hardart.cz/admin`

Settings → Webhooks → Create new webhook:
- **Name:** Next.js Revalidation
- **URL:** `http://localhost:3002/api/revalidate` (internal)
- **Events:** Select all content update events
- **Headers:**
  - `Content-Type`: `application/json`

## Deployment Commands

### Manual Deployment
```bash
ssh root@157.90.169.205
cd /opt/shuffle-client
bash deploy.sh
```

### Quick Commands
```bash
# View logs
pm2 logs shuffle-client

# Restart application
pm2 restart shuffle-client

# Check status
pm2 status

# Monitor
pm2 monit
```

## Environment Variables

Production environment (`.env.production`):
```env
APP_API=http://localhost:1337
NODE_ENV=production
```

This connects to Strapi locally on the server, avoiding external network calls.

## Auto-Revalidation Setup

Create revalidation API route in Next.js:

`src/app/api/revalidate/route.ts`:
```typescript
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Revalidate all paths
    revalidatePath('/', 'layout')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ revalidated: false }, { status: 500 })
  }
}
```

## Troubleshooting

### Check if app is running
```bash
curl http://localhost:3002
```

### Check Nginx logs
```bash
tail -f /var/log/nginx/shuffle-client-error.log
```

### Check PM2 logs
```bash
pm2 logs shuffle-client --lines 100
```

### Rebuild project
```bash
cd /opt/shuffle-client
npm run build
pm2 restart shuffle-client
```

## Performance Monitoring

```bash
# PM2 monitoring
pm2 monit

# Check resource usage
htop

# Check Nginx status
systemctl status nginx
```

## Backup

```bash
# Backup configuration
cp /etc/nginx/sites-available/shuffle-client ~/nginx-backup-$(date +%Y%m%d).conf

# Backup environment
cp /opt/shuffle-client/.env.production ~/env-backup-$(date +%Y%m%d).env
```
