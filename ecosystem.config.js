const fs = require('node:fs')
const path = require('node:path')

// Secrets are kept in .env next to this file (not committed), see .env.example
function readEnvFile(file) {
  if (!fs.existsSync(file)) return {}
  return Object.fromEntries(
    fs
      .readFileSync(file, 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const i = line.indexOf('=')
        return [
          line.slice(0, i).trim(),
          line
            .slice(i + 1)
            .trim()
            .replace(/^(['"])(.*)\1$/, '$2'),
        ]
      }),
  )
}

const dotenv = readEnvFile(path.join(__dirname, '.env'))

module.exports = {
  apps: [
    {
      name: 'shuffle-client',
      script: '.next/standalone/server.js',
      cwd: '/opt/shuffle-client',
      instances: 1,
      exec_mode: 'fork',
      node_args: '--max-old-space-size=384',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        HOSTNAME: '0.0.0.0',
        APP_API: 'http://localhost:1339',
        REVALIDATION_SECRET: process.env.REVALIDATION_SECRET || dotenv.REVALIDATION_SECRET,
      },
      error_file: '/var/log/pm2/shuffle-client-error.log',
      out_file: '/var/log/pm2/shuffle-client-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}
