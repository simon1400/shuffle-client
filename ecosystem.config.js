module.exports = {
  apps: [
    {
      name: 'shuffle-client',
      script: '.next/standalone/server.js',
      cwd: '/opt/shuffle-client',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
        HOSTNAME: '0.0.0.0',
        APP_API: 'http://localhost:1339',
        REVALIDATION_SECRET: 'shuffle-secret-key-2024',
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
