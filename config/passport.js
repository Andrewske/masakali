const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const config = require('config');
//require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        proxy: true,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            firstName: profile.name?.givenName,
            lastName: profile.name?.familyName,
            email: profile.emails[0].value || null,
            image: profile.photos[0].value || null,
          };

          console.log(profile);

          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            console.log('found User');
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error({ err });
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    console.log('serializeUser', user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('deserializeUser', id);
    User.findById(id, (err, user) => done(err, user));
  });
};
