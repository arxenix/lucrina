/**
 * Team.js
 *
 * @description :: Represents a problem solve. Used for M2M assoc
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    team: {
      model:'team',
      required: true
    },
    problem: {
      model: 'problem',
      required: true
    },
    time: {
      type: 'datetime',
      required: true
    }
  }
}