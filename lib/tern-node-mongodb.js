(function() {
  "use strict";

  var MongoDB = TernDox.MongoDB = {};

  MongoDB.generate = function(doxDoc) {
    var options = {
      "name" : "node-mongodb",
      "getProto" : getProto,
      "getEffects" : getEffects,
      "getType" : getType,
      "baseURL" : "http://mongodb.github.io/node-mongodb-native/api-generated/"
    };
    return TernDox.generate(doxDoc, options);
  }

  function getProto(moduleName, className) {
    if (moduleName === 'mongoclient' && className === 'MongoClient') {
      return "events.EventEmitter.prototype";
    }
  }
  
  function getEffects(moduleName, className, methodName, staticMethod) {
    switch(className) {
    case 'MongoClient':
      if (!methodName) {
        // effects for MongoClient class
      }
      else {
        // effects for MongoClient methods
        switch(methodName) {
        case 'connect':
          return ["custom mongodb_MongoClient_connect"]
        }
      }
      break;
    case 'Db':
      if (!methodName) {
        // effects for Db class
      }
      else {
        // effects for Db methods
        switch(methodName) {
        case 'createCollection':
          return ["custom mongodb_callback_collection"]
        }
      }
      break;
    }
  }

  function getType(moduleName, className, methodName, staticMethod) {
    switch(className) {
    case 'MongoClient':
      if (!methodName) {
        // type for MongoClient class
        return "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))";
      }
      else {
        // type for MongoClient methods
        switch(methodName) {
        case 'connect':
          return "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))";
        case 'open':
          return 'fn(callback: fn(err: +Error, mongoClient: +mongoclient.MongoClient))';
        case 'close':
          return 'fn(callback: fn(err: +Error, result: ?))';
        }
      }
      break;     
    case 'Db':
      if (!methodName) {
        // type for db class
        return "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))";
      }
      else {
        // type for db methods
        switch(methodName) {
        case 'open':
         return 'fn(callback: fn(err: +Error, db: +db.Db))';
        case 'createCollection':
          return 'fn(collectionName: string, options?: +Object, callback: fn(err: +Error, collection: +collection.Collection)))';         
        }        
      }
      break;
    }
  }

})();