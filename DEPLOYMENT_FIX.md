# Deployment Fix - Strapi API Connection & Static Files Issue

## Problem 1: Wrong Strapi API Port
The production client was connecting to the wrong Strapi instance, causing API errors:
- Client was configured to connect to `http://localhost:1337`
- Shuffle Strapi instance was actually running on port `1339`
- This caused `TypeError: Cannot read properties of undefined (reading 'map')` errors

## Problem 2: Missing Static Files
Next.js standalone mode doesn't automatically copy static files:
- Static files (`.next/static`) were not present in standalone build
- Public folder was not copied to standalone directory
- This caused "ChunkLoadError: Loading chunk failed" and 404 errors for JS bundles

## Solution

### 1. API Connection Fix
Updated the ecosystem.config.js and .env.production files to use the correct Strapi API port:
- **ecosystem.config.js**: Added `APP_API: 'http://localhost:1339'` to env variables
- **.env.production**: Updated `APP_API=http://localhost:1339` (on server)

### 2. Static Files Fix
Copy static files and public folder after each build:
```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

### Files Updated:
- [ecosystem.config.js](ecosystem.config.js) - Added APP_API and REVALIDATION_SECRET to env
- [deploy.sh](deploy.sh) - Automated deployment script with static files copy
- `.env.production` (server only) - Updated Strapi API URL

## Deployment Process
Use the automated deployment script on the server:
```bash
cd /opt/shuffle-client
bash deploy.sh
```

Or manually:
```bash
cd /opt/shuffle-client
git pull origin main
npm install
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
pm2 restart ecosystem.config.js --update-env
```

## Verification
After the fix:
- Application starts without errors
- API requests are now directed to the correct Strapi instance on port 1339
- Static files load correctly (no 404 errors)
- No more "Cannot read properties of undefined" or "ChunkLoadError" errors

## Important Notes
- **shuffle-strapi** runs on port **1339**
- **tulsio-strapi** runs on port **1337** (different project)
- Always ensure APP_API environment variable matches the correct Strapi port
- **Always copy static files** after building in standalone mode
