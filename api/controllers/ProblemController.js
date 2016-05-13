/**
 * ProblemController
 *
 * @description :: Server-side logic for managing problems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //TODO rate-limit teams submissions
	submitFlag: function(req, res) {
	    
	}
};


function gradeFlag(problem, flag) {
    var grader = require('../flag_graders/'+problem.grader);
    return grader.grade(flag);
}