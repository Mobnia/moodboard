'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('projects', {
    id: {type: 'int', primaryKey: true},
    name: 'string'
  })
      .then(
          function (result) {
            db.createTable('images', {
              id: {type: 'int', primaryKey: true},
              address: 'string'
            });
          },
          function (err) {
            return null;
          }
      );
};

exports.down = function(db) {
  return db.dropTable('projects')
      .then(
          function (result) {
            db.dropTable('images');
          },
          function (err) {
            return null;
          }
      );
};

exports._meta = {
  "version": 1
};
