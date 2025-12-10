#!/bin/bash

# Shuffle Client Deployment Script

set -e

echo "🚀 Starting deployment for shuffle-client..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PROJECT_DIR="/opt/shuffle-client"
PM2_APP_NAME="shuffle-client"

# Navigate to project directory
cd $PROJECT_DIR

echo -e "${YELLOW}📦 Pulling latest changes from Git...${NC}"
git pull origin main

echo -e "${YELLOW}📥 Installing dependencies...${NC}"
npm ci --production=false

echo -e "${YELLOW}🏗️  Building Next.js application...${NC}"
npm run build

echo -e "${YELLOW}🔄 Restarting PM2 process...${NC}"
pm2 restart $PM2_APP_NAME || pm2 start ecosystem.config.js

echo -e "${YELLOW}💾 Saving PM2 configuration...${NC}"
pm2 save

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Application status:${NC}"
pm2 status $PM2_APP_NAME
