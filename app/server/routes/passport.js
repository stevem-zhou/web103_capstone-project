// const express = require('express');
// const passportRouter = express.Router();

// const passport = require("passport");
// const session = require("express-session");

// const LocalStrategy = require("passport-local").Strategy;
// // const GoogleStrategy = require('passport-google-oidc');

// passportRouter.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // This is the basic express session({..}) initialization.
// passportRouter.use(passport.initialize());
// passportRouter.use(passport.session());
// // allow passport to use "express-session".


// // // The "authUser" is a function that we will define later will contain the steps to authenticate a user, and will return the "authenticated user".

// // const authUser = (user, password, done) => {
// //   //Search the user, password in the DB to authenticate the user
// //   //Let's assume that a search within your DB returned the username and password match for "Kyle".
// //   let authenticated_user = { id: 123, name: "Kyle" };
// //   return done(null, authenticated_user);
// // };

// // passport.use(new LocalStrategy(authUser));

// passportRouter.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//   passportRouter.post('/api/login', 
//   passport.authenticate('local', { failureRedirect: '/api/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

//   module.exports = passportRouter;