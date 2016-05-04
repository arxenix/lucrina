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
  }
};

