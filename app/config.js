const admin = require('firebase-admin');
const serviceAccount = require('./google-config.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

module.exports = {
  admin: admin,
  db: db,
  server_secret: '$2y$12$4A2phQdjCl9fFvcuTHpn3.l7mZTBNagz4HrApfnY1tJYcyHgalifK',
  token_expire: '30d',
  mail: 'info@nsgtaxi.com',
};