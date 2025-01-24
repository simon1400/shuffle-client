module.exports = {
  apps: [
    {
      name: 'Shuffle client',
      script: 'npm start',
      env_production: {},
    },
  ],

  deploy: {
    production: {
      user: 'dimi',
      // eslint-disable-next-line sonarjs/no-hardcoded-ip
      host: ['89.221.216.23'],
      ref: 'origin/main',
      repo: 'git@github.com:simon1400/shuffle-client.git',
      path: '/home/dimi/app/shuffle/client',
      'post-deploy': 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
}
