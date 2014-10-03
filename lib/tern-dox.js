var TernDox = {};
(function() {
  "use strict";

  TernDox.generate = function(doxDoc, options) {
    var options = options ? options : {}, name = options.name;
    var ternDef = {
      "!name" : name,
      "!define" : {}
    };
    visitDataObjects(doxDoc, ternDef, options);
    return ternDef;
  };

  function visitDataObjects(dataObjects, ternDef, options) {
    var moduleInfos = createModuleInfos(dataObjects);
    // Iterate over all classes
    var modulesNames = Object.keys(dataObjects);    
    // For each class generate output
    for(var i = 0; i < modulesNames.length; i++) {
      var modulesName = modulesNames[i];
      // The meta data object
      var moduleMetaData = dataObjects[modulesName], ternModule = {};
      visitModuleMetaData(moduleInfos, moduleMetaData, modulesName, ternModule, options);
      ternDef["!define"][modulesName] = ternModule;
    }
  }
  
  function visitModuleMetaData(moduleInfos, entries, moduleName, ternModule, options) {
    for(var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if(isClass(entry.tags)) {
        var className = entry.ctx.string.replace("()", ""), ternClass = {};
        // !type
        ternClass["!type"] = getTernClassType(moduleInfos, entry, moduleName, className, null, false, options);
        // !url
        if (options.baseURL) ternClass["!url"] = options.baseURL + moduleName + '.html';
        // !doc
        var fullDescription = getFullDescription(entry);
        if (fullDescription != '') ternClass["!doc"] = fullDescription;        
        // methods
        visitFunctions(moduleInfos, entries, moduleName, className, ternClass, options);
        // class constants
        visitClassConstants(entries, ternClass, options);
        ternModule[className] = ternClass;
      }
    }
  }

  function visitFunctions(moduleInfos, entries, moduleName, className, ternClass, options) {
    for(var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if(isFunction(entry)) {
        var methodName = entry.ctx.name, staticMethod = isStaticMethod(entry);
        var ternMethod = {};
        // !type
        ternMethod["!type"] = getTernClassType(moduleInfos, entry, moduleName, className, methodName, staticMethod, options);
        // !effect
        var ternEffects = getTernEffects(moduleName, className, methodName, staticMethod, options);
        if (ternEffects) ternMethod["!effects"] = ternEffects;
        // !url
        if (options.baseURL) ternMethod["!url"] = options.baseURL + moduleName + '.html#' + methodName;
        // !doc
        var fullDescription = getFullDescription(entry);
        if (fullDescription != '') ternMethod["!doc"] = fullDescription;
        var ternClassOrPrototype = ternClass;
        if (!staticMethod) {
          ternClassOrPrototype = getTernClassPrototype(ternClass, moduleName, className, options);
        }
        ternClassOrPrototype[methodName] = ternMethod
      }
    }
  }
  
  function getTernClassPrototype(ternClass, moduleName, className, options) {
    var ternPrototype = ternClass["prototype"];
    if (!ternPrototype) {
      ternPrototype = {};
      ternClass["prototype"] = ternPrototype;
      if (options.getProto) {
        var ternProto = options.getProto(moduleName, className);
        if (ternProto) ternPrototype["!proto"] = ternProto;
      }
    }    
    return ternPrototype;
  }
  
  function getTernEffects(moduleName, className, methodName, staticMethod, options) {
    if (options.getEffects) return options.getEffects(moduleName, className, methodName);
  }
  
  function visitClassConstants(entries, ternClass, options) {
    for(var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if(isClassConstant(entry)) {
        
      }
    }
  }
  
  //Helper methods used in the rendering
  var isClass = function(tags) {    
    for(var k = 0; k < tags.length; k++) {
      if(tags[k].type == 'class') return true;
    }    
    return false;
  }
  
  var isFunction = function(entry) {
    // If we have a context
    if(entry.ctx != null 
      && (entry.ctx.type == 'method' || entry.ctx.type == 'function')
      && entry.isPrivate == false
      && entry.tags.length >= 1
      && (entry.tags[0].type == 'param' || entry.tags[0].type == 'return')) {
      return true;
    }
    return false;
  }
  
  var isStaticMethod = function(entry) {
    return entry.ctx != null
           && entry.ctx.receiver != null 
           && entry.ctx.receiver != "this";
  }
  
  var isProperty = function(entry) {
    var tags = entry.tags;    
    for(var k = 0; k < tags.length; k++) {
      if(tags[k].type == 'property') return true;
    }    
    return false;    
  }
  
  var isClassConstant = function(entry) {
    var tags = entry.tags;    
    for(var k = 0; k < tags.length; k++) {
      if(tags[k].type == 'classconstant') return true;
    }    
    return false;    
  }
  
  var getFullDescription = function(entry) {
    // Get full description and clean it
    var fullDescription = entry.description.summary;
    fullDescription = fullDescription.replace(/\<pre\>\<code\>/g, ".. code-block:: javascript\n\n   ")
      .replace(/\<\/code\>\<\/pre\>/g, "")
      .replace(/\<h2\>|\<\/h2\>/g, "**")
      .replace(/\<p\>/g, "\n\n")
      .replace(/\<\/p\>/g, "")
      .replace(/&lt;/g, "<")
      .replace(/\<strong\>|\<\/strong\>/g, "**")
      .replace(/\<em\>|\<\/em\>/g, "*")
      .replace(/\<br[ ]*\>|\<\/br[ ]*\>|\<br[ ]*\/\>/g, "\n");
    return fullDescription;
  }
  
  var getTernClassType = function(moduleInfos, entry, moduleName, className, methodName, staticMethod, options) {
    var t = options.getType ? options.getType(moduleName, className, methodName, staticMethod) : null;
    if (t) return t;
    var type = 'fn(', tags = entry.tags, nbParams = 0, returnType = null;
    for(var k = 0; k < tags.length; k++) {
      var tag = tags[k];
      if(tag.type == 'param') {
        if (nbParams) type+= ', ';
        var isOptional = tag.name.charAt(0) == '[', name = (isOptional ? tag.name.substring(1, tag.name.length - 1) : tag.name);
        type+= name;
        if (isOptional) type+='?';
        type+=': ';
        type+=getTernType(tag, moduleInfos);
        nbParams++;
      } else if(tag.type == 'return') {
        returnType = getTernType(tag, moduleInfos);
      }
    }
    type+= ')';
    if (returnType) {
      type+=' -> ';
      type+=returnType;
    }
    return type;
  }
  
  var getTernType = function(tag, moduleInfos) {
    var types = tag.types;
    for (var k = 0; k < types.length; k++) {
      var originalType = types[k];
      if (!originalType) return null;
      var type = originalType.toLowerCase();
      switch(type) {
      case 'function':
        return 'fn()';
      case 'array':
        return '[?]';        
      case 'boolean':
        return 'bool'; 
      case 'string':
      case 'number':
        return type;         
      case 'object':
        return '+Object';
      case 'null':
        return null;
      default:
        var info = moduleInfos[originalType];
        if (info) return '+' + info;
      }
    }
    return "?";
  }
  
  var createModuleInfos = function(dataObjects) {
    var infos = {};
    // Iterate over all classes
    var moduleNames = Object.keys(dataObjects);    
    // For each class generate output
    for(var i = 0; i < moduleNames.length; i++) {
      var moduleName = moduleNames[i];
      // The meta data object
      var entries = dataObjects[moduleName];
      for(var j = 0; j < entries.length; j++) {
        var entry = entries[j];
        if(isClass(entry.tags)) {
          var className = entry.ctx.string.replace("()", "");
          infos[className] = moduleName + '.' + className;
        }
      }
    }
    return infos;
  }

})();