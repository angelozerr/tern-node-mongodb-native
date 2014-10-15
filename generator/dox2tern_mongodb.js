(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("./dox2tern")); // CommonJS
    if (typeof define == "function" && define.amd) return define([ "exports", "dox2tern" ], mod); // AMD
    mod(root.dox2tern, root.dox2tern); // Plain browser env
})(this, function(exports, dox2tern) {
  "use strict";
  
  var MongoDB = exports.MongoDB = {};
  MongoDB.generate = function(api) {
    var options = {
      "name" : "node-mongodb-native",
      "initialize" : initialize,
      "getProto" : getProto,
      "getEffects" : getEffects,
      "getType" : getType,
      "getURL" : getURL
    };
    var generator = new dox2tern.Generator(options);
    return generator.process(api);
  }
  
  var initialize = function(ternDef) {
    ternDef["!define"]["!node"] = {
      mongodb: {
        MongoClient: "mongoclient.MongoClient",
        Db: "db.Db",
        Server: "server.Server",
        ReplSet: "replset.ReplSet",
        Mongos: "mongos.Mongos",
        ReadPreference: "readpreference.ReadPreference",
        GridStore: "gridstore.GridStore",
        Collection: "collection.Collection",
        Admin: "admin.Admin",
        Cursor: "cursor.Cursor",        
      }
    };
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
        case 'collection':
          return 'fn(collectionName: string, options?: +Object, callback: fn(err: +Error, collection: +collection.Collection)) -> +collection.Collection)))';          
        }        
      }
      break;
    }
  }
  
  var getURL = function(moduleName, className, methodName) {
    var url = "http://mongodb.github.io/node-mongodb-native/api-generated/";
    url+=moduleName;
    url+=".html";
    if (methodName) {
      url+="#";
      url+=methodName;
    }
    return url;
  }
  
});  