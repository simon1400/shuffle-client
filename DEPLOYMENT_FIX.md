# Deployment Fix - Strapi API Connection Issue

## Problem
The production client was connecting to the wrong Strapi instance, causing API errors:
- Client was configured to connect to `http://localhost:1337`
- Shuffle Strapi instance was actually running on port `1339`
- This caused `TypeError: Cannot read properties of undefined (reading 'map')` errors

## Solution
Updated the ecosystem.config.js and .env.production files to use the correct Strapi API port:

### Changes Made:
1. **ecosystem.config.js**: Added `APP_API: 'http://localhost:1339'` to env variables
2. **.env.production**: Updated `APP_API=http://localhost:1339` (on server)

### Files Updated:
- [ecosystem.config.js](ecosystem.config.js) - Added APP_API and REVALIDATION_SECRET to env
- `.env.production` (server only) - Updated Strapi API URL

## Verification
After the fix:
- Application starts without errors
- API requests are now directed to the correct Strapi instance on port 1339
- No more "Cannot read properties of undefined" errors

## Important Notes
- **shuffle-strapi** runs on port **1339**
- **tulsio-strapi** runs on port **1337** (different project)
- Always ensure APP_API environment variable matches the correct Strapi port
