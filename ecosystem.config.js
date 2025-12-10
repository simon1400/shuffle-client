module.exports = {
  apps: [
    {
      name: 'shuffle-client',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3002',
      cwd: '/opt/shuffle-client',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
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
