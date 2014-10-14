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
    
  tern.registerPlugin("node-mongodb-native", function(server, options) {
    server._mongoose = {};
    return { defs : defs };
  });
    
  var defs = '!def';
    
})