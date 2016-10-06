module.exports = {
  // db: 'mongodb://localhost/testDB',
  db: 'mongodb://admin:password@ds033096.mlab.com:33096/basic_mean_app',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '545155692340221',
    clientSecret: '65c9db2ba2ec317a0a8f48a6022cafb6',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
};
