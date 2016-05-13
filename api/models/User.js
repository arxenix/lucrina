/**
 * User.js
 *
 * @description :: Represents a user
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 
var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {
  // Extend with custom logic here by adding additional fields, methods, etc.
  attributes: {
    /*emailVerified: {
      type: 'boolean',
      defaultsTo: false,
      required: true
    },*/
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    team: {
      model: 'team'
    }
  }
});
