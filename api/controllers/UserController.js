/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  register: function(req, res) {
    console.log(req);
    
    User.register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(function(user) {
        sails.log('created new user', user);
      })
      .catch(function(error) {
        sails.log.error(error);
    });
  },
  login: function(req, res) {

  }
};
