var util = require("./util");

exports['test mongodb#DB'] = function() {
  util.assertCompletion("require('mongodb').D", {
    "start": {
      "line": 0,
      "ch": 19
     },
     "end": {
      "line": 0,
      "ch": 20
     },
     "isProperty": true,
     "isObjectKey": false,
     "completions": [
      {"name":"Db","type":"fn(url: string, options?: ?, callback: fn(err: Error, db: db.Db))","doc":"\n\nCreate a new Db instance.","url":"http://mongodb.github.io/node-mongodb-native/api-generated/db.html","origin":"node-mongodb-native"}
     ]
  });
}