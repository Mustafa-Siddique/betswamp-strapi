module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e577d39ed9ca5a34ad1553866d5f5550'),
  },
});
