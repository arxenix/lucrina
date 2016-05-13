/**
 * PageController
 *
 * @description :: Render main application templates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function(req, res) {
      res.render('homepage', {user: req.user});
  },
  myTeam: function(req, res) {
  	
  },
  chat: function(req, res) {
  	res.render('chat', {user: req.user});
  },
  team: function(req,res) {
	    var teamId = req.param('teamId');
	    if(!teamId) {
	    	res.render('team', {user: req.user});
	    }
	},
	profile: function(req, res) {
		sails.log(req.user);
	  	res.render('profile', {user: req.user});
	},
	updates: function(req, res) {
		res.render('updates');
	},
	scoreboard: function(req, res) {
		console.log(req.params);
		Teams.find().sort('score DESC').exec(function(err, records) {
			console.log(records);
			
		});
	}
};

