(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  infer.registerFunction("mongodb_MongoClient_connect", function(_self, _args, argNodes) {
    if (argNodes && argNodes.length && argNodes.length== 2) {
      var arg = _args[1], argNode = argNodes[1], fn = getFunctionType(arg, argNode);
      if (fn) {
        // here we support the second signature.
        var params = fn.argNames, cx = infer.cx(), paths = cx.paths;
        var fnArgs = [];
        for (var j = 0; j < params.length; j++) {
          switch(j) {
          case 0: // Error
            fnArgs.push(new infer.Obj(paths["Error.prototype"]));
            break;
          case 1: // db
            fnArgs.push(new infer.Obj(paths["db.Db.prototype"]));
            break;
          }
        }
        fn.propagate(new infer.IsCallee(infer.cx().topScope, fnArgs, null, infer.ANull))          
      }
    }
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
          MongoClient: "mongo_client.MongoClient",
          Db: "db.Db",
          Collection: "collection.Collection",
        }               
      },
      mongo_client: {
        MongoClient: {
          "!type": "fn(serverConfig: ?, options?: +mongo_client.MongoClientOptions)",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html",
          "!doc": "Create a new MongoClient instance.",
          prototype: {
            "!proto" : "events.EventEmitter.prototype",
            connect: {
              "!type": "fn(url: string, options?: ?, callback: fn(err: +Error, db: +db.Db))",
              "!effects": ["custom mongodb_MongoClient_connect"],
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#connect",
              "!doc": "Connect to MongoDB using a url as documented at docs.mongodb.org/manual/reference/connection-string/"
            },
            open: {
              "!type": "fn(callback: fn(err: +Error, mongoClient: +mongo_client.MongoClient))",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#close",
              "!doc": "Initialize the database connection."
            },
            close: {
              "!type": "fn(callback: fn(err: +Error, result: ?))",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#open",
              "!doc": "Close the current db connection, including all the child db instances. Emits close event and calls optional callback."
            },
            db: {
              "!type": "fn(dbName: string) -> +db.Db",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#db",
              "!doc": "Create a new Db instance sharing the current socket connections."
            }
          },
          connect: {
            "!type": "fn(url: string, options?: +mongo_client.MongoClientOptions, callback: fn(err: +Error, db: +db.Db))",
            "!effects": ["custom mongodb_MongoClient_connect"],
            "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#connect",
            "!doc": "Connect to MongoDB using a url as documented at docs.mongodb.org/manual/reference/connection-string/"
          }
        },
        MongoClientOptions: {
          uri_decode_auth: "bool",
          db: {
            
          },
          server: {
            
          },
          replSet: {
            
          },
          mongos: {
            
          }
        }  
      },
      db: {
        Db: {
          "!type": "fn(databaseName: string, serverConfig: ?, options?: ?)",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html",
          "!doc": "Create a new Db instance.",
          prototype: {
            open: {
              "!type": "fn(callback: fn(err: +Error, db: +db.Db))",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#open",
              "!doc": "Initialize the database connection."
            },
            db: {
              "!type": "fn(dbName: string) -> +db.Db",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#id1",
              "!doc": "the name of the database we want to use."
            },
            close: {
              "!type": "fn(forceClose?: bool, callback: fn(err: +Error, result: ?))",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#close",
              "!doc": "Close the current db connection, including all the child db instances. Emits close event and calls optional callback."
            },
            admin: {
              "!type": "fn(callback?: fn(err: +Error, result: ?)) -> +admin.Admin",
              "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#close",
              "!doc": "Close the current db connection, including all the child db instances. Emits close event and calls optional callback."
            }
          },
          DEFAULT_URL: "string"
        }
      }, 
      admin: {
        Admin: {
          "!type": "fn(db: db.Db)",
          "!url": "http://mongodb.github.io/node-mongodb-native/api-generated/db.html#admin",
          "!doc": " Allows the user to access the admin functionality of MongoDB",
          prototype: {
            aaa: {
              
            }
          }            
        }
      }
    }
  }
});
