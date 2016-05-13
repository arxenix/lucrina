/**
 * AuthController
 *
 * @description :: Server-side logic for managing problems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  logout: function (req,res) {
    req.logout();
    res.redirect('/');
  },
  register: function(req, res) {
    User.register({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })
    .then(function(user) {
      sails.log('created new user', user);
      
      //automatically log them in
      req.login(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/');
      });
    })
    .catch(function(error) {
      sails.log.error(error);
    });
  },
  login: function(req, res) {
    User.findOne({
      username: req.body.username
    }).exec(function (err, user){
      if (err) {
        return res.negotiate(err);
      }
      if (!user) {
        return res.json('{msg: "User not found"}');
      }
      sails.log("Found user!");
      if (!user.verifyPassword(req.body.password)) { 
        return res.json('{msg: "Invalid password"}');
      }
      
    
      sails.log(user);
      req.login(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/');
      });
    });
  }
};

