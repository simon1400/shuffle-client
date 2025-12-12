#!/bin/bash
# Deployment script for shuffle-client on production server

set -e  # Exit on error

echo "🚀 Starting deployment for shuffle-client..."

# Navigate to project directory
cd /opt/shuffle-client

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building Next.js project..."
npm run build

# Copy static files to standalone directory
echo "📁 Copying static files to standalone..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

# Copy environment file to standalone
echo "⚙️  Copying environment variables..."
cp .env.production .next/standalone/.env.production

# Restart PM2 process
echo "🔄 Restarting PM2 process..."
pm2 restart ecosystem.config.js --update-env

# Check status
echo "✅ Deployment complete! Checking status..."
pm2 status shuffle-client

echo "🎉 Deployment successful!"
