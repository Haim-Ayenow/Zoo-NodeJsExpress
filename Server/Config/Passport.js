const JwtStrategy = require(`passport-jwt`).Strategy;
const ExtractJwt = require(`passport-jwt`).ExtractJwt;
const Users = require(`../Models/User-Model`);
// const SECRET_KEY = process.env.SECRET_KEY;

const options = {
  secretOrKey: process.env.SECRET_KEY,
};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (Jwt_payload, done) => {
      Users.findById(Jwt_payload.user._id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          done(null, false);
        })
        .catch((err) => {
          console.log(err);
          return done(err, false);
        });
    })
  );
};
