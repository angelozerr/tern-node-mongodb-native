(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

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
          MongoClient: {
            "!type": "fn() -> +MongoClient",           
          },
          Db: {
            
          }
        }
      },
      MongoClient: {
        "!type": "fn(serverConfig: ?, options?: ?)",
        "!doc": "Create a new MongoClient instance.",
        prototype: {
          connect: {
            
          },
          open: {
            
          }
        }
      }
    }
  }
});
