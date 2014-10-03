(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  function callbackParameters(_args, argNodes, parametersType) {
    // _self.getType().proto.props['createCollection'].getType().args[2]
    if (argNodes && argNodes.length && argNodes.length > 0) {
      var index = argNodes.length - 1, arg = _args[index], argNode = argNodes[index], fn = getFunctionType(arg, argNode);
      if (fn) {
        // here we support the second signature.
        var params = fn.argNames, cx = infer.cx(), paths = cx.paths;
        var fnArgs = [];
        for (var j = 0; j < params.length && j < parametersType.length ; j++) {
          fnArgs.push(new infer.Obj(paths[parametersType[j]]));
        }
        fn.propagate(new infer.IsCallee(infer.cx().topScope, fnArgs, null, infer.ANull))          
      }
    }
  };

  infer.registerFunction("mongodb_MongoClient_connect", function(_self, _args, argNodes) {
    callbackParameters(_args, argNodes, ["Error.prototype", "db.Db.prototype"]);
  });

  infer.registerFunction("mongodb_callback_collection", function(_self, _args, argNodes) {
    callbackParameters(_args, argNodes, ["Error.prototype", "collection.Collection.prototype"]);
  });
  
  function getFunctionType(arg, argNode) {
    if (argNode.type =="FunctionExpression") return arg.getFunctionType();
    if (argNode.type =="Identifier" && arg.getFunctionType) return arg.getFunctionType();
  }
  
  tern.registerPlugin("node-mongodb", function(server, options) {

    return {
      defs: defs
    };
  });

  var defs = {
    "!name": "node-mongodb",
    "!define": {
      "!node": {
        mongodb: {
          "!type": "fn()",
          MongoClient: "mongoclient.MongoClient",
          Db: "db.Db",
          Collection: "collection.Collection",
          Admin: "admin.Admin",
          Cursor: "cursor.Cursor",
          Server: "server.Server",
        }               
      },


          
      "admin": {
        "Admin": {
         "!type": "fn(db: +Object) -> fn()",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html",
         "!doc": "\n\nAllows the user to access the admin functionality of MongoDB",
         "prototype": {
          "buildInfo": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#buildInfo",
           "!doc": "\n\nRetrieve the server information for the current\ninstance of the db client"
          },
          "serverStatus": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#serverStatus",
           "!doc": "\n\nRetrieve this db's server status."
          },
          "profilingLevel": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#profilingLevel",
           "!doc": "\n\nRetrieve the current profiling Level for MongoDB"
          },
          "ping": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#ping",
           "!doc": "\n\nPing the MongoDB server and retrieve results"
          },
          "authenticate": {
           "!type": "fn(username: string, password: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#authenticate",
           "!doc": "\n\nAuthenticate against MongoDB"
          },
          "logout": {
           "!type": "fn(options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#logout",
           "!doc": "\n\nLogout current authenticated user"
          },
          "addUser": {
           "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#addUser",
           "!doc": "\n\nAdd a user to the MongoDB server, if the user exists it will\noverwrite the current password"
          },
          "removeUser": {
           "!type": "fn(username: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#removeUser",
           "!doc": "\n\nRemove a user from the MongoDB server"
          },
          "setProfilingLevel": {
           "!type": "fn(level: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#setProfilingLevel",
           "!doc": "\n\nSet the current profiling level of MongoDB"
          },
          "profilingInfo": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#profilingInfo",
           "!doc": "\n\nRetrive the current profiling information for MongoDB"
          },
          "command": {
           "!type": "fn(command: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#command",
           "!doc": "\n\nExecute a db command against the Admin database"
          },
          "validateCollection": {
           "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#validateCollection",
           "!doc": "\n\nValidate an existing collection"
          },
          "listDatabases": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#listDatabases",
           "!doc": "\n\nList the available databases"
          },
          "replSetGetStatus": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/admin.html#replSetGetStatus",
           "!doc": "\n\nGet ReplicaSet status"
          }
         }
        }
       },
       "collection": {
        "Collection": {
         "!type": "fn(db: +Object, collectionName: string, pkFactory?: +Object, options?: +Object) -> +Object",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html",
         "!doc": "\n\nCreate a new Collection instance (INTERNAL TYPE, do not instantiate directly)",
         "prototype": {
          "insert": {
           "!type": "fn(docs: [?], options?: +Object, callback?: fn()) -> +collection.Collection",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#insert",
           "!doc": "\n\nInserts a single document or a an array of documents into MongoDB."
          },
          "remove": {
           "!type": "fn(selector?: +Object, options?: +Object, callback?: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#remove",
           "!doc": "\n\nRemoves documents specified by <code>selector</code> from the db."
          },
          "rename": {
           "!type": "fn(newName: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#rename",
           "!doc": "\n\nRenames the collection."
          },
          "save": {
           "!type": "fn(doc?: +Object, options?: +Object, callback?: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#save",
           "!doc": "\n\nSave a document. Simple full document replacement function. Not recommended for efficiency, use atomic\noperators and update instead for more efficient operations."
          },
          "update": {
           "!type": "fn(selector: +Object, document: +Object, options?: +Object, callback?: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#update",
           "!doc": "\n\nUpdates documents."
          },
          "distinct": {
           "!type": "fn(key: string, query?: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#distinct",
           "!doc": "\n\nThe distinct command returns returns a list of distinct values for the given key across a collection."
          },
          "count": {
           "!type": "fn(query?: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#count",
           "!doc": "\n\nCount number of matching documents in the db to a query."
          },
          "drop": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#drop",
           "!doc": "\n\nDrop the collection"
          },
          "findAndModify": {
           "!type": "fn(query: +Object, sort: [?], doc: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#findAndModify",
           "!doc": "\n\nFind and update a document."
          },
          "findAndRemove": {
           "!type": "fn(query: +Object, sort: [?], options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#findAndRemove",
           "!doc": "\n\nFind and remove a document"
          },
          "find": {
           "!type": "fn(query: +Object, options?: +Object, callback: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find",
           "!doc": "\n\nCreates a cursor for a query that can be used to iterate over results from MongoDB"
          },
          "findOne": {
           "!type": "fn(query: +Object, options?: +Object, callback: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#findOne",
           "!doc": "\n\nFinds a single document based on the query"
          },
          "createIndex": {
           "!type": "fn(fieldOrSpec: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#createIndex",
           "!doc": "\n\nCreates an index on the collection."
          },
          "ensureIndex": {
           "!type": "fn(fieldOrSpec: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#ensureIndex",
           "!doc": "\n\nEnsures that an index exists, if it does not it creates it"
          },
          "indexInformation": {
           "!type": "fn(options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#indexInformation",
           "!doc": "\n\nRetrieves this collections index info."
          },
          "dropIndex": {
           "!type": "fn(name: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#dropIndex",
           "!doc": "\n\nDrops an index from this collection."
          },
          "dropAllIndexes": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#dropAllIndexes",
           "!doc": "\n\nDrops all indexes from this collection."
          },
          "reIndex": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#reIndex",
           "!doc": "\n\nReindex all indexes on the collection\nWarning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections."
          },
          "mapReduce": {
           "!type": "fn(map: fn(), reduce: fn(), options?: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#mapReduce",
           "!doc": "\n\nRun Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection."
          },
          "group": {
           "!type": "fn(keys: +Object, condition: +Object, initial: +Object, reduce: fn(), finalize: fn(), command: bool, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#group",
           "!doc": "\n\nRun a group command across a collection"
          },
          "options": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#options",
           "!doc": "\n\nReturns the options of the collection."
          },
          "isCapped": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#isCapped",
           "!doc": "\n\nReturns if the collection is a capped collection"
          },
          "indexExists": {
           "!type": "fn(indexNames: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#indexExists",
           "!doc": "\n\nChecks if one or more indexes exist on the collection"
          },
          "geoNear": {
           "!type": "fn(x: number, y: number, options?: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#geoNear",
           "!doc": "\n\nExecute the geoNear command to search for items in the collection"
          },
          "geoHaystackSearch": {
           "!type": "fn(x: number, y: number, options?: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#geoHaystackSearch",
           "!doc": "\n\nExecute a geo search using a geo haystack index on a collection."
          },
          "indexes": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#indexes",
           "!doc": "\n\nRetrieve all the indexes on the collection."
          },
          "aggregate": {
           "!type": "fn(array: [?], options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#aggregate",
           "!doc": "\n\nExecute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2"
          },
          "stats": {
           "!type": "fn(options?: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#stats",
           "!doc": "\n\nGet all the collection statistics."
          },
          "initializeUnorderedBulkOp": {
           "!type": "fn(options?: ?, callback: fn()) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#initializeUnorderedBulkOp",
           "!doc": "\n\nInitiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order."
          },
          "initializeOrderedBulkOp": {
           "!type": "fn(options?: ?, callback: fn()) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#initializeOrderedBulkOp",
           "!doc": "\n\nInitiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types."
          },
          "parallelCollectionScan": {
           "!type": "fn(options?: ?, callback: fn()) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/collection.html#parallelCollectionScan",
           "!doc": "\n\nReturn N number of parallel cursors for a collection allowing parallel reading of entire collection. There are\nno ordering guarantees for returned results."
          }
         }
        }
       },
       "mongoclient": {
        "MongoClient": {
         "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html",
         "!doc": "\n\nCreate a new MongoClient instance.",
         "prototype": {
          "!proto": "events.EventEmitter.prototype",
          "connect": {
           "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
           "!effects": [
            "custom mongodb_MongoClient_connect"
           ],
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#connect",
           "!doc": "\n\nConnect to MongoDB using a url as documented at"
          },
          "open": {
           "!type": "fn(callback: fn(err: +Error, mongoClient: +mongoclient.MongoClient))",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#open",
           "!doc": "\n\nInitialize the database connection."
          },
          "close": {
           "!type": "fn(callback: fn(err: +Error, result: ?))",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#close",
           "!doc": "\n\nClose the current db connection, including all the child db instances. Emits close event and calls optional callback."
          },
          "db": {
           "!type": "fn(dbName: string) -> +db.Db",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#db",
           "!doc": "\n\nCreate a new Db instance sharing the current socket connections."
          }
         },
         "connect": {
          "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
          "!effects": [
           "custom mongodb_MongoClient_connect"
          ],
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#connect",
          "!doc": "\n\nConnect to MongoDB using a url as documented at"
         }
        }
       },
       "db": {
        "Db": {
         "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html",
         "!doc": "\n\nCreate a new Db instance.",
         "prototype": {
          "open": {
           "!type": "fn(callback: fn(err: +Error, db: +db.Db))",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#open",
           "!doc": "\n\nInitialize the database connection."
          },
          "db": {
           "!type": "fn(dbName: string) -> +db.Db",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#db",
           "!doc": "\n\nCreate a new Db instance sharing the current socket connections."
          },
          "close": {
           "!type": "fn(forceClose?: bool, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#close",
           "!doc": "\n\nClose the current db connection, including all the child db instances. Emits close event and calls optional callback."
          },
          "admin": {
           "!type": "fn(callback?: fn()) -> +admin.Admin",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#admin",
           "!doc": "\n\nAccess the Admin database"
          },
          "collectionsInfo": {
           "!type": "fn(collectionName?: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#collectionsInfo",
           "!doc": "\n\nDEPRECATED: Returns a cursor to all the collection information. Does not work with 2.8 or higher when using\nother storage engines"
          },
          "listCollections": {
           "!type": "fn(collectionName?: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#listCollections",
           "!doc": "\n\nGet the list of all collection names for the specified db"
          },
          "collectionNames": {
           "!type": "fn(collectionName?: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#collectionNames",
           "!doc": "\n\nGet the list of all collection names for the specified db"
          },
          "collection": {
           "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#collection",
           "!doc": "\n\nFetch a specific collection (containing the actual collection information). If the application does not use strict mode you can\ncan use it without a callback in the following way. var collection = db.collection('mycollection');"
          },
          "collections": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#collections",
           "!doc": "\n\nFetch all collections for the current db."
          },
          "eval": {
           "!type": "fn(code: ?, parameters?: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#eval",
           "!doc": "\n\nEvaluate javascript on the server"
          },
          "dereference": {
           "!type": "fn(dbRef: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#dereference",
           "!doc": "\n\nDereference a dbref, against a db"
          },
          "logout": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#logout",
           "!doc": "\n\nLogout user from server, fire off on all connections and remove all auth info"
          },
          "authenticate": {
           "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#authenticate",
           "!doc": "\n\nAuthenticate a user against the server.\nauthMechanism\nOptions\n - **authMechanism** {String, default:MONGODB-CR}, The authentication mechanism to use, GSSAPI or MONGODB-CR"
          },
          "addUser": {
           "!type": "fn(username: string, password: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#addUser",
           "!doc": "\n\nAdd a user to the database."
          },
          "removeUser": {
           "!type": "fn(username: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#removeUser",
           "!doc": "\n\nRemove a user from a database"
          },
          "createCollection": {
           "!type": "fn(collectionName: string, options?: +Object, callback: fn(err: +Error, collection: +collection.Collection)))",
           "!effects": [
            "custom mongodb_callback_collection"
           ],
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#createCollection",
           "!doc": "\n\nCreates a collection on a server pre-allocating space, need to create f.ex capped collections."
          },
          "command": {
           "!type": "fn(selector: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#command",
           "!doc": "\n\nExecute a command hash against MongoDB. This lets you acess any commands not available through the api on the server."
          },
          "dropCollection": {
           "!type": "fn(collectionName: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#dropCollection",
           "!doc": "\n\nDrop a collection from the database, removing it permanently. New accesses will create a new collection."
          },
          "renameCollection": {
           "!type": "fn(fromCollection: string, toCollection: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#renameCollection",
           "!doc": "\n\nRename a collection."
          },
          "createIndex": {
           "!type": "fn(collectionName: string, fieldOrSpec: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#createIndex",
           "!doc": "\n\nCreates an index on the collection."
          },
          "ensureIndex": {
           "!type": "fn(collectionName: string, fieldOrSpec: +Object, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#ensureIndex",
           "!doc": "\n\nEnsures that an index exists, if it does not it creates it"
          },
          "cursorInfo": {
           "!type": "fn(options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#cursorInfo",
           "!doc": "\n\nReturns the information available on allocated cursors."
          },
          "dropIndex": {
           "!type": "fn(collectionName: string, indexName: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#dropIndex",
           "!doc": "\n\nDrop an index on a collection."
          },
          "reIndex": {
           "!type": "fn(collectionName: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#reIndex",
           "!doc": "\n\nReindex all indexes on the collection\nWarning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections."
          },
          "indexInformation": {
           "!type": "fn(collectionName: string, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#indexInformation",
           "!doc": "\n\nRetrieves this collections index info."
          },
          "dropDatabase": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#dropDatabase",
           "!doc": "\n\nDrop a database."
          },
          "stats": {
           "!type": "fn(options?: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#stats",
           "!doc": "\n\nGet all the db statistics."
          }
         },
         "connect": {
          "!type": "fn(url: string, options?: +Object, callback: fn())",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#connect",
          "!doc": "\n\nConnect to MongoDB using a url as documented at"
         }
        }
       },
       "cursor": {
        "Cursor": {
         "!type": "fn(db: +db.Db, collection: +collection.Collection, selector: +Object, fields: +Object, options?: +Object)",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html",
         "!doc": "\n\nConstructor for a cursor object that handles all the operations on query result\nusing find. This cursor object is unidirectional and cannot traverse backwards. Clients should not be creating a cursor directly,\nbut use find to acquire a cursor. (INTERNAL TYPE)",
         "cloneWithOptions": {
          "!type": "fn(cursor: +cursor.Cursor) -> +Object",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#cloneWithOptions",
          "!doc": "\n\nClones a given cursor but uses new options"
         },
         "prototype": {
          "rewind": {
           "!type": "fn() -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#rewind",
           "!doc": "\n\nResets this cursor to its initial state. All settings like the query string,\ntailable, batchSizeValue, skipValue and limits are preserved."
          },
          "toArray": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#toArray",
           "!doc": "\n\nReturns an array of documents. The caller is responsible for making sure that there\nis enough memory to store the results. Note that the array only contain partial\nresults when this cursor had been previouly accessed. In that case,\ncursor.rewind() can be used to reset the cursor."
          },
          "each": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#each",
           "!doc": "\n\nIterates over all the documents for this cursor. As with **{cursor.toArray}**,\nnot all of the elements will be iterated if this cursor had been previouly accessed.\nIn that case, **{cursor.rewind}** can be used to reset the cursor. However, unlike\n**{cursor.toArray}**, the cursor will only hold a maximum of batch size elements\nat any given time if batch size is specified. Otherwise, the caller is responsible\nfor making sure that the entire result can fit the memory."
          },
          "count": {
           "!type": "fn(applySkipLimit: bool, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#count",
           "!doc": "\n\nDetermines how many result the query for this cursor will return"
          },
          "sort": {
           "!type": "fn(keyOrList: string, direction: string, callback: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#sort",
           "!doc": "\n\nSets the sort parameter of this cursor to the given value."
          },
          "limit": {
           "!type": "fn(limit: number, callback?: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#limit",
           "!doc": "\n\nSets the limit parameter of this cursor to the given value."
          },
          "maxTimeMS": {
           "!type": "fn(maxTimeMS: number, callback?: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#maxTimeMS",
           "!doc": "\n\nSpecifies a time limit for a query operation. After the specified\ntime is exceeded, the operation will be aborted and an error will be\nreturned to the client. If maxTimeMS is null, no limit is applied."
          },
          "setReadPreference": {
           "!type": "fn(the: string, callback?: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#setReadPreference",
           "!doc": "\n\nSets the read preference for the cursor"
          },
          "skip": {
           "!type": "fn(skip: number, callback?: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#skip",
           "!doc": "\n\nSets the skip parameter of this cursor to the given value."
          },
          "batchSize": {
           "!type": "fn(batchSize: number, callback?: fn()) -> +cursor.Cursor",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#batchSize",
           "!doc": "\n\nSets the batch size parameter of this cursor to the given value."
          },
          "nextObject": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#nextObject",
           "!doc": "\n\nGets the next document from the cursor."
          },
          "explain": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#explain",
           "!doc": "\n\nGets a detailed information about how the query is performed on this cursor and how\nlong it took the database to process it."
          },
          "stream": {
           "!type": "fn() -> +cursorstream.CursorStream",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#stream",
           "!doc": "\n\nReturns a Node Transform Stream interface for this cursor."
          },
          "close": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#close",
           "!doc": "\n\nClose the cursor."
          },
          "isClosed": {
           "!type": "fn() -> bool",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html#isClosed",
           "!doc": "\n\nCheck if the cursor is closed or open."
          }
         }
        }
       },
       "cursorstream": {
        "CursorStream": {
         "!type": "fn(cursor: +cursor.Cursor) -> ?",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/cursorstream.html",
         "!doc": "\n\nCursorStream"
        }
       },
       "gridstore": {
        "GridStore": {
         "!type": "fn(db: +db.Db, id?: ?, filename?: string, mode: string, options: +Object) -> +gridstore.GridStore",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html",
         "!doc": "\n\nA class representation of a file stored in GridFS.",
         "prototype": {
          "open": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#open",
           "!doc": "\n\nOpens the file from the database and initialize this object. Also creates a\nnew one if file does not exist."
          },
          "writeFile": {
           "!type": "fn(file: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#writeFile",
           "!doc": "\n\nStores a file from the file system to the GridFS database."
          },
          "close": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#close",
           "!doc": "\n\nSaves this file to the database. This will overwrite the old entry if it\nalready exists. This will work properly only if mode was initialized to\n\"w\" or \"w+\"."
          },
          "chunkCollection": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#chunkCollection",
           "!doc": "\n\nRetrieve this file's chunks collection."
          },
          "unlink": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#unlink",
           "!doc": "\n\nDeletes all the chunks of this file in the database."
          },
          "collection": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#collection",
           "!doc": "\n\nRetrieves the file collection associated with this object."
          },
          "readlines": {
           "!type": "fn(separator?: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#readlines",
           "!doc": "\n\nReads the data of this file."
          },
          "rewind": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#rewind",
           "!doc": "\n\nDeletes all the chunks of this file in the database if mode was set to \"w\" or\n\"w+\" and resets the read/write head to the initial position."
          },
          "read": {
           "!type": "fn(length?: number, buffer?: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#read",
           "!doc": "\n\nRetrieves the contents of this file and advances the read/write head. Works with Buffers only."
          },
          "tell": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#tell",
           "!doc": "\n\nRetrieves the position of the read/write head of this file."
          },
          "seek": {
           "!type": "fn(position?: number, seekLocation?: number, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#seek",
           "!doc": "\n\nMoves the read/write head to a new location."
          },
          "eof": {
           "!type": "fn() -> bool",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#eof",
           "!doc": "\n\nVerify if the file is at EOF."
          },
          "getc": {
           "!type": "fn(callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#getc",
           "!doc": "\n\nRetrieves a single character from this file."
          },
          "puts": {
           "!type": "fn(string: string, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#puts",
           "!doc": "\n\nWrites a string to the file with a newline character appended at the end if\nthe given string does not have one."
          },
          "stream": {
           "!type": "fn(autoclose: bool)",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#stream",
           "!doc": "\n\nReturns read stream based on this GridStore file"
          },
          "write": {
           "!type": "fn(data: string, close?: bool, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#write",
           "!doc": "\n\nWrites some data. This method will work properly only if initialized with mode \"w\" or \"w+\"."
          }
         },
         "exist": {
          "!type": "fn(db: +db.Db, name: string, rootCollection?: string, callback: fn())",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#exist",
          "!doc": "\n\nChecks if a file exists in the database."
         },
         "list": {
          "!type": "fn(db: +db.Db, rootCollection?: string, callback: fn())",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#list",
          "!doc": "\n\nGets the list of files stored in the GridFS."
         },
         "read": {
          "!type": "fn(db: +db.Db, name: string, length?: number, offset?: number, options?: +Object, callback: fn())",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#read",
          "!doc": "\n\nReads the contents of a file."
         },
         "readlines": {
          "!type": "fn(db: +db.Db, name: string, separator?: string, options?: +Object, callback: fn())",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#readlines",
          "!doc": "\n\nReads the data of this file."
         },
         "unlink": {
          "!type": "fn(db: +db.Db, names: string, options?: +Object)",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/gridstore.html#unlink",
          "!doc": "\n\nDeletes the chunks and metadata information of a file from GridFS."
         }
        }
       },
       "readstream": {
        "ReadStream": {
         "!type": "fn(autoclose: bool, cursor: +gridstore.GridStore) -> +readstream.ReadStream",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/readstream.html",
         "!doc": "\n\nReadStream"
        }
       },
       "grid": {
        "Grid": {
         "!type": "fn(db: +db.Db, fsName?: string) -> +grid.Grid",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/grid.html",
         "!doc": "\n\nA class representation of a simple Grid interface.",
         "prototype": {
          "put": {
           "!type": "fn(data: ?, options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/grid.html#put",
           "!doc": "\n\nPuts binary data to the grid"
          },
          "get": {
           "!type": "fn(id: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/grid.html#get",
           "!doc": "\n\nGet binary data to the grid"
          },
          "delete": {
           "!type": "fn(id: ?, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/grid.html#delete",
           "!doc": "\n\nDelete file from grid"
          }
         }
        }
       },
       "server": {
        "Server": {
         "!type": "fn(host: string, port: number, options?: +Object)",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/server.html",
         "!doc": "\n\nClass representing a single MongoDB Server connection",
         "prototype": {
          "assignReplicaSet": {
           "!type": "fn(replset: +replset.ReplSet)",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/server.html#assignReplicaSet",
           "!doc": "\n\nAssigns a replica set to this <code>server</code>."
          },
          "inheritReplSetOptionsFrom": {
           "!type": "fn(replset: +replset.ReplSet)",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/server.html#inheritReplSetOptionsFrom",
           "!doc": "\n\nTakes needed options from <code>replset</code> and overwrites\nour own options."
          }
         }
        }
       },
       "mongos": {
        "Mongos": {
         "!type": "fn(list: [?], options?: +Object)",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongos.html",
         "!doc": "\n\nMongos constructor provides a connection to a mongos proxy including failover to additional servers"
        }
       },
       "replset": {
        "ReplSet": {
         "!type": "fn(list: [?], options?: +Object)",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/replset.html",
         "!doc": "\n\nReplSet constructor provides replicaset functionality",
         "prototype": {
          "createServer": {
           "!type": "fn(host: string, replset: +replset.ReplSet) -> +server.Server",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/replset.html#createServer",
           "!doc": "\n\nCreates a new server for the <code>replset</code> based on <code>host</code>."
          }
         }
        }
       },
       "readpreference": {
        "ReadPreference": {
         "!type": "fn(the: string, tags: +Object) -> +readpreference.ReadPreference",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/readpreference.html",
         "!doc": "\n\nA class representation of the Read Preference."
        }
       },
       "ordered": {
        "OrderedBulkOperation": {
         "!type": "fn(collection: +Object, options?: +Object) -> +Object",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html",
         "!doc": "\n\nCreate a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)",
         "prototype": {
          "update": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#update",
           "!doc": "\n\nAdd a single update document to the bulk operation"
          },
          "updateOne": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#updateOne",
           "!doc": "\n\nAdd a single update one document to the bulk operation"
          },
          "replaceOne": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#replaceOne",
           "!doc": "\n\nAdd a replace one operation to the bulk operation"
          },
          "upsert": {
           "!type": "fn() -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#upsert",
           "!doc": "\n\nUpsert modifier for update bulk operation"
          },
          "removeOne": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#removeOne",
           "!doc": "\n\nAdd a remove one operation to the bulk operation"
          },
          "remove": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#remove",
           "!doc": "\n\nAdd a remove operation to the bulk operation"
          },
          "insert": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#insert",
           "!doc": "\n\nAdd a single insert document to the bulk operation"
          },
          "find": {
           "!type": "fn(doc: +Object) -> +ordered.OrderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#find",
           "!doc": "\n\nInitiate a find operation for an update/updateOne/remove/removeOne/replaceOne"
          },
          "execute": {
           "!type": "fn(options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/ordered.html#execute",
           "!doc": "\n\nExecute the ordered bulk operation"
          }
         }
        }
       },
       "unordered": {
        "UnorderedBulkOperation": {
         "!type": "fn(collection: +Object, options?: +Object) -> +Object",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html",
         "!doc": "\n\nCreate a new UnorderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)",
         "prototype": {
          "update": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#update",
           "!doc": "\n\nAdd a single update document to the bulk operation"
          },
          "updateOne": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#updateOne",
           "!doc": "\n\nAdd a single update one document to the bulk operation"
          },
          "replaceOne": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#replaceOne",
           "!doc": "\n\nAdd a replace one operation to the bulk operation"
          },
          "upsert": {
           "!type": "fn() -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#upsert",
           "!doc": "\n\nUpsert modifier for update bulk operation"
          },
          "removeOne": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#removeOne",
           "!doc": "\n\nAdd a remove one operation to the bulk operation"
          },
          "remove": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#remove",
           "!doc": "\n\nAdd a remove operation to the bulk operation"
          },
          "insert": {
           "!type": "fn(doc: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#insert",
           "!doc": "\n\nAdd a single insert document to the bulk operation"
          },
          "find": {
           "!type": "fn(selector: +Object) -> +unordered.UnorderedBulkOperation",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#find",
           "!doc": "\n\nInitiate a find operation for an update/updateOne/remove/removeOne/replaceOne"
          },
          "execute": {
           "!type": "fn(options?: +Object, callback: fn())",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/unordered.html#execute",
           "!doc": "\n\nExecute the unordered bulk operation"
          }
         }
        }
       },
       "batchwriteresult": {
        "BatchWriteResult": {
         "!type": "fn(batchResult: +Object) -> +batchwriteresult.BatchWriteResult",
         "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html",
         "!doc": "\n\nCreate a new BatchWriteResult instance (INTERNAL TYPE, do not instantiate directly)",
         "prototype": {
          "getUpsertedIds": {
           "!type": "fn() -> [?]",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getUpsertedIds",
           "!doc": "\n\nReturn an array of upserted ids"
          },
          "getUpsertedIdAt": {
           "!type": "fn(index: number) -> [?]",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getUpsertedIdAt",
           "!doc": "\n\nReturn the upserted id at position x"
          },
          "getRawResponse": {
           "!type": "fn() -> +Object",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getRawResponse",
           "!doc": "\n\nReturn raw internal result"
          },
          "hasWriteErrors": {
           "!type": "fn() -> bool",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#hasWriteErrors",
           "!doc": "\n\nReturns true if the bulk operation contains a write error"
          },
          "getWriteErrorCount": {
           "!type": "fn() -> number",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getWriteErrorCount",
           "!doc": "\n\nReturns the number of write errors off the bulk operation"
          },
          "getWriteErrorAt": {
           "!type": "fn() -> ?",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getWriteErrorAt",
           "!doc": "\n\nReturns a specific write error object"
          },
          "getWriteErrors": {
           "!type": "fn() -> [?]",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getWriteErrors",
           "!doc": "\n\nRetrieve all write errors"
          },
          "getLastOp": {
           "!type": "fn() -> [?]",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getLastOp",
           "!doc": "\n\nRetrieve lastOp if available"
          },
          "getWriteConcernError": {
           "!type": "fn() -> ?",
           "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/batchwriteresult.html#getWriteConcernError",
           "!doc": "\n\nRetrieve the write concern error if any"
          }
         }
        }
       }
      }
      
  }
});
