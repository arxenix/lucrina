/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    members: {
      collection: 'user',
      via: 'team'
    },
    score: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    //M2M Through solve
    solves: {
      collection: 'problem',
      via: 'problem',
      through: 'solve'
    }
  }
};

