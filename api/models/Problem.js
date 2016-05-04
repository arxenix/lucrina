/**
 * Problem.js
 *
 * @description :: Represents a problem in the competition
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: 'string',
      enum: ['flag', 'programming'],
      defaultsTo: 'flag',
      required: true
    },
    grader: {
      type: 'string',
      required: true
    },
    points: {
      type: 'integer',
      required: true
    },
    //list of required problem IDs
    requirements: {
      collection: 'problem',
      via: 'id'
    },
    //M2M assoc through solve
    solvers: {
      collection: 'team',
      via: 'team',
      through: 'solve'
    }
  }
};