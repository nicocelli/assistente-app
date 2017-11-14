// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '693186184203354', // your App ID
        'clientSecret'  : 'e059e7fa202fdc5e06d17db6a18e153f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'hGG8ex4o32zvWUqJsH9woCDVR',
        'consumerSecret'    : 'amYEKNrTQMV1UmmA8NJPFNlapROjbKOqqiCcit9DH4Apm9c6KX',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1033666766896-8hpj7st6o18vubp3kiq61ujrprv4041r.apps.googleusercontent.com',
        'clientSecret'  : 'w3jzDr8tipEk16lEYk4qMpNr',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};