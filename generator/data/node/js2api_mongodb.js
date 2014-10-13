var fs = require('fs'),
  dox = require('dox'),
  exec = require('child_process').exec,
  docs = require('./js2api');

// ----------------------------------------------------------------------------
// INITALIZE
// ----------------------------------------------------------------------------
// All source files for the api generation
var apiClasses = [
    {tag:"admin", path:"./lib/mongodb/admin.js"},
    {tag:"collection", path:"./lib/mongodb/collection.js"},
    {tag:"mongoclient", path:"./lib/mongodb/mongo_client.js"},
    {tag:"db", path:"./lib/mongodb/db.js"},
    {tag:"cursor", path:"./lib/mongodb/cursor.js"},
    {tag:"cursorstream", path:"./lib/mongodb/cursorstream.js"},
    {tag:"gridstore", path:"./lib/mongodb/gridfs/gridstore.js"},
    {tag:"readstream", path:"./lib/mongodb/gridfs/readstream.js"},
    {tag:"grid", path:"./lib/mongodb/gridfs/grid.js"},
    {tag:"server", path:"./lib/mongodb/connection/server.js"},
    {tag:"mongos", path:"./lib/mongodb/connection/mongos.js"},
    {tag:"replset", path:"./lib/mongodb/connection/repl_set/repl_set.js"},
    {tag:"readpreference", path:"./lib/mongodb/connection/read_preference.js"},
    {tag:"ordered", path:"./lib/mongodb/collection/batch/ordered.js"},
    {tag:"unordered", path:"./lib/mongodb/collection/batch/unordered.js"},
    {tag:"batchwriteresult", path:"./lib/mongodb/collection/batch/common.js"},
    
    {tag:"objectid", path:"./node_modules/bson/lib/bson/objectid.js"},
    {tag:"binary", path:"./node_modules/bson/lib/bson/binary.js"},
    {tag:"code", path:"./node_modules/bson/lib/bson/code.js"},
    {tag:"db_ref", path:"./node_modules/bson/lib/bson/db_ref.js"},
    {tag:"double", path:"./node_modules/bson/lib/bson/double.js"},
    {tag:"minkey", path:"./node_modules/bson/lib/bson/min_key.js"},
    {tag:"maxkey", path:"./node_modules/bson/lib/bson/max_key.js"},
    {tag:"symbol", path:"./node_modules/bson/lib/bson/symbol.js"},
    {tag:"timestamp", path:"./node_modules/bson/lib/bson/timestamp.js"},
    {tag:"long", path:"./node_modules/bson/lib/bson/long.js"},
    {tag:"bson", path:"./node_modules/bson/lib/bson/bson.js"}
];

// Output directory
var basedir = "D:/_Projects/git/node-mongodb-native/";

// ----------------------------------------------------------------------------
// PROCESS Driver API
// ----------------------------------------------------------------------------
docs.renderAPIDocs(basedir, apiClasses);