var api = {
 "admin": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": true,
   "code": "var Collection = require('./collection').Collection,\n    Cursor = require('./cursor').Cursor,\n    DbCommand = require('./commands/db_command').DbCommand,\n    utils = require('./utils');",
   "ctx": {
    "type": "declaration",
    "name": "Collection",
    "value": "require('./collection').Collection,",
    "string": "Collection"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the Admin methods of MongoDB."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "db",
     "description": "Current db instance we wish to perform Admin operations on."
    },
    {
     "type": "return",
     "types": [
      "Function"
     ],
     "description": "Constructor for Admin type."
    }
   ],
   "description": {
    "full": "<p>Allows the user to access the admin functionality of MongoDB</p>",
    "summary": "<p>Allows the user to access the admin functionality of MongoDB</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Admin(db) {\n  if(!(this instanceof Admin)) return new Admin(db);",
   "ctx": {
    "type": "function",
    "name": "Admin",
    "string": "Admin()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from buildInfo or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve the server information for the current<br />instance of the db client</p>",
    "summary": "<p>Retrieve the server information for the current<br />instance of the db client</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.buildInfo = function(callback) {\n    this.serverInfo(callback);\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "buildInfo",
    "string": "this.buildInfo()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from serverInfo or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Retrieve the server information for the current<br />instance of the db client</p>",
    "summary": "<p>Retrieve the server information for the current<br />instance of the db client</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "this.serverInfo = function(callback) {\n    db.executeDbAdminCommand({buildinfo:1}, function(err, doc) {\n      if(err != null) return callback(err, null);\n      return callback(null, doc.documents[0]);\n    });\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "serverInfo",
    "string": "this.serverInfo()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from serverStatus or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve this db's server status.</p>",
    "summary": "<p>Retrieve this db's server status.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.serverStatus = function(callback) {\n    var self = this;\n\n    db.executeDbAdminCommand({serverStatus: 1}, function(err, doc) {\n      if(err == null && doc.documents[0].ok === 1) {\n        callback(null, doc.documents[0]);\n      } else {\n        if(err) return callback(err, false);\n        return callback(utils.toError(doc.documents[0]), false);\n      }\n    });\n  };",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "serverStatus",
    "string": "this.serverStatus()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from profilingLevel or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve the current profiling Level for MongoDB</p>",
    "summary": "<p>Retrieve the current profiling Level for MongoDB</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.profilingLevel = function(callback) {\n    var self = this;\n\n    db.executeDbAdminCommand({profile:-1}, function(err, doc) {\n      doc = doc.documents[0];\n\n      if(err == null && doc.ok === 1) {\n        var was = doc.was;\n        if(was == 0) return callback(null, \"off\");\n        if(was == 1) return callback(null, \"slow_only\");\n        if(was == 2) return callback(null, \"all\");\n          return callback(new Error(\"Error: illegal profiling level value \" + was), null);\n      } else {\n        err != null ? callback(err, null) : callback(new Error(\"Error with profile command\"), null);\n      }\n    });\n  };",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "profilingLevel",
    "string": "this.profilingLevel()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from ping or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Ping the MongoDB server and retrieve results</p>",
    "summary": "<p>Ping the MongoDB server and retrieve results</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.ping = function(options, callback) {\n    // Unpack calls\n    var args = Array.prototype.slice.call(arguments, 0);\n    db.executeDbAdminCommand({ping: 1}, args.pop());\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "ping",
    "string": "this.ping()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "The user name for the authentication."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "password",
     "description": "The password for the authentication."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from authenticate or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Authenticate against MongoDB</p>",
    "summary": "<p>Authenticate against MongoDB</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.authenticate = function(username, password, callback) {\n    db.authenticate(username, password, {authdb: 'admin'}, function(err, doc) {\n      return callback(err, doc);\n    })\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "authenticate",
    "string": "this.authenticate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "Optional parameters to the command."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from logout or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Logout current authenticated user</p>",
    "summary": "<p>Logout current authenticated user</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.logout = function(callback) {\n    db.logout({authdb: 'admin'},  function(err, doc) {\n      return callback(err, doc);\n    })\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "logout",
    "string": "this.logout()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "The user name for the authentication."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "password",
     "description": "The password for the authentication."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from addUser or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a user to the MongoDB server, if the user exists it will<br />overwrite the current password</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Add a user to the MongoDB server, if the user exists it will<br />overwrite the current password</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.addUser = function(username, password, options, callback) {\n    var args = Array.prototype.slice.call(arguments, 2);\n    callback = args.pop();\n    options = args.length ? args.shift() : {};\n    // Set the db name to admin\n    options.dbName = 'admin';\n    // Add user\n    db.addUser(username, password, options, function(err, doc) {\n      return callback(err, doc);\n    })\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "addUser",
    "string": "this.addUser()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "The user name for the authentication."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from removeUser or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Remove a user from the MongoDB server</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Remove a user from the MongoDB server</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.removeUser = function(username, options, callback) {\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n    callback = args.pop();\n    options = args.length ? args.shift() : {};\n    options.dbName = 'admin';\n\n    db.removeUser(username, options, function(err, doc) {\n      return callback(err, doc);\n    })\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "removeUser",
    "string": "this.removeUser()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "level",
     "description": "The new profiling level (off, slow_only, all)"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from setProfilingLevel or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Set the current profiling level of MongoDB</p>",
    "summary": "<p>Set the current profiling level of MongoDB</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.setProfilingLevel = function(level, callback) {\n    var self = this;\n    var command = {};\n    var profile = 0;\n\n    if(level == \"off\") {\n      profile = 0;\n    } else if(level == \"slow_only\") {\n      profile = 1;\n    } else if(level == \"all\") {\n      profile = 2;\n    } else {\n      return callback(new Error(\"Error: illegal profiling level value \" + level));\n    }\n\n    // Set up the profile number\n    command['profile'] = profile;\n\n    db.executeDbAdminCommand(command, function(err, doc) {\n      doc = doc.documents[0];\n\n      if(err == null && doc.ok === 1)\n        return callback(null, level);\n      return err != null ? callback(err, null) : callback(new Error(\"Error with profile command\"), null);\n    });\n  };",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "setProfilingLevel",
    "string": "this.setProfilingLevel()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from profilingInfo or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrive the current profiling information for MongoDB</p>",
    "summary": "<p>Retrive the current profiling information for MongoDB</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.profilingInfo = function(callback) {\n    try {\n      new Cursor(db, new Collection(db, DbCommand.SYSTEM_PROFILE_COLLECTION), {}, {}, {dbName: 'admin'}).toArray(function(err, items) {\n          return callback(err, items);\n      });\n    } catch (err) {\n      return callback(err, null);\n    }\n  };",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "profilingInfo",
    "string": "this.profilingInfo()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "command",
     "description": "A command object `{ping:1}`."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "Optional parameters to the command."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The command always return the whole result of the command as the second parameter."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute a db command against the Admin database</p>",
    "summary": "<p>Execute a db command against the Admin database</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.command = function(command, options, callback) {\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n    callback = args.pop();\n    options = args.length ? args.shift() : {};\n\n    // Execute a command\n    db.executeDbAdminCommand(command, options, function(err, doc) {\n      // Ensure change before event loop executes\n      return callback != null ? callback(err, doc) : null;\n    });\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "command",
    "string": "this.command()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "The name of the collection to validate."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "Optional parameters to the command."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from validateCollection or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Validate an existing collection</p>",
    "summary": "<p>Validate an existing collection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.validateCollection = function(collectionName, options, callback) {\n    var args = Array.prototype.slice.call(arguments, 1);\n    callback = args.pop();\n    options = args.length ? args.shift() : {};\n\n    var self = this;\n    var command = {validate: collectionName};\n    var keys = Object.keys(options);\n\n    // Decorate command with extra options\n    for(var i = 0; i < keys.length; i++) {\n      if(options.hasOwnProperty(keys[i])) {\n        command[keys[i]] = options[keys[i]];\n      }\n    }\n\n    db.command(command, function(err, doc) {\n      if(err != null) return callback(err, null);\n\n      if(doc.ok === 0)\n        return callback(new Error(\"Error with validate command\"), null);\n      if(doc.result != null && doc.result.constructor != String)\n        return callback(new Error(\"Error with validation data\"), null);\n      if(doc.result != null && doc.result.match(/exception|corrupt/) != null)\n        return callback(new Error(\"Error: invalid collection \" + collectionName), null);\n      if(doc.valid != null && !doc.valid)\n        return callback(new Error(\"Error: invalid collection \" + collectionName), null);\n\n      return callback(null, doc);\n    });\n  };",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "validateCollection",
    "string": "this.validateCollection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from listDatabases or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": "Returns no result"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>List the available databases</p>",
    "summary": "<p>List the available databases</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.listDatabases = function(callback) {\n    // Execute the listAllDatabases command\n    db.executeDbAdminCommand({listDatabases:1}, {}, function(err, doc) {\n      if(err != null) return callback(err, null);\n      return callback(null, doc.documents[0]);\n    });\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "listDatabases",
    "string": "this.listDatabases()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from replSetGetStatus or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get ReplicaSet status</p>",
    "summary": "<p>Get ReplicaSet status</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.replSetGetStatus = function(callback) {\n    var self = this;\n\n    db.executeDbAdminCommand({replSetGetStatus:1}, function(err, doc) {\n      if(err == null && doc.documents[0].ok === 1)\n        return callback(null, doc.documents[0]);\n      if(err) return callback(err, false);\n      return callback(utils.toError(doc.documents[0]), false);\n    });\n  };\n};",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "replSetGetStatus",
    "string": "this.replSetGetStatus()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Admin = Admin;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Admin",
    "value": "Admin",
    "string": "exports.Admin"
   }
  }
 ],
 "collection": [
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var InsertCommand = require('./commands/insert_command').InsertCommand\n  , QueryCommand = require('./commands/query_command').QueryCommand\n  , DeleteCommand = require('./commands/delete_command').DeleteCommand\n  , UpdateCommand = require('./commands/update_command').UpdateCommand\n  , DbCommand = require('./commands/db_command').DbCommand\n  , ObjectID = require('bson').ObjectID\n  , Code = require('bson').Code\n  , Cursor = require('./cursor').Cursor\n  , utils = require('./utils')\n  , shared = require('./collection/shared')\n  , core = require('./collection/core')\n  , query = require('./collection/query')\n  , index = require('./collection/index')\n  , geo = require('./collection/geo')\n  , commands = require('./collection/commands')\n  , aggregation = require('./collection/aggregation')\n  , unordered = require('./collection/batch/unordered')\n  , ordered = require('./collection/batch/ordered');",
   "ctx": {
    "type": "declaration",
    "name": "InsertCommand",
    "value": "require('./commands/insert_command').InsertCommand",
    "string": "InsertCommand"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Collection"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "db",
     "description": "db instance."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "collection name."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[pkFactory]",
     "description": "alternative primary key factory."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "a collection instance."
    }
   ],
   "description": {
    "full": "<p>Create a new Collection instance (INTERNAL TYPE, do not instantiate directly)</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>slaveOk</strong> {Boolean, default:false}, Allow reads from secondaries.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.</p>",
    "summary": "<p>Create a new Collection instance (INTERNAL TYPE, do not instantiate directly)</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>slaveOk</strong> {Boolean, default:false}, Allow reads from secondaries.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Collection (db, collectionName, pkFactory, options) {\n  if(!(this instanceof Collection)) return new Collection(db, collectionName, pkFactory, options);\n\n  shared.checkCollectionName(collectionName);\n\n  this.db = db;\n  this.collectionName = collectionName;\n  this.internalHint = null;\n  this.opts = options != null && ('object' === typeof options) ? options : {};\n  this.slaveOk = options == null || options.slaveOk == null ? db.slaveOk : options.slaveOk;\n  this.serializeFunctions = options == null || options.serializeFunctions == null ? db.serializeFunctions : options.serializeFunctions;\n  this.raw = options == null || options.raw == null ? db.raw : options.raw;\n\n  // Assign the right collection level readPreference\n  if(options && options.readPreference) {\n    this.readPreference = options.readPreference;\n  } else if(this.db.options.readPreference) {\n    this.readPreference = this.db.options.readPreference;\n  } else if(this.db.serverConfig.options.readPreference) {\n    this.readPreference = this.db.serverConfig.options.readPreference;\n  }\n\n  // Set custom primary key factory if provided\n  this.pkFactory = pkFactory == null\n    ? ObjectID\n    : pkFactory;\n\n  // Server Capabilities\n  this.serverCapabilities = this.db.serverConfig._serverCapabilities;\n}",
   "ctx": {
    "type": "function",
    "name": "Collection",
    "string": "Collection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array",
      "Object"
     ],
     "name": "docs",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options for insert command"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "optional callback for the function, must be provided when using a writeconcern"
    },
    {
     "type": "return",
     "types": [
      "Collection"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Inserts a single document or a an array of documents into MongoDB.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>continueOnError/keepGoing</strong> {Boolean, default:false}, keep inserting documents even if one document has an error, <em>mongodb 1.9.1 ></em>.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, let server assign ObjectId instead of the driver<br /> - <strong>checkKeys</strong> {Boolean, default:true}, allows for disabling of document key checking (WARNING OPENS YOU UP TO INJECTION ATTACKS)<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>",
    "summary": "<p>Inserts a single document or a an array of documents into MongoDB.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>continueOnError/keepGoing</strong> {Boolean, default:false}, keep inserting documents even if one document has an error, <em>mongodb 1.9.1 ></em>.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, let server assign ObjectId instead of the driver<br /> - <strong>checkKeys</strong> {Boolean, default:true}, allows for disabling of document key checking (WARNING OPENS YOU UP TO INJECTION ATTACKS)<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.insert = function() { return core.insert; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "insert",
    "string": "Collection.prototype.insert()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[selector]",
     "description": "optional select, no selector is equivalent to removing all documents."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during remove."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "must be provided if you performing a remove with a writeconcern"
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Removes documents specified by <code>selector</code> from the db.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>single</strong> {Boolean, default:false}, removes the first document found.<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>",
    "summary": "<p>Removes documents specified by <code>selector</code> from the db.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>single</strong> {Boolean, default:false}, removes the first document found.<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.remove = function() { return core.remove; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "remove",
    "string": "Collection.prototype.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "newName",
     "description": "the new name of the collection."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "returns option results."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "the callback accepting the result"
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Renames the collection.</p>\n\n<p>Options<br /> - <strong>dropTarget</strong> {Boolean, default:false}, drop the target name collection if it previously exists.</p>",
    "summary": "<p>Renames the collection.</p>",
    "body": "<p>Options<br /> - <strong>dropTarget</strong> {Boolean, default:false}, drop the target name collection if it previously exists.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.rename = function() { return commands.rename; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "rename",
    "string": "Collection.prototype.rename()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[doc]",
     "description": "the document to save"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during remove."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "must be provided if you performing an update with a writeconcern"
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Save a document. Simple full document replacement function. Not recommended for efficiency, use atomic<br />operators and update instead for more efficient operations.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Save a document. Simple full document replacement function. Not recommended for efficiency, use atomic<br />operators and update instead for more efficient operations.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.save = function() { return core.save; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "save",
    "string": "Collection.prototype.save()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "selector",
     "description": "the query to select the document/documents to be updated"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "document",
     "description": "the fields/vals to be updated, or in the case of an upsert operation, inserted."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "must be provided if you performing an update with a writeconcern"
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Updates documents.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>upsert</strong> {Boolean, default:false}, perform an upsert operation.<br /> - <strong>multi</strong> {Boolean, default:false}, update all documents matching the selector.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>checkKeys</strong> {Boolean, default:true}, allows for disabling of document key checking (WARNING OPENS YOU UP TO INJECTION ATTACKS)<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>",
    "summary": "<p>Updates documents.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>upsert</strong> {Boolean, default:false}, perform an upsert operation.<br /> - <strong>multi</strong> {Boolean, default:false}, update all documents matching the selector.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>checkKeys</strong> {Boolean, default:true}, allows for disabling of document key checking (WARNING OPENS YOU UP TO INJECTION ATTACKS)<br /> - <strong>fullResult</strong> {Boolean, default:false}, returns the full result document (document returned will differ by server version)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.update = function() { return core.update; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "update",
    "string": "Collection.prototype.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "key",
     "description": "key to run distinct against."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[query]",
     "description": "option query to narrow the returned objects."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from distinct or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The distinct command returns returns a list of distinct values for the given key across a collection.</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>The distinct command returns returns a list of distinct values for the given key across a collection.</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.distinct = function() { return commands.distinct; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "distinct",
    "string": "Collection.prototype.distinct()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[query]",
     "description": "query to filter by before performing count."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during count."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the count method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Count number of matching documents in the db to a query.</p>\n\n<p>Options<br /> - <strong>skip</strong> {Number}, The number of documents to skip for the count.<br /> - <strong>limit</strong> {Number}, The limit of documents to count.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Count number of matching documents in the db to a query.</p>",
    "body": "<p>Options<br /> - <strong>skip</strong> {Number}, The number of documents to skip for the count.<br /> - <strong>limit</strong> {Number}, The limit of documents to count.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.count = function() { return commands.count; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "count",
    "string": "Collection.prototype.count()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the drop method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drop the collection</p>",
    "summary": "<p>Drop the collection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.drop = function drop(callback) {\n  this.db.dropCollection(this.collectionName, callback);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "drop",
    "string": "Collection.prototype.drop()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "query",
     "description": "query object to locate the object to modify"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "sort",
     "description": "- if multiple docs match, choose the first one in the specified sort order as the object to manipulate"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "- the fields/vals to be updated"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the findAndModify method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Find and update a document.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>remove</strong> {Boolean, default:false}, set to true to remove the object before returning.<br /> - <strong>upsert</strong> {Boolean, default:false}, perform an upsert operation.<br /> - <strong>new</strong> {Boolean, default:false}, set to true if you want to return the modified object rather than the original. Ignored for remove.</p>",
    "summary": "<p>Find and update a document.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>remove</strong> {Boolean, default:false}, set to true to remove the object before returning.<br /> - <strong>upsert</strong> {Boolean, default:false}, perform an upsert operation.<br /> - <strong>new</strong> {Boolean, default:false}, set to true if you want to return the modified object rather than the original. Ignored for remove.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.findAndModify = function() { return core.findAndModify; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "findAndModify",
    "string": "Collection.prototype.findAndModify()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "query",
     "description": "query object to locate the object to modify"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "sort",
     "description": "- if multiple docs match, choose the first one in the specified sort order as the object to manipulate"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the findAndRemove method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Find and remove a document</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Find and remove a document</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.findAndRemove = function() { return core.findAndRemove; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "findAndRemove",
    "string": "Collection.prototype.findAndRemove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "ObjectID"
     ],
     "name": "query",
     "description": "query object to locate the object to modify"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the find method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "returns a cursor to the query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a cursor for a query that can be used to iterate over results from MongoDB</p>\n\n<p>Various argument possibilities<br /> - callback?<br /> - selector, callback?,<br /> - selector, fields, callback?<br /> - selector, options, callback?<br /> - selector, fields, options, callback?<br /> - selector, fields, skip, limit, callback?<br /> - selector, fields, skip, limit, timeout, callback?</p>\n\n<p>Options<br /> - <strong>limit</strong> {Number, default:0}, sets the limit of documents returned in the query.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>fields</strong> {Object}, the fields to return in the query. Object of fields to include or exclude (not both), {'a':1}<br /> - <strong>skip</strong> {Number, default:0}, set to skip N documents ahead in your query (useful for pagination).<br /> - <strong>hint</strong> {Object}, tell the query to use specific indexes in the query. Object of indexes to use, {'_id':1}<br /> - <strong>explain</strong> {Boolean, default:false}, explain the query instead of returning the data.<br /> - <strong>snapshot</strong> {Boolean, default:false}, snapshot query.<br /> - <strong>timeout</strong> {Boolean, default:false}, specify if the cursor can timeout.<br /> - <strong>tailable</strong> {Boolean, default:false}, specify if the cursor is tailable.<br /> - <strong>tailableRetryInterval</strong> {Number, default:100}, specify the miliseconds between getMores on tailable cursor.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, specify the number of times to retry the tailable cursor.<br /> - <strong>awaitdata</strong> {Boolean, default:false} allow the cursor to wait for data, only applicable for tailable cursor.<br /> - <strong>oplogReplay</strong> {Boolean, default:false} sets an internal flag, only applicable for tailable cursor.<br /> - <strong>exhaust</strong> {Boolean, default:false} have the server send all the documents at once as getMore packets, not recommended.<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>returnKey</strong> {Boolean, default:false}, only return the index key.<br /> - <strong>maxScan</strong> {Number}, Limit the number of items to scan.<br /> - <strong>min</strong> {Number}, Set index bounds.<br /> - <strong>max</strong> {Number}, Set index bounds.<br /> - <strong>showDiskLoc</strong> {Boolean, default:false}, Show disk location of results.<br /> - <strong>comment</strong> {String}, You can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>raw</strong> {Boolean, default:false}, Return all BSON documents as Raw Buffer documents.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>numberOfRetries</strong> {Number, default:5}, if using awaidata specifies the number of times to retry on timeout.<br /> - <strong>partial</strong> {Boolean, default:false}, specify if the cursor should return partial results when querying against a sharded system<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.</p>",
    "summary": "<p>Creates a cursor for a query that can be used to iterate over results from MongoDB</p>",
    "body": "<p>Various argument possibilities<br /> - callback?<br /> - selector, callback?,<br /> - selector, fields, callback?<br /> - selector, options, callback?<br /> - selector, fields, options, callback?<br /> - selector, fields, skip, limit, callback?<br /> - selector, fields, skip, limit, timeout, callback?</p>\n\n<p>Options<br /> - <strong>limit</strong> {Number, default:0}, sets the limit of documents returned in the query.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>fields</strong> {Object}, the fields to return in the query. Object of fields to include or exclude (not both), {'a':1}<br /> - <strong>skip</strong> {Number, default:0}, set to skip N documents ahead in your query (useful for pagination).<br /> - <strong>hint</strong> {Object}, tell the query to use specific indexes in the query. Object of indexes to use, {'_id':1}<br /> - <strong>explain</strong> {Boolean, default:false}, explain the query instead of returning the data.<br /> - <strong>snapshot</strong> {Boolean, default:false}, snapshot query.<br /> - <strong>timeout</strong> {Boolean, default:false}, specify if the cursor can timeout.<br /> - <strong>tailable</strong> {Boolean, default:false}, specify if the cursor is tailable.<br /> - <strong>tailableRetryInterval</strong> {Number, default:100}, specify the miliseconds between getMores on tailable cursor.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, specify the number of times to retry the tailable cursor.<br /> - <strong>awaitdata</strong> {Boolean, default:false} allow the cursor to wait for data, only applicable for tailable cursor.<br /> - <strong>oplogReplay</strong> {Boolean, default:false} sets an internal flag, only applicable for tailable cursor.<br /> - <strong>exhaust</strong> {Boolean, default:false} have the server send all the documents at once as getMore packets, not recommended.<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>returnKey</strong> {Boolean, default:false}, only return the index key.<br /> - <strong>maxScan</strong> {Number}, Limit the number of items to scan.<br /> - <strong>min</strong> {Number}, Set index bounds.<br /> - <strong>max</strong> {Number}, Set index bounds.<br /> - <strong>showDiskLoc</strong> {Boolean, default:false}, Show disk location of results.<br /> - <strong>comment</strong> {String}, You can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>raw</strong> {Boolean, default:false}, Return all BSON documents as Raw Buffer documents.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>numberOfRetries</strong> {Number, default:5}, if using awaidata specifies the number of times to retry on timeout.<br /> - <strong>partial</strong> {Boolean, default:false}, specify if the cursor should return partial results when querying against a sharded system<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.find = function() { return query.find; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "find",
    "string": "Collection.prototype.find()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "ObjectID"
     ],
     "name": "query",
     "description": "query object to locate the object to modify"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the findOne method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "returns a cursor to the query"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Finds a single document based on the query</p>\n\n<p>Various argument possibilities<br /> - callback?<br /> - selector, callback?,<br /> - selector, fields, callback?<br /> - selector, options, callback?<br /> - selector, fields, options, callback?<br /> - selector, fields, skip, limit, callback?<br /> - selector, fields, skip, limit, timeout, callback?</p>\n\n<p>Options<br /> - <strong>limit</strong> {Number, default:0}, sets the limit of documents returned in the query.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>fields</strong> {Object}, the fields to return in the query. Object of fields to include or exclude (not both), {'a':1}<br /> - <strong>skip</strong> {Number, default:0}, set to skip N documents ahead in your query (useful for pagination).<br /> - <strong>hint</strong> {Object}, tell the query to use specific indexes in the query. Object of indexes to use, {'_id':1}<br /> - <strong>explain</strong> {Boolean, default:false}, explain the query instead of returning the data.<br /> - <strong>snapshot</strong> {Boolean, default:false}, snapshot query.<br /> - <strong>timeout</strong> {Boolean, default:false}, specify if the cursor can timeout.<br /> - <strong>tailable</strong> {Boolean, default:false}, specify if the cursor is tailable.<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>returnKey</strong> {Boolean, default:false}, only return the index key.<br /> - <strong>maxScan</strong> {Number}, Limit the number of items to scan.<br /> - <strong>min</strong> {Number}, Set index bounds.<br /> - <strong>max</strong> {Number}, Set index bounds.<br /> - <strong>showDiskLoc</strong> {Boolean, default:false}, Show disk location of results.<br /> - <strong>comment</strong> {String}, You can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>raw</strong> {Boolean, default:false}, Return all BSON documents as Raw Buffer documents.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>partial</strong> {Boolean, default:false}, specify if the cursor should return partial results when querying against a sharded system<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.</p>",
    "summary": "<p>Finds a single document based on the query</p>",
    "body": "<p>Various argument possibilities<br /> - callback?<br /> - selector, callback?,<br /> - selector, fields, callback?<br /> - selector, options, callback?<br /> - selector, fields, options, callback?<br /> - selector, fields, skip, limit, callback?<br /> - selector, fields, skip, limit, timeout, callback?</p>\n\n<p>Options<br /> - <strong>limit</strong> {Number, default:0}, sets the limit of documents returned in the query.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>fields</strong> {Object}, the fields to return in the query. Object of fields to include or exclude (not both), {'a':1}<br /> - <strong>skip</strong> {Number, default:0}, set to skip N documents ahead in your query (useful for pagination).<br /> - <strong>hint</strong> {Object}, tell the query to use specific indexes in the query. Object of indexes to use, {'_id':1}<br /> - <strong>explain</strong> {Boolean, default:false}, explain the query instead of returning the data.<br /> - <strong>snapshot</strong> {Boolean, default:false}, snapshot query.<br /> - <strong>timeout</strong> {Boolean, default:false}, specify if the cursor can timeout.<br /> - <strong>tailable</strong> {Boolean, default:false}, specify if the cursor is tailable.<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>returnKey</strong> {Boolean, default:false}, only return the index key.<br /> - <strong>maxScan</strong> {Number}, Limit the number of items to scan.<br /> - <strong>min</strong> {Number}, Set index bounds.<br /> - <strong>max</strong> {Number}, Set index bounds.<br /> - <strong>showDiskLoc</strong> {Boolean, default:false}, Show disk location of results.<br /> - <strong>comment</strong> {String}, You can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>raw</strong> {Boolean, default:false}, Return all BSON documents as Raw Buffer documents.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>partial</strong> {Boolean, default:false}, specify if the cursor should return partial results when querying against a sharded system<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.findOne = function() { return query.findOne; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "findOne",
    "string": "Collection.prototype.findOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fieldOrSpec",
     "description": "fieldOrSpec that defines the index."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the createIndex method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates an index on the collection.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>",
    "summary": "<p>Creates an index on the collection.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.createIndex = function() { return index.createIndex; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "createIndex",
    "string": "Collection.prototype.createIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fieldOrSpec",
     "description": "fieldOrSpec that defines the index."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the ensureIndex method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Ensures that an index exists, if it does not it creates it</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>",
    "summary": "<p>Ensures that an index exists, if it does not it creates it</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.ensureIndex = function() { return index.ensureIndex; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "ensureIndex",
    "string": "Collection.prototype.ensureIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the indexInformation method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves this collections index info.</p>\n\n<p>Options<br /> - <strong>full</strong> {Boolean, default:false}, returns the full raw index information.</p>",
    "summary": "<p>Retrieves this collections index info.</p>",
    "body": "<p>Options<br /> - <strong>full</strong> {Boolean, default:false}, returns the full raw index information.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.indexInformation = function() { return index.indexInformation; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "indexInformation",
    "string": "Collection.prototype.indexInformation()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the dropIndex method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drops an index from this collection.</p>",
    "summary": "<p>Drops an index from this collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.dropIndex = function dropIndex (name, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }  \n  // Execute dropIndex command\n  this.db.dropIndex(this.collectionName, name, options, callback);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "dropIndex",
    "string": "Collection.prototype.dropIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the dropAllIndexes method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drops all indexes from this collection.</p>",
    "summary": "<p>Drops all indexes from this collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.dropAllIndexes = function() { return index.dropAllIndexes; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "dropAllIndexes",
    "string": "Collection.prototype.dropAllIndexes()"
   }
  },
  {
   "tags": [
    {
     "type": "deprecated",
     "string": ""
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the dropIndexes method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Drops all indexes from this collection.</p>",
    "summary": "<p>Drops all indexes from this collection.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Collection.prototype.dropIndexes = function() { return Collection.prototype.dropAllIndexes; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "dropIndexes",
    "string": "Collection.prototype.dropIndexes()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the reIndex method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reindex all indexes on the collection<br />Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.</p>",
    "summary": "<p>Reindex all indexes on the collection<br />Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.reIndex = function(options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }  \n  // Execute reIndex\n  this.db.reIndex(this.collectionName, options, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "reIndex",
    "string": "Collection.prototype.reIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function",
      "String"
     ],
     "name": "map",
     "description": "the mapping function."
    },
    {
     "type": "param",
     "types": [
      "Function",
      "String"
     ],
     "name": "reduce",
     "description": "the reduce function."
    },
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the map reduce job."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the mapReduce method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Run Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection.</p>\n\n<p>Options<br /> - <strong>out</strong> {Object}, sets the output target for the map reduce job. <em>{inline:1} | {replace:'collectionName'} | {merge:'collectionName'} | {reduce:'collectionName'}</em><br /> - <strong>query</strong> {Object}, query filter object.<br /> - <strong>sort</strong> {Object}, sorts the input objects using this key. Useful for optimization, like sorting by the emit key for fewer reduces.<br /> - <strong>limit</strong> {Number}, number of objects to return from collection.<br /> - <strong>keeptemp</strong> {Boolean, default:false}, keep temporary data.<br /> - <strong>finalize</strong> {Function | String}, finalize function.<br /> - <strong>scope</strong> {Object}, can pass in variables that can be access from map/reduce/finalize.<br /> - <strong>jsMode</strong> {Boolean, default:false}, it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X.<br /> - <strong>verbose</strong> {Boolean, default:false}, provide statistics on job execution time.<br /> - <strong>readPreference</strong> {String, only for inline results}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Run Map Reduce across a collection. Be aware that the inline option for out will return an array of results not a collection.</p>",
    "body": "<p>Options<br /> - <strong>out</strong> {Object}, sets the output target for the map reduce job. <em>{inline:1} | {replace:'collectionName'} | {merge:'collectionName'} | {reduce:'collectionName'}</em><br /> - <strong>query</strong> {Object}, query filter object.<br /> - <strong>sort</strong> {Object}, sorts the input objects using this key. Useful for optimization, like sorting by the emit key for fewer reduces.<br /> - <strong>limit</strong> {Number}, number of objects to return from collection.<br /> - <strong>keeptemp</strong> {Boolean, default:false}, keep temporary data.<br /> - <strong>finalize</strong> {Function | String}, finalize function.<br /> - <strong>scope</strong> {Object}, can pass in variables that can be access from map/reduce/finalize.<br /> - <strong>jsMode</strong> {Boolean, default:false}, it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X.<br /> - <strong>verbose</strong> {Boolean, default:false}, provide statistics on job execution time.<br /> - <strong>readPreference</strong> {String, only for inline results}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.mapReduce = function() { return aggregation.mapReduce; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "mapReduce",
    "string": "Collection.prototype.mapReduce()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object",
      "Array",
      "Function",
      "Code"
     ],
     "name": "keys",
     "description": "an object, array or function expressing the keys to group by."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "condition",
     "description": "an optional condition that must be true for a row to be considered."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "initial",
     "description": "initial value of the aggregation counter object."
    },
    {
     "type": "param",
     "types": [
      "Function",
      "Code"
     ],
     "name": "reduce",
     "description": "the reduce function aggregates (reduces) the objects iterated"
    },
    {
     "type": "param",
     "types": [
      "Function",
      "Code"
     ],
     "name": "finalize",
     "description": "an optional function to be run on each item in the result set just before the item is returned."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "command",
     "description": "specify if you wish to run using the internal group command or using eval, default is true."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the group method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Run a group command across a collection</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Run a group command across a collection</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.group = function() { return aggregation.group; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "group",
    "string": "Collection.prototype.group()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the options method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the options of the collection.</p>",
    "summary": "<p>Returns the options of the collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.options = function() { return commands.options; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "options",
    "string": "Collection.prototype.options()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the isCapped method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns if the collection is a capped collection</p>",
    "summary": "<p>Returns if the collection is a capped collection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.isCapped = function() { return commands.isCapped; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "isCapped",
    "string": "Collection.prototype.isCapped()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Array"
     ],
     "name": "indexNames",
     "description": "check if one or more indexes exist on the collection."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the indexExists method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Checks if one or more indexes exist on the collection</p>",
    "summary": "<p>Checks if one or more indexes exist on the collection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.indexExists = function() { return index.indexExists; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "indexExists",
    "string": "Collection.prototype.indexExists()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "x",
     "description": "point to search on the x axis, ensure the indexes are ordered in the same order."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "y",
     "description": "point to search on the y axis, ensure the indexes are ordered in the same order."
    },
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the map reduce job."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the geoNear method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute the geoNear command to search for items in the collection</p>\n\n<p>Options<br /> - <strong>num</strong> {Number}, max number of results to return.<br /> - <strong>minDistance</strong> {Number}, include results starting at minDistance from a point (2.6 or higher)<br /> - <strong>maxDistance</strong> {Number}, include results up to maxDistance from the point.<br /> - <strong>distanceMultiplier</strong> {Number}, include a value to multiply the distances with allowing for range conversions.<br /> - <strong>query</strong> {Object}, filter the results by a query.<br /> - <strong>spherical</strong> {Boolean, default:false}, perform query using a spherical model.<br /> - <strong>uniqueDocs</strong> {Boolean, default:false}, the closest location in a document to the center of the search region will always be returned MongoDB > 2.X.<br /> - <strong>includeLocs</strong> {Boolean, default:false}, include the location data fields in the top level of the results MongoDB > 2.X.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Execute the geoNear command to search for items in the collection</p>",
    "body": "<p>Options<br /> - <strong>num</strong> {Number}, max number of results to return.<br /> - <strong>minDistance</strong> {Number}, include results starting at minDistance from a point (2.6 or higher)<br /> - <strong>maxDistance</strong> {Number}, include results up to maxDistance from the point.<br /> - <strong>distanceMultiplier</strong> {Number}, include a value to multiply the distances with allowing for range conversions.<br /> - <strong>query</strong> {Object}, filter the results by a query.<br /> - <strong>spherical</strong> {Boolean, default:false}, perform query using a spherical model.<br /> - <strong>uniqueDocs</strong> {Boolean, default:false}, the closest location in a document to the center of the search region will always be returned MongoDB > 2.X.<br /> - <strong>includeLocs</strong> {Boolean, default:false}, include the location data fields in the top level of the results MongoDB > 2.X.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.geoNear = function() { return geo.geoNear; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "geoNear",
    "string": "Collection.prototype.geoNear()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "x",
     "description": "point to search on the x axis, ensure the indexes are ordered in the same order."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "y",
     "description": "point to search on the y axis, ensure the indexes are ordered in the same order."
    },
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the map reduce job."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the geoHaystackSearch method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute a geo search using a geo haystack index on a collection.</p>\n\n<p>Options<br /> - <strong>maxDistance</strong> {Number}, include results up to maxDistance from the point.<br /> - <strong>search</strong> {Object}, filter the results by a query.<br /> - <strong>limit</strong> {Number}, max number of results to return.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Execute a geo search using a geo haystack index on a collection.</p>",
    "body": "<p>Options<br /> - <strong>maxDistance</strong> {Number}, include results up to maxDistance from the point.<br /> - <strong>search</strong> {Object}, filter the results by a query.<br /> - <strong>limit</strong> {Number}, max number of results to return.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.geoHaystackSearch = function() { return geo.geoHaystackSearch; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "geoHaystackSearch",
    "string": "Collection.prototype.geoHaystackSearch()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the indexes method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve all the indexes on the collection.</p>",
    "summary": "<p>Retrieve all the indexes on the collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.indexes = function indexes(callback) {\n  this.db.indexInformation(this.collectionName, {full:true}, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "indexes",
    "string": "Collection.prototype.indexes()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "array",
     "description": "containing all the aggregation framework commands for the execution."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the aggregate method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>cursor</strong> {Object}, return the query as cursor, on 2.6 > it returns as a real cursor on pre 2.6 it returns as an emulated cursor.<br /> - <strong>cursor.batchSize</strong> {Number}, the batchSize for the cursor<br /> - <strong>out</strong> {String}, the collection name to where to write the results from the aggregation (MongoDB 2.6 or higher). Warning any existing collection will be overwritten.<br /> - <strong>explain</strong> {Boolean, default:false}, explain returns the aggregation execution plan (requires mongodb 2.6 >).<br /> - <strong>allowDiskUse</strong> {Boolean, default:false}, allowDiskUse lets the server know if it can use disk to store temporary results for the aggregation (requires mongodb 2.6 >).</p>",
    "summary": "<p>Execute an aggregation framework pipeline against the collection, needs MongoDB >= 2.2</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>cursor</strong> {Object}, return the query as cursor, on 2.6 > it returns as a real cursor on pre 2.6 it returns as an emulated cursor.<br /> - <strong>cursor.batchSize</strong> {Number}, the batchSize for the cursor<br /> - <strong>out</strong> {String}, the collection name to where to write the results from the aggregation (MongoDB 2.6 or higher). Warning any existing collection will be overwritten.<br /> - <strong>explain</strong> {Boolean, default:false}, explain returns the aggregation execution plan (requires mongodb 2.6 >).<br /> - <strong>allowDiskUse</strong> {Boolean, default:false}, allowDiskUse lets the server know if it can use disk to store temporary results for the aggregation (requires mongodb 2.6 >).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.aggregate = function() { return aggregation.aggregate; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "aggregate",
    "string": "Collection.prototype.aggregate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the stats command."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the stats method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get all the collection statistics.</p>\n\n<p>Options<br /> - <strong>scale</strong> {Number}, divide the returned sizes by scale value.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Get all the collection statistics.</p>",
    "body": "<p>Options<br /> - <strong>scale</strong> {Number}, divide the returned sizes by scale value.<br /> - <strong>readPreference</strong> {String}, the preferred read preference, require('mongodb').ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.stats = function() { return commands.stats; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "stats",
    "string": "Collection.prototype.stats()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the initializeUnorderedBatch "
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be a UnorderedBulkOperation object."
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Initiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.initializeUnorderedBulkOp = function() { return unordered.initializeUnorderedBulkOp; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "initializeUnorderedBulkOp",
    "string": "Collection.prototype.initializeUnorderedBulkOp()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the initializeOrderedBulkOp "
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be a OrderedBulkOperation object."
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Initiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.initializeOrderedBulkOp = function() { return ordered.initializeOrderedBulkOp; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "initializeOrderedBulkOp",
    "string": "Collection.prototype.initializeOrderedBulkOp()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the initializeOrderedBulkOp "
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. The second argument will be an array of CommandCursor instances."
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return N number of parallel cursors for a collection allowing parallel reading of entire collection. There are<br />no ordering guarantees for returned results.</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>numCursors</strong>, {Number, 1} the maximum number of parallel command cursors to return (the number of returned cursors will be in the range 1:numCursors)</p>",
    "summary": "<p>Return N number of parallel cursors for a collection allowing parallel reading of entire collection. There are<br />no ordering guarantees for returned results.</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>batchSize</strong> {Number, default:0}, set the batchSize for the getMoreCommand when iterating over the query results.<br /> - <strong>numCursors</strong>, {Number, 1} the maximum number of parallel command cursors to return (the number of returned cursors will be in the range 1:numCursors)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Collection.prototype.parallelCollectionScan = function() { return query.parallelCollectionScan; }();",
   "ctx": {
    "type": "method",
    "constructor": "Collection",
    "cons": "Collection",
    "name": "parallelCollectionScan",
    "string": "Collection.prototype.parallelCollectionScan()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Collection.prototype, \"hint\", {\n    enumerable: true\n  , get: function () {\n      return this.internalHint;\n    }\n  , set: function (v) {\n      this.internalHint = shared.normalizeHintField(v);\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose.</p>",
    "summary": "<p>Expose.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Collection = Collection;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Collection",
    "value": "Collection",
    "string": "exports.Collection"
   }
  }
 ],
 "mongoclient": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a MongoClient"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "serverConfig",
     "description": "server config object."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    }
   ],
   "description": {
    "full": "<p>Create a new MongoClient instance.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>native_parser</strong> {Boolean, default:false}, use c++ bson parser.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, force server to create _id fields instead of client.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions.<br /> - <strong>raw</strong> {Boolean, default:false}, peform operations using raw bson buffers.<br /> - <strong>recordQueryStats</strong> {Boolean, default:false}, record query statistics during execution.<br /> - <strong>retryMiliSeconds</strong> {Number, default:5000}, number of miliseconds between retries.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, number of retries off connection.<br /> - <strong>bufferMaxEntries</strong> {Boolean, default: -1}, sets a cap on how many operations the driver will buffer up before giving up on getting a working connection, default is -1 which is unlimited</p>",
    "summary": "<p>Create a new MongoClient instance.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>native_parser</strong> {Boolean, default:false}, use c++ bson parser.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, force server to create _id fields instead of client.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions.<br /> - <strong>raw</strong> {Boolean, default:false}, peform operations using raw bson buffers.<br /> - <strong>recordQueryStats</strong> {Boolean, default:false}, record query statistics during execution.<br /> - <strong>retryMiliSeconds</strong> {Number, default:5000}, number of miliseconds between retries.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, number of retries off connection.<br /> - <strong>bufferMaxEntries</strong> {Boolean, default: -1}, sets a cap on how many operations the driver will buffer up before giving up on getting a working connection, default is -1 which is unlimited</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function MongoClient(serverConfig, options) {\n  if(serverConfig != null) {\n    options = options ? options : {};\n    // If no write concern is set set the default to w:1\n    if('w' in options === false) {\n      options.w = 1;\n    }\n    \n    // The internal db instance we are wrapping\n    this._db = new Db('test', serverConfig, options);    \n  }\n}",
   "ctx": {
    "type": "function",
    "name": "MongoClient",
    "string": "MongoClient()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "inherits(MongoClient, EventEmitter);"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "url",
     "description": "connection url for MongoDB."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options for insert command"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the initialized db object or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connect to MongoDB using a url as documented at</p>\n\n<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>",
    "summary": "<p>Connect to MongoDB using a url as documented at</p>",
    "body": "<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongoClient.prototype.connect = function(url, options, callback) {\n  var self = this;\n\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  MongoClient.connect(url, options, function(err, db) {\n    if(err) return callback(err, db);\n    // Store internal db instance reference\n    self._db = db;\n    // Emit open and perform callback\n    self.emit(\"open\", err, db);\n    callback(err, db);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "MongoClient",
    "cons": "MongoClient",
    "name": "connect",
    "string": "MongoClient.prototype.connect()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the connected mongoclient or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initialize the database connection.</p>",
    "summary": "<p>Initialize the database connection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongoClient.prototype.open = function(callback) {\n  // Self reference\n  var self = this;\n  // Open the db\n  this._db.open(function(err, db) {\n    if(err) return callback(err, null);\n    // Emit open event\n    self.emit(\"open\", err, db);\n    // Callback\n    callback(null, self);\n  })\n}",
   "ctx": {
    "type": "method",
    "constructor": "MongoClient",
    "cons": "MongoClient",
    "name": "open",
    "string": "MongoClient.prototype.open()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from the close method or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Close the current db connection, including all the child db instances. Emits close event and calls optional callback.</p>",
    "summary": "<p>Close the current db connection, including all the child db instances. Emits close event and calls optional callback.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongoClient.prototype.close = function(callback) {\n  this._db.close(callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "MongoClient",
    "cons": "MongoClient",
    "name": "close",
    "string": "MongoClient.prototype.close()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "dbName",
     "description": "the name of the database we want to use."
    },
    {
     "type": "return",
     "types": [
      "Db"
     ],
     "description": "a db instance using the new database."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Create a new Db instance sharing the current socket connections.</p>",
    "summary": "<p>Create a new Db instance sharing the current socket connections.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongoClient.prototype.db = function(dbName) {\n  return this._db.db(dbName);\n}",
   "ctx": {
    "type": "method",
    "constructor": "MongoClient",
    "cons": "MongoClient",
    "name": "db",
    "string": "MongoClient.prototype.db()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "url",
     "description": "connection url for MongoDB."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options for insert command"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the initialized db object or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connect to MongoDB using a url as documented at</p>\n\n<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>",
    "summary": "<p>Connect to MongoDB using a url as documented at</p>",
    "body": "<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "MongoClient.connect = function(url, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = typeof args[args.length - 1] == 'function' ? args.pop() : null;\n  options = args.length ? args.shift() : null;\n  options = options || {};\n\n  // Set default empty server options  \n  var serverOptions = options.server || {};\n  var mongosOptions = options.mongos || {};\n  var replSetServersOptions = options.replSet || options.replSetServers || {};\n  var dbOptions = options.db || {};\n\n  // If callback is null throw an exception\n  if(callback == null) \n    throw new Error(\"no callback function provided\");\n\n  // Parse the string\n  var object = parse(url, options);\n\n  // Merge in any options for db in options object\n  if(dbOptions) {\n    for(var name in dbOptions) object.db_options[name] = dbOptions[name];\n  }\n\n  // Added the url to the options\n  object.db_options.url = url;\n\n  // Merge in any options for server in options object\n  if(serverOptions) {\n    for(var name in serverOptions) object.server_options[name] = serverOptions[name];\n  }\n\n  // Merge in any replicaset server options\n  if(replSetServersOptions) {\n    for(var name in replSetServersOptions) object.rs_options[name] = replSetServersOptions[name];    \n  }\n\n  // Merge in any replicaset server options\n  if(mongosOptions) {\n    for(var name in mongosOptions) object.mongos_options[name] = mongosOptions[name];    \n  }\n\n  // We need to ensure that the list of servers are only either direct members or mongos\n  // they cannot be a mix of monogs and mongod's\n  var totalNumberOfServers = object.servers.length;\n  var totalNumberOfMongosServers = 0;\n  var totalNumberOfMongodServers = 0;\n  var serverConfig = null;\n  var errorServers = {};\n\n  // Failure modes\n  if(object.servers.length == 0) throw new Error(\"connection string must contain at least one seed host\");\n\n  // If we have no db setting for the native parser try to set the c++ one first\n  object.db_options.native_parser = _setNativeParser(object.db_options);\n  // If no auto_reconnect is set, set it to true as default for single servers\n  if(typeof object.server_options.auto_reconnect != 'boolean') {\n    object.server_options.auto_reconnect = true;\n  }\n\n  // Establish the correct socketTimeout\n  var connectTimeoutMS = 30000;\n  var socketTimeoutMS = 0;\n\n  // We have a server connection timeout setting\n  if(object.server_options && object.server_options.socketOptions && object.server_options.socketOptions.connectTimeoutMS) {\n    connectTimeoutMS = object.server_options.socketOptions.connectTimeoutMS;\n  }\n\n  // We have a rs options set for connection timeout, override any server ones\n  if(object.rs_options && object.rs_options.socketOptions && object.rs_options.socketOptions.connectTimeoutMS) {\n    connectTimeoutMS = object.rs_options.socketOptions.connectTimeoutMS;\n  }\n\n  // If we have no socket settings set the default values\n  if(object.rs_options.socketOptions.connectTimeoutMS == null) {\n    object.rs_options.socketOptions.connectTimeoutMS = connectTimeoutMS;\n  }\n\n  if(object.rs_options.socketOptions.socketTimeoutMS == null) {\n    object.rs_options.socketOptions.socketTimeoutMS = socketTimeoutMS;\n  }\n\n  if(object.server_options.socketOptions.connectTimeoutMS == null) {\n    object.server_options.socketOptions.connectTimeoutMS = connectTimeoutMS;\n  }\n\n  if(object.server_options.socketOptions.socketTimeoutMS == null) {\n    object.server_options.socketOptions.socketTimeoutMS = socketTimeoutMS;\n  }\n\n  // If we have more than a server, it could be replicaset or mongos list\n  // need to verify that it's one or the other and fail if it's a mix\n  // Connect to all servers and run ismaster\n  for(var i = 0; i < object.servers.length; i++) {\n    // Set up socket options\n    var _server_options = {\n        poolSize:1\n      , socketOptions: {\n          connectTimeoutMS: connectTimeoutMS \n        , socketTimeoutMS: socketTimeoutMS\n      }\n      , auto_reconnect:false};\n\n    // Ensure we have ssl setup for the servers\n    if(object.rs_options.ssl) {\n      _server_options.ssl = object.rs_options.ssl;\n      _server_options.sslValidate = object.rs_options.sslValidate;\n      _server_options.sslCA = object.rs_options.sslCA;\n      _server_options.sslCert = object.rs_options.sslCert;\n      _server_options.sslKey = object.rs_options.sslKey;\n      _server_options.sslPass = object.rs_options.sslPass;\n    } else if(object.server_options.ssl) {\n      _server_options.ssl = object.server_options.ssl;\n      _server_options.sslValidate = object.server_options.sslValidate;\n      _server_options.sslCA = object.server_options.sslCA;\n      _server_options.sslCert = object.server_options.sslCert;\n      _server_options.sslKey = object.server_options.sslKey;\n      _server_options.sslPass = object.server_options.sslPass;\n    }\n\n    // Set up the Server object\n    var _server = object.servers[i].domain_socket \n        ? new Server(object.servers[i].domain_socket, _server_options)\n        : new Server(object.servers[i].host, object.servers[i].port, _server_options);\n\n    var connectFunction = function(__server) { \n      // Attempt connect\n      new Db(object.dbName, __server, {w:1, native_parser:false}).open(function(err, db) {\n        // Update number of servers\n        totalNumberOfServers = totalNumberOfServers - 1;          \n        // If no error do the correct checks\n        if(!err) {\n          // Close the connection\n          db.close(true);\n          var isMasterDoc = db.serverConfig.isMasterDoc;\n          // Check what type of server we have\n          if(isMasterDoc.setName) totalNumberOfMongodServers++;\n          if(isMasterDoc.msg && isMasterDoc.msg == \"isdbgrid\") totalNumberOfMongosServers++;\n        } else {\n          errorServers[__server.host + \":\" + __server.port] = __server;\n        }\n\n        if(totalNumberOfServers == 0) {\n          // If we have a mix of mongod and mongos, throw an error\n          if(totalNumberOfMongosServers > 0 && totalNumberOfMongodServers > 0) {\n            return process.nextTick(function() {\n              try {\n                callback(new Error(\"cannot combine a list of replicaset seeds and mongos seeds\"));\n              } catch (err) {\n                if(db) db.close();\n                throw err\n              }              \n            })\n          }\n          \n          if(totalNumberOfMongodServers == 0 && object.servers.length == 1) {\n            var obj = object.servers[0];\n            serverConfig = obj.domain_socket ? \n                new Server(obj.domain_socket, object.server_options)\n              : new Server(obj.host, obj.port, object.server_options);            \n          } else if(totalNumberOfMongodServers > 0 || totalNumberOfMongosServers > 0) {\n            var finalServers = object.servers\n              .filter(function(serverObj) {\n                return errorServers[serverObj.host + \":\" + serverObj.port] == null;\n              })\n              .map(function(serverObj) {\n                  return new Server(serverObj.host, serverObj.port, object.server_options);\n              });\n            // Clean out any error servers\n            errorServers = {};\n            // Set up the final configuration\n            if(totalNumberOfMongodServers > 0) {\n              serverConfig = new ReplSet(finalServers, object.rs_options);                \n            } else {\n              serverConfig = new Mongos(finalServers, object.mongos_options);                         \n            }\n          }\n\n          if(serverConfig == null) {\n            return process.nextTick(function() {\n              try {\n                callback(new Error(\"Could not locate any valid servers in initial seed list\"));\n              } catch (err) {\n                if(db) db.close();\n                throw err\n              }\n            });\n          }\n          // Ensure no firing off open event before we are ready\n          serverConfig.emitOpen = false;\n          // Set up all options etc and connect to the database\n          _finishConnecting(serverConfig, object, options, callback)\n        }\n      });        \n    }\n\n    // Wrap the context of the call\n    connectFunction(_server);    \n  }    \n}\n\nvar _setNativeParser = function(db_options) {\n  if(typeof db_options.native_parser == 'boolean') return db_options.native_parser;\n\n  try {\n    require('bson').BSONNative.BSON;\n    return true;\n  } catch(err) {\n    return false;\n  }\n}\n\nvar _finishConnecting = function(serverConfig, object, options, callback) {\n  // Safe settings\n  var safe = {};\n  // Build the safe parameter if needed\n  if(object.db_options.journal) safe.j = object.db_options.journal;\n  if(object.db_options.w) safe.w = object.db_options.w;\n  if(object.db_options.fsync) safe.fsync = object.db_options.fsync;\n  if(object.db_options.wtimeoutMS) safe.wtimeout = object.db_options.wtimeoutMS;\n\n  // If we have a read Preference set\n  if(object.db_options.read_preference) {\n    var readPreference = new ReadPreference(object.db_options.read_preference);\n    // If we have the tags set up\n    if(object.db_options.read_preference_tags)\n      readPreference = new ReadPreference(object.db_options.read_preference, object.db_options.read_preference_tags);\n    // Add the read preference\n    object.db_options.readPreference = readPreference;\n  }\n\n  // No safe mode if no keys\n  if(Object.keys(safe).length == 0) safe = false;\n\n  // Add the safe object\n  object.db_options.safe = safe;\n\n  // Get the socketTimeoutMS\n  var socketTimeoutMS = object.server_options.socketOptions.socketTimeoutMS || 0;\n  var connectTimeoutMS = object.server_options.socketOptions.connectTimeoutMS || 30000;\n\n  // If we have a replset, override with replicaset socket timeout option if available\n  if(serverConfig instanceof ReplSet) {\n    socketTimeoutMS = object.rs_options.socketOptions.socketTimeoutMS || socketTimeoutMS;\n  }\n\n  //\n  // Set socketTimeout to same as connectionTimeout to ensure we don't block on connect and auth\n  // This is a workaround for pre 2.6 servers where auth can hang when indexes are build on secondaries\n  serverConfig.setSocketOptions({socketTimeoutMS: connectTimeoutMS, connectTimeoutMS: connectTimeoutMS});\n\n  // Set up the db options\n  var db = new Db(object.dbName, serverConfig, object.db_options);\n  // Open the db\n  db.open(function(err, db){\n    if(err) {\n      return process.nextTick(function() {\n        try {\n          callback(err, null);\n        } catch (err) {\n          if(db) db.close();\n          throw err\n        }\n      });\n    }\n\n    //\n    // Set socketTimeout to same as connectionTimeout to ensure we don't block on connect and auth\n    // This is a workaround for pre 2.6 servers where auth can hang when indexes are build on secondaries\n    serverConfig.setSocketOptions({socketTimeoutMS: connectTimeoutMS, connectTimeoutMS: connectTimeoutMS});\n\n    // Set the provided write concern or fall back to w:1 as default\n    if(db.options !== null && !db.options.safe && !db.options.journal \n      && !db.options.w && !db.options.fsync && typeof db.options.w != 'number'\n      && (db.options.safe == false && object.db_options.url.indexOf(\"safe=\") == -1)) {\n        db.options.w = 1;\n    }\n\n    if(err == null && object.auth){\n      // What db to authenticate against\n      var authentication_db = db;\n      if(object.db_options && object.db_options.authSource) {\n        authentication_db = db.db(object.db_options.authSource);\n      }\n\n      // Build options object\n      var options = {};\n      if(object.db_options.authMechanism) options.authMechanism = object.db_options.authMechanism;\n      if(object.db_options.gssapiServiceName) options.gssapiServiceName = object.db_options.gssapiServiceName;\n\n      // Authenticate\n      authentication_db.authenticate(object.auth.user, object.auth.password, options, function(err, success){\n        // Reset the socket timeout\n        serverConfig.setSocketOptions({socketTimeoutMS: socketTimeoutMS, connectTimeoutMS: connectTimeoutMS});\n\n        // Handle the results\n        if(success){\n          process.nextTick(function() {\n            try {\n              callback(null, db);            \n            } catch (err) {\n              if(db) db.close();\n              throw err\n            }\n          });\n        } else {\n          if(db) db.close();\n          process.nextTick(function() {\n            try {\n              callback(err ? err : new Error('Could not authenticate user ' + object.auth[0]), null);\n            } catch (err) {\n              if(db) db.close();\n              throw err\n            }\n          });\n        }\n      });\n    } else {      \n      // Reset the socket timeout\n      serverConfig.setSocketOptions({socketTimeoutMS: socketTimeoutMS, connectTimeoutMS: connectTimeoutMS});\n\n      // Return connection      \n      process.nextTick(function() {\n        try {\n          callback(err, db);            \n        } catch (err) {\n          if(db) db.close();\n          throw err\n        }\n      })\n    }\n  });\n}\n\nexports.MongoClient = MongoClient;",
   "ctx": {
    "type": "method",
    "receiver": "MongoClient",
    "name": "connect",
    "string": "MongoClient.connect()"
   }
  }
 ],
 "db": [
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var QueryCommand = require('./commands/query_command').QueryCommand\n  , DbCommand = require('./commands/db_command').DbCommand\n  , MongoReply = require('./responses/mongo_reply').MongoReply\n  , Admin = require('./admin').Admin\n  , Collection = require('./collection').Collection\n  , Server = require('./connection/server').Server\n  , ReplSet = require('./connection/repl_set/repl_set').ReplSet\n  , ReadPreference = require('./connection/read_preference').ReadPreference\n  , Mongos = require('./connection/mongos').Mongos\n  , Cursor = require('./cursor').Cursor\n  , EventEmitter = require('events').EventEmitter\n  , InsertCommand = require('./commands/insert_command').InsertCommand\n  , f = require('util').format\n  , inherits = require('util').inherits\n  , crypto = require('crypto')\n  , timers = require('timers')\n  , utils = require('./utils')\n\n  // Authentication methods\n  , mongodb_cr_authenticate = require('./auth/mongodb_cr.js').authenticate\n  , mongodb_gssapi_authenticate = require('./auth/mongodb_gssapi.js').authenticate\n  , mongodb_sspi_authenticate = require('./auth/mongodb_sspi.js').authenticate\n  , mongodb_plain_authenticate = require('./auth/mongodb_plain.js').authenticate\n  , mongodb_x509_authenticate = require('./auth/mongodb_x509.js').authenticate\n  , mongodb_scram_authenticate = require('./auth/mongodb_scram.js').authenticate;\n\nvar hasKerberos = false;\n// Check if we have a the kerberos library\ntry {\n  require('kerberos');\n  hasKerberos = true;\n} catch(err) {}\n\n// Set processor, setImmediate if 0.10 otherwise nextTick\nvar processor = require('./utils').processor();",
   "ctx": {
    "type": "declaration",
    "name": "QueryCommand",
    "value": "require('./commands/query_command').QueryCommand",
    "string": "QueryCommand"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Db"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "databaseName",
     "description": "name of the database."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "serverConfig",
     "description": "server config object."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    }
   ],
   "description": {
    "full": "<p>Create a new Db instance.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>native_parser</strong> {Boolean, default:false}, use c++ bson parser.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, force server to create _id fields instead of client.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions.<br /> - <strong>raw</strong> {Boolean, default:false}, perform operations using raw bson buffers.<br /> - <strong>recordQueryStats</strong> {Boolean, default:false}, record query statistics during execution.<br /> - <strong>retryMiliSeconds</strong> {Number, default:5000}, number of milliseconds between retries.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, number of retries off connection.<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>slaveOk</strong> {Number, default:null}, force setting of SlaveOk flag on queries (only use when explicitly connecting to a secondary server).<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits<br /> - <strong>bufferMaxEntries</strong> {Number, default: -1}, sets a cap on how many operations the driver will buffer up before giving up on getting a working connection, default is -1 which is unlimited</p>",
    "summary": "<p>Create a new Db instance.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>native_parser</strong> {Boolean, default:false}, use c++ bson parser.<br /> - <strong>forceServerObjectId</strong> {Boolean, default:false}, force server to create _id fields instead of client.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions.<br /> - <strong>raw</strong> {Boolean, default:false}, perform operations using raw bson buffers.<br /> - <strong>recordQueryStats</strong> {Boolean, default:false}, record query statistics during execution.<br /> - <strong>retryMiliSeconds</strong> {Number, default:5000}, number of milliseconds between retries.<br /> - <strong>numberOfRetries</strong> {Number, default:5}, number of retries off connection.<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>slaveOk</strong> {Number, default:null}, force setting of SlaveOk flag on queries (only use when explicitly connecting to a secondary server).<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits<br /> - <strong>bufferMaxEntries</strong> {Number, default: -1}, sets a cap on how many operations the driver will buffer up before giving up on getting a working connection, default is -1 which is unlimited</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Db(databaseName, serverConfig, options) {\n  if(!(this instanceof Db)) return new Db(databaseName, serverConfig, options);\n  EventEmitter.call(this);\n  var self = this;\n  this.databaseName = databaseName;\n  this.serverConfig = serverConfig;\n  this.options = options == null ? {} : options;\n  // State to check against if the user force closed db\n  this._applicationClosed = false;\n  // Fetch the override flag if any\n  var overrideUsedFlag = this.options['override_used_flag'] == null ? false : this.options['override_used_flag'];\n\n  // Verify that nobody is using this config\n  if(!overrideUsedFlag && this.serverConfig != null && typeof this.serverConfig == 'object' && this.serverConfig._isUsed && this.serverConfig._isUsed()) {\n    throw new Error('A Server or ReplSet instance cannot be shared across multiple Db instances');\n  } else if(!overrideUsedFlag && typeof this.serverConfig == 'object'){\n    // Set being used\n    this.serverConfig._used = true;\n  }\n\n  // Allow slaveOk override\n  this.slaveOk = this.options['slave_ok'] == null ? false : this.options['slave_ok'];\n  this.slaveOk = this.options['slaveOk'] == null ? this.slaveOk : this.options['slaveOk'];\n\n  // Number of operations to buffer before failure\n  this.bufferMaxEntries = typeof this.options['bufferMaxEntries'] == 'number' ? this.options['bufferMaxEntries'] : -1;\n\n  // Ensure we have a valid db name\n  validateDatabaseName(databaseName);\n\n  // Contains all the connections for the db\n  try {\n    this.native_parser = this.options.native_parser;\n    // The bson lib\n    var bsonLib = this.bsonLib = this.options.native_parser ? require('bson').BSONNative : require('bson').BSONPure;\n    bsonLib = require('bson').BSONPure;\n    // Fetch the serializer object\n    var BSON = bsonLib.BSON;\n\n    // Create a new instance\n    this.bson = new BSON([bsonLib.Long, bsonLib.ObjectID, bsonLib.Binary, bsonLib.Code, bsonLib.DBRef, bsonLib.Symbol, bsonLib.Double, bsonLib.Timestamp, bsonLib.MaxKey, bsonLib.MinKey]);\n    this.bson.promoteLongs = this.options.promoteLongs == null ? true : this.options.promoteLongs;\n\n    // Backward compatibility to access types\n    this.bson_deserializer = bsonLib;\n    this.bson_serializer = bsonLib;\n\n    // Add any overrides to the serializer and deserializer\n    this.bson_deserializer.promoteLongs = this.options.promoteLongs == null ? true : this.options.promoteLongs;\n  } catch (err) {\n    // If we tried to instantiate the native driver\n    var msg = 'Native bson parser not compiled, please compile '\n            + 'or avoid using native_parser=true';\n    throw Error(msg);\n  }\n\n  // Internal state of the server\n  this._state = 'disconnected';\n\n  this.pkFactory = this.options.pkFactory == null ? bsonLib.ObjectID : this.options.pkFactory;\n  this.forceServerObjectId = this.options.forceServerObjectId != null ? this.options.forceServerObjectId : false;\n\n  // Added safe\n  this.safe = this.options.safe == null ? false : this.options.safe;\n\n  // If we have not specified a \"safe mode\" we just print a warning to the console\n  if(this.options.safe == null\n    && this.options.w == null\n    && this.options.j == null\n    && this.options.journal == null\n    && this.options.fsync == null) {\n    console.log(\"========================================================================================\");\n    console.log(\"=  Please ensure that you set the default write concern for the database by setting    =\");\n    console.log(\"=   one of the options                                                                 =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=     w: (value of > -1 or the string 'majority'), where < 1 means                     =\");\n    console.log(\"=        no write acknowledgement                                                       =\");\n    console.log(\"=     journal: true/false, wait for flush to journal before acknowledgement             =\");\n    console.log(\"=     fsync: true/false, wait for flush to file system before acknowledgement           =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=  For backward compatibility safe is still supported and                              =\");\n    console.log(\"=   allows values of [true | false | {j:true} | {w:n, wtimeout:n} | {fsync:true}]      =\");\n    console.log(\"=   the default value is false which means the driver receives does not                =\");\n    console.log(\"=   return the information of the success/error of the insert/update/remove            =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=   ex: new Db(new Server('localhost', 27017), {safe:false})                           =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=   http://www.mongodb.org/display/DOCS/getLastError+Command                           =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=  The default of no acknowledgement will change in the very near future                =\");\n    console.log(\"=                                                                                      =\");\n    console.log(\"=  This message will disappear when the default safe is set on the driver Db           =\");\n    console.log(\"========================================================================================\");\n  }\n\n  // Internal states variables\n  this.notReplied ={};\n  this.isInitializing = true;\n  this.openCalled = false;\n\n  // Command queue, keeps a list of incoming commands that need to be executed once the connection is up\n  this.commands = [];\n\n  // Set up logger\n  this.logger = this.options.logger != null\n    && (typeof this.options.logger.debug == 'function')\n    && (typeof this.options.logger.error == 'function')\n    && (typeof this.options.logger.log == 'function')\n      ? this.options.logger : {error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}};\n\n  // Associate the logger with the server config\n  this.serverConfig.logger = this.logger;\n  if(this.serverConfig.strategyInstance) this.serverConfig.strategyInstance.logger = this.logger;\n  this.tag = new Date().getTime();\n  // Just keeps list of events we allow\n  this.eventHandlers = {error:[], parseError:[], poolReady:[], message:[], close:[]};\n\n  // Controls serialization options\n  this.serializeFunctions = this.options.serializeFunctions != null ? this.options.serializeFunctions : false;\n\n  // Raw mode\n  this.raw = this.options.raw != null ? this.options.raw : false;\n\n  // Record query stats\n  this.recordQueryStats = this.options.recordQueryStats != null ? this.options.recordQueryStats : false;\n\n  // If we have server stats let's make sure the driver objects have it enabled\n  if(this.recordQueryStats == true) {\n    this.serverConfig.enableRecordQueryStats(true);\n  }\n\n  // Retry information\n  this.retryMiliSeconds = this.options.retryMiliSeconds != null ? this.options.retryMiliSeconds : 1000;\n  this.numberOfRetries = this.options.numberOfRetries != null ? this.options.numberOfRetries : 60;\n\n  // Set default read preference if any\n  this.readPreference = this.options.readPreference;\n\n  // Set slaveOk if we have specified a secondary or secondary preferred readPreference\n  if(this.readPreference == ReadPreference.SECONDARY ||\n    this.readPreference == ReadPreference.SECONDARY_PREFERRED) {\n    this.slaveOk = true;\n  }\n\n  // Set read preference on serverConfig if none is set\n  // but the db one was\n  if(this.serverConfig.options.readPreference != null) {\n    this.serverConfig.setReadPreference(this.serverConfig.options.readPreference);\n  } else if(this.readPreference != null) {\n    this.serverConfig.setReadPreference(this.readPreference);\n  }\n\n  // Ensure we keep a reference to this db\n  this.serverConfig._dbStore.add(this);\n};",
   "ctx": {
    "type": "function",
    "name": "Db",
    "string": "Db()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "function validateDatabaseName(databaseName) {\n  if(typeof databaseName !== 'string') throw new Error(\"database name must be a string\");\n  if(databaseName.length === 0) throw new Error(\"database name cannot be the empty string\");\n  if(databaseName == '$external') return;\n\n  var invalidChars = [\" \", \".\", \"$\", \"/\", \"\\\\\"];\n  for(var i = 0; i < invalidChars.length; i++) {\n    if(databaseName.indexOf(invalidChars[i]) != -1) throw new Error(\"database names cannot contain the character '\" + invalidChars[i] + \"'\");\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "validateDatabaseName",
    "string": "validateDatabaseName()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "inherits(Db, EventEmitter);"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the index information or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initialize the database connection.</p>",
    "summary": "<p>Initialize the database connection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.open = function(callback) {\n  var self = this;\n\n  // Check that the user has not called this twice\n  if(this.openCalled) {\n    // Close db\n    this.close();\n    // Throw error\n    throw new Error(\"db object already connecting, open cannot be called multiple times\");\n  }\n\n  // If we have a specified read preference\n  if(this.readPreference != null) this.serverConfig.setReadPreference(this.readPreference);\n\n  // Set that db has been opened\n  this.openCalled = true;\n\n  // Set the status of the server\n  self._state = 'connecting';\n\n  // Set up connections\n  if(self.serverConfig instanceof Server || self.serverConfig instanceof ReplSet || self.serverConfig instanceof Mongos) {\n    // Ensure we have the original options passed in for the server config\n    var connect_options = {};\n    for(var name in self.serverConfig.options) {\n      connect_options[name] = self.serverConfig.options[name]\n    }\n    connect_options.firstCall = true;\n\n    // Attempt to connect\n    self.serverConfig.connect(self, connect_options, function(err, result) {\n      if(err != null) {\n        // Close db to reset connection\n        return self.close(function () {\n          // Return error from connection\n          return callback(err, null);\n        });\n      }\n      // Set the status of the server\n      self._state = 'connected';\n      // If we have queued up commands execute a command to trigger replays\n      if(self.commands.length > 0) _execute_queued_command(self);\n      // Callback\n      process.nextTick(function() {\n        try {\n          callback(null, self);\n        } catch(err) {\n          self.close();\n          throw err;\n        }\n      });\n    });\n  } else {\n    try {\n      callback(Error(\"Server parameter must be of type Server, ReplSet or Mongos\"), null);\n    } catch(err) {\n      self.close();\n      throw err;\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "open",
    "string": "Db.prototype.open()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "dbName",
     "description": "the name of the database we want to use."
    },
    {
     "type": "return",
     "types": [
      "Db"
     ],
     "description": "a db instance using the new database."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Create a new Db instance sharing the current socket connections.</p>",
    "summary": "<p>Create a new Db instance sharing the current socket connections.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.db = function(dbName) {\n  // Copy the options and add out internal override of the not shared flag\n  var options = {};\n  for(var key in this.options) {\n    options[key] = this.options[key];\n  }\n\n  // Add override flag\n  options['override_used_flag'] = true;\n  // Check if the db already exists and reuse if it's the case\n  var db = this.serverConfig._dbStore.fetch(dbName);\n\n  // Create a new instance\n  if(!db) {\n    db = new Db(dbName, this.serverConfig, options);\n  }\n\n  // Return the db object\n  return db;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "db",
    "string": "Db.prototype.db()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[forceClose]",
     "description": "connection can never be reused."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Close the current db connection, including all the child db instances. Emits close event and calls optional callback.</p>",
    "summary": "<p>Close the current db connection, including all the child db instances. Emits close event and calls optional callback.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.close = function(forceClose, callback) {\n  var self = this;\n  // Ensure we force close all connections\n  this._applicationClosed = false;\n\n  if(typeof forceClose == 'function') {\n    callback = forceClose;\n  } else if(typeof forceClose == 'boolean') {\n    this._applicationClosed = forceClose;\n  }\n\n  this.serverConfig.close(function(err, result) {\n    // You can reuse the db as everything is shut down\n    self.openCalled = false;\n    // If we have a callback call it\n    if(callback) callback(err, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "close",
    "string": "Db.prototype.close()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "returns the results."
    },
    {
     "type": "return",
     "types": [
      "Admin"
     ],
     "description": "the admin db object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Access the Admin database</p>",
    "summary": "<p>Access the Admin database</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.admin = function(callback) {\n  if(callback == null) return new Admin(this);\n  callback(null, new Admin(this));\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "admin",
    "string": "Db.prototype.admin()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collectionName]",
     "description": "the collection name we wish to retrieve the information from."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the options or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>DEPRECATED: Returns a cursor to all the collection information. Does not work with 2.8 or higher when using<br />other storage engines</p>",
    "summary": "<p>DEPRECATED: Returns a cursor to all the collection information. Does not work with 2.8 or higher when using<br />other storage engines</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.collectionsInfo = function(collectionName, callback) {\n  if(callback == null && typeof collectionName == 'function') { callback = collectionName; collectionName = null; }\n  // Create selector\n  var selector = {};\n  // If we are limiting the access to a specific collection name\n  if(collectionName != null) selector.name = this.databaseName + \".\" + collectionName;\n\n  // Return Cursor\n  // callback for backward compatibility\n  if(callback) {\n    callback(null, new Cursor(this, new Collection(this, DbCommand.SYSTEM_NAMESPACE_COLLECTION), selector));\n  } else {\n    return new Cursor(this, new Collection(this, DbCommand.SYSTEM_NAMESPACE_COLLECTION), selector);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "collectionsInfo",
    "string": "Db.prototype.collectionsInfo()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collectionName]",
     "description": "the collection name we wish to filter by."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the collection names or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get the list of all collection names for the specified db</p>\n\n<p>Options<br /> - <strong>namesOnly</strong> {String, default:false}, Return only the full collection namespace.<br /> - <strong>filter</strong> {String|Object, default:null}, Filter collections by this filter (string or object)</p>",
    "summary": "<p>Get the list of all collection names for the specified db</p>",
    "body": "<p>Options<br /> - <strong>namesOnly</strong> {String, default:false}, Return only the full collection namespace.<br /> - <strong>filter</strong> {String|Object, default:null}, Filter collections by this filter (string or object)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.listCollections = function(name, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  name = args.length ? args.shift() : null;\n  options = args.length ? args.shift() || {} : {};\n  var self = this;\n\n  // Only passed in options\n  if(name != null && typeof name == 'object') options = name, name = null;\n  // Do we have a filter\n  var filter = options.filter || {};\n\n  // Fallback to pre 2.8 list collections\n  var fallbackListCollections = function() {\n    // Ensure we have a filter\n    filter = filter || {};\n    // Set the name variable for the filter\n    if(typeof name == 'string') filter.name = f(\"%s.%s\", self.databaseName, name);\n    // Get the system namespace collection as a cursor\n    var cursor = self.collection(DbCommand.SYSTEM_NAMESPACE_COLLECTION).find(filter);\n    // Get all documents\n    cursor.toArray(function(err, documents) {\n      if(err != null) return handleCallback(callback, err, null);\n\n      // Filter out all the non valid names\n      var filtered_documents = documents.filter(function(document) {\n        if(document.name.indexOf('$') != -1) return false;\n        return true;\n      });     \n\n      // If we are returning only the names\n      if(options.namesOnly) {\n        filtered_documents = filtered_documents.map(function(document) { return document.name });\n      }\n\n      // Return filtered items\n      callback(null, filtered_documents);\n    });      \n  }\n\n  // Set up the listCollectionsCommand\n  var listCollectionsCommand = {listCollections:1};\n  // Add the optional filter if available\n  if(filter) listCollectionsCommand.filter = filter;\n  // Set the name variable for the filter\n  if(typeof name == 'string') filter.name = name;\n\n  // Attempt to execute the collection list\n  self.command(listCollectionsCommand, function(err, result) {\n    if(err) return fallbackListCollections();\n    // List of result documents that have been filtered\n    var filtered_documents = result.collections.filter(function(document) {\n      if(name && document.name != name) return false;\n      if(document.name.indexOf('$') != -1) return false;\n      return true;\n    });\n\n    // If we are returning only the names\n    if(options.namesOnly) {\n      filtered_documents = filtered_documents.map(function(document) { return document.name });\n    }\n\n    // Return filtered items\n    callback(null, filtered_documents);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "listCollections",
    "string": "Db.prototype.listCollections()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[collectionName]",
     "description": "the collection name we wish to filter by."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the collection names or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get the list of all collection names for the specified db</p>\n\n<p>Options<br /> - <strong>namesOnly</strong> {String, default:false}, Return only the full collection namespace.</p>",
    "summary": "<p>Get the list of all collection names for the specified db</p>",
    "body": "<p>Options<br /> - <strong>namesOnly</strong> {String, default:false}, Return only the full collection namespace.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.collectionNames = function(collectionName, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 0);\n  this.listCollections.apply(this, args);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "collectionNames",
    "string": "Db.prototype.collectionNames()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the collection name we wish to access."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "returns option results."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the collection or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Fetch a specific collection (containing the actual collection information). If the application does not use strict mode you can<br />can use it without a callback in the following way. var collection = db.collection('mycollection');</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>strict</strong>, (Boolean, default:false) returns an error if the collection does not exist</p>",
    "summary": "<p>Fetch a specific collection (containing the actual collection information). If the application does not use strict mode you can<br />can use it without a callback in the following way. var collection = db.collection('mycollection');</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>strict</strong>, (Boolean, default:false) returns an error if the collection does not exist</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.collection = function(collectionName, options, callback) {\n  if(typeof options == 'function') callback = options, options = {};\n  options = options || {};\n  var self = this;\n\n  if(options == null || !options.strict) {\n    try {\n      var collection = new Collection(self, collectionName, self.pkFactory, options);\n      if(callback) callback(null, collection);\n      return collection;\n    } catch(err) {\n      if(callback) return callback(err);\n      throw err;\n    }      \n  }\n\n  // Strict mode\n  self.listCollections(collectionName, function(err, collections) {\n    if(err != null) return callback(err, null);\n    if(collections.length == 0) return callback(utils.toError(f(\"Collection %s does not exist. Currently in strict mode.\", collectionName)), null);\n\n    try {\n      return callback(null, new Collection(self, collectionName, self.pkFactory, options));\n    } catch(err) {\n      return callback(err, null);\n    }\n  });    \n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "collection",
    "string": "Db.prototype.collection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the collections or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Fetch all collections for the current db.</p>",
    "summary": "<p>Fetch all collections for the current db.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.collections = function(callback) {\n  var self = this;\n  // Let's get the collection names\n  self.collectionNames(function(err, documents) {\n    if(err != null) return callback(err, null);\n    var collections = [];\n    documents.forEach(function(document) {\n      collections.push(new Collection(self, document.name.replace(self.databaseName + \".\", ''), self.pkFactory));\n    });\n    // Return the collection objects\n    callback(null, collections);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "collections",
    "string": "Db.prototype.collections()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Code"
     ],
     "name": "code",
     "description": "javascript to execute on server."
    },
    {
     "type": "param",
     "types": [
      "Object",
      "Array"
     ],
     "name": "[parameters]",
     "description": "the parameters for the call."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "the options"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from eval or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Evaluate javascript on the server</p>\n\n<p>Options<br /> - <strong>nolock</strong> {Boolean, default:false}, Tell MongoDB not to block on the evaulation of the javascript.</p>",
    "summary": "<p>Evaluate javascript on the server</p>",
    "body": "<p>Options<br /> - <strong>nolock</strong> {Boolean, default:false}, Tell MongoDB not to block on the evaulation of the javascript.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.eval = function(code, parameters, options, callback) {\n  // Unpack calls\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = args.pop();\n  parameters = args.length ? args.shift() : parameters;\n  options = args.length ? args.shift() || {} : {};\n\n  var finalCode = code;\n  var finalParameters = [];\n  // If not a code object translate to one\n  if(!(finalCode instanceof this.bsonLib.Code)) {\n    finalCode = new this.bsonLib.Code(finalCode);\n  }\n\n  // Ensure the parameters are correct\n  if(parameters != null && parameters.constructor != Array && typeof parameters !== 'function') {\n    finalParameters = [parameters];\n  } else if(parameters != null && parameters.constructor == Array && typeof parameters !== 'function') {\n    finalParameters = parameters;\n  }\n\n  // Create execution selector\n  var cmd = {'$eval':finalCode, 'args':finalParameters};\n  // Check if the nolock parameter is passed in\n  if(options['nolock']) {\n    cmd['nolock'] = options['nolock'];\n  }\n\n  // Set primary read preference\n  options.readPreference = ReadPreference.PRIMARY;\n\n  // Execute the command\n  this.command(cmd, options, function(err, result) {\n    if(err) return callback(err, null);\n    if(result && result.ok == 1) return callback(null, result.retval);\n    if(result) return callback(new Error(\"eval failed: \" + result.errmsg), null);\n    callback(err, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "eval",
    "string": "Db.prototype.eval()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "DBRef"
     ],
     "name": "dbRef",
     "description": "db reference object we wish to resolve."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from dereference or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Dereference a dbref, against a db</p>",
    "summary": "<p>Dereference a dbref, against a db</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.dereference = function(dbRef, callback) {\n  var db = this;\n  // If we have a db reference then let's get the db first\n  if(dbRef.db != null) db = this.db(dbRef.db);\n  // Fetch the collection and find the reference\n  var collection = db.collection(dbRef.namespace);\n  collection.findOne({'_id':dbRef.oid}, function(err, result) {\n    callback(err, result);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "dereference",
    "string": "Db.prototype.dereference()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from logout or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Logout user from server, fire off on all connections and remove all auth info</p>",
    "summary": "<p>Logout user from server, fire off on all connections and remove all auth info</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.logout = function(options, callback) {\n  var self = this;\n  // Unpack calls\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n\n  // Number of connections we need to logout from\n  var numberOfConnections = this.serverConfig.allRawConnections().length;\n  // logout command\n  var cmd = {'logout':1};\n  // Add onAll to login to ensure all connection are logged out\n  options.onAll = true;\n\n  // Execute the command\n  this.command(cmd, options, function(err, result) {\n    // Count down\n    numberOfConnections = numberOfConnections - 1;\n    // Work around the case where the number of connections are 0\n    if(numberOfConnections <= 0 && typeof callback == 'function') {\n      var internalCallback = callback;\n      callback = null;\n\n      // Remove the db from auths\n      self.serverConfig.auth.remove(self.databaseName);\n      // Callback with result\n      internalCallback(null, result.ok == 1 ? true : false);\n    }\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "logout",
    "string": "Db.prototype.logout()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "username."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "password",
     "description": "password."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "the options"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from authentication or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Authenticate a user against the server.<br />authMechanism<br />Options<br /> - <strong>authMechanism</strong> {String, default:MONGODB-CR}, The authentication mechanism to use, GSSAPI or MONGODB-CR</p>",
    "summary": "<p>Authenticate a user against the server.<br />authMechanism<br />Options<br /> - <strong>authMechanism</strong> {String, default:MONGODB-CR}, The authentication mechanism to use, GSSAPI or MONGODB-CR</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.authenticate = function(username, password, options, callback) {\n  var self = this;\n\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Set default mechanism\n  if(!options.authMechanism) {\n    options.authMechanism = 'DEFAULT';\n  } else if(options.authMechanism != 'GSSAPI'\n    && options.authMechanism != 'MONGODB-CR'\n    && options.authMechanism != 'MONGODB-X509'\n    && options.authMechanism != 'SCRAM-SHA-1'\n    && options.authMechanism != 'PLAIN') {\n      return callback(new Error(\"only GSSAPI, PLAIN, MONGODB-X509, SCRAM-SHA-1 or MONGODB-CR is supported by authMechanism\"));\n  }\n\n  // the default db to authenticate against is 'this'\n  // if authententicate is called from a retry context, it may be another one, like admin\n  var authdb = options.authdb ? options.authdb : self.databaseName;\n  authdb = options.authSource ? options.authSource : authdb;\n\n  // Callback\n  var _callback = function(err, result) {\n    if(self.listeners(\"authenticated\").length > 0) {\n      self.emit(\"authenticated\", err, result);\n    }\n\n    // Return to caller\n    callback(err, result);\n  }\n\n  // If classic auth delegate to auth command\n  if(options.authMechanism == 'MONGODB-CR') {\n    mongodb_cr_authenticate(self, username, password, authdb, options, _callback);\n  } else if(options.authMechanism == 'PLAIN') {\n    mongodb_plain_authenticate(self, username, password, options, _callback);\n  } else if(options.authMechanism == 'MONGODB-X509') {\n    mongodb_x509_authenticate(self, username, password, options, _callback);\n  } else if(options.authMechanism == 'SCRAM-SHA-1') {\n    mongodb_scram_authenticate(self, username, password, authdb, options, _callback);\n  } else if(options.authMechanism == 'DEFAULT') {\n    // Get a server\n    var servers = this.serverConfig.allServerInstances();\n    // if the max wire protocol version >= 3 do scram otherwise mongodb_cr\n    if(servers.length > 0 && servers[0].isMasterDoc && servers[0].isMasterDoc.maxWireVersion >= 3) {\n      mongodb_scram_authenticate(self, username, password, authdb, options, _callback);\n    } else {\n      mongodb_cr_authenticate(self, username, password, authdb, options, _callback);\n    }\n  } else if(options.authMechanism == 'GSSAPI') {\n    //\n    // Kerberos library is not installed, throw and error\n    if(hasKerberos == false) {\n      console.log(\"========================================================================================\");\n      console.log(\"=  Please make sure that you install the Kerberos library to use GSSAPI                =\");\n      console.log(\"=                                                                                      =\");\n      console.log(\"=  npm install -g kerberos                                                             =\");\n      console.log(\"=                                                                                      =\");\n      console.log(\"=  The Kerberos package is not installed by default for simplicities sake              =\");\n      console.log(\"=  and needs to be global install                                                      =\");\n      console.log(\"========================================================================================\");\n      throw new Error(\"Kerberos library not installed\");\n    }\n\n    if(process.platform == 'win32') {\n      mongodb_sspi_authenticate(self, username, password, authdb, options, _callback);\n    } else {\n      // We have the kerberos library, execute auth process\n      mongodb_gssapi_authenticate(self, username, password, authdb, options, _callback);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "authenticate",
    "string": "Db.prototype.authenticate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "username."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "password",
     "description": "password."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from addUser or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a user to the database.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>customData</strong>, (Object, default:{}) custom data associated with the user (only Mongodb 2.6 or higher)<br /> - <strong>roles</strong>, (Array, default:[]) roles associated with the created user (only Mongodb 2.6 or higher)</p>",
    "summary": "<p>Add a user to the database.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>customData</strong>, (Object, default:{}) custom data associated with the user (only Mongodb 2.6 or higher)<br /> - <strong>roles</strong>, (Array, default:[]) roles associated with the created user (only Mongodb 2.6 or higher)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.addUser = function(username, password, options, callback) {\n  // Checkout a write connection to get the server capabilities\n  var connection = this.serverConfig.checkoutWriter();\n  if(connection != null\n    && connection.serverCapabilities != null\n    && connection.serverCapabilities.hasAuthCommands) {\n      return _executeAuthCreateUserCommand(this, username, password, options, callback);\n  }\n\n  // Unpack the parameters\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n\n  // Get the error options\n  var errorOptions = _getWriteConcern(this, options);\n  errorOptions.w = errorOptions.w == null ? 1 : errorOptions.w;\n  // Use node md5 generator\n  var md5 = crypto.createHash('md5');\n  // Generate keys used for authentication\n  md5.update(username + \":mongo:\" + password);\n  var userPassword = md5.digest('hex');\n  // Fetch a user collection\n  var collection = this.collection(DbCommand.SYSTEM_USER_COLLECTION);\n  // Check if we are inserting the first user\n  collection.count({}, function(err, count) {\n    // We got an error (f.ex not authorized)\n    if(err != null) return callback(err, null);\n    // Check if the user exists and update i\n    collection.find({user: username}, {dbName: options['dbName']}).toArray(function(err, documents) {\n      // We got an error (f.ex not authorized)\n      if(err != null) return callback(err, null);\n      // Add command keys\n      var commandOptions = errorOptions;\n      commandOptions.dbName = options['dbName'];\n      commandOptions.upsert = true;\n\n      // We have a user, let's update the password or upsert if not\n      collection.update({user: username},{$set: {user: username, pwd: userPassword}}, commandOptions, function(err, results, full) {\n        if(count == 0 && err) {\n          callback(null, [{user:username, pwd:userPassword}]);\n        } else if(err) {\n          callback(err, null)\n        } else {\n          callback(null, [{user:username, pwd:userPassword}]);\n        }\n      });\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "addUser",
    "string": "Db.prototype.addUser()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _executeAuthCreateUserCommand = function(self, username, password, options, callback) {\n  // Special case where there is no password ($external users)\n  if(typeof username == 'string'\n    && password != null && typeof password == 'object') {\n    callback = options;\n    options = password;\n    password = null;\n  }\n\n  // Unpack all options\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Error out if we digestPassword set\n  if(options.digestPassword != null) {\n    throw utils.toError(\"The digestPassword option is not supported via add_user. Please use db.command('createUser', ...) instead for this option.\");\n  }\n\n  // Get additional values\n  var customData = options.customData != null ? options.customData : {};\n  var roles = Array.isArray(options.roles) ? options.roles : [];\n  var maxTimeMS = typeof options.maxTimeMS == 'number' ? options.maxTimeMS : null;\n\n  // If not roles defined print deprecated message\n  if(roles.length == 0) {\n    console.log(\"Creating a user without roles is deprecated in MongoDB >= 2.6\");\n  }\n\n  // Get the error options\n  var writeConcern = _getWriteConcern(self, options);\n  var commandOptions = {writeCommand:true};\n  if(options['dbName']) commandOptions.dbName = options['dbName'];\n\n  // Add maxTimeMS to options if set\n  if(maxTimeMS != null) commandOptions.maxTimeMS = maxTimeMS;\n\n  // Check the db name and add roles if needed\n  if((self.databaseName.toLowerCase() == 'admin' || options.dbName == 'admin') && !Array.isArray(options.roles)) {\n    roles = ['root']\n  } else if(!Array.isArray(options.roles)) {\n    roles = ['dbOwner']\n  }\n\n  // Build the command to execute\n  var command = {\n      createUser: username\n    , customData: customData\n    , roles: roles\n    , digestPassword:false\n    , writeConcern: writeConcern\n  }\n\n  // Use node md5 generator\n  var md5 = crypto.createHash('md5');\n  // Generate keys used for authentication\n  md5.update(username + \":mongo:\" + password);\n  var userPassword = md5.digest('hex');\n\n  // No password\n  if(typeof password == 'string') {\n    command.pwd = userPassword;\n  }\n\n  // Execute the command\n  self.command(command, commandOptions, function(err, result) {\n    if(err) return callback(err, null);\n    callback(!result.ok ? utils.toError(\"Failed to add user \" + username) : null\n      , result.ok ? [{user: username, pwd: ''}] : null);\n  })\n}",
   "ctx": {
    "type": "function",
    "name": "_executeAuthCreateUserCommand",
    "string": "_executeAuthCreateUserCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "username",
     "description": "username."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from removeUser or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Remove a user from a database</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Remove a user from a database</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.removeUser = function(username, options, callback) {\n  // Checkout a write connection to get the server capabilities\n  var connection = this.serverConfig.checkoutWriter();\n  if(connection != null && connection.serverCapabilities != null && connection.serverCapabilities.hasAuthCommands) {\n    return _executeAuthRemoveUserCommand(this, username, options, callback);\n  }\n\n  // Unpack the parameters\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n\n  // Figure out the safe mode settings\n  var safe = self.safe != null && self.safe == false ? {w: 1} : self.safe;\n  // Override with options passed in if applicable\n  safe = options != null && options['safe'] != null ? options['safe'] : safe;\n  // Ensure it's at least set to safe\n  safe = safe == null ? {w: 1} : safe;\n\n  // Fetch a user collection\n  var collection = this.collection(DbCommand.SYSTEM_USER_COLLECTION);\n  collection.findOne({user: username}, {dbName: options['dbName']}, function(err, user) {\n    if(user != null) {\n      // Add command keys\n      var commandOptions = safe;\n      commandOptions.dbName = options['dbName'];\n\n      collection.remove({user: username}, commandOptions, function(err, result) {\n        callback(err, true);\n      });\n    } else {\n      callback(err, false);\n    }\n  });\n};\n\nvar _executeAuthRemoveUserCommand = function(self, username, options, callback) {\n  // Unpack all options\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Get the error options\n  var writeConcern = _getWriteConcern(self, options);\n  var commandOptions = {writeCommand:true};\n  if(options['dbName']) commandOptions.dbName = options['dbName'];\n\n  // Get additional values\n  var maxTimeMS = typeof options.maxTimeMS == 'number' ? options.maxTimeMS : null;\n\n  // Add maxTimeMS to options if set\n  if(maxTimeMS != null) commandOptions.maxTimeMS = maxTimeMS;\n\n  // Build the command to execute\n  var command = {\n      dropUser: username\n    , writeConcern: writeConcern\n  }\n\n  // Execute the command\n  self.command(command, commandOptions, function(err, result) {\n    if(err) return callback(err, null);\n    callback(null, result.ok ? true : false);\n  })\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "removeUser",
    "string": "Db.prototype.removeUser()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the collection name we wish to access."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "returns option results."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from createCollection or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates a collection on a server pre-allocating space, need to create f.ex capped collections.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>capped</strong> {Boolean, default:false}, create a capped collection.<br /> - <strong>size</strong> {Number}, the size of the capped collection in bytes.<br /> - <strong>max</strong> {Number}, the maximum number of documents in the capped collection.<br /> - <strong>autoIndexId</strong> {Boolean, default:true}, create an index on the _id field of the document, True by default on MongoDB 2.2 or higher off for version &lt; 2.2.<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>strict</strong>, (Boolean, default:false) throws an error if collection already exists</p>",
    "summary": "<p>Creates a collection on a server pre-allocating space, need to create f.ex capped collections.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>serializeFunctions</strong> {Boolean, default:false}, serialize functions on the document.<br /> - <strong>raw</strong> {Boolean, default:false}, perform all operations using raw bson objects.<br /> - <strong>pkFactory</strong> {Object}, object overriding the basic ObjectID primary key generation.<br /> - <strong>capped</strong> {Boolean, default:false}, create a capped collection.<br /> - <strong>size</strong> {Number}, the size of the capped collection in bytes.<br /> - <strong>max</strong> {Number}, the maximum number of documents in the capped collection.<br /> - <strong>autoIndexId</strong> {Boolean, default:true}, create an index on the _id field of the document, True by default on MongoDB 2.2 or higher off for version &lt; 2.2.<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>strict</strong>, (Boolean, default:false) throws an error if collection already exists</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.createCollection = function(collectionName, options, callback) {\n  var self = this;\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Figure out the safe mode settings\n  var safe = self.safe != null && self.safe == false ? {w: 1} : self.safe;\n  // Override with options passed in if applicable\n  safe = options != null && options['safe'] != null ? options['safe'] : safe;\n  // Ensure it's at least set to safe\n  safe = safe == null ? {w: 1} : safe;\n  // Check if we have the name\n  this.listCollections(collectionName, function(err, collections) {\n    if(err != null) return callback(err, null);\n    if(collections.length > 0 && options.strict) {\n      return callback(utils.toError(f(\"Collection %s already exists. Currently in strict mode.\", collectionName)), null);\n    } else if (collections.length > 0) {\n      try { return callback(null, new Collection(self, collectionName, self.pkFactory, options)); }\n      catch(err) { return callback(err); }\n    }\n\n    // logout command\n    var cmd = {'create':collectionName};\n\n    for(var name in options) {\n      if(options[name] != null && typeof options[name] != 'function') cmd[name] = options[name];\n    }\n\n    // Execute the command\n    self.command(cmd, options, function(err, result) {\n      if(err && err.code && err.code != 48 && options && options.strict) return callback(err, null);\n      try {\n        callback(null, new Collection(self, collectionName, self.pkFactory, options));\n      } catch(err) {\n        callback(utils.toError(err), null);\n      }\n    });\n  });\n};\n\nvar _getReadConcern = function(self, options) {\n  if(options.readPreference) return options.readPreference;\n  if(self.readPreference) return self.readPreference;\n  return 'primary';\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "createCollection",
    "string": "Db.prototype.createCollection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "selector",
     "description": "the command hash to send to the server, ex: {ping:1}."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the command."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The command always return the whole result of the command as the second parameter."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute a command hash against MongoDB. This lets you acess any commands not available through the api on the server.</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>maxTimeMS</strong> {Number}, number of milliseconds to wait before aborting the query.<br /> - <strong>ignoreCommandFilter</strong> {Boolean}, overrides the default redirection of certain commands to primary.<br /> - <strong>writeCommand</strong> {Boolean, default: false}, signals this is a write command and to ignore read preferences<br /> - <strong>checkKeys</strong> {Boolean, default: false}, overrides the default not to check the key names for the command</p>",
    "summary": "<p>Execute a command hash against MongoDB. This lets you acess any commands not available through the api on the server.</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>maxTimeMS</strong> {Number}, number of milliseconds to wait before aborting the query.<br /> - <strong>ignoreCommandFilter</strong> {Boolean}, overrides the default redirection of certain commands to primary.<br /> - <strong>writeCommand</strong> {Boolean, default: false}, signals this is a write command and to ignore read preferences<br /> - <strong>checkKeys</strong> {Boolean, default: false}, overrides the default not to check the key names for the command</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.command = function(selector, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Make a shallow copy so no modifications happen on the original\n  options = utils.shallowObjectCopy(options);\n\n  // Ignore command preference (I know what I'm doing)\n  var ignoreCommandFilter = options.ignoreCommandFilter ? options.ignoreCommandFilter : false;\n\n  // Get read preference if we set one\n  var readPreference = _getReadConcern(this, options);\n\n  // Ensure only commands who support read Prefrences are exeuted otherwise override and use Primary\n  if(readPreference != false && ignoreCommandFilter == false) {\n    if(selector['group'] || selector['aggregate'] || selector['collStats'] || selector['dbStats']\n      || selector['count'] || selector['distinct'] || selector['geoNear'] || selector['geoSearch']\n      || selector['geoWalk'] || selector['text'] || selector['cursorInfo']\n      || selector['parallelCollectionScan']\n      || (selector['mapreduce'] && (selector.out == 'inline' || selector.out.inline))) {\n      // Set the read preference\n      options.readPreference = readPreference;\n    } else {\n      options.readPreference = ReadPreference.PRIMARY;\n    }\n  } else if(readPreference != false) {\n    options.readPreference = readPreference;\n  }\n\n  // Add the maxTimeMS option to the command if specified\n  if(typeof options.maxTimeMS == 'number') {\n    selector.maxTimeMS = options.maxTimeMS\n  }\n\n  // Command options\n  var command_options = {};\n\n  // Do we have an override for checkKeys\n  if(typeof options['checkKeys'] == 'boolean') command_options['checkKeys'] = options['checkKeys'];\n  command_options['checkKeys'] = typeof options['checkKeys'] == 'boolean' ? options['checkKeys'] : false;\n  if(typeof options['serializeFunctions'] == 'boolean') command_options['serializeFunctions'] = options['serializeFunctions'];\n  if(options['dbName']) command_options['dbName'] = options['dbName'];\n\n  // If we have a write command, remove readPreference as an option\n  if((options.writeCommand\n    || selector['findAndModify']\n    || selector['insert'] || selector['update'] || selector['delete']\n    || selector['createUser'] || selector['updateUser'] || selector['removeUser'])\n    && options.readPreference) {\n    delete options['readPreference'];\n  }\n\n  // Add a write concern if we have passed in any\n  if(options.w || options.wtimeout || options.j || options.fsync || options.safe) {\n    selector.writeConcern = {};\n    if(options.safe) selector.writeConcern.w = 1;\n    if(options.w) selector.writeConcern.w = options.w;\n    if(options.wtimeout) selector.writeConcern.wtimeout = options.wtimeout;\n    if(options.j) selector.writeConcern.j = options.j;\n    if(options.fsync) selector.writeConcern.fsync = options.fsync;\n  }\n\n  // If we have an actual writeConcern object override\n  if(options.writeConcern) {\n    selector.writeConcern = writeConcern;\n  }\n\n  // Check if we need to set slaveOk\n  if(command_options.readPreference != 'primary')\n    command_options.slaveOk = true;\n\n  // Execution db\n  var execDb = typeof options.auth == 'string' ? this.db(options.auth) : this;\n  execDb = typeof options.authdb == 'string' ? this.db(options.authdb) : execDb;\n\n  // Execute a query command\n  this._executeQueryCommand(DbCommand.createDbSlaveOkCommand(execDb, selector, command_options), options, function(err, results, connection) {\n    if(options.returnConnection) {\n      if(err) return callback(err, null, connection);\n      if(results == null || results.documents == null) return callback(new Error(\"command failed to return result\"));\n      if(results.documents[0].errmsg) \n        return callback(utils.toError(results.documents[0]), null, connection);\n      callback(null, results.documents[0], connection);\n    } else {\n      if(err) return callback(err, null);\n      if(results == null || results.documents == null) return callback(new Error(\"command failed to return result\"));\n      if(results.documents[0].errmsg) \n        return callback(utils.toError(results.documents[0]), null);\n      callback(null, results.documents[0]);      \n    }\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "command",
    "string": "Db.prototype.command()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the name of the collection we wish to drop."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from dropCollection or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drop a collection from the database, removing it permanently. New accesses will create a new collection.</p>",
    "summary": "<p>Drop a collection from the database, removing it permanently. New accesses will create a new collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.dropCollection = function(collectionName, callback) {\n  var self = this;\n  callback || (callback = function(){});\n\n  // Command to execute\n  var cmd = {'drop':collectionName}\n\n  // Execute the command\n  this.command(cmd, {}, function(err, result) {\n    if(err) return callback(err, null);\n    if(result.ok) return callback(null, true);\n    callback(null, false);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "dropCollection",
    "string": "Db.prototype.dropCollection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "fromCollection",
     "description": "the name of the current collection we wish to rename."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "toCollection",
     "description": "the new name of the collection."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "returns option results."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from renameCollection or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Rename a collection.</p>\n\n<p>Options<br /> - <strong>dropTarget</strong> {Boolean, default:false}, drop the target name collection if it previously exists.</p>",
    "summary": "<p>Rename a collection.</p>",
    "body": "<p>Options<br /> - <strong>dropTarget</strong> {Boolean, default:false}, drop the target name collection if it previously exists.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.renameCollection = function(fromCollection, toCollection, options, callback) {\n  var self = this;\n\n  if(typeof options == 'function') {\n    callback = options;\n    options = {}\n  }\n\n  // Add return new collection\n  options.new_collection = true;\n\n  // Execute using the collection method\n  this.collection(fromCollection).rename(toCollection, options, callback);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "renameCollection",
    "string": "Db.prototype.renameCollection()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Runs a command on the database.</p>",
    "summary": "<p>Runs a command on the database.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype.executeDbCommand = function(command_hash, options, callback) {\n  if(callback == null) { callback = options; options = {}; }\n  this._executeQueryCommand(DbCommand.createDbSlaveOkCommand(this, command_hash, options), options, function(err, result) {\n    if(callback) callback(err, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "executeDbCommand",
    "string": "Db.prototype.executeDbCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Runs a command on the database as admin.</p>",
    "summary": "<p>Runs a command on the database as admin.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype.executeDbAdminCommand = function(command_hash, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {}\n  }\n\n  if(options.readPreference) {\n    options.readPreference = options.readPreference;\n  }\n\n  this._executeQueryCommand(DbCommand.createAdminDbCommand(this, command_hash), options, function(err, result) {\n    if(callback) callback(err, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "executeDbAdminCommand",
    "string": "Db.prototype.executeDbAdminCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "name of the collection to create the index on."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fieldOrSpec",
     "description": "fieldOrSpec that defines the index."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from createIndex or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates an index on the collection.</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>",
    "summary": "<p>Creates an index on the collection.</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.createIndex = function(collectionName, fieldOrSpec, options, callback) {\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n  options = typeof callback === 'function' ? options : callback;\n  options = options == null ? {} : options;\n\n  // Get the error options\n  var writeConcern = _getWriteConcern(self, options);\n  // Ensure we have a callback\n  if(_hasWriteConcern(writeConcern) && typeof callback != 'function') {\n    throw new Error(\"Cannot use a writeConcern without a provided callback\");\n  }\n\n  // Attempt to run using createIndexes command\n  createIndexUsingCreateIndexes(self, collectionName, fieldOrSpec, options, function(err, result) {\n    if(err == null) {\n      return callback(err, result);\n    }\n\n    // Create command\n    var command = createCreateIndexCommand(self, collectionName, fieldOrSpec, options);\n    // Default command options\n    var commandOptions = {};\n\n    // If we have error conditions set handle them\n    if(_hasWriteConcern(writeConcern) && typeof callback == 'function') {\n      // Set safe option\n      commandOptions['safe'] = writeConcern;\n      // If we have an error option\n      if(typeof writeConcern == 'object') {\n        var keys = Object.keys(writeConcern);\n        for(var i = 0; i < keys.length; i++) {\n          commandOptions[keys[i]] = writeConcern[keys[i]];\n        }\n      }\n\n      // Execute insert command\n      self._executeInsertCommand(command, commandOptions, function(err, result) {\n        if(err != null) return callback(err, null);\n        if(result == null || result.documents == null) return callback(new Error(\"command failed to return result\"));\n\n        result = result && result.documents;\n        if (result[0].err) {\n          callback(utils.toError(result[0]));\n        } else {\n          callback(null, command.documents[0].name);\n        }\n      });\n    } else {\n      // Execute insert command\n      var result = self._executeInsertCommand(command, commandOptions, function() {});\n      // If no callback just return\n      if(!callback) return;\n      // If error return error\n      if(result instanceof Error) {\n        return callback(result);\n      }\n      // Otherwise just return\n      return callback(null, null);\n    }\n  });\n};\n\nvar createCreateIndexCommand = function(db, collectionName, fieldOrSpec, options) {\n  var indexParameters = utils.parseIndexOptions(fieldOrSpec);\n  var fieldHash = indexParameters.fieldHash;\n  var keys = indexParameters.keys;\n\n  // Generate the index name\n  var indexName = typeof options.name == 'string'\n    ? options.name\n    : indexParameters.name;\n\n  var selector = {\n    'ns': db.databaseName + \".\" + collectionName,\n    'key': fieldHash,\n    'name': indexName\n  }\n\n  // Ensure we have a correct finalUnique\n  var finalUnique = options == null || 'object' === typeof options\n    ? false\n    : options;\n\n  // Set up options\n  options = options == null || typeof options == 'boolean'\n    ? {}\n    : options;\n\n  // Add all the options\n  var keysToOmit = Object.keys(selector);\n  for(var optionName in options) {\n    if(keysToOmit.indexOf(optionName) == -1) {\n      selector[optionName] = options[optionName];\n    }\n  }\n\n  if(selector['unique'] == null)\n    selector['unique'] = finalUnique;\n\n  var name = db.databaseName + \".\" + DbCommand.SYSTEM_INDEX_COLLECTION;\n  var cmd = new InsertCommand(db, name, false);\n  return cmd.add(selector);\n}\n\nvar createIndexUsingCreateIndexes = function(self, collectionName, fieldOrSpec, options, callback) {\n  // Build the index\n  var indexParameters = utils.parseIndexOptions(fieldOrSpec);\n  // Generate the index name\n  var indexName = typeof options.name == 'string'\n    ? options.name\n    : indexParameters.name;\n\n  // Set up the index\n  var indexes = [{\n      name: indexName\n    , key: indexParameters.fieldHash\n  }];\n\n  // merge all the options\n  var keysToOmit = Object.keys(indexes[0]);\n  for(var optionName in options) {\n    if(keysToOmit.indexOf(optionName) == -1) {\n      indexes[0][optionName] = options[optionName];\n    }\n  }\n\n  // Create command\n  var command = {createIndexes: collectionName, indexes: indexes};\n  // Build the command\n  self.command(command, options, function(err, result) {\n    if(err) return callback(err, null);\n    if(result.ok == 0) {\n      return callback(utils.toError(result), null);\n    }\n\n    // Return the indexName for backward compatibility\n    callback(null, indexName);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "createIndex",
    "string": "Db.prototype.createIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "name of the collection to create the index on."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fieldOrSpec",
     "description": "fieldOrSpec that defines the index."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from ensureIndex or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Ensures that an index exists, if it does not it creates it</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>",
    "summary": "<p>Ensures that an index exists, if it does not it creates it</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowledgement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning<br /> - <strong>unique</strong> {Boolean, default:false}, creates an unique index.<br /> - <strong>sparse</strong> {Boolean, default:false}, creates a sparse index.<br /> - <strong>background</strong> {Boolean, default:false}, creates the index in the background, yielding whenever possible.<br /> - <strong>min</strong> {Number}, for geospatial indexes set the lower bound for the co-ordinates.<br /> - <strong>max</strong> {Number}, for geospatial indexes set the high bound for the co-ordinates.<br /> - <strong>v</strong> {Number}, specify the format version of the indexes.<br /> - <strong>expireAfterSeconds</strong> {Number}, allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)<br /> - <strong>name</strong> {String}, override the autogenerated index name (useful if the resulting name is larger than 128 bytes)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.ensureIndex = function(collectionName, fieldOrSpec, options, callback) {\n  var self = this;\n\n  if(typeof callback === 'undefined' && typeof options === 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Ensure non empty options\n  options = options || {};\n\n  // Get the error options\n  var writeConcern = _getWriteConcern(this, options);\n  // Make sure we don't try to do a write concern without a callback\n  if(_hasWriteConcern(writeConcern) && callback == null)\n    throw new Error(\"Cannot use a writeConcern without a provided callback\");\n\n  // Create command\n  var command = createCreateIndexCommand(this, collectionName, fieldOrSpec, options);\n  var index_name = command.documents[0].name;\n\n  // Check if the index allready exists\n  this.indexInformation(collectionName, writeConcern, function(err, indexInformation) {\n    if(err != null) return callback(err, null);\n    // If the index does not exist, create it\n    if(!indexInformation[index_name])  {\n      self.createIndex(collectionName, fieldOrSpec, options, callback);\n    } else {\n      if(typeof callback === 'function') return callback(null, index_name);\n    }\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "ensureIndex",
    "string": "Db.prototype.ensureIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from cursorInfo or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the information available on allocated cursors.</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Returns the information available on allocated cursors.</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.cursorInfo = function(options, callback) {\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n\n  // cursorInfo command\n  var cmd = {'cursorInfo':1};\n\n  // Execute the command\n  this.command(cmd, options, function(err, result) {\n    if(err) return callback(err, null);\n    callback(null, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "cursorInfo",
    "string": "Db.prototype.cursorInfo()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the name of the collection where the command will drop an index."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "indexName",
     "description": "name of the index to drop."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from dropIndex or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drop an index on a collection.</p>",
    "summary": "<p>Drop an index on a collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.dropIndex = function(collectionName, indexName, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  options = args.length ? args.shift() || {} : {};\n\n  // Delete index command\n  var cmd = {'deleteIndexes':collectionName, 'index':indexName};\n\n  // Execute command\n  this.command(cmd, options, function(err, result) {\n    if(callback == null) return;\n    if(err) return callback(err, null);\n    callback(null, result);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "dropIndex",
    "string": "Db.prototype.dropIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the name of the collection."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from reIndex or null if an error occurred."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reindex all indexes on the collection<br />Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.</p>",
    "summary": "<p>Reindex all indexes on the collection<br />Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.reIndex = function(collectionName, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Reindex\n  var cmd = {'reIndex':collectionName};\n\n  // Execute the command\n  this.command(cmd, options, function(err, result) {\n    if(callback == null) return;\n    if(err) return callback(err, null);\n    callback(null, result.ok ? true : false);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "reIndex",
    "string": "Db.prototype.reIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "collectionName",
     "description": "the name of the collection."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from indexInformation or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves this collections index info.</p>\n\n<p>Options<br /> - <strong>full</strong> {Boolean, default:false}, returns the full raw index information.<br /> - <strong>readPreference</strong> {String}, the preferred read preference ((Server.PRIMARY, Server.PRIMARY_PREFERRED, Server.SECONDARY, Server.SECONDARY_PREFERRED, Server.NEAREST).</p>",
    "summary": "<p>Retrieves this collections index info.</p>",
    "body": "<p>Options<br /> - <strong>full</strong> {Boolean, default:false}, returns the full raw index information.<br /> - <strong>readPreference</strong> {String}, the preferred read preference ((Server.PRIMARY, Server.PRIMARY_PREFERRED, Server.SECONDARY, Server.SECONDARY_PREFERRED, Server.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.indexInformation = function(name, options, callback) {\n  if(typeof callback === 'undefined') {\n    if(typeof options === 'undefined') {\n      callback = name;\n      name = null;\n    } else {\n      callback = options;\n    }\n    options = {};\n  } \n\n  // Throw is no name provided\n  if(name == null) throw new Error(\"A collection name must be provided as first argument\");\n\n  // If we specified full information\n  var full = options['full'] == null ? false : options['full'];\n  var self = this;\n\n  // Process all the results from the index command and collection\n  var processResults = function(indexes) {\n    // Contains all the information\n    var info = {};\n    // Process all the indexes\n    for(var i = 0; i < indexes.length; i++) {\n      var index = indexes[i];\n      // Let's unpack the object\n      info[index.name] = [];\n      for(var name in index.key) {\n        info[index.name].push([name, index.key[name]]);\n      }\n    }\n\n    return info;\n  }\n\n  // Fallback to pre 2.8 getting the index information\n  var fallbackListIndexes = function() {\n    // Build selector for the indexes\n    var selector = name != null ? {ns: (self.databaseName + \".\" + name)} : {};\n\n    // Get read preference if we set one\n    var readPreference = ReadPreference.PRIMARY;\n\n    // Iterate through all the fields of the index\n    var collection = self.collection(DbCommand.SYSTEM_INDEX_COLLECTION);\n    // Perform the find for the collection\n    collection.find(selector).setReadPreference(readPreference).toArray(function(err, indexes) {\n      if(err != null) return callback(err, null);\n      // if full defined just return all the indexes directly\n      if(full) return callback(null, indexes);\n      // Return all the indexes\n      callback(null, processResults(indexes));\n    });\n  }\n\n  // Attempt to execute the listIndexes command\n  self.command({listIndexes: name}, function(err, result) {\n    if(err) return fallbackListIndexes();\n    // if full defined just return all the indexes directly\n    if(full) return callback(null, result.indexes);\n    // Return all the indexes\n    callback(null, processResults(result.indexes));\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "indexInformation",
    "string": "Db.prototype.indexInformation()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from dropDatabase or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Drop a database.</p>",
    "summary": "<p>Drop a database.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.dropDatabase = function(options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Reindex\n  var cmd = {'dropDatabase':1};\n\n  // Execute the command\n  this.command(cmd, options, function(err, result) {\n    if(callback == null) return;\n    if(err) return callback(err, null);\n    callback(null, result.ok ? true : false);\n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "dropDatabase",
    "string": "Db.prototype.dropDatabase()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Objects"
     ],
     "name": "[options]",
     "description": "options for the stats command"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the results from stats or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get all the db statistics.</p>\n\n<p>Options<br /> - <strong>scale</strong> {Number}, divide the returned sizes by scale value.<br /> - <strong>readPreference</strong> {String}, the preferred read preference ((Server.PRIMARY, Server.PRIMARY_PREFERRED, Server.SECONDARY, Server.SECONDARY_PREFERRED, Server.NEAREST).</p>",
    "summary": "<p>Get all the db statistics.</p>",
    "body": "<p>Options<br /> - <strong>scale</strong> {Number}, divide the returned sizes by scale value.<br /> - <strong>readPreference</strong> {String}, the preferred read preference ((Server.PRIMARY, Server.PRIMARY_PREFERRED, Server.SECONDARY, Server.SECONDARY_PREFERRED, Server.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.prototype.stats = function stats(options, callback) {\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  // Fetch all commands\n  options = args.length ? args.shift() || {} : {};\n\n  // Build command object\n  var commandObject = {\n    dbStats:true\n  };\n\n  // Check if we have the scale value\n  if(options['scale'] != null) commandObject['scale'] = options['scale'];\n\n  // Execute the command\n  this.command(commandObject, options, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "stats",
    "string": "Db.prototype.stats()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var bindToCurrentDomain = function(callback) {\n  var domain = process.domain;\n  if(domain == null || callback == null) {\n    return callback;\n  } else {\n    return domain.bind(callback);\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "bindToCurrentDomain",
    "string": "bindToCurrentDomain()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var __executeQueryCommand = function(self, db_command, options, callback) {\n  // Options unpacking\n  var readPreference = options.readPreference != null ? options.readPreference : 'primary';\n  var onAll = options['onAll'] != null ? options['onAll'] : false;\n  var specifiedConnection = options['connection'] != null ? options['connection'] : null;\n  var raw = typeof options.raw == 'boolean' ? options.raw : false;\n\n  // Correct readPreference preference to default primary if set to false, null or primary\n  if(!(typeof readPreference == 'object') && readPreference._type == 'ReadPreference') {\n    readPreference = (readPreference == null || readPreference == 'primary' || readPreference == false) ? ReadPreference.PRIMARY : readPreference;\n    if(!ReadPreference.isValid(readPreference)) return callback(new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(readPreference)));\n  } else if(typeof readPreference == 'object' && readPreference._type == 'ReadPreference') {\n    if(!readPreference.isValid()) return callback(new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(readPreference)));\n  }\n\n  // If we have a read preference set and we are a mongos pass the read preference on to the mongos instance,\n  if(self.serverConfig.isMongos() && readPreference != null && readPreference != 'primary') {\n    db_command.setMongosReadPreference(readPreference);\n  }\n\n  // If we got a callback object\n  if(typeof callback === 'function' && !onAll) {\n    callback = bindToCurrentDomain(callback);\n    // Override connection if we passed in a specific connection\n    var connection = specifiedConnection != null ? specifiedConnection : null;\n\n    if(connection instanceof Error) return callback(connection, null);\n\n    // Fetch either a reader or writer dependent on the specified readPreference option if no connection\n    // was passed in\n    if(connection == null) {\n      connection = self.serverConfig.checkoutReader(readPreference);\n    }\n\n    if(connection == null) {\n      return callback(new Error(\"no open connections\"));\n    } else if(connection instanceof Error || connection['message'] != null) {\n      return callback(connection);\n    }\n\n    // Exhaust Option\n    var exhaust = options.exhaust || false;\n\n    // Register the handler in the data structure\n    self.serverConfig._registerHandler(db_command, raw, connection, exhaust, callback);\n\n    // Write the message out and handle any errors if there are any\n    connection.write(db_command, function(err) {\n      if(err != null) {\n        // Call the handler with an error\n        if(Array.isArray(db_command))\n          self.serverConfig._callHandler(db_command[0].getRequestId(), null, err);\n        else\n          self.serverConfig._callHandler(db_command.getRequestId(), null, err);\n      }\n    });\n  } else if(typeof callback === 'function' && onAll) {\n    callback = bindToCurrentDomain(callback);\n    var connections = self.serverConfig.allRawConnections();\n    var numberOfEntries = connections.length;\n    // Go through all the connections\n    for(var i = 0; i < connections.length; i++) {\n      // Fetch a connection\n      var connection = connections[i];\n\n      // Ensure we have a valid connection\n      if(connection == null) {\n        return callback(new Error(\"no open connections\"));\n      } else if(connection instanceof Error) {\n        return callback(connection);\n      }\n\n      // Register the handler in the data structure\n      self.serverConfig._registerHandler(db_command, raw, connection, callback);\n\n      // Write the message out\n      connection.write(db_command, function(err) {\n        // Adjust the number of entries we need to process\n        numberOfEntries = numberOfEntries - 1;\n        // Remove listener\n        if(err != null) {\n          // Clean up listener and return error\n          self.serverConfig._removeHandler(db_command.getRequestId());\n        }\n\n        // No more entries to process callback with the error\n        if(numberOfEntries <= 0) {\n          callback(err);\n        }\n      });\n\n      // Update the db_command request id\n      db_command.updateRequestId();\n    }\n  } else {\n    // Fetch either a reader or writer dependent on the specified read option\n    var connection = self.serverConfig.checkoutReader(readPreference);\n    // Override connection if needed\n    connection = specifiedConnection != null ? specifiedConnection : connection;\n    // Ensure we have a valid connection\n    if(connection == null || connection instanceof Error || connection['message'] != null) return null;\n    // Write the message out\n    connection.write(db_command, function(err) {\n      if(err != null) {\n        // Emit the error\n        self.emit(\"error\", err);\n      }\n    });\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "__executeQueryCommand",
    "string": "__executeQueryCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Execute db query command (not safe)</p>",
    "summary": "<p>Execute db query command (not safe)</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype._executeQueryCommand = function(db_command, options, callback) {\n  var self = this;\n\n  // Unpack the parameters\n  if(typeof options === 'function') {\n    callback = options;\n    options = {};\n  }\n  callback = bindToCurrentDomain(callback);\n\n  // fast fail option used for HA, no retry\n  var failFast = options['failFast'] != null\n    ? options['failFast']\n    : false;\n\n  // Check if the user force closed the command\n  if(this._applicationClosed) {\n    var err = new Error(\"db closed by application\");\n    if('function' == typeof callback) {\n      return callback(err, null);\n    } else {\n      throw err;\n    }\n  }\n\n  if(this.serverConfig.isDestroyed())\n    return callback(new Error(\"Connection was destroyed by application\"));\n\n  // Specific connection\n  var connection = options.connection;\n  // Check if the connection is actually live\n  if(connection\n    && (!connection.isConnected || !connection.isConnected())) connection = null;\n\n  // Get the configuration\n  var config = this.serverConfig;\n  var readPreference = options.readPreference;\n  // Allow for the usage of the readPreference model\n  if(readPreference == null) {\n    readPreference = options.readPreference;\n  }\n\n  if(!connection && !config.canRead(readPreference) && !config.canWrite() && config.isAutoReconnect()) {\n\n    if(readPreference == ReadPreference.PRIMARY\n      || readPreference == ReadPreference.PRIMARY_PREFERRED\n      || (readPreference != null && typeof readPreference == 'object' && readPreference.mode)\n      || readPreference == null) {\n\n      // Save the command\n      self.serverConfig._commandsStore.read_from_writer(\n        {   type: 'query'\n          , db_command: db_command\n          , options: options\n          , callback: callback\n          , db: self\n          , executeQueryCommand: __executeQueryCommand\n          , executeInsertCommand: __executeInsertCommand\n        }\n      );\n    } else {\n      self.serverConfig._commandsStore.read(\n        {   type: 'query'\n          , db_command: db_command\n          , options: options\n          , callback: callback\n          , db: self\n          , executeQueryCommand: __executeQueryCommand\n          , executeInsertCommand: __executeInsertCommand\n        }\n      );\n    }\n\n    // If we have blown through the number of items let's\n    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {\n      self.close();\n    }\n  } else if(!connection && !config.canRead(readPreference) && !config.canWrite() && !config.isAutoReconnect()) {\n    return callback(new Error(\"no open connections\"), null);\n  } else {\n    if(typeof callback == 'function') {\n      __executeQueryCommand(self, db_command, options, function (err, result, conn) {\n        callback(err, result, conn);\n      });\n    } else {\n      __executeQueryCommand(self, db_command, options);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "_executeQueryCommand",
    "string": "Db.prototype._executeQueryCommand()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var __executeInsertCommand = function(self, db_command, options, callback) {\n  // Always checkout a writer for this kind of operations\n  var connection = self.serverConfig.checkoutWriter();\n  // Get safe mode\n  var safe = options['safe'] != null ? options['safe'] : false;\n  var specifiedConnection = options['connection'] != null ? options['connection'] : null;\n  // Override connection if needed\n  connection = specifiedConnection != null ? specifiedConnection : connection;\n\n  // Validate if we can use this server 2.6 wire protocol\n  if(connection && !connection.isCompatible()) {\n    return callback(utils.toError(\"driver is incompatible with this server version\"), null);\n  }\n\n  // Ensure we have a valid connection\n  if(typeof callback === 'function') {\n    callback = bindToCurrentDomain(callback);\n    // Ensure we have a valid connection\n    if(connection == null) {\n      return callback(new Error(\"no open connections\"));\n    } else if(connection instanceof Error) {\n      return callback(connection);\n    }\n\n    var errorOptions = _getWriteConcern(self, options);\n    if(errorOptions.w > 0 || errorOptions.w == 'majority' || errorOptions.j || errorOptions.journal || errorOptions.fsync) {\n      // db command is now an array of commands (original command + lastError)\n      db_command = [db_command, DbCommand.createGetLastErrorCommand(errorOptions, self)];\n      // Register the handler in the data structure\n      self.serverConfig._registerHandler(db_command[1], false, connection, callback);\n    }\n  }\n\n  // If we have no callback and there is no connection\n  if(connection == null) return null;\n  if(connection instanceof Error && typeof callback == 'function') return callback(connection, null);\n  if(connection instanceof Error) return null;\n  if(connection == null && typeof callback == 'function') return callback(new Error(\"no primary server found\"), null);\n\n  // Write the message out\n  connection.write(db_command, function(err) {\n    // Return the callback if it's not a safe operation and the callback is defined\n    if(typeof callback === 'function' && (safe == null || safe == false)) {\n      // Perform the callback\n      callback(err, null);\n    } else if(typeof callback === 'function') {\n      // Call the handler with an error\n      self.serverConfig._callHandler(db_command[1].getRequestId(), null, err);\n    } else if(typeof callback == 'function' && safe && safe.w == -1) {\n      // Call the handler with no error\n      self.serverConfig._callHandler(db_command[1].getRequestId(), null, null);\n    } else if(!safe || safe.w == -1) {\n      self.emit(\"error\", err);\n    }\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "__executeInsertCommand",
    "string": "__executeInsertCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Execute an insert Command</p>",
    "summary": "<p>Execute an insert Command</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype._executeInsertCommand = function(db_command, options, callback) {\n  var self = this;\n\n  // Unpack the parameters\n  if(callback == null && typeof options === 'function') {\n    callback = options;\n    options = {};\n  }\n  callback = bindToCurrentDomain(callback);\n  // Ensure options are not null\n  options = options == null ? {} : options;\n\n  // Check if the user force closed the command\n  if(this._applicationClosed) {\n    if(typeof callback == 'function') {\n      return callback(new Error(\"db closed by application\"), null);\n    } else {\n      throw new Error(\"db closed by application\");\n    }\n  }\n\n  if(this.serverConfig.isDestroyed()) return callback(new Error(\"Connection was destroyed by application\"));\n\n  // Specific connection\n  var connection = options.connection;\n  // Check if the connection is actually live\n  if(connection\n    && (!connection.isConnected || !connection.isConnected())) connection = null;\n\n  // Get config\n  var config = self.serverConfig;\n  // Check if we are connected\n  if(!connection && !config.canWrite() && config.isAutoReconnect()) {\n    self.serverConfig._commandsStore.write(\n      {   type:'insert'\n        , 'db_command':db_command\n        , 'options':options\n        , 'callback':callback\n        , db: self\n        , executeQueryCommand: __executeQueryCommand\n        , executeInsertCommand: __executeInsertCommand\n      }\n    );\n\n    // If we have blown through the number of items let's\n    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {\n      self.close();\n    }\n  } else if(!connection && !config.canWrite() && !config.isAutoReconnect()) {\n    return callback(new Error(\"no open connections\"), null);\n  } else {\n    __executeInsertCommand(self, db_command, options, callback);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "_executeInsertCommand",
    "string": "Db.prototype._executeInsertCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Update command is the same</p>",
    "summary": "<p>Update command is the same</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype._executeUpdateCommand = Db.prototype._executeInsertCommand;",
   "ctx": {
    "type": "property",
    "constructor": "Db",
    "cons": "Db",
    "name": "_executeUpdateCommand",
    "value": "Db.prototype._executeInsertCommand",
    "string": "Db.prototype._executeUpdateCommand"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Remove command is the same</p>",
    "summary": "<p>Remove command is the same</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype._executeRemoveCommand = Db.prototype._executeInsertCommand;",
   "ctx": {
    "type": "property",
    "constructor": "Db",
    "cons": "Db",
    "name": "_executeRemoveCommand",
    "value": "Db.prototype._executeInsertCommand",
    "string": "Db.prototype._executeRemoveCommand"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    },
    {
     "type": "deprecated",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Wrap a Mongo error document into an Error instance.<br />Deprecated. Use utils.toError instead.</p>",
    "summary": "<p>Wrap a Mongo error document into an Error instance.<br />Deprecated. Use utils.toError instead.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype.wrap = utils.toError;",
   "ctx": {
    "type": "property",
    "constructor": "Db",
    "cons": "Db",
    "name": "wrap",
    "value": "utils.toError",
    "string": "Db.prototype.wrap"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "DEFAULT_URL"
    }
   ],
   "description": {
    "full": "<p>Default URL</p>",
    "summary": "<p>Default URL</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.DEFAULT_URL = 'mongodb://localhost:27017/default';",
   "ctx": {
    "type": "property",
    "receiver": "Db",
    "name": "DEFAULT_URL",
    "value": "'mongodb://localhost:27017/default'",
    "string": "Db.DEFAULT_URL"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "url",
     "description": "connection url for MongoDB."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options for insert command"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occurred, or null otherwise. While the second parameter will contain the db instance or null if an error occurred."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Connect to MongoDB using a url as documented at</p>\n\n<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>",
    "summary": "<p>Connect to MongoDB using a url as documented at</p>",
    "body": "<p>docs.mongodb.org/manual/reference/connection-string/</p>\n\n<p>Options<br /> - <strong>uri_decode_auth</strong> {Boolean, default:false} uri decode the user name and password for authentication<br /> - <strong>db</strong> {Object, default: null} a hash off options to set on the db object, see <strong>Db constructor</strong><br /> - <strong>server</strong> {Object, default: null} a hash off options to set on the server objects, see <strong>Server</strong> constructor<em>*<br /> - <strong>replSet</strong> {Object, default: null} a hash off options to set on the replSet object, see <strong>ReplSet</strong> constructor</em>*<br /> - <strong>mongos</strong> {Object, default: null} a hash off options to set on the mongos object, see <strong>Mongos</strong> constructor**</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Db.connect = function(url, options, callback) {\n  // Ensure correct mapping of the callback\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  // Ensure same behavior as previous version w:0\n  if(url.indexOf(\"safe\") == -1\n    && url.indexOf(\"w\") == -1\n    && url.indexOf(\"journal\") == -1 && url.indexOf(\"j\") == -1\n    && url.indexOf(\"fsync\") == -1) options.w = 1;\n\n  // Avoid circular require problem\n  var MongoClient = require('./mongo_client.js').MongoClient;\n  // Attempt to connect\n  MongoClient.connect.call(MongoClient, url, options, callback);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Db",
    "name": "connect",
    "string": "Db.connect()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>State of the db connection</p>",
    "summary": "<p>State of the db connection</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(Db.prototype, \"state\", { enumerable: true\n  , get: function () {\n      return this.serverConfig._serverState;\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _hasWriteConcern = function(errorOptions) {\n  return errorOptions == true\n    || errorOptions.w > 0\n    || errorOptions.w == 'majority'\n    || errorOptions.j == true\n    || errorOptions.journal == true\n    || errorOptions.fsync == true\n};",
   "ctx": {
    "type": "function",
    "name": "_hasWriteConcern",
    "string": "_hasWriteConcern()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _setWriteConcernHash = function(options) {\n  var finalOptions = {};\n  if(options.w != null) finalOptions.w = options.w;\n  if(options.journal == true) finalOptions.j = options.journal;\n  if(options.j == true) finalOptions.j = options.j;\n  if(options.fsync == true) finalOptions.fsync = options.fsync;\n  if(options.wtimeout != null) finalOptions.wtimeout = options.wtimeout;\n  return finalOptions;\n};",
   "ctx": {
    "type": "function",
    "name": "_setWriteConcernHash",
    "string": "_setWriteConcernHash()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _getWriteConcern = function(self, options) {\n  // Final options\n  var finalOptions = {w:1};\n  // Local options verification\n  if(options.w != null || typeof options.j == 'boolean' || typeof options.journal == 'boolean' || typeof options.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(options);\n  } else if(options.safe != null && typeof options.safe == 'object') {\n    finalOptions = _setWriteConcernHash(options.safe);\n  } else if(typeof options.safe == \"boolean\") {\n    finalOptions = {w: (options.safe ? 1 : 0)};\n  } else if(self.options.w != null || typeof self.options.j == 'boolean' || typeof self.options.journal == 'boolean' || typeof self.options.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(self.options);\n  } else if(self.safe.w != null || typeof self.safe.j == 'boolean' || typeof self.safe.journal == 'boolean' || typeof self.safe.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(self.safe);\n  } else if(typeof self.safe == \"boolean\") {\n    finalOptions = {w: (self.safe ? 1 : 0)};\n  }\n\n  // Ensure we don't have an invalid combination of write concerns\n  if(finalOptions.w < 1\n    && (finalOptions.journal == true || finalOptions.j == true || finalOptions.fsync == true)) throw new Error(\"No acknowledgement using w < 1 cannot be combined with journal:true or fsync:true\");\n\n  // Return the options\n  return finalOptions;\n}",
   "ctx": {
    "type": "function",
    "name": "_getWriteConcern",
    "string": "_getWriteConcern()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Legacy support</p>",
    "summary": "<p>Legacy support</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports.connect = Db.connect;\nexports.Db = Db;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "connect",
    "value": "Db.connect",
    "string": "exports.connect"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Remove all listeners to the db instance.</p>",
    "summary": "<p>Remove all listeners to the db instance.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Db.prototype.removeAllEventListeners = function() {\n  this.removeAllListeners(\"close\");\n  this.removeAllListeners(\"error\");\n  this.removeAllListeners(\"timeout\");\n  this.removeAllListeners(\"parseError\");\n  this.removeAllListeners(\"poolReady\");\n  this.removeAllListeners(\"message\");\n};",
   "ctx": {
    "type": "method",
    "constructor": "Db",
    "cons": "Db",
    "name": "removeAllEventListeners",
    "string": "Db.prototype.removeAllEventListeners()"
   }
  }
 ],
 "cursor": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Cursor."
    },
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database object to work with."
    },
    {
     "type": "param",
     "types": [
      "Collection"
     ],
     "name": "collection",
     "description": "the collection to query."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "selector",
     "description": "the query selector."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "fields",
     "description": "an object containing what fields to include or exclude from objects returned."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    }
   ],
   "description": {
    "full": "<p>Constructor for a cursor object that handles all the operations on query result<br />using find. This cursor object is unidirectional and cannot traverse backwards. Clients should not be creating a cursor directly,<br />but use find to acquire a cursor. (INTERNAL TYPE)</p>\n\n<p>Options<br /> - <strong>skip</strong> {Number} skip number of documents to skip.<br /> - <strong>limit</strong> {Number}, limit the number of results to return. -1 has a special meaning and is used by Db.eval. A value of 1 will also be treated as if it were -1.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>hint</strong>  {Object}, hint force the query to use a specific index.<br /> - <strong>explain</strong> {Boolean}, explain return the explaination of the query.<br /> - <strong>snapshot</strong> {Boolean}, snapshot Snapshot mode assures no duplicates are returned.<br /> - <strong>timeout</strong> {Boolean}, timeout allow the query to timeout.<br /> - <strong>tailable</strong> {Boolean}, tailable allow the cursor to be tailable.<br /> - <strong>awaitdata</strong> {Boolean}, awaitdata allow the cursor to wait for data, only applicable for tailable cursor.<br /> - <strong>oplogReplay</strong> {Boolean}, sets an internal flag, only applicable for tailable cursor.<br /> - <strong>batchSize</strong> {Number}, batchSize the number of the subset of results to request the database to return for every request. This should initially be greater than 1 otherwise the database will automatically close the cursor. The batch size can be set to 1 with cursorInstance.batchSize after performing the initial query to the database.<br /> - <strong>raw</strong> {Boolean}, raw return all query documents as raw buffers (default false).<br /> - <strong>read</strong> {Boolean}, read specify override of read from source (primary/secondary).<br /> - <strong>returnKey</strong> {Boolean}, returnKey only return the index key.<br /> - <strong>maxScan</strong> {Number}, maxScan limit the number of items to scan.<br /> - <strong>min</strong> {Number}, min set index bounds.<br /> - <strong>max</strong> {Number}, max set index bounds.<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.<br /> - <strong>showDiskLoc</strong> {Boolean}, showDiskLoc show disk location of results.<br /> - <strong>comment</strong> {String}, comment you can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>numberOfRetries</strong> {Number}, numberOfRetries if using awaidata specifies the number of times to retry on timeout.<br /> - <strong>dbName</strong> {String}, dbName override the default dbName.<br /> - <strong>tailableRetryInterval</strong> {Number}, tailableRetryInterval specify the miliseconds between getMores on tailable cursor.<br /> - <strong>exhaust</strong> {Boolean}, exhaust have the server send all the documents at once as getMore packets.<br /> - <strong>partial</strong> {Boolean}, partial have the sharded system return a partial result from mongos.</p>",
    "summary": "<p>Constructor for a cursor object that handles all the operations on query result<br />using find. This cursor object is unidirectional and cannot traverse backwards. Clients should not be creating a cursor directly,<br />but use find to acquire a cursor. (INTERNAL TYPE)</p>",
    "body": "<p>Options<br /> - <strong>skip</strong> {Number} skip number of documents to skip.<br /> - <strong>limit</strong> {Number}, limit the number of results to return. -1 has a special meaning and is used by Db.eval. A value of 1 will also be treated as if it were -1.<br /> - <strong>sort</strong> {Array | Object}, set to sort the documents coming back from the query. Array of indexes, [['a', 1]] etc.<br /> - <strong>hint</strong>  {Object}, hint force the query to use a specific index.<br /> - <strong>explain</strong> {Boolean}, explain return the explaination of the query.<br /> - <strong>snapshot</strong> {Boolean}, snapshot Snapshot mode assures no duplicates are returned.<br /> - <strong>timeout</strong> {Boolean}, timeout allow the query to timeout.<br /> - <strong>tailable</strong> {Boolean}, tailable allow the cursor to be tailable.<br /> - <strong>awaitdata</strong> {Boolean}, awaitdata allow the cursor to wait for data, only applicable for tailable cursor.<br /> - <strong>oplogReplay</strong> {Boolean}, sets an internal flag, only applicable for tailable cursor.<br /> - <strong>batchSize</strong> {Number}, batchSize the number of the subset of results to request the database to return for every request. This should initially be greater than 1 otherwise the database will automatically close the cursor. The batch size can be set to 1 with cursorInstance.batchSize after performing the initial query to the database.<br /> - <strong>raw</strong> {Boolean}, raw return all query documents as raw buffers (default false).<br /> - <strong>read</strong> {Boolean}, read specify override of read from source (primary/secondary).<br /> - <strong>returnKey</strong> {Boolean}, returnKey only return the index key.<br /> - <strong>maxScan</strong> {Number}, maxScan limit the number of items to scan.<br /> - <strong>min</strong> {Number}, min set index bounds.<br /> - <strong>max</strong> {Number}, max set index bounds.<br /> - <strong>maxTimeMS</strong> {Number}, number of miliseconds to wait before aborting the query.<br /> - <strong>showDiskLoc</strong> {Boolean}, showDiskLoc show disk location of results.<br /> - <strong>comment</strong> {String}, comment you can put a $comment field on a query to make looking in the profiler logs simpler.<br /> - <strong>numberOfRetries</strong> {Number}, numberOfRetries if using awaidata specifies the number of times to retry on timeout.<br /> - <strong>dbName</strong> {String}, dbName override the default dbName.<br /> - <strong>tailableRetryInterval</strong> {Number}, tailableRetryInterval specify the miliseconds between getMores on tailable cursor.<br /> - <strong>exhaust</strong> {Boolean}, exhaust have the server send all the documents at once as getMore packets.<br /> - <strong>partial</strong> {Boolean}, partial have the sharded system return a partial result from mongos.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Cursor(db, collection, selector, fields, options) {\n  this.db = db;\n  this.collection = collection;\n  this.selector = selector;\n  this.fields = fields;\n  options = !options ? {} : options;\n\n  this.skipValue = options.skip == null ? 0 : options.skip;\n  this.limitValue = options.limit == null ? 0 : options.limit;\n  this.sortValue = options.sort;\n  this.hint = options.hint;\n  this.explainValue = options.explain;\n  this.snapshot = options.snapshot;\n  this.timeout = options.timeout == null ? true : options.timeout;\n  this.tailable = options.tailable;\n  this.awaitdata = options.awaitdata;\n  this.oplogReplay = options.oplogReplay;\n  this.numberOfRetries = options.numberOfRetries == null ? 5 : options.numberOfRetries;\n  this.currentNumberOfRetries = this.numberOfRetries;\n  this.batchSizeValue = options.batchSize == null ? 0 : options.batchSize;\n  this.raw = options.raw == null ? false : options.raw;\n  this.readPreference = options.readPreference == null ? ReadPreference.PRIMARY : options.readPreference;\n  this.returnKey = options.returnKey;\n  this.maxScan = options.maxScan;\n  this.min = options.min;\n  this.max = options.max;\n  this.showDiskLoc = options.showDiskLoc;\n  this.comment = options.comment;\n  this.tailableRetryInterval = options.tailableRetryInterval || 100;\n  this.exhaust = options.exhaust || false;\n  this.partial = options.partial || false;\n  this.slaveOk = options.slaveOk || false;\n  this.maxTimeMSValue = options.maxTimeMS;\n  this.connection = options.connection;\n\n  this.totalNumberOfRecords = 0;\n  this.items = [];\n  this.cursorId = Long.fromInt(0);\n\n  // This name\n  this.dbName = options.dbName;\n\n  // State variables for the cursor\n  this.state = Cursor.INIT;\n  // Keep track of the current query run\n  this.queryRun = false;\n  this.getMoreTimer = false;\n\n  // If we are using a specific db execute against it\n  if(this.dbName != null) {\n    this.collectionName = this.dbName + \".\" + this.collection.collectionName;\n  } else {\n    this.collectionName = (this.db.databaseName ? this.db.databaseName + \".\" : '') + this.collection.collectionName;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "Cursor",
    "string": "Cursor()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Cursor"
     ],
     "name": "cursor",
     "description": "the cursor to clone."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "[options] additional options for the collection when cloning."
    }
   ],
   "description": {
    "full": "<p>Clones a given cursor but uses new options</p>",
    "summary": "<p>Clones a given cursor but uses new options</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.cloneWithOptions = function(cursor, options) {\n  return new Cursor(cursor.db, cursor.collection, cursor.selector, cursor.fields, options);\n}",
   "ctx": {
    "type": "method",
    "receiver": "Cursor",
    "name": "cloneWithOptions",
    "string": "Cursor.cloneWithOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "returns itself with rewind applied."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Resets this cursor to its initial state. All settings like the query string,<br />tailable, batchSizeValue, skipValue and limits are preserved.</p>",
    "summary": "<p>Resets this cursor to its initial state. All settings like the query string,<br />tailable, batchSizeValue, skipValue and limits are preserved.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.rewind = function() {\n  var self = this;\n\n  if (self.state != Cursor.INIT) {\n    if (self.state != Cursor.CLOSED) {\n      self.close(function() {});\n    }\n\n    self.numberOfReturned = 0;\n    self.totalNumberOfRecords = 0;\n    self.items = [];\n    self.cursorId = Long.fromInt(0);\n    self.state = Cursor.INIT;\n    self.queryRun = false;\n  }\n\n  return self;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "rewind",
    "string": "Cursor.prototype.rewind()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "This will be called after executing this method successfully. The first parameter will contain the Error object if an error occured, or null otherwise. The second parameter will contain an array of BSON deserialized objects as a result of the query."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns an array of documents. The caller is responsible for making sure that there<br />is enough memory to store the results. Note that the array only contain partial<br />results when this cursor had been previouly accessed. In that case,<br />cursor.rewind() can be used to reset the cursor.</p>",
    "summary": "<p>Returns an array of documents. The caller is responsible for making sure that there<br />is enough memory to store the results. Note that the array only contain partial<br />results when this cursor had been previouly accessed. In that case,<br />cursor.rewind() can be used to reset the cursor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.toArray = function(callback) {\n  var self = this;\n\n  if(!callback) {\n    throw new Error('callback is mandatory');\n  }\n\n  if(this.tailable) {\n    callback(new Error(\"Tailable cursor cannot be converted to array\"), null);\n  } else if(this.state != Cursor.CLOSED) {\n    // return toArrayExhaust(self, callback);\n    // If we are using exhaust we can't use the quick fire method\n    if(self.exhaust) return toArrayExhaust(self, callback);\n    // Quick fire using trampoline to avoid nextTick\n    self.nextObject({noReturn: true}, function(err, result) {\n      if(err) return callback(utils.toError(err), null);\n      if(self.cursorId.toString() == \"0\") {\n        self.state = Cursor.CLOSED;\n        return callback(null, self.items);\n      }\n\n      // Let's issue getMores until we have no more records waiting\n      getAllByGetMore(self, function(err, done) {\n        self.state = Cursor.CLOSED;\n        if(err) return callback(utils.toError(err), null);\n        // Let's release the internal list\n        var items = self.items;\n        self.items = null;\n        // Return all the items\n        callback(null, items);\n      });\n    })\n\n  } else {\n    callback(new Error(\"Cursor is closed\"), null);\n  }\n}\n\nvar toArrayExhaust = function(self, callback) {\n  var items = [];\n\n  self.each(function(err, item) {\n    if(err != null) {\n      return callback(utils.toError(err), null);\n    }\n\n    if(item != null && Array.isArray(items)) {\n      items.push(item);\n    } else {\n      var resultItems = items;\n      items = null;\n      self.items = [];\n      callback(null, resultItems);\n    }\n  });\n}\n\nvar getAllByGetMore = function(self, callback) {\n  getMore(self, {noReturn: true}, function(err, result) {\n    if(err) return callback(utils.toError(err));\n    if(result == null) return callback(null, null);\n    if(self.cursorId.toString() == \"0\") return callback(null, null);\n    getAllByGetMore(self, callback);\n  })\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "toArray",
    "string": "Cursor.prototype.toArray()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called for while iterating every document of the query result. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the document."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Iterates over all the documents for this cursor. As with <strong>{cursor.toArray}</strong>,<br />not all of the elements will be iterated if this cursor had been previouly accessed.<br />In that case, <strong>{cursor.rewind}</strong> can be used to reset the cursor. However, unlike<br /><strong>{cursor.toArray}</strong>, the cursor will only hold a maximum of batch size elements<br />at any given time if batch size is specified. Otherwise, the caller is responsible<br />for making sure that the entire result can fit the memory.</p>",
    "summary": "<p>Iterates over all the documents for this cursor. As with <strong>{cursor.toArray}</strong>,<br />not all of the elements will be iterated if this cursor had been previouly accessed.<br />In that case, <strong>{cursor.rewind}</strong> can be used to reset the cursor. However, unlike<br /><strong>{cursor.toArray}</strong>, the cursor will only hold a maximum of batch size elements<br />at any given time if batch size is specified. Otherwise, the caller is responsible<br />for making sure that the entire result can fit the memory.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.each = function(callback) {\n  var self = this;\n  var fn;\n\n  if (!callback) {\n    throw new Error('callback is mandatory');\n  }\n\n  if(this.state != Cursor.CLOSED) {\n    // If we are using exhaust we can't use the quick fire method\n    if(self.exhaust) return eachExhaust(self, callback);\n    // Quick fire using trampoline to avoid nextTick\n    if(this.items.length > 0) {\n      // Trampoline all the entries\n      while(fn = loop(self, callback)) fn(self, callback);\n      // Call each again\n      self.each(callback);\n    } else {\n      self.nextObject(function(err, item) {\n\n        if(err) {\n          self.state = Cursor.CLOSED;\n          return callback(utils.toError(err), item);\n        }\n\n        if(item == null) return callback(null, null);\n        callback(null, item);\n        self.each(callback);\n      })\n    }\n  } else {\n    callback(new Error(\"Cursor is closed\"), null);\n  }\n};\n\n// Special for exhaust command as we don't initiate the actual result sets\n// the server just sends them as they arrive meaning we need to get the IO event\n// loop happen so we can receive more data from the socket or we return to early\n// after the first fetch and loose all the incoming getMore's automatically issued\n// from the server.\nvar eachExhaust = function(self, callback) {\n  //FIX: stack overflow (on deep callback) (cred: https://github.com/limp/node-mongodb-native/commit/27da7e4b2af02035847f262b29837a94bbbf6ce2)\n  processor(function(){\n    // Fetch the next object until there is no more objects\n    self.nextObject(function(err, item) {\n      if(err != null) return callback(err, null);\n      if(item != null) {\n        callback(null, item);\n        eachExhaust(self, callback);\n      } else {\n        // Close the cursor if done\n        self.state = Cursor.CLOSED;\n        callback(err, null);\n      }\n    });\n  });\n}\n\n// Trampoline emptying the number of retrieved items\n// without incurring a nextTick operation\nvar loop = function(self, callback) {\n  // No more items we are done\n  if(self.items.length == 0) return;\n  // Get the next document\n  var doc = self.items.shift();\n  // Callback\n  callback(null, doc);\n  // Loop\n  return loop;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "each",
    "string": "Cursor.prototype.each()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "applySkipLimit",
     "description": "if set to true will apply the skip and limits set on the cursor. Defaults to false."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the number of results or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Determines how many result the query for this cursor will return</p>",
    "summary": "<p>Determines how many result the query for this cursor will return</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.count = function(applySkipLimit, callback) {\n  if(typeof applySkipLimit == 'function') {\n    callback = applySkipLimit;\n    applySkipLimit = false;\n  }\n\n  var options = {};\n  if(applySkipLimit) {\n    if(typeof this.skipValue == 'number') options.skip = this.skipValue;\n    if(typeof this.limitValue == 'number') options.limit = this.limitValue;\n  }\n\n  // If maxTimeMS set\n  if(typeof this.maxTimeMSValue == 'number') options.maxTimeMS = this.maxTimeMSValue;\n  // Do we have a hint add it to the options\n  if(this.hint) options.hint = this.hint;\n\n  // Call count command\n  this.collection.count(this.selector, options, callback);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "count",
    "string": "Cursor.prototype.count()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Array",
      "Object"
     ],
     "name": "keyOrList",
     "description": "This can be a string or an array. If passed as a string, the string will be the field to sort. If passed an array, each element will represent a field to be sorted and should be an array that contains the format [string, direction]."
    },
    {
     "type": "param",
     "types": [
      "String",
      "Number"
     ],
     "name": "direction",
     "description": "this determines how the results are sorted. \"asc\", \"ascending\" or 1 for asceding order while \"desc\", \"desceding or -1 for descending order. Note that the strings are case insensitive."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain an error object when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the sort parameter of this cursor to the given value.</p>\n\n<p>This method has the following method signatures:<br />(keyOrList, callback)<br />(keyOrList, direction, callback)</p>",
    "summary": "<p>Sets the sort parameter of this cursor to the given value.</p>",
    "body": "<p>This method has the following method signatures:<br />(keyOrList, callback)<br />(keyOrList, direction, callback)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.sort = function(keyOrList, direction, callback) {\n  callback = callback || function(){};\n  if(typeof direction === \"function\") { callback = direction; direction = null; }\n\n  if(this.tailable) {\n    callback(new Error(\"Tailable cursor doesn't support sorting\"), null);\n  } else if(this.queryRun == true || this.state == Cursor.CLOSED) {\n    callback(new Error(\"Cursor is closed\"), null);\n  } else {\n    var order = keyOrList;\n\n    if(direction != null) {\n      order = [[keyOrList, direction]];\n    }\n\n    this.sortValue = order;\n    callback(null, this);\n  }\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "sort",
    "string": "Cursor.prototype.sort()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "limit",
     "description": "the new limit."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "this optional callback will be called after executing this method. The first parameter will contain an error object when the limit given is not a valid number or when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the limit parameter of this cursor to the given value.</p>",
    "summary": "<p>Sets the limit parameter of this cursor to the given value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.limit = function(limit, callback) {\n  if(this.tailable) {\n    if(callback) {\n      callback(new Error(\"Tailable cursor doesn't support limit\"), null);\n    } else {\n      throw new Error(\"Tailable cursor doesn't support limit\");\n    }\n  } else if(this.queryRun == true || this.state == Cursor.CLOSED) {\n    if(callback) {\n      callback(new Error(\"Cursor is closed\"), null);\n    } else {\n      throw new Error(\"Cursor is closed\");\n    }\n  } else {\n    if(limit != null && limit.constructor != Number) {\n      if(callback) {\n        callback(new Error(\"limit requires an integer\"), null);\n      } else {\n        throw new Error(\"limit requires an integer\");\n      }\n    } else {\n      this.limitValue = limit;\n      if(callback) return callback(null, this);\n    }\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "limit",
    "string": "Cursor.prototype.limit()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "maxTimeMS",
     "description": "the maxTimeMS for the query."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "this optional callback will be called after executing this method. The first parameter will contain an error object when the limit given is not a valid number or when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Specifies a time limit for a query operation. After the specified<br />time is exceeded, the operation will be aborted and an error will be<br />returned to the client. If maxTimeMS is null, no limit is applied.</p>",
    "summary": "<p>Specifies a time limit for a query operation. After the specified<br />time is exceeded, the operation will be aborted and an error will be<br />returned to the client. If maxTimeMS is null, no limit is applied.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.maxTimeMS = function(maxTimeMS, callback) {\n  if(typeof maxTimeMS != 'number') {\n    throw new Error(\"maxTimeMS must be a number\");\n  }\n\n  // Save the maxTimeMS option\n  this.maxTimeMSValue = maxTimeMS;\n  // Return the cursor for chaining\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "maxTimeMS",
    "string": "Cursor.prototype.maxTimeMS()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "the",
     "description": "read preference for the cursor, one of Server.READ_PRIMARY, Server.READ_SECONDARY, Server.READ_SECONDARY_ONLY"
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "this optional callback will be called after executing this method. The first parameter will contain an error object when the read preference given is not a valid number or when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the read preference for the cursor</p>",
    "summary": "<p>Sets the read preference for the cursor</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.setReadPreference = function(readPreference, tags, callback) {\n  if(typeof tags == 'function') callback = tags;\n\n  var _mode = readPreference != null && typeof readPreference == 'object' ? readPreference.mode : readPreference;\n\n  if(this.queryRun == true || this.state == Cursor.CLOSED) {\n    if(callback == null) throw new Error(\"Cannot change read preference on executed query or closed cursor\");\n    callback(new Error(\"Cannot change read preference on executed query or closed cursor\"));\n  } else if(_mode != null && _mode != 'primary'\n    && _mode != 'secondaryOnly' && _mode != 'secondary'\n    && _mode != 'nearest' && _mode != 'primaryPreferred' && _mode != 'secondaryPreferred') {\n      if(callback == null) throw new Error(\"only readPreference of primary, secondary, secondaryPreferred, primaryPreferred or nearest supported\");\n      callback(new Error(\"only readPreference of primary, secondary, secondaryPreferred, primaryPreferred or nearest supported\"));\n  } else {\n    this.readPreference = readPreference;\n    if(callback != null) callback(null, this);\n  }\n\n  return this;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "setReadPreference",
    "string": "Cursor.prototype.setReadPreference()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "skip",
     "description": "the new skip value."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "this optional callback will be called after executing this method. The first parameter will contain an error object when the skip value given is not a valid number or when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the skip parameter of this cursor to the given value.</p>",
    "summary": "<p>Sets the skip parameter of this cursor to the given value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.skip = function(skip, callback) {\n  callback = callback || function(){};\n\n  if(this.tailable) {\n    callback(new Error(\"Tailable cursor doesn't support skip\"), null);\n  } else if(this.queryRun == true || this.state == Cursor.CLOSED) {\n    callback(new Error(\"Cursor is closed\"), null);\n  } else {\n    if(skip != null && skip.constructor != Number) {\n      callback(new Error(\"skip requires an integer\"), null);\n    } else {\n      this.skipValue = skip;\n      callback(null, this);\n    }\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "skip",
    "string": "Cursor.prototype.skip()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "batchSize",
     "description": "the new batch size."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "[callback]",
     "description": "this optional callback will be called after executing this method. The first parameter will contain an error object when the batchSize given is not a valid number or when the cursor is already closed while the second parameter will contain a reference to this object upon successful execution."
    },
    {
     "type": "return",
     "types": [
      "Cursor"
     ],
     "description": "an instance of this object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Sets the batch size parameter of this cursor to the given value.</p>",
    "summary": "<p>Sets the batch size parameter of this cursor to the given value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.batchSize = function(batchSize, callback) {\n  if(this.state == Cursor.CLOSED) {\n    if(callback != null) {\n      return callback(new Error(\"Cursor is closed\"), null);\n    } else {\n      throw new Error(\"Cursor is closed\");\n    }\n  } else if(batchSize != null && batchSize.constructor != Number) {\n    if(callback != null) {\n      return callback(new Error(\"batchSize requires an integer\"), null);\n    } else {\n      throw new Error(\"batchSize requires an integer\");\n    }\n  } else {\n    this.batchSizeValue = batchSize;\n    if(callback != null) return callback(null, this);\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "batchSize",
    "string": "Cursor.prototype.batchSize()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "The number of records to request per batch."
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>The limit used for the getMore command</p>",
    "summary": "<p>The limit used for the getMore command</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var limitRequest = function(self) {\n  var requestedLimit = self.limitValue;\n  var absLimitValue = Math.abs(self.limitValue);\n  var absBatchValue = Math.abs(self.batchSizeValue);\n\n  if(absLimitValue > 0) {\n    if (absBatchValue > 0) {\n      requestedLimit = Math.min(absLimitValue, absBatchValue);\n    }\n  } else {\n    requestedLimit = self.batchSizeValue;\n  }\n\n  return requestedLimit;\n};",
   "ctx": {
    "type": "function",
    "name": "limitRequest",
    "string": "limitRequest()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "QueryCommand"
     ],
     "description": "The command object"
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Generates a QueryCommand object using the parameters of this cursor.</p>",
    "summary": "<p>Generates a QueryCommand object using the parameters of this cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var generateQueryCommand = function(self) {\n  // Unpack the options\n  var queryOptions = QueryCommand.OPTS_NONE;\n  if(!self.timeout) {\n    queryOptions |= QueryCommand.OPTS_NO_CURSOR_TIMEOUT;\n  }\n\n  if(self.tailable) {\n    queryOptions |= QueryCommand.OPTS_TAILABLE_CURSOR;\n    self.skipValue = self.limitValue = 0;\n\n    // if awaitdata is set\n    if(self.awaitdata) {\n      queryOptions |= QueryCommand.OPTS_AWAIT_DATA;\n    }\n\n    // This sets an internal undocumented flag. Clients should not depend on its\n    // behavior!\n    if(self.oplogReplay) {\n      queryOptions |= QueryCommand.OPTS_OPLOG_REPLAY;\n    }\n  }\n\n  if(self.exhaust) {\n    queryOptions |= QueryCommand.OPTS_EXHAUST;\n  }\n\n  // Unpack the read preference to set slave ok correctly\n  var readPreference = self.readPreference instanceof ReadPreference ? self.readPreference.mode : self.readPreference;\n\n  // if(self.read == 'secondary')\n  if(readPreference == ReadPreference.PRIMARY_PREFERRED\n    || readPreference == ReadPreference.SECONDARY\n    || readPreference == ReadPreference.SECONDARY_PREFERRED\n    || readPreference == ReadPreference.NEAREST) {\n      queryOptions |= QueryCommand.OPTS_SLAVE;\n  }\n\n  // Override slaveOk from the user\n  if(self.slaveOk) {\n    queryOptions |= QueryCommand.OPTS_SLAVE;\n  }\n\n  if(self.partial) {\n    queryOptions |= QueryCommand.OPTS_PARTIAL;\n  }\n\n  // limitValue of -1 is a special case used by Db#eval\n  var numberToReturn = self.limitValue == -1 ? -1 : limitRequest(self);\n\n  // Check if we need a special selector\n  if(self.sortValue != null || self.explainValue != null || self.hint != null || self.snapshot != null\n      || self.returnKey != null || self.maxScan != null || self.min != null || self.max != null\n      || self.showDiskLoc != null || self.comment != null || typeof self.maxTimeMSValue == 'number') {\n\n    // order by\n    var orderBy = utils.formattedOrderClause(self.sortValue);\n\n    // Build special selector\n    var specialSelector = {'$query':self.selector};\n    if(orderBy) specialSelector['orderby'] = orderBy;\n    if(self.hint != null && self.hint.constructor == Object) specialSelector['$hint'] = self.hint;\n    if(self.snapshot != null) specialSelector['$snapshot'] = self.snapshot;\n    if(self.returnKey != null) specialSelector['$returnKey'] = self.returnKey;\n    if(self.maxScan != null) specialSelector['$maxScan'] = self.maxScan;\n    if(self.min != null) specialSelector['$min'] = self.min;\n    if(self.max != null) specialSelector['$max'] = self.max;\n    if(self.showDiskLoc != null) specialSelector['$showDiskLoc'] = self.showDiskLoc;\n    if(self.comment != null) specialSelector['$comment'] = self.comment;\n\n    // If we are querying the $cmd collection we need to add maxTimeMS as a field\n    // otherwise for a normal query it's a \"special selector\" $maxTimeMS\n    if(typeof self.maxTimeMSValue == 'number'\n      && self.collectionName.indexOf('.$cmd') != -1) {\n      specialSelector['maxTimeMS'] = self.maxTimeMSValue;\n    } else if(typeof self.maxTimeMSValue == 'number'\n      && self.collectionName.indexOf('.$cmd') == -1) {\n      specialSelector['$maxTimeMS'] = self.maxTimeMSValue;\n    }\n\n    // If we have explain set only return a single document with automatic cursor close\n    if(self.explainValue) {\n      numberToReturn = (-1)*Math.abs(numberToReturn);\n      specialSelector['$explain'] = true;\n    }\n\n    // Return the query\n    return new QueryCommand(self.db, self.collectionName, queryOptions, self.skipValue, numberToReturn, specialSelector, self.fields);\n  } else {\n    return new QueryCommand(self.db, self.collectionName, queryOptions, self.skipValue, numberToReturn, self.selector, self.fields);\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "generateQueryCommand",
    "string": "generateQueryCommand()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@return {Object} Returns an object containing the sort value of this cursor with<br />    the proper formatting that can be used internally in this cursor.</p>",
    "summary": "<p>@return {Object} Returns an object containing the sort value of this cursor with<br />    the proper formatting that can be used internally in this cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Cursor.prototype.formattedOrderClause = function() {\n  return utils.formattedOrderClause(this.sortValue);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "formattedOrderClause",
    "string": "Cursor.prototype.formattedOrderClause()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "sortDirection"
     ],
     "name": "{String|number}",
     "description": "Range of acceptable values:"
    },
    {
     "type": "",
     "string": "'ascending', 'descending', 'asc', 'desc', 1, -1"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "return",
     "types": [
      "number"
     ],
     "description": "The equivalent numerical value"
    },
    {
     "type": "throws",
     "types": [
      "Error"
     ],
     "description": "if the given sortDirection is invalid"
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts the value of the sort direction into its equivalent numerical value.</p>",
    "summary": "<p>Converts the value of the sort direction into its equivalent numerical value.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Cursor.prototype.formatSortValue = function(sortDirection) {\n  return utils.formatSortValue(sortDirection);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "formatSortValue",
    "string": "Cursor.prototype.formatSortValue()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain an error object on error while the second parameter will contain a document from the returned result or null if there are no more results."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets the next document from the cursor.</p>",
    "summary": "<p>Gets the next document from the cursor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.nextObject = function(options, callback) {\n  var self = this;\n\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  if(self.state == Cursor.INIT) {\n    var cmd;\n    try {\n      cmd = generateQueryCommand(self);\n    } catch (err) {\n      return callback(err, null);\n    }\n\n    // No need to check the keys\n    var queryOptions = {exhaust: self.exhaust\n      , raw:self.raw\n      , readPreference:self.readPreference\n      , connection:self.connection\n      , checkKeys: false};\n\n    // Execute command\n    var commandHandler = function(err, result) {\n      // If on reconnect, the command got given a different connection, switch\n      // the whole cursor to it.\n      self.connection = queryOptions.connection;\n      self.state = Cursor.OPEN; // Adjust the state of the cursor\n      if(err != null && result == null) return callback(utils.toError(err), null);\n\n      if(err == null && (result == null || result.documents == null || !Array.isArray(result.documents))) {\n        return self.close(function() {callback(new Error(\"command failed to return results\"), null);});\n      }\n\n      if(err == null && result && result.documents[0] && result.documents[0]['$err']) {\n        return self.close(function() {callback(utils.toError(result.documents[0]['$err']), null);});\n      }\n\n      if(err == null && result && result.documents[0] && result.documents[0]['errmsg']) {\n        return self.close(function() {callback(utils.toError(result.documents[0]), null);});\n      }\n\n      self.queryRun = true;\n      self.cursorId = result.cursorId;\n      self.totalNumberOfRecords = result.numberReturned;\n\n      // Add the new documents to the list of items, using forloop to avoid\n      // new array allocations and copying\n      for(var i = 0; i < result.documents.length; i++) {\n        self.items.push(result.documents[i]);\n      }\n\n      // If we have noReturn set just return (not modifying the internal item list)\n      // used for toArray\n      if(options.noReturn) {\n        return callback(null, true);\n      }\n\n      // Ignore callbacks until the cursor is dead for exhausted\n      if(self.exhaust && result.cursorId.toString() == \"0\") {\n        self.nextObject(callback);\n      } else if(self.exhaust == false || self.exhaust == null) {\n        self.nextObject(callback);\n      }\n    };\n\n    // If we have no connection set on this cursor check one out\n    if(self.connection == null) {\n      try {\n        self.connection = self.db.serverConfig.checkoutReader(this.readPreference);\n\n        // Check if we have an error from the checkout Reader function\n        if(self.connection instanceof Error) {\n          return callback(utils.toError(self.connection), null);\n        }\n\n        // Add to the query options\n        queryOptions.connection = self.connection;\n      } catch(err) {\n        return callback(utils.toError(err), null);\n      }\n    }\n\n    // Execute the command\n    self.db._executeQueryCommand(cmd, queryOptions, commandHandler);\n    // Set the command handler to null\n    commandHandler = null;\n  } else if(self.items.length) {\n    callback(null, self.items.shift());\n  } else if(self.cursorId.greaterThan(Long.fromInt(0))) {\n    getMore(self, callback);\n  } else {\n    // Force cursor to stay open\n    return self.close(function() {callback(null, null);});\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "nextObject",
    "string": "Cursor.prototype.nextObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain an error object on error while the second parameter will contain a document from the returned result or null if there are no more results."
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Gets more results from the database if any.</p>",
    "summary": "<p>Gets more results from the database if any.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var getMore = function(self, options, callback) {\n  var limit = 0;\n\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  if(self.state == Cursor.GET_MORE) return callback(null, null);\n\n  // Set get more in progress\n  self.state = Cursor.GET_MORE;\n\n  // Set options\n  if (!self.tailable && self.limitValue > 0) {\n    limit = self.limitValue - self.totalNumberOfRecords;\n    if (limit < 1) {\n      self.close(function() {callback(null, null);});\n      return;\n    }\n  }\n\n  try {\n    var getMoreCommand = new GetMoreCommand(\n        self.db\n      , self.collectionName\n      , limitRequest(self)\n      , self.cursorId\n    );\n\n    // Set up options\n    var command_options = {\n        readPreference: self.readPreference\n      , raw: self.raw\n      , connection:self.connection\n    };\n\n    // Execute the command\n    self.db._executeQueryCommand(getMoreCommand, command_options, function(err, result) {\n      var cbValue;\n\n      // Get more done\n      self.state = Cursor.OPEN;\n\n      if(err != null) {\n        self.state = Cursor.CLOSED;\n        return callback(utils.toError(err), null);\n      }\n\n      // Ensure we get a valid result\n      if(!result || !result.documents) {\n        self.state = Cursor.CLOSED;\n        return callback(utils.toError(\"command failed to return results\"), null)\n      }\n\n      // If we have a timed out query\n      if((result.responseFlag & (1 << 0)) != 0) {\n        self.state = Cursor.CLOSED;\n        return callback(utils.toError(\"cursor killed or timed out\"), null);        \n      }\n\n      // If the QueryFailure flag is set\n      if((result.responseFlag & (1 << 1)) != 0) {\n        self.state = Cursor.CLOSED;\n        return callback(utils.toError(\"QueryFailure flag set on getmore command\"), null);\n      }\n\n      try {\n        var isDead = 1 === result.responseFlag && result.cursorId.isZero();\n\n        self.cursorId = result.cursorId;\n        self.totalNumberOfRecords += result.numberReturned;\n\n        // Determine if there's more documents to fetch\n        if(result.numberReturned > 0) {\n          if (self.limitValue > 0) {\n            var excessResult = self.totalNumberOfRecords - self.limitValue;\n\n            if (excessResult > 0) {\n              result.documents.splice(-1 * excessResult, excessResult);\n            }\n          }\n\n          // Reset the tries for awaitdata if we are using it\n          self.currentNumberOfRetries = self.numberOfRetries;\n          // Get the documents\n          for(var i = 0; i < result.documents.length; i++) {\n            self.items.push(result.documents[i]);\n          }\n\n          // Don's shift a document out as we need it for toArray\n          if(options.noReturn) {\n            cbValue = true;\n          } else {\n            cbValue = self.items.shift();\n          }\n        } else if(self.tailable && !isDead && self.awaitdata) {\n          // Excute the tailable cursor once more, will timeout after ~4 sec if awaitdata used\n          self.currentNumberOfRetries = self.currentNumberOfRetries - 1;\n          if(self.currentNumberOfRetries == 0) {\n            self.close(function() {\n              callback(new Error(\"tailable cursor timed out\"), null);\n            });\n          } else {\n            getMore(self, callback);\n          }\n        } else if(self.tailable && !isDead) {\n          self.getMoreTimer = setTimeout(function() { getMore(self, callback); }, self.tailableRetryInterval);\n        } else {\n          self.close(function() {callback(null, null); });\n        }\n\n        result = null;\n      } catch(err) {\n        callback(utils.toError(err), null);\n      }\n      if (cbValue != null) callback(null, cbValue);\n    });\n\n    getMoreCommand = null;\n  } catch(err) {\n    // Get more done\n    self.state = Cursor.OPEN;\n\n    var handleClose = function() {\n      callback(utils.toError(err), null);\n    };\n\n    self.close(handleClose);\n    handleClose = null;\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "getMore",
    "string": "getMore()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will always be null while the second parameter will be an object containing the details."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets a detailed information about how the query is performed on this cursor and how<br />long it took the database to process it.</p>",
    "summary": "<p>Gets a detailed information about how the query is performed on this cursor and how<br />long it took the database to process it.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.explain = function(callback) {\n  var limit = (-1)*Math.abs(this.limitValue);\n\n  // Create a new cursor and fetch the plan\n  var cursor = new Cursor(this.db, this.collection, this.selector, this.fields, {\n      skip: this.skipValue\n    , limit:limit\n    , sort: this.sortValue\n    , hint: this.hint\n    , explain: true\n    , snapshot: this.snapshot\n    , timeout: this.timeout\n    , tailable: this.tailable\n    , batchSize: this.batchSizeValue\n    , slaveOk: this.slaveOk\n    , raw: this.raw\n    , readPreference: this.readPreference\n    , returnKey: this.returnKey\n    , maxScan: this.maxScan\n    , min: this.min\n    , max: this.max\n    , showDiskLoc: this.showDiskLoc\n    , comment: this.comment\n    , awaitdata: this.awaitdata\n    , oplogReplay: this.oplogReplay\n    , numberOfRetries: this.numberOfRetries\n    , dbName: this.dbName\n  });\n\n  // Fetch the explaination document\n  cursor.nextObject(function(err, item) {\n    if(err != null) return callback(utils.toError(err), null);\n    // close the cursor\n    cursor.close(function(err, result) {\n      if(err != null) return callback(utils.toError(err), null);\n      callback(null, item);\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "explain",
    "string": "Cursor.prototype.explain()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "CursorStream"
     ],
     "description": "returns a stream object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Node Transform Stream interface for this cursor.</p>\n\n<p>Options<br /> - <strong>transform</strong> {Function} function of type function(object) { return transformed }, allows for transformation of data before emitting.</p>",
    "summary": "<p>Returns a Node Transform Stream interface for this cursor.</p>",
    "body": "<p>Options<br /> - <strong>transform</strong> {Function} function of type function(object) { return transformed }, allows for transformation of data before emitting.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.stream = function stream(options) {\n  return new CursorStream(this, options);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "stream",
    "string": "Cursor.prototype.stream()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will always contain null while the second parameter will contain a reference to this cursor."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Close the cursor.</p>",
    "summary": "<p>Close the cursor.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.close = function(callback) {\n  var self = this\n  this.getMoreTimer && clearTimeout(this.getMoreTimer);\n  // Close the cursor if not needed\n  if(this.cursorId instanceof Long && this.cursorId.greaterThan(Long.fromInt(0))) {\n    try {\n      var command = new KillCursorCommand(this.db, [this.cursorId]);\n      // Added an empty callback to ensure we don't throw any null exceptions\n      this.db._executeQueryCommand(command, {readPreference:self.readPreference, raw:self.raw, connection:self.connection});\n    } catch(err) {}\n  }\n\n  // Null out the connection\n  self.connection = null;\n  // Reset cursor id\n  this.cursorId = Long.fromInt(0);\n  // Set to closed status\n  this.state = Cursor.CLOSED;\n\n  if(callback) {\n    callback(null, self);\n    self.items = [];\n  }\n\n  return this;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "close",
    "string": "Cursor.prototype.close()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "returns the state of the cursor."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Check if the cursor is closed or open.</p>",
    "summary": "<p>Check if the cursor is closed or open.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.prototype.isClosed = function() {\n  return this.state == Cursor.CLOSED ? true : false;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Cursor",
    "cons": "Cursor",
    "name": "isClosed",
    "string": "Cursor.prototype.isClosed()"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "INIT"
    }
   ],
   "description": {
    "full": "<p>Init state</p>",
    "summary": "<p>Init state</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.INIT = 0;",
   "ctx": {
    "type": "property",
    "receiver": "Cursor",
    "name": "INIT",
    "value": "0",
    "string": "Cursor.INIT"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "OPEN"
    }
   ],
   "description": {
    "full": "<p>Cursor open</p>",
    "summary": "<p>Cursor open</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.OPEN = 1;",
   "ctx": {
    "type": "property",
    "receiver": "Cursor",
    "name": "OPEN",
    "value": "1",
    "string": "Cursor.OPEN"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "CLOSED"
    }
   ],
   "description": {
    "full": "<p>Cursor closed</p>",
    "summary": "<p>Cursor closed</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.CLOSED = 2;",
   "ctx": {
    "type": "property",
    "receiver": "Cursor",
    "name": "CLOSED",
    "value": "2",
    "string": "Cursor.CLOSED"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "OPEN"
    }
   ],
   "description": {
    "full": "<p>Cursor performing a get more</p>",
    "summary": "<p>Cursor performing a get more</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Cursor.GET_MORE = 3;",
   "ctx": {
    "type": "property",
    "receiver": "Cursor",
    "name": "GET_MORE",
    "value": "3",
    "string": "Cursor.GET_MORE"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports.Cursor =  Cursor;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Cursor",
    "value": "Cursor",
    "string": "exports.Cursor"
   }
  }
 ],
 "cursorstream": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependecies.</p>",
    "summary": "<p>Module dependecies.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var Stream = require('stream').Stream;",
   "ctx": {
    "type": "declaration",
    "name": "Stream",
    "value": "require('stream').Stream",
    "string": "Stream"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a CursorStream."
    },
    {
     "type": "param",
     "types": [
      "Cursor"
     ],
     "name": "cursor",
     "description": "a cursor object that the stream wraps."
    },
    {
     "type": "return",
     "types": [
      "Stream"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>CursorStream</p>\n\n<p>Returns a stream interface for the <strong>cursor</strong>.</p>\n\n<p>Options<br /> - <strong>transform</strong> {Function} function of type function(object) { return transformed }, allows for transformation of data before emitting.</p>\n\n<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.<br /> - <strong>close</strong> {function() {}} the end event triggers when there is no more documents available.</p>",
    "summary": "<p>CursorStream</p>",
    "body": "<p>Returns a stream interface for the <strong>cursor</strong>.</p>\n\n<p>Options<br /> - <strong>transform</strong> {Function} function of type function(object) { return transformed }, allows for transformation of data before emitting.</p>\n\n<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.<br /> - <strong>close</strong> {function() {}} the end event triggers when there is no more documents available.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function CursorStream(cursor, options) {\n  if(!(this instanceof CursorStream)) return new CursorStream(cursor);\n  options = options ? options : {};\n\n  Stream.call(this);\n\n  this.readable = true;\n  this.paused = false;\n  this._cursor = cursor;\n  this._destroyed = null;\n  this.options = options;\n\n  // give time to hook up events\n  var self = this;\n  process.nextTick(function() {\n    self._init();      \n  });\n}",
   "ctx": {
    "type": "function",
    "name": "CursorStream",
    "string": "CursorStream()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Inherit from Stream</p>",
    "summary": "<p>Inherit from Stream</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "CursorStream.prototype.__proto__ = Stream.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "__proto__",
    "value": "Stream.prototype",
    "string": "CursorStream.prototype.__proto__"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Flag stating whether or not this stream is readable.</p>",
    "summary": "<p>Flag stating whether or not this stream is readable.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "CursorStream.prototype.readable;"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Flag stating whether or not this stream is paused.</p>",
    "summary": "<p>Flag stating whether or not this stream is paused.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "CursorStream.prototype.paused;"
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Initialize the cursor.</p>",
    "summary": "<p>Initialize the cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "CursorStream.prototype._init = function () {\n  if (this._destroyed) return;\n  this._next();\n}",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "_init",
    "string": "CursorStream.prototype._init()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Pull the next document from the cursor.</p>",
    "summary": "<p>Pull the next document from the cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "CursorStream.prototype._next = function () {\n  if(this.paused || this._destroyed) return;\n\n  var self = this;\n  // Get the next object\n  processor(function() {\n    if(self.paused || self._destroyed) return;\n\n    self._cursor.nextObject(function (err, doc) {\n      self._onNextObject(err, doc);\n    });    \n  });\n}",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "_next",
    "string": "CursorStream.prototype._next()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Handle each document as its returned from the cursor.</p>",
    "summary": "<p>Handle each document as its returned from the cursor.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "CursorStream.prototype._onNextObject = function (err, doc) {\n  if(err) {\n    this.destroy(err);\n    return this.emit('end');\n  }\n\n  // when doc is null we hit the end of the cursor\n  if(!doc && (this._cursor.state == 1 || this._cursor.state == 2)) {\n    this.emit('end')\n    return this.destroy();\n  } else if(doc) {\n    var data = typeof this.options.transform == 'function' ? this.options.transform(doc) : doc;\n    this.emit('data', data);\n    this._next();\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "_onNextObject",
    "string": "CursorStream.prototype._onNextObject()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pauses the stream.</p>",
    "summary": "<p>Pauses the stream.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "CursorStream.prototype.pause = function () {\n  this.paused = true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "pause",
    "string": "CursorStream.prototype.pause()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Resumes the stream.</p>",
    "summary": "<p>Resumes the stream.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "CursorStream.prototype.resume = function () {\n  var self = this;\n\n  // Don't do anything if we are not paused\n  if(!this.paused) return;\n  if(!this._cursor.state == 3) return;\n\n  process.nextTick(function() {\n    self.paused = false;\n    // Only trigger more fetching if the cursor is open\n    self._next();\n  })\n}",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "resume",
    "string": "CursorStream.prototype.resume()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Destroys the stream, closing the underlying<br />cursor. No more events will be emitted.</p>",
    "summary": "<p>Destroys the stream, closing the underlying<br />cursor. No more events will be emitted.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "CursorStream.prototype.destroy = function (err) {\n  if (this._destroyed) return;\n  this._destroyed = true;\n  this.readable = false;\n\n  this._cursor.close();\n\n  if(err && this.listeners('error').length > 0) {\n    this.emit('error', err);\n  }\n\n  this.emit('close');\n}\n\n// TODO - maybe implement the raw option to pass binary?\n//CursorStream.prototype.setEncoding = function () {\n//}\n\nmodule.exports = exports = CursorStream;",
   "ctx": {
    "type": "method",
    "constructor": "CursorStream",
    "cons": "CursorStream",
    "name": "destroy",
    "string": "CursorStream.prototype.destroy()"
   }
  }
 ],
 "gridstore": [
  {
   "tags": [],
   "description": {
    "full": "<p>@fileOverview GridFS is a tool for MongoDB to store files to the database.<br />Because of the restrictions of the object size the database can hold, a<br />facility to split a file into several chunks is needed. The {@link GridStore}<br />class offers a simplified api to interact with files while managing the<br />chunks of split files behind the scenes. More information about GridFS can be<br />found <a href=\"http://www.mongodb.org/display/DOCS/GridFS\">here</a>.</p>",
    "summary": "<p>@fileOverview GridFS is a tool for MongoDB to store files to the database.<br />Because of the restrictions of the object size the database can hold, a<br />facility to split a file into several chunks is needed. The {@link GridStore}<br />class offers a simplified api to interact with files while managing the<br />chunks of split files behind the scenes. More information about GridFS can be<br />found <a href=\"http://www.mongodb.org/display/DOCS/GridFS\">here</a>.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var Chunk = require('./chunk').Chunk,\n  DbCommand = require('../commands/db_command').DbCommand,\n  ObjectID = require('bson').ObjectID,\n  Buffer = require('buffer').Buffer,\n  fs = require('fs'),\n  timers = require('timers'),\n  util = require('util'),\n  inherits = util.inherits,\n  ReadStream = require('./readstream').ReadStream,\n  Stream = require('stream');\n\n// Set processor, setImmediate if 0.10 otherwise nextTick\nvar processor = require('../utils').processor();\n\nvar REFERENCE_BY_FILENAME = 0,\n  REFERENCE_BY_ID = 1;",
   "ctx": {
    "type": "declaration",
    "name": "Chunk",
    "value": "require('./chunk').Chunk,",
    "string": "Chunk"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the GridStore."
    },
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "A database instance to interact with."
    },
    {
     "type": "param",
     "types": [
      "Any"
     ],
     "name": "[id]",
     "description": "optional unique id for this file"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[filename]",
     "description": "optional filename for this file, no unique constrain on the field"
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "mode",
     "description": "set the mode for this file."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "options",
     "description": "optional properties to specify."
    },
    {
     "type": "return",
     "types": [
      "GridStore"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of a file stored in GridFS.</p>\n\n<p>Modes<br /> - <strong>\"r\"</strong> - read only. This is the default mode.<br /> - <strong>\"w\"</strong> - write in truncate mode. Existing data will be overwriten.<br /> - <strong>w+\"</strong> - write in edit mode (append is not guaranteed for concurrent operations)</p>\n\n<p>Options<br /> - <strong>root</strong> {String}, root collection to use. Defaults to <strong>{GridStore.DEFAULT_ROOT_COLLECTION}</strong>.<br /> - <strong>content_type</strong> {String}, mime type of the file. Defaults to <strong>{GridStore.DEFAULT_CONTENT_TYPE}</strong>.<br /> - <strong>chunk_size</strong> {Number}, size for the chunk. Defaults to <strong>{Chunk.DEFAULT_CHUNK_SIZE}</strong>.<br /> - <strong>metadata</strong> {Object}, arbitrary data the user wants to store.<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>A class representation of a file stored in GridFS.</p>",
    "body": "<p>Modes<br /> - <strong>\"r\"</strong> - read only. This is the default mode.<br /> - <strong>\"w\"</strong> - write in truncate mode. Existing data will be overwriten.<br /> - <strong>w+\"</strong> - write in edit mode (append is not guaranteed for concurrent operations)</p>\n\n<p>Options<br /> - <strong>root</strong> {String}, root collection to use. Defaults to <strong>{GridStore.DEFAULT_ROOT_COLLECTION}</strong>.<br /> - <strong>content_type</strong> {String}, mime type of the file. Defaults to <strong>{GridStore.DEFAULT_CONTENT_TYPE}</strong>.<br /> - <strong>chunk_size</strong> {Number}, size for the chunk. Defaults to <strong>{Chunk.DEFAULT_CHUNK_SIZE}</strong>.<br /> - <strong>metadata</strong> {Object}, arbitrary data the user wants to store.<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var GridStore = function GridStore(db, id, filename, mode, options) {\n  if(!(this instanceof GridStore)) return new GridStore(db, id, filename, mode, options);\n\n  var self = this;\n  this.db = db;\n\n  // Call stream constructor\n  if(typeof Stream == 'function') {\n    Stream.call(this);\n  }\n\n  // Handle options\n  if(typeof options === 'undefined') options = {};\n  // Handle mode\n  if(typeof mode === 'undefined') {\n    mode = filename;\n    filename = undefined;\n  } else if(typeof mode == 'object') {\n    options = mode;\n    mode = filename;\n    filename = undefined;\n  }\n\n  if(id instanceof ObjectID) {\n    this.referenceBy = REFERENCE_BY_ID;\n    this.fileId = id;\n    this.filename = filename;\n  } else if(typeof filename == 'undefined') {\n    this.referenceBy = REFERENCE_BY_FILENAME;\n    this.filename = id;\n    if (mode.indexOf('w') != null) {\n      this.fileId = new ObjectID();\n    }\n  } else {\n    this.referenceBy = REFERENCE_BY_ID;\n    this.fileId = id;\n    this.filename = filename;\n  }\n\n  // Set up the rest\n  this.mode = mode == null ? \"r\" : mode;\n  this.options = options || {};\n\n  // Set the root if overridden\n  this.root = this.options['root'] == null ? exports.GridStore.DEFAULT_ROOT_COLLECTION : this.options['root'];\n  this.position = 0;\n  this.readPreference = this.options.readPreference || 'primary';\n  this.writeConcern = _getWriteConcern(db, this.options);\n\n  // Set default chunk size\n  this.internalChunkSize = this.options['chunkSize'] == null ? Chunk.DEFAULT_CHUNK_SIZE : this.options['chunkSize'];\n}",
   "ctx": {
    "type": "function",
    "name": "GridStore",
    "string": "GridStore()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Code for the streaming capabilities of the gridstore object<br /> Most code from Aaron heckmanns project <a href='https://github.com/aheckmann/gridfs-stream'>https://github.com/aheckmann/gridfs-stream</a><br /> Modified to work on the gridstore object itself<br /> @ignore</p>",
    "summary": "<p>Code for the streaming capabilities of the gridstore object<br /> Most code from Aaron heckmanns project <a href='https://github.com/aheckmann/gridfs-stream'>https://github.com/aheckmann/gridfs-stream</a><br /> Modified to work on the gridstore object itself<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "if(typeof Stream == 'function') {\n  GridStore.prototype = { __proto__: Stream.prototype }\n} else {\n  // Node 0.4.X compatibility code\n  GridStore.prototype = { __proto__: Stream.Stream.prototype }\n}\n\n// Move pipe to _pipe\nGridStore.prototype._pipe = GridStore.prototype.pipe;"
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain an **{Error}** object and the second parameter will be null if an error occured. Otherwise, the first parameter will be null and the second will contain the reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Opens the file from the database and initialize this object. Also creates a<br />new one if file does not exist.</p>",
    "summary": "<p>Opens the file from the database and initialize this object. Also creates a<br />new one if file does not exist.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.open = function(callback) {\n  if( this.mode != \"w\" && this.mode != \"w+\" && this.mode != \"r\"){\n    callback(new Error(\"Illegal mode \" + this.mode), null);\n    return;\n  }\n\n  var self = this;\n\n  // Get the write concern\n  var writeConcern = _getWriteConcern(this.db, this.options);\n\n  // If we are writing we need to ensure we have the right indexes for md5's\n  if((self.mode == \"w\" || self.mode == \"w+\")) {\n    // Get files collection\n    var collection = self.collection();\n    // Put index on filename\n    collection.ensureIndex([['filename', 1]], writeConcern, function(err, index) {\n      // if(err) return callback(err);\n\n      // Get chunk collection\n      var chunkCollection = self.chunkCollection();\n      // Ensure index on chunk collection\n      chunkCollection.ensureIndex([['files_id', 1], ['n', 1]], writeConcern, function(err, index) {\n        // if(err) return callback(err);\n        _open(self, writeConcern, callback);\n      });\n    });\n  } else {\n    // Open the gridstore\n    _open(self, writeConcern, callback);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "open",
    "string": "GridStore.prototype.open()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Hidding the _open function</p>",
    "summary": "<p>Hidding the _open function</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var _open = function(self, options, callback) {\n  var collection = self.collection();\n  // Create the query\n  var query = self.referenceBy == REFERENCE_BY_ID ? {_id:self.fileId} : {filename:self.filename};\n  query = null == self.fileId && self.filename == null ? null : query;\n  options.readPreference = self.readPreference;\n\n  // Fetch the chunks\n  if(query != null) {\n    collection.find(query, options, function(err, cursor) {\n      if(err) return error(err);\n\n      // Fetch the file\n      cursor.nextObject(function(err, doc) {\n        if(err) return error(err);\n\n        // Check if the collection for the files exists otherwise prepare the new one\n        if(doc != null) {\n          self.fileId = doc._id;\n          // Prefer a new filename over the existing one if this is a write\n          self.filename = ((self.mode == 'r') || (self.filename == undefined)) ? doc.filename : self.filename;\n          self.contentType = doc.contentType;\n          self.internalChunkSize = doc.chunkSize;\n          self.uploadDate = doc.uploadDate;\n          self.aliases = doc.aliases;\n          self.length = doc.length;\n          self.metadata = doc.metadata;\n          self.internalMd5 = doc.md5;\n        } else if (self.mode != 'r') {\n          self.fileId = self.fileId == null ? new ObjectID() : self.fileId;\n          self.contentType = exports.GridStore.DEFAULT_CONTENT_TYPE;\n          self.internalChunkSize = self.internalChunkSize == null ? Chunk.DEFAULT_CHUNK_SIZE : self.internalChunkSize;\n          self.length = 0;\n        } else {\n          self.length = 0;\n          var txtId = self.fileId instanceof ObjectID ? self.fileId.toHexString() : self.fileId;\n          return error(new Error((self.referenceBy == REFERENCE_BY_ID ? txtId : self.filename) + \" does not exist\", self));\n        }\n\n        // Process the mode of the object\n        if(self.mode == \"r\") {\n          nthChunk(self, 0, options, function(err, chunk) {\n            if(err) return error(err);\n            self.currentChunk = chunk;\n            self.position = 0;\n            callback(null, self);\n          });\n        } else if(self.mode == \"w\") {\n          // Delete any existing chunks\n          deleteChunks(self, options, function(err, result) {\n            if(err) return error(err);\n            self.currentChunk = new Chunk(self, {'n':0}, self.writeConcern);\n            self.contentType = self.options['content_type'] == null ? self.contentType : self.options['content_type'];\n            self.internalChunkSize = self.options['chunk_size'] == null ? self.internalChunkSize : self.options['chunk_size'];\n            self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];\n            self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];\n            self.position = 0;\n            callback(null, self);\n          });\n        } else if(self.mode == \"w+\") {\n          nthChunk(self, lastChunkNumber(self), options, function(err, chunk) {\n            if(err) return error(err);\n            // Set the current chunk\n            self.currentChunk = chunk == null ? new Chunk(self, {'n':0}, self.writeConcern) : chunk;\n            self.currentChunk.position = self.currentChunk.data.length();\n            self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];\n            self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];\n            self.position = self.length;\n            callback(null, self);\n          });\n        }\n      });\n    });\n  } else {\n    // Write only mode\n    self.fileId = null == self.fileId ? new ObjectID() : self.fileId;\n    self.contentType = exports.GridStore.DEFAULT_CONTENT_TYPE;\n    self.internalChunkSize = self.internalChunkSize == null ? Chunk.DEFAULT_CHUNK_SIZE : self.internalChunkSize;\n    self.length = 0;\n\n    var collection2 = self.chunkCollection();\n    // No file exists set up write mode\n    if(self.mode == \"w\") {\n      // Delete any existing chunks\n      deleteChunks(self, options, function(err, result) {\n        if(err) return error(err);\n        self.currentChunk = new Chunk(self, {'n':0}, self.writeConcern);\n        self.contentType = self.options['content_type'] == null ? self.contentType : self.options['content_type'];\n        self.internalChunkSize = self.options['chunk_size'] == null ? self.internalChunkSize : self.options['chunk_size'];\n        self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];\n        self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];\n        self.position = 0;\n        callback(null, self);\n      });\n    } else if(self.mode == \"w+\") {\n      nthChunk(self, lastChunkNumber(self), options, function(err, chunk) {\n        if(err) return error(err);\n        // Set the current chunk\n        self.currentChunk = chunk == null ? new Chunk(self, {'n':0}, self.writeConcern) : chunk;\n        self.currentChunk.position = self.currentChunk.data.length();\n        self.metadata = self.options['metadata'] == null ? self.metadata : self.options['metadata'];\n        self.aliases = self.options['aliases'] == null ? self.aliases : self.options['aliases'];\n        self.position = self.length;\n        callback(null, self);\n      });\n    }\n  }\n\n  // only pass error to callback once\n  function error (err) {\n    if(error.err) return;\n    callback(error.err = err);\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "_open",
    "string": "_open()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Buffer",
      "FileHandle"
     ],
     "name": "file",
     "description": "the file to store."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. The first parameter will be null and the the second will contain the reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Stores a file from the file system to the GridFS database.</p>",
    "summary": "<p>Stores a file from the file system to the GridFS database.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.writeFile = function (file, callback) {\n  var self = this;\n  if (typeof file === 'string') {\n    fs.open(file, 'r', function (err, fd) {\n      if(err) return callback(err);\n      self.writeFile(fd, callback);\n    });\n    return;\n  }\n\n  self.open(function (err, self) {\n    if(err) return callback(err, self);\n\n    fs.fstat(file, function (err, stats) {\n      if(err) return callback(err, self);\n\n      var offset = 0;\n      var index = 0;\n      var numberOfChunksLeft = Math.min(stats.size / self.chunkSize);\n\n      // Write a chunk\n      var writeChunk = function() {\n        fs.read(file, self.chunkSize, offset, 'binary', function(err, data, bytesRead) {\n          if(err) return callback(err, self);\n\n          offset = offset + bytesRead;\n\n          // Create a new chunk for the data\n          var chunk = new Chunk(self, {n:index++}, self.writeConcern);\n          chunk.write(data, function(err, chunk) {\n            if(err) return callback(err, self);\n\n            chunk.save({}, function(err, result) {\n              if(err) return callback(err, self);\n\n              self.position = self.position + data.length;\n\n              // Point to current chunk\n              self.currentChunk = chunk;\n\n              if(offset >= stats.size) {\n                fs.close(file);\n                self.close(function(err, result) {\n                  if(err) return callback(err, self);\n                  return callback(null, self);\n                });\n              } else {\n                return processor(writeChunk);\n              }\n            });\n          });\n        });\n      }\n\n      // Process the first write\n      processor(writeChunk);\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "writeFile",
    "string": "GridStore.prototype.writeFile()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "string"
     ],
     "name": "{string}",
     "description": "The data to write."
    },
    {
     "type": "param",
     "types": [
      "close"
     ],
     "name": "{boolean=false}",
     "description": "opt_argument Closes this file after writing if"
    },
    {
     "type": "",
     "string": "true."
    },
    {
     "type": "param",
     "types": [
      "callback"
     ],
     "name": "{function(*,",
     "description": "GridStore)} This will be called after executing"
    },
    {
     "type": "",
     "string": "this method. The first parameter will contain null and the second one"
    },
    {
     "type": "",
     "string": "will contain a reference to this object."
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Writes some data. This method will work properly only if initialized with mode<br />\"w\" or \"w+\".</p>",
    "summary": "<p>Writes some data. This method will work properly only if initialized with mode<br />\"w\" or \"w+\".</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var writeBuffer = function(self, buffer, close, callback) {\n  if(typeof close === \"function\") { callback = close; close = null; }\n  var finalClose = typeof close == 'boolean' ? close : false;\n\n  if(self.mode[0] != \"w\") {\n    callback(new Error((self.referenceBy == REFERENCE_BY_ID ? self.toHexString() : self.filename) + \" not opened for writing\"), null);\n  } else {\n    if(self.currentChunk.position + buffer.length >= self.chunkSize) {\n      // Write out the current Chunk and then keep writing until we have less data left than a chunkSize left\n      // to a new chunk (recursively)\n      var previousChunkNumber = self.currentChunk.chunkNumber;\n      var leftOverDataSize = self.chunkSize - self.currentChunk.position;\n      var firstChunkData = buffer.slice(0, leftOverDataSize);\n      var leftOverData = buffer.slice(leftOverDataSize);\n      // A list of chunks to write out\n      var chunksToWrite = [self.currentChunk.write(firstChunkData)];\n      // If we have more data left than the chunk size let's keep writing new chunks\n      while(leftOverData.length >= self.chunkSize) {\n        // Create a new chunk and write to it\n        var newChunk = new Chunk(self, {'n': (previousChunkNumber + 1)}, self.writeConcern);\n        var firstChunkData = leftOverData.slice(0, self.chunkSize);\n        leftOverData = leftOverData.slice(self.chunkSize);\n        // Update chunk number\n        previousChunkNumber = previousChunkNumber + 1;\n        // Write data\n        newChunk.write(firstChunkData);\n        // Push chunk to save list\n        chunksToWrite.push(newChunk);\n      }\n\n      // Set current chunk with remaining data\n      self.currentChunk = new Chunk(self, {'n': (previousChunkNumber + 1)}, self.writeConcern);\n      // If we have left over data write it\n      if(leftOverData.length > 0) self.currentChunk.write(leftOverData);\n\n      // Update the position for the gridstore\n      self.position = self.position + buffer.length;\n      // Total number of chunks to write\n      var numberOfChunksToWrite = chunksToWrite.length;\n\n      for(var i = 0; i < chunksToWrite.length; i++) {\n        chunksToWrite[i].save({}, function(err, result) {\n          if(err) return callback(err);\n\n          numberOfChunksToWrite = numberOfChunksToWrite - 1;\n\n          if(numberOfChunksToWrite <= 0) {\n            // We care closing the file before returning\n            if(finalClose) {\n              return self.close(function(err, result) {\n                callback(err, self);\n              });\n            }\n            \n            // Return normally\n            return callback(null, self);\n          }\n        });\n      }\n    } else {\n      // Update the position for the gridstore\n      self.position = self.position + buffer.length;\n      // We have less data than the chunk size just write it and callback\n      self.currentChunk.write(buffer);\n      // We care closing the file before returning\n      if(finalClose) {\n        return self.close(function(err, result) {\n          callback(err, self);\n        });\n      }\n      // Return normally\n      return callback(null, self);\n    }\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "writeBuffer",
    "string": "writeBuffer()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "callback"
     ],
     "name": "{function(object)}",
     "description": "This will be called after executing this"
    },
    {
     "type": "",
     "string": "method. The object will be passed to the first parameter and will have"
    },
    {
     "type": "",
     "string": "the structure:"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "",
     "string": "<pre><code>"
    },
    {
     "type": "",
     "string": "{"
    },
    {
     "type": "",
     "string": "'_id' : , // {number} id for this file"
    },
    {
     "type": "",
     "string": "'filename' : , // {string} name for this file"
    },
    {
     "type": "",
     "string": "'contentType' : , // {string} mime type for this file"
    },
    {
     "type": "",
     "string": "'length' : , // {number} size of this file?"
    },
    {
     "type": "",
     "string": "'chunksize' : , // {number} chunk size used by this file"
    },
    {
     "type": "",
     "string": "'uploadDate' : , // {Date}"
    },
    {
     "type": "",
     "string": "'aliases' : , // {array of string}"
    },
    {
     "type": "",
     "string": "'metadata' : , // {string}"
    },
    {
     "type": "",
     "string": "}"
    },
    {
     "type": "",
     "string": "</code></pre>"
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Creates a mongoDB object representation of this object.</p>",
    "summary": "<p>Creates a mongoDB object representation of this object.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var buildMongoObject = function(self, callback) {\n  // Calcuate the length\n  var mongoObject = {\n    '_id': self.fileId,\n    'filename': self.filename,\n    'contentType': self.contentType,\n    'length': self.position ? self.position : 0,\n    'chunkSize': self.chunkSize,\n    'uploadDate': self.uploadDate,\n    'aliases': self.aliases,\n    'metadata': self.metadata\n  };\n\n  var md5Command = {filemd5:self.fileId, root:self.root};\n  self.db.command(md5Command, function(err, results) {\n    if(err) return callback(err);\n\n    mongoObject.md5 = results.md5;\n    callback(null, mongoObject);\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "buildMongoObject",
    "string": "buildMongoObject()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. Passes an **{Error}** object to the first parameter and null to the second if an error occured. Otherwise, passes null to the first and a reference to this object to the second."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Saves this file to the database. This will overwrite the old entry if it<br />already exists. This will work properly only if mode was initialized to<br />\"w\" or \"w+\".</p>",
    "summary": "<p>Saves this file to the database. This will overwrite the old entry if it<br />already exists. This will work properly only if mode was initialized to<br />\"w\" or \"w+\".</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.close = function(callback) {\n  var self = this;\n\n  if(self.mode[0] == \"w\") {\n    // Set up options\n    var options = self.writeConcern;\n\n    if(self.currentChunk != null && self.currentChunk.position > 0) {\n      self.currentChunk.save({}, function(err, chunk) {\n        if(err && typeof callback == 'function') return callback(err);\n\n        self.collection(function(err, files) {\n          if(err && typeof callback == 'function') return callback(err);\n\n          // Build the mongo object\n          if(self.uploadDate != null) {\n            files.remove({'_id':self.fileId}, self.writeConcern, function(err, collection) {\n              if(err && typeof callback == 'function') return callback(err);\n\n              buildMongoObject(self, function(err, mongoObject) {\n                if(err) {\n                  if(typeof callback == 'function') return callback(err); else throw err;\n                }\n\n                files.save(mongoObject, options, function(err) {\n                  if(typeof callback == 'function')\n                    callback(err, mongoObject);\n                });\n              });\n            });\n          } else {\n            self.uploadDate = new Date();\n            buildMongoObject(self, function(err, mongoObject) {\n              if(err) {\n                if(typeof callback == 'function') return callback(err); else throw err;\n              }\n\n              files.save(mongoObject, options, function(err) {\n                if(typeof callback == 'function')\n                  callback(err, mongoObject);\n              });\n            });\n          }\n        });\n      });\n    } else {\n      self.collection(function(err, files) {\n        if(err && typeof callback == 'function') return callback(err);\n\n        self.uploadDate = new Date();\n        buildMongoObject(self, function(err, mongoObject) {\n          if(err) {\n            if(typeof callback == 'function') return callback(err); else throw err;\n          }\n\n          files.save(mongoObject, options, function(err) {\n            if(typeof callback == 'function')\n              callback(err, mongoObject);\n          });\n        });\n      });\n    }\n  } else if(self.mode[0] == \"r\") {\n    if(typeof callback == 'function')\n      callback(null, null);\n  } else {\n    if(typeof callback == 'function')\n      callback(new Error(\"Illegal mode \" + self.mode), null);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "close",
    "string": "GridStore.prototype.close()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "chunkNumber"
     ],
     "name": "{number}",
     "description": "The nth chunk to retrieve."
    },
    {
     "type": "param",
     "types": [
      "callback"
     ],
     "name": "{function(*,",
     "description": "Chunk|object)} This will be called after"
    },
    {
     "type": "",
     "string": "executing this method. null will be passed to the first parameter while"
    },
    {
     "type": "",
     "string": "a new {@link Chunk} instance will be passed to the second parameter if"
    },
    {
     "type": "",
     "string": "the chunk was found or an empty object {} if not."
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Gets the nth chunk of this file.</p>",
    "summary": "<p>Gets the nth chunk of this file.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var nthChunk = function(self, chunkNumber, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  options = options || self.writeConcern;\n  options.readPreference = self.readPreference;\n  // Get the nth chunk\n  self.chunkCollection().find({'files_id':self.fileId, 'n':chunkNumber}, options, function(err, cursor) {\n    if(err) return callback(err);\n\n    cursor.nextObject(function(err, chunk) {\n      if(err) return callback(err);\n\n      var finalChunk = chunk == null ? {} : chunk;\n      callback(null, new Chunk(self, finalChunk, self.writeConcern));\n    });\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "nthChunk",
    "string": "nthChunk()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "GridStore.prototype._nthChunk = function(chunkNumber, callback) {\n  nthChunk(this, chunkNumber, callback);\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "_nthChunk",
    "string": "GridStore.prototype._nthChunk()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@return {Number} The last chunk number of this file.</p>",
    "summary": "<p>@return {Number} The last chunk number of this file.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var lastChunkNumber = function(self) {\n  return Math.floor((self.length ? self.length - 1 : 0)/self.chunkSize);\n};",
   "ctx": {
    "type": "function",
    "name": "lastChunkNumber",
    "string": "lastChunkNumber()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. An exception object will be passed to the first parameter when an error occured or null otherwise. A new **{Collection}** object will be passed to the second parameter if no error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve this file's chunks collection.</p>",
    "summary": "<p>Retrieve this file's chunks collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.chunkCollection = function(callback) {\n  if(typeof callback == 'function')\n    return this.db.collection((this.root + \".chunks\"), callback);\n  return this.db.collection((this.root + \".chunks\"));\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "chunkCollection",
    "string": "GridStore.prototype.chunkCollection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "callback"
     ],
     "name": "{function(*,",
     "description": "boolean)} This will be called after this method"
    },
    {
     "type": "",
     "string": "executes. Passes null to the first and true to the second argument."
    },
    {
     "type": "",
     "string": ""
    },
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Deletes all the chunks of this file in the database.</p>",
    "summary": "<p>Deletes all the chunks of this file in the database.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var deleteChunks = function(self, options, callback) {\n  if(typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n\n  options = options || self.writeConcern;\n\n  if(self.fileId != null) {\n    self.chunkCollection().remove({'files_id':self.fileId}, options, function(err, result) {\n      if(err) return callback(err, false);\n      callback(null, true);\n    });\n  } else {\n    callback(null, true);\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "deleteChunks",
    "string": "deleteChunks()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method executes. Passes null to the first and true to the second argument."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deletes all the chunks of this file in the database.</p>",
    "summary": "<p>Deletes all the chunks of this file in the database.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.unlink = function(callback) {\n  var self = this;\n  deleteChunks(this, function(err) {\n    if(err!==null) {\n      err.message = \"at deleteChunks: \" + err.message;\n      return callback(err);\n    }\n\n    self.collection(function(err, collection) {\n      if(err!==null) {\n        err.message = \"at collection: \" + err.message;\n        return callback(err);\n      }\n\n      collection.remove({'_id':self.fileId}, self.writeConcern, function(err) {\n        callback(err, self);\n      });\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "unlink",
    "string": "GridStore.prototype.unlink()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. An exception object will be passed to the first parameter when an error occured or null otherwise. A new **{Collection}** object will be passed to the second parameter if no error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves the file collection associated with this object.</p>",
    "summary": "<p>Retrieves the file collection associated with this object.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.collection = function(callback) {\n  if(typeof callback == 'function')\n    this.db.collection(this.root + \".files\", callback);\n  return this.db.collection(this.root + \".files\");\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "collection",
    "string": "GridStore.prototype.collection()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[separator]",
     "description": "the character to be recognized as the newline separator."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "This will be called after this method is executed. The first parameter will be null and the second parameter will contain an array of strings representing the entire data, each element representing a line including the separator character."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reads the data of this file.</p>",
    "summary": "<p>Reads the data of this file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.readlines = function(separator, callback) {\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  separator = args.length ? args.shift() : \"\\n\";\n\n  this.read(function(err, data) {\n    if(err) return callback(err);\n\n    var items = data.toString().split(separator);\n    items = items.length > 0 ? items.splice(0, items.length - 1) : [];\n    for(var i = 0; i < items.length; i++) {\n      items[i] = items[i] + separator;\n    }\n\n    callback(null, items);\n  });\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "readlines",
    "string": "GridStore.prototype.readlines()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deletes all the chunks of this file in the database if mode was set to \"w\" or<br />\"w+\" and resets the read/write head to the initial position.</p>",
    "summary": "<p>Deletes all the chunks of this file in the database if mode was set to \"w\" or<br />\"w+\" and resets the read/write head to the initial position.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.rewind = function(callback) {\n  var self = this;\n\n  if(this.currentChunk.chunkNumber != 0) {\n    if(this.mode[0] == \"w\") {\n      deleteChunks(self, function(err, gridStore) {\n        if(err) return callback(err);\n        self.currentChunk = new Chunk(self, {'n': 0}, self.writeConcern);\n        self.position = 0;\n        callback(null, self);\n      });\n    } else {\n      self.currentChunk(0, function(err, chunk) {\n        if(err) return callback(err);\n        self.currentChunk = chunk;\n        self.currentChunk.rewind();\n        self.position = 0;\n        callback(null, self);\n      });\n    }\n  } else {\n    self.currentChunk.rewind();\n    self.position = 0;\n    callback(null, self);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "rewind",
    "string": "GridStore.prototype.rewind()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[length]",
     "description": "the number of characters to read. Reads all the characters from the read/write head to the EOF if not specified."
    },
    {
     "type": "param",
     "types": [
      "String",
      "Buffer"
     ],
     "name": "[buffer]",
     "description": "a string to hold temporary data. This is used for storing the string data read so far when recursively calling this method."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. null will be passed to the first parameter and a string containing the contents of the buffer concatenated with the contents read from this file will be passed to the second."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves the contents of this file and advances the read/write head. Works with Buffers only.</p>\n\n<p>There are 3 signatures for this method:</p>\n\n<p>(callback)<br />(length, callback)<br />(length, buffer, callback)</p>",
    "summary": "<p>Retrieves the contents of this file and advances the read/write head. Works with Buffers only.</p>",
    "body": "<p>There are 3 signatures for this method:</p>\n\n<p>(callback)<br />(length, callback)<br />(length, buffer, callback)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.read = function(length, buffer, callback) {\n  var self = this;\n\n  var args = Array.prototype.slice.call(arguments, 0);\n  callback = args.pop();\n  length = args.length ? args.shift() : null;\n  buffer = args.length ? args.shift() : null;\n\n  // The data is a c-terminated string and thus the length - 1\n  var finalLength = length == null ? self.length - self.position : length;\n  var finalBuffer = buffer == null ? new Buffer(finalLength) : buffer;\n  // Add a index to buffer to keep track of writing position or apply current index\n  finalBuffer._index = buffer != null && buffer._index != null ? buffer._index : 0;\n\n  if((self.currentChunk.length() - self.currentChunk.position + finalBuffer._index) >= finalLength) {\n    var slice = self.currentChunk.readSlice(finalLength - finalBuffer._index);\n    // Copy content to final buffer\n    slice.copy(finalBuffer, finalBuffer._index);\n    // Update internal position\n    self.position = self.position + finalBuffer.length;\n    // Check if we don't have a file at all\n    if(finalLength == 0 && finalBuffer.length == 0) return callback(new Error(\"File does not exist\"), null);\n    // Else return data\n    callback(null, finalBuffer);\n  } else {\n    var slice = self.currentChunk.readSlice(self.currentChunk.length() - self.currentChunk.position);\n    // Copy content to final buffer\n    slice.copy(finalBuffer, finalBuffer._index);\n    // Update index position\n    finalBuffer._index += slice.length;\n\n    // Load next chunk and read more\n    nthChunk(self, self.currentChunk.chunkNumber + 1, function(err, chunk) {\n      if(err) return callback(err);\n\n      if(chunk.length() > 0) {\n        self.currentChunk = chunk;\n        self.read(length, finalBuffer, callback);\n      } else {\n        if (finalBuffer._index > 0) {\n          callback(null, finalBuffer)\n        } else {\n          callback(new Error(\"no chunks found for file, possibly corrupt\"), null);\n        }\n      }\n    });\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "read",
    "string": "GridStore.prototype.read()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "This gets called after this method terminates. null is passed to the first parameter and the position is passed to the second."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves the position of the read/write head of this file.</p>",
    "summary": "<p>Retrieves the position of the read/write head of this file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.tell = function(callback) {\n  callback(null, this.position);\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "tell",
    "string": "GridStore.prototype.tell()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[position]",
     "description": "the position to seek to"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[seekLocation]",
     "description": "seek mode. Use one of the Seek Location modes."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Moves the read/write head to a new location.</p>\n\n<p>There are 3 signatures for this method</p>\n\n<p>Seek Location Modes<br /> - <strong>GridStore.IO_SEEK_SET</strong>, <strong>(default)</strong> set the position from the start of the file.<br /> - <strong>GridStore.IO_SEEK_CUR</strong>, set the position from the current position in the file.<br /> - <strong>GridStore.IO_SEEK_END</strong>, set the position from the end of the file.</p>",
    "summary": "<p>Moves the read/write head to a new location.</p>",
    "body": "<p>There are 3 signatures for this method</p>\n\n<p>Seek Location Modes<br /> - <strong>GridStore.IO_SEEK_SET</strong>, <strong>(default)</strong> set the position from the start of the file.<br /> - <strong>GridStore.IO_SEEK_CUR</strong>, set the position from the current position in the file.<br /> - <strong>GridStore.IO_SEEK_END</strong>, set the position from the end of the file.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.seek = function(position, seekLocation, callback) {\n  var self = this;\n\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = args.pop();\n  seekLocation = args.length ? args.shift() : null;\n\n  var seekLocationFinal = seekLocation == null ? exports.GridStore.IO_SEEK_SET : seekLocation;\n  var finalPosition = position;\n  var targetPosition = 0;\n\n  // Calculate the position\n  if(seekLocationFinal == exports.GridStore.IO_SEEK_CUR) {\n    targetPosition = self.position + finalPosition;\n  } else if(seekLocationFinal == exports.GridStore.IO_SEEK_END) {\n    targetPosition = self.length + finalPosition;\n  } else {\n    targetPosition = finalPosition;\n  }\n\n  // Get the chunk\n  var newChunkNumber = Math.floor(targetPosition/self.chunkSize);\n  if(newChunkNumber != self.currentChunk.chunkNumber) {\n    var seekChunk = function() {\n      nthChunk(self, newChunkNumber, function(err, chunk) {\n        self.currentChunk = chunk;\n        self.position = targetPosition;\n        self.currentChunk.position = (self.position % self.chunkSize);\n        callback(err, self);\n      });\n    };\n\n    if(self.mode[0] == 'w') {\n      self.currentChunk.save({}, function(err) {\n        if(err) return callback(err);\n        seekChunk();\n      });\n    } else {\n      seekChunk();\n    }\n  } else {\n    self.position = targetPosition;\n    self.currentChunk.position = (self.position % self.chunkSize);\n    callback(null, self);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "seek",
    "string": "GridStore.prototype.seek()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "true if the read/write head is at the end of this file."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Verify if the file is at EOF.</p>",
    "summary": "<p>Verify if the file is at EOF.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.eof = function() {\n  return this.position == this.length ? true : false;\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "eof",
    "string": "GridStore.prototype.eof()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this gets called after this method is executed. Passes null to the first parameter and the character read to the second or null to the second if the read/write head is at the end of the file."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieves a single character from this file.</p>",
    "summary": "<p>Retrieves a single character from this file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.getc = function(callback) {\n  var self = this;\n\n  if(self.eof()) {\n    callback(null, null);\n  } else if(self.currentChunk.eof()) {\n    nthChunk(self, self.currentChunk.chunkNumber + 1, function(err, chunk) {\n      self.currentChunk = chunk;\n      self.position = self.position + 1;\n      callback(err, self.currentChunk.getc());\n    });\n  } else {\n    self.position = self.position + 1;\n    callback(null, self.currentChunk.getc());\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "getc",
    "string": "GridStore.prototype.getc()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "string",
     "description": "the string to write."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Writes a string to the file with a newline character appended at the end if<br />the given string does not have one.</p>",
    "summary": "<p>Writes a string to the file with a newline character appended at the end if<br />the given string does not have one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.puts = function(string, callback) {\n  var finalString = string.match(/\\n$/) == null ? string + \"\\n\" : string;\n  this.write(finalString, callback);\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "puts",
    "string": "GridStore.prototype.puts()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "autoclose",
     "description": "if true current GridStore will be closed when EOF and 'close' event will be fired"
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns read stream based on this GridStore file</p>\n\n<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>end</strong> {function() {}} the end event triggers when there is no more documents available.<br /> - <strong>close</strong> {function() {}} the close event triggers when the stream is closed.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.</p>",
    "summary": "<p>Returns read stream based on this GridStore file</p>",
    "body": "<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>end</strong> {function() {}} the end event triggers when there is no more documents available.<br /> - <strong>close</strong> {function() {}} the close event triggers when the stream is closed.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.stream = function(autoclose) {\n  return new ReadStream(autoclose, this);\n};",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "stream",
    "string": "GridStore.prototype.stream()"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "DEFAULT_ROOT_COLLECTION"
    }
   ],
   "description": {
    "full": "<p>The collection to be used for holding the files and chunks collection.</p>",
    "summary": "<p>The collection to be used for holding the files and chunks collection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.DEFAULT_ROOT_COLLECTION = 'fs';",
   "ctx": {
    "type": "property",
    "receiver": "GridStore",
    "name": "DEFAULT_ROOT_COLLECTION",
    "value": "'fs'",
    "string": "GridStore.DEFAULT_ROOT_COLLECTION"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "DEFAULT_CONTENT_TYPE"
    }
   ],
   "description": {
    "full": "<p>Default file mime type</p>",
    "summary": "<p>Default file mime type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.DEFAULT_CONTENT_TYPE = 'binary/octet-stream';",
   "ctx": {
    "type": "property",
    "receiver": "GridStore",
    "name": "DEFAULT_CONTENT_TYPE",
    "value": "'binary/octet-stream'",
    "string": "GridStore.DEFAULT_CONTENT_TYPE"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "IO_SEEK_SET"
    }
   ],
   "description": {
    "full": "<p>Seek mode where the given length is absolute.</p>",
    "summary": "<p>Seek mode where the given length is absolute.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.IO_SEEK_SET = 0;",
   "ctx": {
    "type": "property",
    "receiver": "GridStore",
    "name": "IO_SEEK_SET",
    "value": "0",
    "string": "GridStore.IO_SEEK_SET"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "IO_SEEK_CUR"
    }
   ],
   "description": {
    "full": "<p>Seek mode where the given length is an offset to the current read/write head.</p>",
    "summary": "<p>Seek mode where the given length is an offset to the current read/write head.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.IO_SEEK_CUR = 1;",
   "ctx": {
    "type": "property",
    "receiver": "GridStore",
    "name": "IO_SEEK_CUR",
    "value": "1",
    "string": "GridStore.IO_SEEK_CUR"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "IO_SEEK_END"
    }
   ],
   "description": {
    "full": "<p>Seek mode where the given length is an offset to the end of the file.</p>",
    "summary": "<p>Seek mode where the given length is an offset to the end of the file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.IO_SEEK_END = 2;",
   "ctx": {
    "type": "property",
    "receiver": "GridStore",
    "name": "IO_SEEK_END",
    "value": "2",
    "string": "GridStore.IO_SEEK_END"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database to query."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "the name of the file to look for."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[rootCollection]",
     "description": "the root collection that holds the files and chunks collection. Defaults to **{GridStore.DEFAULT_ROOT_COLLECTION}**."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method executes. Passes null to the first and passes true to the second if the file exists and false otherwise."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Checks if a file exists in the database.</p>\n\n<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>",
    "summary": "<p>Checks if a file exists in the database.</p>",
    "body": "<p>Options<br /> - <strong>readPreference</strong> {String}, the prefered read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.exist = function(db, fileIdObject, rootCollection, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  rootCollection = args.length ? args.shift() : null;\n  options = args.length ? args.shift() : {};\n\n  // Establish read preference\n  var readPreference = options.readPreference || 'primary';\n  // Fetch collection\n  var rootCollectionFinal = rootCollection != null ? rootCollection : GridStore.DEFAULT_ROOT_COLLECTION;\n  db.collection(rootCollectionFinal + \".files\", function(err, collection) {\n    if(err) return callback(err);\n\n    // Build query\n    var query = (typeof fileIdObject == 'string' || Object.prototype.toString.call(fileIdObject) == '[object RegExp]' )\n      ? {'filename':fileIdObject}\n      : {'_id':fileIdObject};    // Attempt to locate file\n\n    collection.find(query, {readPreference:readPreference}, function(err, cursor) {\n      if(err) return callback(err);\n\n      cursor.nextObject(function(err, item) {\n        if(err) return callback(err);\n        callback(null, item == null ? false : true);\n      });\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "receiver": "GridStore",
    "name": "exist",
    "string": "GridStore.exist()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database to query."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[rootCollection]",
     "description": "the root collection that holds the files and chunks collection. Defaults to **{GridStore.DEFAULT_ROOT_COLLECTION}**."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method executes. Passes null to the first and passes an array of strings containing the names of the files."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Gets the list of files stored in the GridFS.</p>",
    "summary": "<p>Gets the list of files stored in the GridFS.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.list = function(db, rootCollection, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = args.pop();\n  rootCollection = args.length ? args.shift() : null;\n  options = args.length ? args.shift() : {};\n\n  // Ensure we have correct values\n  if(rootCollection != null && typeof rootCollection == 'object') {\n    options = rootCollection;\n    rootCollection = null;\n  }\n\n  // Establish read preference\n  var readPreference = options.readPreference || 'primary';\n  // Check if we are returning by id not filename\n  var byId = options['id'] != null ? options['id'] : false;\n  // Fetch item\n  var rootCollectionFinal = rootCollection != null ? rootCollection : GridStore.DEFAULT_ROOT_COLLECTION;\n  var items = [];\n  db.collection((rootCollectionFinal + \".files\"), function(err, collection) {\n    if(err) return callback(err);\n\n    collection.find({}, {readPreference:readPreference}, function(err, cursor) {\n      if(err) return callback(err);\n\n      cursor.each(function(err, item) {\n        if(item != null) {\n          items.push(byId ? item._id : item.filename);\n        } else {\n          callback(err, items);\n        }\n      });\n    });\n  });\n};",
   "ctx": {
    "type": "method",
    "receiver": "GridStore",
    "name": "list",
    "string": "GridStore.list()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database to query."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "the name of the file."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[length]",
     "description": "the size of data to read."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[offset]",
     "description": "the offset from the head of the file of which to start reading from."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "the options for the file."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method executes. A string with an error message will be passed to the first parameter when the length and offset combination exceeds the length of the file while an Error object will be passed if other forms of error occured, otherwise, a string is passed. The second parameter will contain the data read if successful or null if an error occured."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reads the contents of a file.</p>\n\n<p>This method has the following signatures</p>\n\n<p>(db, name, callback)<br />(db, name, length, callback)<br />(db, name, length, offset, callback)<br />(db, name, length, offset, options, callback)</p>",
    "summary": "<p>Reads the contents of a file.</p>",
    "body": "<p>This method has the following signatures</p>\n\n<p>(db, name, callback)<br />(db, name, length, callback)<br />(db, name, length, offset, callback)<br />(db, name, length, offset, options, callback)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.read = function(db, name, length, offset, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  length = args.length ? args.shift() : null;\n  offset = args.length ? args.shift() : null;\n  options = args.length ? args.shift() : null;\n\n  new GridStore(db, name, \"r\", options).open(function(err, gridStore) {\n    if(err) return callback(err);\n    // Make sure we are not reading out of bounds\n    if(offset && offset >= gridStore.length) return callback(\"offset larger than size of file\", null);\n    if(length && length > gridStore.length) return callback(\"length is larger than the size of the file\", null);\n    if(offset && length && (offset + length) > gridStore.length) return callback(\"offset and length is larger than the size of the file\", null);\n\n    if(offset != null) {\n      gridStore.seek(offset, function(err, gridStore) {\n        if(err) return callback(err);\n        gridStore.read(length, callback);\n      });\n    } else {\n      gridStore.read(length, callback);\n    }\n  });\n};",
   "ctx": {
    "type": "method",
    "receiver": "GridStore",
    "name": "read",
    "string": "GridStore.read()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database to query."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "name",
     "description": "the name of the file."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[separator]",
     "description": "the character to be recognized as the newline separator."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "file options."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. The first parameter will be null and the second parameter will contain an array of strings representing the entire data, each element representing a line including the separator character."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reads the data of this file.</p>",
    "summary": "<p>Reads the data of this file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.readlines = function(db, name, separator, options, callback) {\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  separator = args.length ? args.shift() : null;\n  options = args.length ? args.shift() : null;\n\n  var finalSeperator = separator == null ? \"\\n\" : separator;\n  new GridStore(db, name, \"r\", options).open(function(err, gridStore) {\n    if(err) return callback(err);\n    gridStore.readlines(finalSeperator, callback);\n  });\n};",
   "ctx": {
    "type": "method",
    "receiver": "GridStore",
    "name": "readlines",
    "string": "GridStore.readlines()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "the database to interact with."
    },
    {
     "type": "param",
     "types": [
      "String",
      "Array"
     ],
     "name": "names",
     "description": "the name/names of the files to delete."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "the options for the files."
    },
    {
     "type": "callback",
     "string": "{Function} this will be called after this method is executed. The first parameter will contain an Error object if an error occured or null otherwise. The second parameter will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deletes the chunks and metadata information of a file from GridFS.</p>",
    "summary": "<p>Deletes the chunks and metadata information of a file from GridFS.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.unlink = function(db, names, options, callback) {\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 2);\n  callback = args.pop();\n  options = args.length ? args.shift() : {};\n\n  // Get the write concern\n  var writeConcern = _getWriteConcern(db, options);\n\n  // List of names\n  if(names.constructor == Array) {\n    var tc = 0;\n    for(var i = 0; i < names.length; i++) {\n      ++tc;\n      GridStore.unlink(db, names[i], options, function(result) {\n        if(--tc == 0) {\n            callback(null, self);\n        }\n      });\n    }\n  } else {\n    new GridStore(db, names, \"w\", options).open(function(err, gridStore) {\n      if(err) return callback(err);\n      deleteChunks(gridStore, function(err, result) {\n        if(err) return callback(err);\n        gridStore.collection(function(err, collection) {\n          if(err) return callback(err);\n          collection.remove({'_id':gridStore.fileId}, writeConcern, function(err, result) {\n            callback(err, self);\n          });\n        });\n      });\n    });\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "GridStore",
    "name": "unlink",
    "string": "GridStore.unlink()"
   }
  },
  {
   "tags": [
    {
     "type": "field",
     "string": "chunkSize"
    },
    {
     "type": "type",
     "types": [
      "Number"
     ]
    },
    {
     "type": "getter",
     "string": ""
    },
    {
     "type": "setter",
     "string": ""
    },
    {
     "type": "property",
     "string": "return number of bytes in the current chunkSize."
    }
   ],
   "description": {
    "full": "<p>Returns the current chunksize of the file.</p>",
    "summary": "<p>Returns the current chunksize of the file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(GridStore.prototype, \"chunkSize\", { enumerable: true\n , get: function () {\n     return this.internalChunkSize;\n   }\n , set: function(value) {\n     if(!(this.mode[0] == \"w\" && this.position == 0 && this.uploadDate == null)) {\n       this.internalChunkSize = this.internalChunkSize;\n     } else {\n       this.internalChunkSize = value;\n     }\n   }\n});"
  },
  {
   "tags": [
    {
     "type": "field",
     "string": "md5"
    },
    {
     "type": "type",
     "types": [
      "Number"
     ]
    },
    {
     "type": "getter",
     "string": ""
    },
    {
     "type": "setter",
     "string": ""
    },
    {
     "type": "property",
     "string": "return this files md5 checksum."
    }
   ],
   "description": {
    "full": "<p>The md5 checksum for this file.</p>",
    "summary": "<p>The md5 checksum for this file.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(GridStore.prototype, \"md5\", { enumerable: true\n , get: function () {\n     return this.internalMd5;\n   }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>GridStore Streaming methods<br /> Handles the correct return of the writeable stream status<br /> @ignore</p>",
    "summary": "<p>GridStore Streaming methods<br /> Handles the correct return of the writeable stream status<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(GridStore.prototype, \"writable\", { enumerable: true\n , get: function () {\n    if(this._writeable == null) {\n      this._writeable = this.mode != null && this.mode.indexOf(\"w\") != -1;\n    }\n    // Return the _writeable\n    return this._writeable;\n  }\n , set: function(value) {\n    this._writeable = value;\n  }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the correct return of the readable stream status<br /> @ignore</p>",
    "summary": "<p>Handles the correct return of the readable stream status<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(GridStore.prototype, \"readable\", { enumerable: true\n , get: function () {\n    if(this._readable == null) {\n      this._readable = this.mode != null && this.mode.indexOf(\"r\") != -1;\n    }\n    return this._readable;\n  }\n , set: function(value) {\n    this._readable = value;\n  }\n});\n\nGridStore.prototype.paused;"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the correct setting of encoding for the stream<br /> @ignore</p>",
    "summary": "<p>Handles the correct setting of encoding for the stream<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "GridStore.prototype.setEncoding = fs.ReadStream.prototype.setEncoding;",
   "ctx": {
    "type": "property",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "setEncoding",
    "value": "fs.ReadStream.prototype.setEncoding",
    "string": "GridStore.prototype.setEncoding"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the end events<br /> @ignore</p>",
    "summary": "<p>Handles the end events<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "GridStore.prototype.end = function end(data) {\n  var self = this;\n  // allow queued data to write before closing\n  if(!this.writable) return;\n  this.writable = false;\n\n  if(data) {\n    this._q.push(data);\n  }\n\n  this.on('drain', function () {\n    self.close(function (err) {\n      if (err) return _error(self, err);\n      self.emit('close');\n    });\n  });\n\n  _flush(self);\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "end",
    "string": "GridStore.prototype.end()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the normal writes to gridstore<br /> @ignore</p>",
    "summary": "<p>Handles the normal writes to gridstore<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _writeNormal = function(self, data, close, callback) {\n  // If we have a buffer write it using the writeBuffer method\n  if(Buffer.isBuffer(data)) {\n    return writeBuffer(self, data, close, callback);\n  } else {\n    return writeBuffer(self, new Buffer(data, 'binary'), close, callback);\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "_writeNormal",
    "string": "_writeNormal()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String",
      "Buffer"
     ],
     "name": "data",
     "description": "the data to write."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[close]",
     "description": "closes this file after writing if set to true."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain null and the second one will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Writes some data. This method will work properly only if initialized with mode \"w\" or \"w+\".</p>",
    "summary": "<p>Writes some data. This method will work properly only if initialized with mode \"w\" or \"w+\".</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.write = function write(data, close, callback) {\n  // If it's a normal write delegate the call\n  if(typeof close == 'function' || typeof callback == 'function') {\n    return _writeNormal(this, data, close, callback);\n  }\n\n  // Otherwise it's a stream write\n  var self = this;\n  if (!this.writable) {\n    throw new Error('GridWriteStream is not writable');\n  }\n\n  // queue data until we open.\n  if(!this._opened) {\n    // Set up a queue to save data until gridstore object is ready\n    this._q = [];\n    _openStream(self);\n    this._q.push(data);\n    return false;\n  }\n\n  // Push data to queue\n  this._q.push(data);\n  _flush(this);\n  // Return write successful\n  return true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "write",
    "string": "GridStore.prototype.write()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the destroy part of a stream<br /> @ignore</p>",
    "summary": "<p>Handles the destroy part of a stream<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "GridStore.prototype.destroy = function destroy() {\n  // close and do not emit any more events. queued data is not sent.\n  if(!this.writable) return;\n  this.readable = false;\n  if(this.writable) {\n    this.writable = false;\n    this._q.length = 0;\n    this.emit('close');\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "destroy",
    "string": "GridStore.prototype.destroy()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the destroySoon part of a stream<br /> @ignore</p>",
    "summary": "<p>Handles the destroySoon part of a stream<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "GridStore.prototype.destroySoon = function destroySoon() {\n  // as soon as write queue is drained, destroy.\n  // may call destroy immediately if no data is queued.\n  if(!this._q.length) {\n    return this.destroy();\n  }\n  this._destroying = true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "destroySoon",
    "string": "GridStore.prototype.destroySoon()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Handles the pipe part of the stream<br /> @ignore</p>",
    "summary": "<p>Handles the pipe part of the stream<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "GridStore.prototype.pipe = function(destination, options) {\n  var self = this;\n  // Open the gridstore\n  this.open(function(err, result) {\n    if(err) _errorRead(self, err);\n    if(!self.readable) return;\n    // Set up the pipe\n    self._pipe(destination, options);\n    // Emit the stream is open\n    self.emit('open');\n    // Read from the stream\n    _read(self);\n  });\n  return destination;\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "pipe",
    "string": "GridStore.prototype.pipe()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Internal module methods<br /> @ignore</p>",
    "summary": "<p>Internal module methods<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _read = function _read(self) {\n  if (!self.readable || self.paused || self.reading) {\n    return;\n  }\n\n  self.reading = true;\n  var stream = self._stream = self.stream();\n  stream.paused = self.paused;\n\n  stream.on('data', function (data) {\n    if (self._decoder) {\n      var str = self._decoder.write(data);\n      if (str.length) self.emit('data', str);\n    } else {\n      self.emit('data', data);\n    }\n  });\n\n  stream.on('end', function (data) {\n    self.emit('end', data);\n  });\n\n  stream.on('error', function (data) {\n    _errorRead(self, data);\n  });\n\n  stream.on('close', function (data) {\n    self.emit('close', data);\n  });\n\n  self.pause = function () {\n    // native doesn't always pause.\n    // bypass its pause() method to hack it\n    self.paused = stream.paused = true;\n  }\n\n  self.resume = function () {\n    if(!self.paused) return;\n\n    self.paused = false;\n    stream.resume();\n    self.readable = stream.readable;\n  }\n\n  self.destroy = function () {\n    self.readable = false;\n    stream.destroy();\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "_read",
    "string": "_read()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>pause</p>",
    "summary": "<p>pause</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.pause = function pause () {\n  // Overridden when the GridStore opens.\n  this.paused = true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "pause",
    "string": "GridStore.prototype.pause()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>resume</p>",
    "summary": "<p>resume</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "GridStore.prototype.resume = function resume () {\n  // Overridden when the GridStore opens.\n  this.paused = false;\n}",
   "ctx": {
    "type": "method",
    "constructor": "GridStore",
    "cons": "GridStore",
    "name": "resume",
    "string": "GridStore.prototype.resume()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Internal module methods<br /> @ignore</p>",
    "summary": "<p>Internal module methods<br /> @ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _flush = function _flush(self, _force) {\n  if (!self._opened) return;\n  if (!_force && self._flushing) return;\n  self._flushing = true;\n\n  // write the entire q to gridfs\n  if (!self._q.length) {\n    self._flushing = false;\n    self.emit('drain');\n\n    if(self._destroying) {\n      self.destroy();\n    }\n    return;\n  }\n\n  self.write(self._q.shift(), function (err, store) {\n    if (err) return _error(self, err);\n    self.emit('progress', store.position);\n    _flush(self, true);\n  });\n}\n\nvar _openStream = function _openStream (self) {\n  if(self._opening == true) return;\n  self._opening = true;\n\n  // Open the store\n  self.open(function (err, gridstore) {\n    if (err) return _error(self, err);\n    self._opened = true;\n    self.emit('open');\n    _flush(self);\n  });\n}\n\nvar _error = function _error(self, err) {\n  self.destroy();\n  self.emit('error', err);\n}\n\nvar _errorRead = function _errorRead (self, err) {\n  self.readable = false;\n  self.emit('error', err);\n}",
   "ctx": {
    "type": "function",
    "name": "_flush",
    "string": "_flush()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _hasWriteConcern = function(errorOptions) {\n  return errorOptions == true\n    || errorOptions.w > 0\n    || errorOptions.w == 'majority'\n    || errorOptions.j == true\n    || errorOptions.journal == true\n    || errorOptions.fsync == true\n}",
   "ctx": {
    "type": "function",
    "name": "_hasWriteConcern",
    "string": "_hasWriteConcern()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _setWriteConcernHash = function(options) {\n  var finalOptions = {};\n  if(options.w != null) finalOptions.w = options.w;  \n  if(options.journal == true) finalOptions.j = options.journal;\n  if(options.j == true) finalOptions.j = options.j;\n  if(options.fsync == true) finalOptions.fsync = options.fsync;\n  if(options.wtimeout != null) finalOptions.wtimeout = options.wtimeout;  \n  return finalOptions;\n}",
   "ctx": {
    "type": "function",
    "name": "_setWriteConcernHash",
    "string": "_setWriteConcernHash()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _getWriteConcern = function(self, options) {\n  // Final options\n  var finalOptions = {w:1};\n  options = options || {};\n\n  // Local options verification\n  if(options.w != null || typeof options.j == 'boolean' || typeof options.journal == 'boolean' || typeof options.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(options);\n  } else if(options.safe != null && typeof options.safe == 'object') {\n    finalOptions = _setWriteConcernHash(options.safe);\n  } else if(typeof options.safe == \"boolean\") {\n    finalOptions = {w: (options.safe ? 1 : 0)};\n  } else if(self.options.w != null || typeof self.options.j == 'boolean' || typeof self.options.journal == 'boolean' || typeof self.options.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(self.options);\n  } else if(self.safe.w != null || typeof self.safe.j == 'boolean' || typeof self.safe.journal == 'boolean' || typeof self.safe.fsync == 'boolean') {\n    finalOptions = _setWriteConcernHash(self.safe);\n  } else if(typeof self.safe == \"boolean\") {\n    finalOptions = {w: (self.safe ? 1 : 0)};\n  }\n\n  // Ensure we don't have an invalid combination of write concerns\n  if(finalOptions.w < 1 \n    && (finalOptions.journal == true || finalOptions.j == true || finalOptions.fsync == true)) throw new Error(\"No acknowledgement using w < 1 cannot be combined with journal:true or fsync:true\");\n\n  // Return the options\n  return finalOptions;\n}",
   "ctx": {
    "type": "function",
    "name": "_getWriteConcern",
    "string": "_getWriteConcern()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports.GridStore = GridStore;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "GridStore",
    "value": "GridStore",
    "string": "exports.GridStore"
   }
  }
 ],
 "readstream": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a GridFS File Stream."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "autoclose",
     "description": "automatically close file when the stream reaches the end."
    },
    {
     "type": "param",
     "types": [
      "GridStore"
     ],
     "name": "cursor",
     "description": "a cursor object that the stream wraps."
    },
    {
     "type": "return",
     "types": [
      "ReadStream"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>ReadStream</p>\n\n<p>Returns a stream interface for the <strong>file</strong>.</p>\n\n<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>end</strong> {function() {}} the end event triggers when there is no more documents available.<br /> - <strong>close</strong> {function() {}} the close event triggers when the stream is closed.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.</p>",
    "summary": "<p>ReadStream</p>",
    "body": "<p>Returns a stream interface for the <strong>file</strong>.</p>\n\n<p>Events<br /> - <strong>data</strong> {function(item) {}} the data event triggers when a document is ready.<br /> - <strong>end</strong> {function() {}} the end event triggers when there is no more documents available.<br /> - <strong>close</strong> {function() {}} the close event triggers when the stream is closed.<br /> - <strong>error</strong> {function(err) {}} the error event triggers if an error happens.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function ReadStream(autoclose, gstore) {\n  if (!(this instanceof ReadStream)) return new ReadStream(autoclose, gstore);\n  Stream.call(this);\n\n  this.autoclose = !!autoclose;\n  this.gstore = gstore;\n\n  this.finalLength = gstore.length - gstore.position;\n  this.completedLength = 0;\n  this.currentChunkNumber = gstore.currentChunk.chunkNumber;\n\n  this.paused = false;\n  this.readable = true;\n  this.pendingChunk = null;\n  this.executing = false;  \n  this.destroyed = false;\n\n  // Calculate the number of chunks\n  this.numberOfChunks = Math.ceil(gstore.length/gstore.chunkSize);\n\n  // This seek start position inside the current chunk\n  this.seekStartPosition = gstore.position - (this.currentChunkNumber * gstore.chunkSize);\n  \n  var self = this;\n  processor(function() {\n    self._execute();\n  });\n};",
   "ctx": {
    "type": "function",
    "name": "ReadStream",
    "string": "ReadStream()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Inherit from Stream</p>",
    "summary": "<p>Inherit from Stream</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ReadStream.prototype.__proto__ = Stream.prototype;",
   "ctx": {
    "type": "property",
    "constructor": "ReadStream",
    "cons": "ReadStream",
    "name": "__proto__",
    "value": "Stream.prototype",
    "string": "ReadStream.prototype.__proto__"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Flag stating whether or not this stream is readable.</p>",
    "summary": "<p>Flag stating whether or not this stream is readable.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadStream.prototype.readable;"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Flag stating whether or not this stream is paused.</p>",
    "summary": "<p>Flag stating whether or not this stream is paused.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadStream.prototype.paused;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ReadStream.prototype._execute = function() {\n  if(this.paused === true || this.readable === false) {\n    return;\n  }\n\n  var gstore = this.gstore;\n  var self = this;\n  // Set that we are executing\n  this.executing = true;\n\n  var last = false;\n  var toRead = 0;\n\n  if(gstore.currentChunk.chunkNumber >= (this.numberOfChunks - 1)) {\n    self.executing = false;    \n    last = true;    \n  }\n\n  // Data setup\n  var data = null;\n\n  // Read a slice (with seek set if none)\n  if(this.seekStartPosition > 0 && (gstore.currentChunk.length() - this.seekStartPosition) > 0) {\n    data = gstore.currentChunk.readSlice(gstore.currentChunk.length() - this.seekStartPosition);\n    this.seekStartPosition = 0;\n  } else {\n    data = gstore.currentChunk.readSlice(gstore.currentChunk.length());\n  }\n\n  var processNext = function() {\n    if(last === true) {\n      self.readable = false;\n      self.emit(\"end\");\n      \n      if(self.autoclose === true) {\n        if(gstore.mode[0] == \"w\") {\n          gstore.close(function(err, doc) {\n            if (err) {\n              self.emit(\"error\", err);\n              return;\n            }\n            self.readable = false;  \n            self.destroyed = true;        \n            self.emit(\"close\", doc);\n          });\n        } else {\n          self.readable = false;\n          self.destroyed = true;        \n          self.emit(\"close\");\n        }\n      }\n    } else {\n      gstore._nthChunk(gstore.currentChunk.chunkNumber + 1, function(err, chunk) {\n        if(err) {\n          self.readable = false;\n          if(self.listeners(\"error\").length > 0)\n            self.emit(\"error\", err);\n          self.executing = false;\n          return;\n        }\n\n        self.pendingChunk = chunk;\n        if(self.paused === true) {\n          self.executing = false;\n          return;\n        }\n\n        gstore.currentChunk = self.pendingChunk;\n        self._execute();        \n      });\n    }    \n  }\n\n  // Return the data\n  if(data != null && gstore.currentChunk.chunkNumber == self.currentChunkNumber) {\n    self.currentChunkNumber = self.currentChunkNumber + 1;\n    self.completedLength += data.length;\n    self.pendingChunk = null;\n    // Send the data\n    process.nextTick(function() {\n      self.emit(\"data\", data); \n      processNext();           \n    })\n  } else {\n    processNext();\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "ReadStream",
    "cons": "ReadStream",
    "name": "_execute",
    "string": "ReadStream.prototype._execute()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Pauses this stream, then no farther events will be fired.</p>",
    "summary": "<p>Pauses this stream, then no farther events will be fired.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ReadStream.prototype.pause = function() {\n  if(!this.executing) {\n    this.paused = true;    \n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "ReadStream",
    "cons": "ReadStream",
    "name": "pause",
    "string": "ReadStream.prototype.pause()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Destroys the stream, then no farther events will be fired.</p>",
    "summary": "<p>Destroys the stream, then no farther events will be fired.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ReadStream.prototype.destroy = function() {\n  if(this.destroyed) return;\n  this.destroyed = true;\n  this.readable = false;\n  // Emit close event\n  this.emit(\"close\");\n};",
   "ctx": {
    "type": "method",
    "constructor": "ReadStream",
    "cons": "ReadStream",
    "name": "destroy",
    "string": "ReadStream.prototype.destroy()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Resumes this stream.</p>",
    "summary": "<p>Resumes this stream.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ReadStream.prototype.resume = function() {\n  if(this.paused === false || !this.readable) {\n    return;\n  }\n    \n  this.paused = false;\n  var self = this;\n  processor(function() {\n    self._execute();\n  });\n};\n\nexports.ReadStream = ReadStream;",
   "ctx": {
    "type": "method",
    "constructor": "ReadStream",
    "cons": "ReadStream",
    "name": "resume",
    "string": "ReadStream.prototype.resume()"
   }
  }
 ],
 "grid": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the Grid."
    },
    {
     "type": "param",
     "types": [
      "Db"
     ],
     "name": "db",
     "description": "A database instance to interact with."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[fsName]",
     "description": "optional different root collection for GridFS."
    },
    {
     "type": "return",
     "types": [
      "Grid"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of a simple Grid interface.</p>",
    "summary": "<p>A class representation of a simple Grid interface.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Grid(db, fsName) {\n\n  if(!(this instanceof Grid)) return new Grid(db, fsName);\n\n  this.db = db;\n  this.fsName = fsName == null ? GridStore.DEFAULT_ROOT_COLLECTION : fsName;\n}",
   "ctx": {
    "type": "function",
    "name": "Grid",
    "string": "Grid()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "data",
     "description": "buffer with Binary Data."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "the options for the files."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. The first parameter will contain an Error object if an error occured or null otherwise. The second parameter will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Puts binary data to the grid</p>\n\n<p>Options<br /> - <strong>_id</strong> {Any}, unique id for this file<br /> - <strong>root</strong> {String}, root collection to use. Defaults to <strong>{GridStore.DEFAULT_ROOT_COLLECTION}</strong>.<br /> - <strong>content_type</strong> {String}, mime type of the file. Defaults to <strong>{GridStore.DEFAULT_CONTENT_TYPE}</strong>.<br /> - <strong>chunk_size</strong> {Number}, size for the chunk. Defaults to <strong>{Chunk.DEFAULT_CHUNK_SIZE}</strong>.<br /> - <strong>metadata</strong> {Object}, arbitrary data the user wants to store.</p>",
    "summary": "<p>Puts binary data to the grid</p>",
    "body": "<p>Options<br /> - <strong>_id</strong> {Any}, unique id for this file<br /> - <strong>root</strong> {String}, root collection to use. Defaults to <strong>{GridStore.DEFAULT_ROOT_COLLECTION}</strong>.<br /> - <strong>content_type</strong> {String}, mime type of the file. Defaults to <strong>{GridStore.DEFAULT_CONTENT_TYPE}</strong>.<br /> - <strong>chunk_size</strong> {Number}, size for the chunk. Defaults to <strong>{Chunk.DEFAULT_CHUNK_SIZE}</strong>.<br /> - <strong>metadata</strong> {Object}, arbitrary data the user wants to store.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Grid.prototype.put = function(data, options, callback) {\n  var self = this;\n  var args = Array.prototype.slice.call(arguments, 1);\n  callback = args.pop();\n  options = args.length ? args.shift() : {};\n  // If root is not defined add our default one\n  options['root'] = options['root'] == null ? this.fsName : options['root'];\n\n  // Return if we don't have a buffer object as data\n  if(!(Buffer.isBuffer(data))) return callback(new Error(\"Data object must be a buffer object\"), null);\n  // Get filename if we are using it\n  var filename = options['filename'] || null;\n  // Get id if we are using it\n  var id = options['_id'] || null;\n  // Create gridstore\n  var gridStore = new GridStore(this.db, id, filename, \"w\", options);\n  gridStore.open(function(err, gridStore) {\n    if(err) return callback(err, null);\n\n    gridStore.write(data, function(err, result) {\n      if(err) return callback(err, null);\n\n      gridStore.close(function(err, result) {\n        if(err) return callback(err, null);\n        callback(null, result);\n      })\n    })\n  })\n}",
   "ctx": {
    "type": "method",
    "constructor": "Grid",
    "cons": "Grid",
    "name": "put",
    "string": "Grid.prototype.put()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Any"
     ],
     "name": "id",
     "description": "for file."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. The first parameter will contain an Error object if an error occured or null otherwise. The second parameter will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Get binary data to the grid</p>",
    "summary": "<p>Get binary data to the grid</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Grid.prototype.get = function(id, callback) {\n  // Create gridstore\n  var gridStore = new GridStore(this.db, id, null, \"r\", {root:this.fsName});\n  gridStore.open(function(err, gridStore) {\n    if(err) return callback(err, null);\n\n    // Return the data\n    gridStore.read(function(err, data) {\n      return callback(err, data)\n    });\n  })\n}",
   "ctx": {
    "type": "method",
    "constructor": "Grid",
    "cons": "Grid",
    "name": "get",
    "string": "Grid.prototype.get()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Any"
     ],
     "name": "id",
     "description": "for file."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after this method is executed. The first parameter will contain an Error object if an error occured or null otherwise. The second parameter will contain a reference to this object."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Delete file from grid</p>",
    "summary": "<p>Delete file from grid</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Grid.prototype.delete = function(id, callback) {\n  // Create gridstore\n  GridStore.unlink(this.db, id, {root:this.fsName}, function(err, result) {\n    if(err) return callback(err, false);\n    return callback(null, true);\n  });\n}\n\nexports.Grid = Grid;",
   "ctx": {
    "type": "method",
    "constructor": "Grid",
    "cons": "Grid",
    "name": "delete",
    "string": "Grid.prototype.delete()"
   }
  }
 ],
 "server": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Server connection."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "host",
     "description": "the server host"
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "port",
     "description": "the server port"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "optional options for insert command"
    }
   ],
   "description": {
    "full": "<p>Class representing a single MongoDB Server connection</p>\n\n<p>Options<br /> - <strong>ssl</strong> {Boolean, default:false}, use ssl connection (needs to have a mongod server with ssl support)<br /> - <strong>sslValidate</strong> {Boolean, default:false}, validate mongod server certificate against ca (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCA</strong> {Array, default:null}, Array of valid certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCert</strong> {Buffer/String, default:null}, String or buffer containing the certificate we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslKey</strong> {Buffer/String, default:null}, String or buffer containing the certificate private key we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslPass</strong> {Buffer/String, default:null}, String or buffer containing the certificate password (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>poolSize</strong> {Number, default:5}, number of connections in the connection pool, set to 5 as default for legacy reasons.<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>auto_reconnect</strong> {Boolean, default:false}, reconnect on error.<br /> - <strong>disableDriverBSONSizeCheck</strong> {Boolean, default:false}, force the server to error if the BSON message is to big</p>",
    "summary": "<p>Class representing a single MongoDB Server connection</p>",
    "body": "<p>Options<br /> - <strong>ssl</strong> {Boolean, default:false}, use ssl connection (needs to have a mongod server with ssl support)<br /> - <strong>sslValidate</strong> {Boolean, default:false}, validate mongod server certificate against ca (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCA</strong> {Array, default:null}, Array of valid certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCert</strong> {Buffer/String, default:null}, String or buffer containing the certificate we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslKey</strong> {Buffer/String, default:null}, String or buffer containing the certificate private key we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslPass</strong> {Buffer/String, default:null}, String or buffer containing the certificate password (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>poolSize</strong> {Number, default:5}, number of connections in the connection pool, set to 5 as default for legacy reasons.<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>auto_reconnect</strong> {Boolean, default:false}, reconnect on error.<br /> - <strong>disableDriverBSONSizeCheck</strong> {Boolean, default:false}, force the server to error if the BSON message is to big</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Server(host, port, options) {\n  // Set up Server instance\n  if(!(this instanceof Server)) return new Server(host, port, options);\n\n  // Set up event emitter\n  Base.call(this);\n\n  // Ensure correct values\n  if(port != null && typeof port == 'object') {\n    options = port;\n    port = Connection.DEFAULT_PORT;\n  }\n\n  var self = this;\n  this.host = host;\n  this.port = port;\n  this.options = options == null ? {} : options;\n  this.internalConnection;\n  this.internalMaster = false;\n  this.connected = false;  \n  this.poolSize = this.options.poolSize == null ? 5 : this.options.poolSize;\n  this.disableDriverBSONSizeCheck = this.options.disableDriverBSONSizeCheck != null ? this.options.disableDriverBSONSizeCheck : false;\n  this._used = false;\n  this.replicasetInstance = null;\n\n  // Emit open setup\n  this.emitOpen = this.options.emitOpen || true;\n  // Set ssl as connection method\n  this.ssl = this.options.ssl == null ? false : this.options.ssl;\n  // Set ssl validation\n  this.sslValidate = this.options.sslValidate == null ? false : this.options.sslValidate;\n  // Set the ssl certificate authority (array of Buffer/String keys)\n  this.sslCA = Array.isArray(this.options.sslCA) ? this.options.sslCA : null;\n  // Certificate to present to the server\n  this.sslCert = this.options.sslCert;\n  // Certificate private key if in separate file\n  this.sslKey = this.options.sslKey;\n  // Password to unlock private key\n  this.sslPass = this.options.sslPass;\n  // Server capabilities\n  this.serverCapabilities = null;\n  // Set server name\n  this.name = format(\"%s:%s\", host, port);\n\n  // Ensure we are not trying to validate with no list of certificates\n  if(this.sslValidate && (!Array.isArray(this.sslCA) || this.sslCA.length == 0)) {\n    throw new Error(\"The driver expects an Array of CA certificates in the sslCA parameter when enabling sslValidate\");\n  }\n\n  // Contains the isMaster information returned from the server\n  this.isMasterDoc;\n\n  // Set default connection pool options\n  this.socketOptions = this.options.socketOptions != null ? this.options.socketOptions : {};\n  if(this.disableDriverBSONSizeCheck) this.socketOptions.disableDriverBSONSizeCheck = this.disableDriverBSONSizeCheck;\n\n  // Set ssl up if it's defined\n  if(this.ssl) {\n    this.socketOptions.ssl = true;\n    // Set ssl validation\n    this.socketOptions.sslValidate = this.sslValidate == null ? false : this.sslValidate;\n    // Set the ssl certificate authority (array of Buffer/String keys)\n    this.socketOptions.sslCA = Array.isArray(this.sslCA) ? this.sslCA : null;\n    // Set certificate to present\n    this.socketOptions.sslCert = this.sslCert;\n    // Set certificate to present\n    this.socketOptions.sslKey = this.sslKey;\n    // Password to unlock private key\n    this.socketOptions.sslPass = this.sslPass;\n  }\n\n  // Set up logger if any set\n  this.logger = this.options.logger != null\n    && (typeof this.options.logger.debug == 'function')\n    && (typeof this.options.logger.error == 'function')\n    && (typeof this.options.logger.log == 'function')\n      ? this.options.logger : {error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}};\n\n  // Just keeps list of events we allow\n  this.eventHandlers = {error:[], parseError:[], poolReady:[], message:[], close:[], timeout:[]};\n  // Internal state of server connection\n  this._serverState = 'disconnected';\n  // Contains state information about server connection\n  this._state = {'runtimeStats': {'queryStats':new RunningStats()}};\n  // Do we record server stats or not\n  this.recordQueryStats = false;\n\n  // Allow setting the socketTimeoutMS on all connections\n  // to work around issues such as secondaries blocking due to compaction\n  utils.setSocketTimeoutProperty(this, this.socketOptions);\n};",
   "ctx": {
    "type": "function",
    "name": "Server",
    "string": "Server()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "inherits(Server, Base);\n\n//\n//  Deprecated, USE ReadPreferences class\n//\nServer.READ_PRIMARY = ReadPreference.PRIMARY;\nServer.READ_SECONDARY = ReadPreference.SECONDARY_PREFERRED;\nServer.READ_SECONDARY_ONLY = ReadPreference.SECONDARY;"
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Always ourselves</p>",
    "summary": "<p>Always ourselves</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Server.prototype.setReadPreference = function(readPreference) {\n  this._readPreference = readPreference;  \n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "setReadPreference",
    "string": "Server.prototype.setReadPreference()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.isMongos = function() {\n  return this.isMasterDoc != null && this.isMasterDoc['msg'] == \"isdbgrid\" ? true : false;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "isMongos",
    "string": "Server.prototype.isMongos()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype._isUsed = function() {\n  return this._used;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "_isUsed",
    "string": "Server.prototype._isUsed()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.close = function(callback) {\n  // Set server status as disconnected\n  this._serverState = 'destroyed';\n  // Remove all local listeners\n  this.removeAllListeners();\n\n  if(this.connectionPool != null) {\n    // Remove all the listeners on the pool so it does not fire messages all over the place\n    this.connectionPool.removeAllEventListeners();\n    // Close the connection if it's open\n    this.connectionPool.stop(true);\n  }\n\n  // Emit close event\n  if(this.db && !this.isSetMember()) {\n    var self = this;\n    processor(function() {\n      self._emitAcrossAllDbInstances(self, null, \"close\", null, null, true)\n    })\n\n    // Flush out any remaining call handlers\n    self._flushAllCallHandlers(utils.toError(\"Connection Closed By Application\"));\n  }\n\n  // Peform callback if present\n  if(typeof callback === 'function') callback(null);\n};\n\nServer.prototype.isDestroyed = function() {\n  return this._serverState == 'destroyed';\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "close",
    "string": "Server.prototype.close()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.isConnected = function() {\n  return this.connectionPool != null && this.connectionPool.isConnected();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "isConnected",
    "string": "Server.prototype.isConnected()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.canWrite = Server.prototype.isConnected;\nServer.prototype.canRead = Server.prototype.isConnected;\n\nServer.prototype.isAutoReconnect = function() {\n  if(this.isSetMember()) return false;\n  return this.options.auto_reconnect != null ? this.options.auto_reconnect : true;\n}",
   "ctx": {
    "type": "property",
    "constructor": "Server",
    "cons": "Server",
    "name": "canWrite",
    "value": "Server.prototype.isConnected",
    "string": "Server.prototype.canWrite"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.allServerInstances = function() {\n  return [this];\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "allServerInstances",
    "string": "Server.prototype.allServerInstances()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.isSetMember = function() {\n  return this.replicasetInstance != null || this.mongosInstance != null;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "isSetMember",
    "string": "Server.prototype.isSetMember()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.setSocketOptions = function(options) {\n  var connections = this.allRawConnections();\n  for(var i = 0; i < connections.length; i++) {\n    connections[i].setSocketOptions(options);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "setSocketOptions",
    "string": "Server.prototype.setSocketOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "ReplSet"
     ],
     "name": "replset",
     "description": ""
    },
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Assigns a replica set to this <code>server</code>.</p>",
    "summary": "<p>Assigns a replica set to this <code>server</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Server.prototype.assignReplicaSet = function (replset) {\n  this.replicasetInstance = replset;\n  this.inheritReplSetOptionsFrom(replset);\n  this.enableRecordQueryStats(replset.recordQueryStats);\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "assignReplicaSet",
    "string": "Server.prototype.assignReplicaSet()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "ReplSet"
     ],
     "name": "replset",
     "description": ""
    },
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Takes needed options from <code>replset</code> and overwrites<br />our own options.</p>",
    "summary": "<p>Takes needed options from <code>replset</code> and overwrites<br />our own options.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Server.prototype.inheritReplSetOptionsFrom = function (replset) {\n  this.socketOptions = {};\n  this.socketOptions.connectTimeoutMS = replset.options.socketOptions.connectTimeoutMS || 30000;\n\n  if(replset.options.ssl) {\n    // Set ssl on\n    this.socketOptions.ssl = true;\n    // Set ssl validation\n    this.socketOptions.sslValidate = replset.options.sslValidate == null ? false : replset.options.sslValidate;\n    // Set the ssl certificate authority (array of Buffer/String keys)\n    this.socketOptions.sslCA = Array.isArray(replset.options.sslCA) ? replset.options.sslCA : null;\n    // Set certificate to present\n    this.socketOptions.sslCert = replset.options.sslCert;\n    // Set certificate to present\n    this.socketOptions.sslKey = replset.options.sslKey;\n    // Password to unlock private key\n    this.socketOptions.sslPass = replset.options.sslPass;\n  }\n\n  // If a socket option object exists clone it\n  if(utils.isObject(replset.options.socketOptions)) {\n    var keys = Object.keys(replset.options.socketOptions);\n    for(var i = 0; i < keys.length; i++)\n      this.socketOptions[keys[i]] = replset.options.socketOptions[keys[i]];\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "inheritReplSetOptionsFrom",
    "string": "Server.prototype.inheritReplSetOptionsFrom()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Opens this server connection.</p>",
    "summary": "<p>Opens this server connection.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Server.prototype.connect = function(dbInstance, options, callback) {\n  if('function' === typeof options) callback = options, options = {};\n  if(options == null) options = {};\n  if(!('function' === typeof callback)) callback = null;\n  var self = this;\n  // Save the options\n  this.options = options;\n\n  // Currently needed to work around problems with multiple connections in a pool with ssl\n  // TODO fix if possible\n  if(this.ssl == true) {\n    // Set up socket options for ssl\n    this.socketOptions.ssl = true;\n    // Set ssl validation\n    this.socketOptions.sslValidate = this.sslValidate == null ? false : this.sslValidate;\n    // Set the ssl certificate authority (array of Buffer/String keys)\n    this.socketOptions.sslCA = Array.isArray(this.sslCA) ? this.sslCA : null;\n    // Set certificate to present\n    this.socketOptions.sslCert = this.sslCert;\n    // Set certificate to present\n    this.socketOptions.sslKey = this.sslKey;\n    // Password to unlock private key\n    this.socketOptions.sslPass = this.sslPass;\n  }\n\n  // Let's connect\n  var server = this;\n  // Let's us override the main receiver of events\n  var eventReceiver = options.eventReceiver != null ? options.eventReceiver : this;\n  // Save reference to dbInstance\n  this.db = dbInstance;  // `db` property matches ReplSet and Mongos\n  this.dbInstances = [dbInstance];\n\n  // Force connection pool if there is one\n  if(server.connectionPool) server.connectionPool.stop();\n  // Set server state to connecting\n  this._serverState = 'connecting';\n\n  if(server.connectionPool != null) {\n    // Remove all the listeners on the pool so it does not fire messages all over the place\n    this.connectionPool.removeAllEventListeners();\n    // Close the connection if it's open\n    this.connectionPool.stop(true);    \n  }\n\n  this.connectionPool = new ConnectionPool(this.host, this.port, this.poolSize, dbInstance.bson, this.socketOptions);\n  var connectionPool = this.connectionPool;\n  // If ssl is not enabled don't wait between the pool connections\n  if(this.ssl == null || !this.ssl) connectionPool._timeToWait = null;\n  // Set logger on pool\n  connectionPool.logger = this.logger;\n  connectionPool.bson = dbInstance.bson;\n\n  // Set basic parameters passed in\n  var returnIsMasterResults = options.returnIsMasterResults == null ? false : options.returnIsMasterResults;\n\n  // Create a default connect handler, overriden when using replicasets\n  var connectCallback = function(_server) {\n    return function(err, reply) {  \n      // ensure no callbacks get called twice\n      var internalCallback = callback;\n      callback = null;\n      \n      // Assign the server\n      _server = _server != null ? _server : server;\n      \n      // If something close down the connection and removed the callback before\n      // proxy killed connection etc, ignore the erorr as close event was isssued\n      if(err != null && internalCallback == null) return;\n      // Internal callback\n      if(err != null) return internalCallback(err, null, _server);\n      _server.master = reply.documents[0].ismaster == 1 ? true : false;\n      _server.connectionPool.setMaxBsonSize(reply.documents[0].maxBsonObjectSize);\n      _server.connectionPool.setMaxMessageSizeBytes(reply.documents[0].maxMessageSizeBytes);\n      _server.connectionPool.setMaxWriteBatchSize(reply.documents[0].maxWriteBatchSize);\n      // Set server state to connEcted\n      _server._serverState = 'connected';\n      // Set server as connected\n      _server.connected = true;\n      // Save document returned so we can query it\n      _server.isMasterDoc = reply.documents[0];\n      \n      if(self.emitOpen) {        \n        _server._emitAcrossAllDbInstances(_server, eventReceiver, \"open\", null, returnIsMasterResults ? reply : null, null);        \n        self.emitOpen = false;\n      } else {\n        _server._emitAcrossAllDbInstances(_server, eventReceiver, \"reconnect\", null, returnIsMasterResults ? reply : null, null);        \n      }\n\n      // Set server capabilities\n      server.serverCapabilities = new ServerCapabilities(_server.isMasterDoc);      \n\n      // If we have it set to returnIsMasterResults\n      if(returnIsMasterResults) {\n        internalCallback(null, reply, _server);\n      } else {\n        internalCallback(null, dbInstance, _server);\n      }\n    }\n  };\n\n  // Let's us override the main connect callback\n  var connectHandler = options.connectHandler == null ? connectCallback(server) : options.connectHandler;\n\n  // Set up on connect method\n  connectionPool.on(\"poolReady\", function() {\n    // Create db command and Add the callback to the list of callbacks by the request id (mapping outgoing messages to correct callbacks)\n    var db_command = DbCommand.NcreateIsMasterCommand(dbInstance, dbInstance.databaseName);\n    // Check out a reader from the pool\n    var connection = connectionPool.checkoutConnection();\n    // Register handler for messages\n    server._registerHandler(db_command, false, connection, connectHandler);\n    // Write the command out\n    connection.write(db_command);\n  })\n\n  // Set up item connection\n  connectionPool.on(\"message\", function(message) {\n    // Attempt to parse the message\n    try {\n      // Create a new mongo reply\n      var mongoReply = new MongoReply()\n      // Parse the header\n      mongoReply.parseHeader(message, connectionPool.bson)\n\n      // If message size is not the same as the buffer size\n      // something went terribly wrong somewhere\n      if(mongoReply.messageLength != message.length) {\n        // Emit the error\n        if(eventReceiver.listeners(\"error\") && eventReceiver.listeners(\"error\").length > 0) eventReceiver.emit(\"error\", new Error(\"bson length is different from message length\"), server);\n        // Remove all listeners\n        server.removeAllListeners();\n      } else {\n        var startDate = new Date().getTime();\n\n        // Callback instance\n        var callbackInfo = server._findHandler(mongoReply.responseTo.toString());\n        // Abort if not a valid callbackInfo, don't try to call it\n        if(callbackInfo == null || callbackInfo.info == null) return;\n\n        // The command executed another request, log the handler again under that request id\n        if(mongoReply.requestId > 0 && mongoReply.cursorId.toString() != \"0\" \n          && callbackInfo && callbackInfo.info && callbackInfo.info.exhaust) {\n            server._reRegisterHandler(mongoReply.requestId, callbackInfo);\n        }\n\n        // Parse the body\n        mongoReply.parseBody(message, connectionPool.bson, callbackInfo.info.raw, function(err) {\n          if(err != null) {\n            // If pool connection is already closed\n            if(server._serverState === 'disconnected') return;\n            // Set server state to disconnected\n            server._serverState = 'disconnected';\n            // Remove all listeners and close the connection pool\n            server.removeAllListeners();\n            connectionPool.stop(true);\n\n            // If we have a callback return the error\n            if(typeof callback === 'function') {\n              // ensure no callbacks get called twice\n              var internalCallback = callback;\n              callback = null;\n              // Perform callback\n              internalCallback(err, null, server);\n            } else if(server.isSetMember()) {\n              if(server.listeners(\"parseError\") && server.listeners(\"parseError\").length > 0) server.emit(\"parseError\", utils.toError(err), server);\n            } else {\n              if(eventReceiver.listeners(\"parseError\") && eventReceiver.listeners(\"parseError\").length > 0) eventReceiver.emit(\"parseError\", utils.toError(err), server);\n            }\n\n            // If we are a single server connection fire errors correctly\n            if(!server.isSetMember()) {\n              // Fire all callback errors\n              server.__executeAllCallbacksWithError(err);\n              // Emit error\n              server._emitAcrossAllDbInstances(server, eventReceiver, \"parseError\", server, null, true);\n            }\n            // Short cut\n            return;\n          }\n\n          // Let's record the stats info if it's enabled\n          if(server.recordQueryStats == true && server._state['runtimeStats'] != null\n            && server._state.runtimeStats['queryStats'] instanceof RunningStats) {\n            // Add data point to the running statistics object\n            server._state.runtimeStats.queryStats.push(new Date().getTime() - callbackInfo.info.start);\n          }\n\n          // Dispatch the call\n          server._callHandler(mongoReply.responseTo, mongoReply, null);\n\n          // If we have an error about the server not being master or primary\n          if((mongoReply.responseFlag & (1 << 1)) != 0\n            && mongoReply.documents[0].code\n            && mongoReply.documents[0].code == 13436) {\n              server.close();\n          }\n        });\n      }\n    } catch (err) {\n      // Throw error in next tick\n      processor(function() {\n        throw err;\n      })\n    }\n  });\n\n  // Handle timeout\n  connectionPool.on(\"timeout\", function(err) {\n    // If pool connection is already closed\n    if(server._serverState === 'disconnected' \n      || server._serverState === 'destroyed') return;\n    // Set server state to disconnected\n    server._serverState = 'disconnected';\n    // If we have a callback return the error\n    if(typeof callback === 'function') {\n      // ensure no callbacks get called twice\n      var internalCallback = callback;\n      callback = null;\n      // Perform callback\n      internalCallback(err, null, server);\n    } else if(server.isSetMember()) {\n      if(server.listeners(\"timeout\") && server.listeners(\"timeout\").length > 0) server.emit(\"timeout\", err, server);\n    } else {\n      if(eventReceiver.listeners(\"timeout\") && eventReceiver.listeners(\"timeout\").length > 0) eventReceiver.emit(\"timeout\", err, server);\n    }\n\n    // If we are a single server connection fire errors correctly\n    if(!server.isSetMember()) {\n      // Fire all callback errors\n      server.__executeAllCallbacksWithError(err);\n      // Emit error\n      server._emitAcrossAllDbInstances(server, eventReceiver, \"timeout\", err, server, true);\n    }\n\n    // If we have autoConnect enabled let's fire up an attempt to reconnect\n    if(server.isAutoReconnect() \n      && !server.isSetMember()\n      && (server._serverState != 'destroyed')\n      && !server._reconnectInProgreess) {\n      // Set the number of retries\n      server._reconnect_retries = server.db.numberOfRetries;\n      // Attempt reconnect\n      server._reconnectInProgreess = true;\n      setTimeout(__attemptReconnect(server), server.db.retryMiliSeconds);\n    }    \n  });\n\n  // Handle errors\n  connectionPool.on(\"error\", function(message, connection, error_options) {\n    // If pool connection is already closed\n    if(server._serverState === 'disconnected' \n      || server._serverState === 'destroyed') return;\n    \n    // Set server state to disconnected\n    server._serverState = 'disconnected';\n    // Error message\n    var error_message = new Error(message && message.err ? message.err : message);\n    // Error message coming from ssl\n    if(error_options && error_options.ssl) error_message.ssl = true;\n\n    // If we have a callback return the error\n    if(typeof callback === 'function') {\n      // ensure no callbacks get called twice\n      var internalCallback = callback;\n      callback = null;\n      // Perform callback\n      internalCallback(error_message, null, server);\n    } else if(server.isSetMember()) {\n      if(server.listeners(\"error\") && server.listeners(\"error\").length > 0) server.emit(\"error\", error_message, server);\n    } else {\n      if(eventReceiver.listeners(\"error\") && eventReceiver.listeners(\"error\").length > 0) eventReceiver.emit(\"error\", error_message, server);\n    }\n\n    // If we are a single server connection fire errors correctly\n    if(!server.isSetMember()) {\n      // Fire all callback errors\n      server.__executeAllCallbacksWithError(error_message);\n      // Emit error\n      server._emitAcrossAllDbInstances(server, eventReceiver, \"error\", error_message, server, true);\n    }\n\n    // If we have autoConnect enabled let's fire up an attempt to reconnect\n    if(server.isAutoReconnect() \n      && !server.isSetMember()\n      && (server._serverState != 'destroyed')\n      && !server._reconnectInProgreess) {\n\n      // Set the number of retries\n      server._reconnect_retries = server.db.numberOfRetries;\n      // Attempt reconnect\n      server._reconnectInProgreess = true;\n      setTimeout(__attemptReconnect(server), server.db.retryMiliSeconds);\n    }    \n  });\n\n  // Handle close events\n  connectionPool.on(\"close\", function() {\n    // If pool connection is already closed\n    if(server._serverState === 'disconnected' \n      || server._serverState === 'destroyed') return;\n    // Set server state to disconnected\n    server._serverState = 'disconnected';\n    // If we have a callback return the error\n    if(typeof callback == 'function') {\n      // ensure no callbacks get called twice\n      var internalCallback = callback;\n      callback = null;\n      // Perform callback\n      internalCallback(new Error(\"connection closed\"), null, server);\n    } else if(server.isSetMember()) {\n      if(server.listeners(\"close\") && server.listeners(\"close\").length > 0) server.emit(\"close\", new Error(\"connection closed\"), server);\n    } else {\n      if(eventReceiver.listeners(\"close\") && eventReceiver.listeners(\"close\").length > 0) eventReceiver.emit(\"close\", new Error(\"connection closed\"), server);\n    }\n\n    // If we are a single server connection fire errors correctly\n    if(!server.isSetMember()) {\n      // Fire all callback errors\n      server.__executeAllCallbacksWithError(new Error(\"connection closed\"));\n      // Emit error\n      server._emitAcrossAllDbInstances(server, eventReceiver, \"close\", server, null, true);\n    }\n\n    // If we have autoConnect enabled let's fire up an attempt to reconnect\n    if(server.isAutoReconnect() \n      && !server.isSetMember()\n      && (server._serverState != 'destroyed')\n      && !server._reconnectInProgreess) {\n\n      // Set the number of retries\n      server._reconnect_retries = server.db.numberOfRetries;  \n      // Attempt reconnect\n      server._reconnectInProgreess = true;\n      setTimeout(__attemptReconnect(server), server.db.retryMiliSeconds);\n    }    \n  });",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "connect",
    "string": "Server.prototype.connect()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var __attemptReconnect = function(server) {\n    return function() {\n      // Attempt reconnect\n      server.connect(server.db, server.options, function(err, result) {\n        server._reconnect_retries = server._reconnect_retries - 1;\n\n        if(err) {\n          // Retry\n          if(server._reconnect_retries == 0 || server._serverState == 'destroyed') {\n            server._serverState = 'connected';\n            server._reconnectInProgreess = false\n            // Fire all callback errors\n            return server.__executeAllCallbacksWithError(new Error(\"failed to reconnect to server\"));\n          } else {\n            return setTimeout(__attemptReconnect(server), server.db.retryMiliSeconds);\n          }\n        } else {\n          // Set as authenticating (isConnected will be false)\n          server._serverState = 'authenticating';\n          // Apply any auths, we don't try to catch any errors here\n          // as there are nowhere to simply propagate them to\n          self._apply_auths(server.db, function(err, result) {            \n            server._serverState = 'connected';\n            server._reconnectInProgreess = false;\n\n            // Execute any buffered reads and writes\n            server._commandsStore.execute_queries();\n            server._commandsStore.execute_writes();\n            // Emit reconnect event\n            server.emit('reconnect');\n          });\n        } \n      });      \n    }\n  }\n\n  // If we have a parser error we are in an unknown state, close everything and emit\n  // error\n  connectionPool.on(\"parseError\", function(err) {\n    // If pool connection is already closed\n    if(server._serverState === 'disconnected' \n      || server._serverState === 'destroyed') return;\n    // Set server state to disconnected\n    server._serverState = 'disconnected';\n    // If we have a callback return the error\n    if(typeof callback === 'function') {\n      // ensure no callbacks get called twice\n      var internalCallback = callback;\n      callback = null;\n      // Perform callback\n      internalCallback(utils.toError(err), null, server);\n    } else if(server.isSetMember()) {\n      if(server.listeners(\"parseError\") && server.listeners(\"parseError\").length > 0) server.emit(\"parseError\", utils.toError(err), server);\n    } else {\n      if(eventReceiver.listeners(\"parseError\") && eventReceiver.listeners(\"parseError\").length > 0) eventReceiver.emit(\"parseError\", utils.toError(err), server);\n    }\n\n    // If we are a single server connection fire errors correctly\n    if(!server.isSetMember()) {\n      // Fire all callback errors\n      server.__executeAllCallbacksWithError(utils.toError(err));\n      // Emit error\n      server._emitAcrossAllDbInstances(server, eventReceiver, \"parseError\", server, null, true);\n      // Emit close event\n      if(eventReceiver.listeners(\"close\") && eventReceiver.listeners(\"close\").length > 0) eventReceiver.emit(\"close\", new Error(\"connection closed\"), server); }\n  });\n\n  // Boot up connection poole, pass in a locator of callbacks\n  connectionPool.start();\n}",
   "ctx": {
    "type": "function",
    "name": "__attemptReconnect",
    "string": "__attemptReconnect()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.allRawConnections = function() {\n  return this.connectionPool != null ? this.connectionPool.getAllConnections() : [];\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "allRawConnections",
    "string": "Server.prototype.allRawConnections()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Check if a writer can be provided</p>",
    "summary": "<p>Check if a writer can be provided</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var canCheckoutWriter = function(self, read) {\n  // We cannot write to an arbiter or secondary server\n  if(self.isMasterDoc && self.isMasterDoc['arbiterOnly'] == true) {\n    return new Error(\"Cannot write to an arbiter\");\n  } if(self.isMasterDoc && self.isMasterDoc['secondary'] == true) {\n    return new Error(\"Cannot write to a secondary\");\n  } else if(read == true && self._readPreference == ReadPreference.SECONDARY && self.isMasterDoc && self.isMasterDoc['ismaster'] == true) {\n    return new Error(\"Cannot read from primary when secondary only specified\");\n  } else if(!self.isMasterDoc) {\n    return new Error(\"Cannot determine state of server\");\n  }\n\n  // Return no error\n  return null;\n}",
   "ctx": {
    "type": "function",
    "name": "canCheckoutWriter",
    "string": "canCheckoutWriter()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.checkoutWriter = function(read) {\n  if(this._serverState == 'disconnected' || this._serverState == 'destroyed')\n    return null;\n  if(read == true) return this.connectionPool.checkoutConnection();\n  // Check if are allowed to do a checkout (if we try to use an arbiter f.ex)\n  var result = canCheckoutWriter(this, read);\n  // If the result is null check out a writer\n  if(result == null && this.connectionPool != null) {\n    var connection = this.connectionPool.checkoutConnection();\n    // Add server capabilities to the connection\n    if(connection)\n      connection.serverCapabilities = this.serverCapabilities;\n    return connection;\n  } else if(result == null) {\n    return null;\n  } else {\n    return result;\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "checkoutWriter",
    "string": "Server.prototype.checkoutWriter()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Check if a reader can be provided</p>",
    "summary": "<p>Check if a reader can be provided</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var canCheckoutReader = function(self) {\n  // We cannot write to an arbiter or secondary server\n  if(self.isMasterDoc && self.isMasterDoc['arbiterOnly'] == true && self.isSetMember()) {\n    return new Error(\"Cannot write to an arbiter\");\n  } else if(self._readPreference != null) {\n    // If the read preference is Primary and the instance is not a master return an error\n    if((self._readPreference == ReadPreference.PRIMARY) && self.isMasterDoc && self.isMasterDoc['ismaster'] != true) {\n      return new Error(\"Read preference is Server.PRIMARY and server is not master\");\n    } else if(self._readPreference == ReadPreference.SECONDARY && self.isMasterDoc && self.isMasterDoc['ismaster'] == true) {\n      return new Error(\"Cannot read from primary when secondary only specified\");\n    }\n  } else if(!self.isMasterDoc) {\n    return new Error(\"Cannot determine state of server\");\n  }\n\n  // Return no error\n  return null;\n}",
   "ctx": {
    "type": "function",
    "name": "canCheckoutReader",
    "string": "canCheckoutReader()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.checkoutReader = function(read) {\n  if(this._serverState == 'disconnected' || this._serverState == 'destroyed')\n    return null;\n  // Check if are allowed to do a checkout (if we try to use an arbiter f.ex)\n  var result = canCheckoutReader(this);\n  // If the result is null check out a writer\n  if(result == null && this.connectionPool != null) {\n    var connection = this.connectionPool.checkoutConnection();\n    // Add server capabilities to the connection\n    if(connection)\n      connection.serverCapabilities = this.serverCapabilities;\n    return connection;\n  } else if(result == null) {\n    return null;\n  } else {\n    return result;\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "checkoutReader",
    "string": "Server.prototype.checkoutReader()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Server.prototype.enableRecordQueryStats = function(enable) {\n  this.recordQueryStats = enable;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Server",
    "cons": "Server",
    "name": "enableRecordQueryStats",
    "string": "Server.prototype.enableRecordQueryStats()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Internal statistics object used for calculating average and standard devitation on<br />running queries</p>",
    "summary": "<p>Internal statistics object used for calculating average and standard devitation on<br />running queries</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var RunningStats = function() {\n  var self = this;\n  this.m_n = 0;\n  this.m_oldM = 0.0;\n  this.m_oldS = 0.0;\n  this.m_newM = 0.0;\n  this.m_newS = 0.0;\n\n  // Define getters\n  Object.defineProperty(this, \"numDataValues\", { enumerable: true\n    , get: function () { return this.m_n; }\n  });\n\n  Object.defineProperty(this, \"mean\", { enumerable: true\n    , get: function () { return (this.m_n > 0) ? this.m_newM : 0.0; }\n  });\n\n  Object.defineProperty(this, \"variance\", { enumerable: true\n    , get: function () { return ((this.m_n > 1) ? this.m_newS/(this.m_n - 1) : 0.0); }\n  });\n\n  Object.defineProperty(this, \"standardDeviation\", { enumerable: true\n    , get: function () { return Math.sqrt(this.variance); }\n  });\n\n  Object.defineProperty(this, \"sScore\", { enumerable: true\n    , get: function () {\n      var bottom = this.mean + this.standardDeviation;\n      if(bottom == 0) return 0;\n      return ((2 * this.mean * this.standardDeviation)/(bottom));\n    }\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "RunningStats",
    "string": "RunningStats()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "RunningStats.prototype.push = function(x) {\n  // Update the number of samples\n  this.m_n = this.m_n + 1;\n  \n  // See Knuth TAOCP vol 2, 3rd edition, page 232\n  if(this.m_n == 1) {\n    this.m_oldM = this.m_newM = x;\n    this.m_oldS = 0.0;\n  } else {\n    this.m_newM = this.m_oldM + (x - this.m_oldM) / this.m_n;\n    this.m_newS = this.m_oldS + (x - this.m_oldM) * (x - this.m_newM);\n    // set up for next iteration\n    this.m_oldM = this.m_newM;\n    this.m_oldS = this.m_newS;\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "RunningStats",
    "cons": "RunningStats",
    "name": "push",
    "string": "RunningStats.prototype.push()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"autoReconnect\", { enumerable: true\n  , get: function () {\n      return this.options['auto_reconnect'] == null ? false : this.options['auto_reconnect'];\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"connection\", { enumerable: true\n  , get: function () {\n      return this.internalConnection;\n    }\n  , set: function(connection) {\n      this.internalConnection = connection;\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"master\", { enumerable: true\n  , get: function () {\n      return this.internalMaster;\n    }\n  , set: function(value) {\n      this.internalMaster = value;\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"primary\", { enumerable: true\n  , get: function () {\n      return this;\n    }\n});"
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Getter for query Stats</p>",
    "summary": "<p>Getter for query Stats</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"queryStats\", { enumerable: true\n  , get: function () {\n      return this._state.runtimeStats.queryStats;\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"runtimeStats\", { enumerable: true\n  , get: function () {\n      return this._state.runtimeStats;\n    }\n});"
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Get Read Preference method</p>",
    "summary": "<p>Get Read Preference method</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(Server.prototype, \"readPreference\", { enumerable: true\n  , get: function () {\n      if(this._readPreference == null && this.readSecondary) {\n        return Server.READ_SECONDARY;\n      } else if(this._readPreference == null && !this.readSecondary) {\n        return Server.READ_PRIMARY;\n      } else {\n        return this._readPreference;\n      }\n    }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Server = Server;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Server",
    "value": "Server",
    "string": "exports.Server"
   }
  }
 ],
 "mongos": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Mongos connection with failover to backup proxies"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "list",
     "description": "of mongos server objects"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the mongos connection"
    }
   ],
   "description": {
    "full": "<p>Mongos constructor provides a connection to a mongos proxy including failover to additional servers</p>\n\n<p>Options<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>ha</strong> {Boolean, default:true}, turn on high availability, attempts to reconnect to down proxies<br /> - <strong>haInterval</strong> {Number, default:2000}, time between each replicaset status check.</p>",
    "summary": "<p>Mongos constructor provides a connection to a mongos proxy including failover to additional servers</p>",
    "body": "<p>Options<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>ha</strong> {Boolean, default:true}, turn on high availability, attempts to reconnect to down proxies<br /> - <strong>haInterval</strong> {Number, default:2000}, time between each replicaset status check.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var Mongos = function Mongos(servers, options) {\n  // Set up basic\n  if(!(this instanceof Mongos))\n    return new Mongos(servers, options);\n\n  // Set up event emitter\n  Base.call(this);\n\n  // Throw error on wrong setup\n  if(servers == null || !Array.isArray(servers) || servers.length == 0)\n    throw new Error(\"At least one mongos proxy must be in the array\");\n\n  // Ensure we have at least an empty options object\n  this.options = options == null ? {} : options;\n  // Set default connection pool options\n  this.socketOptions = this.options.socketOptions != null ? this.options.socketOptions : {};\n  // Enabled ha\n  this.haEnabled = this.options['ha'] == null ? true : this.options['ha'];\n  this._haInProgress = false;\n  // How often are we checking for new servers in the replicaset\n  this.mongosStatusCheckInterval = this.options['haInterval'] == null ? 1000 : this.options['haInterval'];\n  // Save all the server connections\n  this.servers = servers;\n  // Servers we need to attempt reconnect with\n  this.downServers = {};\n  // Servers that are up\n  this.upServers = {};\n  // Up servers by ping time\n  this.upServersByUpTime = {};\n  // Emit open setup\n  this.emitOpen = this.options.emitOpen || true;\n  // Just contains the current lowest ping time and server\n  this.lowestPingTimeServer = null;\n  this.lowestPingTime = 0;\n  // Connection timeout\n  this._connectTimeoutMS = this.socketOptions.connectTimeoutMS\n    ? this.socketOptions.connectTimeoutMS\n    : 1000;\n\n  // Add options to servers\n  for(var i = 0; i < this.servers.length; i++) {\n    var server = this.servers[i];\n    server._callBackStore = this._callBackStore;\n    server.auto_reconnect = false;\n    // Default empty socket options object\n    var socketOptions = {host: server.host, port: server.port};\n    // If a socket option object exists clone it\n    if(this.socketOptions != null) {\n      var keys = Object.keys(this.socketOptions);\n      for(var k = 0; k < keys.length;k++) socketOptions[keys[i]] = this.socketOptions[keys[i]];\n    }\n\n    // Set socket options\n    server.socketOptions = socketOptions;\n  }\n\n  // Allow setting the socketTimeoutMS on all connections\n  // to work around issues such as secondaries blocking due to compaction\n  utils.setSocketTimeoutProperty(this, this.socketOptions);  \n}",
   "ctx": {
    "type": "function",
    "name": "Mongos",
    "string": "Mongos()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "inherits(Mongos, Base);"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.isMongos = function() {\n  return true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "isMongos",
    "string": "Mongos.prototype.isMongos()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.connect = function(db, options, callback) {\n  if('function' === typeof options) callback = options, options = {};\n  if(options == null) options = {};\n  if(!('function' === typeof callback)) callback = null;\n  var self = this;\n\n  // Keep reference to parent\n  this.db = db;\n  // Set server state to connecting\n  this._serverState = 'connecting';\n  // Number of total servers that need to initialized (known servers)\n  this._numberOfServersLeftToInitialize = this.servers.length;  \n  // Connect handler\n  var connectHandler = function(_server) {\n    return function(err, result) {\n      self._numberOfServersLeftToInitialize = self._numberOfServersLeftToInitialize - 1;\n\n      // Add the server to the list of servers that are up\n      if(!err) {\n        self.upServers[format(\"%s:%s\", _server.host, _server.port)] = _server;\n      }\n\n      // We are done connecting\n      if(self._numberOfServersLeftToInitialize == 0) {\n        // If we have no valid mongos server instances error out\n        if(Object.keys(self.upServers).length == 0) {\n          // return self.emit(\"connectionError\", new Error(\"No valid mongos instances found\"));\n          return callback(new Error(\"No valid mongos instances found\"), null);\n        }\n\n        // Start ha function if it exists\n        if(self.haEnabled) {\n          // Setup the ha process\n          if(self._replicasetTimeoutId != null) clearInterval(self._replicasetTimeoutId);\n          self._replicasetTimeoutId = setInterval(self.mongosCheckFunction, self.mongosStatusCheckInterval);\n        }\n\n        // Set the mongos to connected\n        self._serverState = \"connected\";\n\n        // Emit the open event\n        if(self.emitOpen)\n          self._emitAcrossAllDbInstances(self, null, \"open\", null, null, null);        \n\n        self._emitAcrossAllDbInstances(self, null, \"fullsetup\", null, null, null);      \n        // Callback\n        callback(null, self.db);\n      }\n    }\n  };\n\n  // Error handler\n  var errorOrCloseHandler = function(_server) {\n    return function(err, result) {\n      // Emit left event, signaling mongos left the ha\n      self.emit('left', 'mongos', _server);\n      // Execute all the callbacks with errors\n      self.__executeAllCallbacksWithError(err);\n      // Check if we have the server\n      var found = false;\n      \n      // Get the server name\n      var server_name = format(\"%s:%s\", _server.host, _server.port);\n      // Add the downed server\n      self.downServers[server_name] = _server;\n      // Remove the current server from the list\n      delete self.upServers[server_name]; \n\n      // Emit close across all the attached db instances\n      if(Object.keys(self.upServers).length == 0) {\n        self._emitAcrossAllDbInstances(self, null, \"close\", new Error(\"mongos disconnected, no valid proxies contactable over tcp\"), null, null);\n      }\n    }\n  }\n\n  // Mongo function\n  this.mongosCheckFunction = function() {\n    // Set as not waiting for check event \n    self._haInProgress = true;\n    \n    // Servers down\n    var numberOfServersLeft = Object.keys(self.downServers).length;\n    \n    // Check downed servers\n    if(numberOfServersLeft > 0) {\n      for(var name in self.downServers) {\n        // Pop a downed server      \n        var downServer = self.downServers[name];\n        // Set up the connection options for a Mongos\n        var options = {\n          auto_reconnect: false,\n          returnIsMasterResults: true,\n          slaveOk: true,\n          poolSize: downServer.poolSize,\n          socketOptions: { \n            connectTimeoutMS: self._connectTimeoutMS,\n            socketTimeoutMS: self._socketTimeoutMS\n          }          \n        }\n\n        // Create a new server object\n        var newServer = new Server(downServer.host, downServer.port, options);\n        // Setup the connection function\n        var connectFunction = function(_db, _server, _options, _callback)  {\n          return function() {\n            // Attempt to connect\n            _server.connect(_db, _options, function(err, result) {\n              numberOfServersLeft = numberOfServersLeft - 1;\n\n              if(err) {\n                return _callback(err, _server);\n              } else {                \n                // Set the new server settings\n                _server._callBackStore = self._callBackStore;\n\n                // Add server event handlers\n                _server.on(\"close\", errorOrCloseHandler(_server));\n                _server.on(\"timeout\", errorOrCloseHandler(_server));\n                _server.on(\"error\", errorOrCloseHandler(_server));\n                \n                // Get a read connection\n                var _connection = _server.checkoutReader();\n                // Get the start time\n                var startTime = new Date().getTime();\n                \n                // Execute ping command to mark each server with the expected times\n                self.db.command({ping:1}\n                  , {failFast:true, connection:_connection}, function(err, result) {\n                  // Get the start time\n                  var endTime = new Date().getTime();\n                  // Mark the server with the ping time\n                  _server.runtimeStats['pingMs'] = endTime - startTime;\n\n                  // If we have any buffered commands let's signal reconnect event\n                  if(self._commandsStore.count() > 0) {\n                    self.emit('reconnect');\n                  }\n\n                  // Execute any waiting reads\n                  self._commandsStore.execute_writes();   \n                  self._commandsStore.execute_queries();   \n                  // Callback\n                  return _callback(null, _server);\n                });\n              }\n            });\n          }\n        } \n\n        // Attempt to connect to the database\n        connectFunction(self.db, newServer, options, function(err, _server) {\n          // If we have an error\n          if(err) {\n            self.downServers[format(\"%s:%s\", _server.host, _server.port)] = _server;\n          }\n\n          // Connection function\n          var connectionFunction = function(_auth, _connection, _callback) {\n            var pending = _auth.length();\n\n            for(var j = 0; j < pending; j++) {\n              // Get the auth object\n              var _auth = _auth.get(j);\n              // Unpack the parameter\n              var username = _auth.username;\n              var password = _auth.password;\n              var options = { \n                  authMechanism: _auth.authMechanism\n                , authSource: _auth.authdb\n                , connection: _connection \n              };\n\n              // If we have changed the service name\n              if(_auth.gssapiServiceName) \n                options.gssapiServiceName = _auth.gssapiServiceName;\n\n              // Hold any error\n              var _error = null;\n              // Authenticate against the credentials\n              self.db.authenticate(username, password, options, function(err, result) {\n                _error = err != null ? err : _error;\n                // Adjust the pending authentication\n                pending = pending - 1;\n                // Finished up\n                if(pending == 0) _callback(_error ? _error : null, _error ? false : true);\n              });\n            }\n          }\n\n          // Run auths against the connections\n          if(self.auth.length() > 0) {\n            var connections = _server.allRawConnections();\n            var pendingAuthConn = connections.length;\n\n            // No connections we are done\n            if(connections.length == 0) {\n              // Set ha done\n              if(numberOfServersLeft == 0) {\n                self._haInProgress = false;\n              }              \n            }\n\n            // Final error object\n            var finalError = null;\n            // Go over all the connections\n            for(var j = 0; j < connections.length; j++) {\n              \n              // Execute against all the connections\n              connectionFunction(self.auth, connections[j], function(err, result) {\n                // Pending authentication\n                pendingAuthConn = pendingAuthConn - 1 ;\n\n                // Save error if any\n                finalError = err ? err : finalError;\n\n                // If we are done let's finish up\n                if(pendingAuthConn == 0) {\n                  // Set ha done\n                  if(numberOfServersLeft == 0) {\n                    self._haInProgress = false;\n                  }\n\n                  if(!err) {\n                    add_server(self, _server);\n                  }\n\n                  // If we have any buffered commands let's signal reconnect event\n                  if(self._commandsStore.count() > 0) {\n                    self.emit('reconnect');\n                  }\n\n                  // Execute any waiting reads\n                  self._commandsStore.execute_writes();   \n                  self._commandsStore.execute_queries();                  \n                }\n              });\n            }\n          } else {\n            if(!err) {\n              add_server(self, _server);\n            }\n\n            // Set ha done\n            if(numberOfServersLeft == 0) {\n              self._haInProgress = false;\n\n              // If we have any buffered commands let's signal reconnect event\n              if(self._commandsStore.count() > 0) {\n                self.emit('reconnect');\n              }\n\n              // Execute any waiting reads\n              self._commandsStore.execute_writes();   \n              self._commandsStore.execute_queries();   \n            }\n          }\n        })();\n      }\n    } else {\n      self._haInProgress = false;\n    }\n  }\n\n  // Connect all the server instances\n  for(var i = 0; i < this.servers.length; i++) {\n    // Get the connection\n    var server = this.servers[i];\n    server.mongosInstance = this;\n    // Add server event handlers\n    server.on(\"close\", errorOrCloseHandler(server));\n    server.on(\"timeout\", errorOrCloseHandler(server));\n    server.on(\"error\", errorOrCloseHandler(server));\n    \n    // Configuration\n    var options = {\n      slaveOk: true,\n      poolSize: server.poolSize,\n      socketOptions: { connectTimeoutMS: self._connectTimeoutMS },\n      returnIsMasterResults: true\n    }        \n\n    // Connect the instance\n    server.connect(self.db, options, connectHandler(server));\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "connect",
    "string": "Mongos.prototype.connect()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore<br />Add a server to the list of up servers and sort them by ping time</p>",
    "summary": "<p>@ignore<br />Add a server to the list of up servers and sort them by ping time</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var add_server = function(self, _server) {\n  // Emit a new server joined\n  self.emit('joined', \"mongos\", null, _server);\n  // Get the server url\n  var server_key = format(\"%s:%s\", _server.host, _server.port);\n  // Push to list of valid server\n  self.upServers[server_key] = _server;\n  // Remove the server from the list of downed servers\n  delete self.downServers[server_key];              \n\n  // Sort the keys by ping time\n  var keys = Object.keys(self.upServers);\n  var _upServersSorted = {};\n  var _upServers = []\n  \n  // Get all the servers\n  for(var name in self.upServers) {\n    _upServers.push(self.upServers[name]);\n  }\n\n  // Sort all the server\n  _upServers.sort(function(a, b) {\n    return a.runtimeStats['pingMs'] > b.runtimeStats['pingMs'];\n  });\n\n  // Rebuild the upServer\n  for(var i = 0; i < _upServers.length; i++) {\n    _upServersSorted[format(\"%s:%s\", _upServers[i].host, _upServers[i].port)] = _upServers[i];\n  }\n\n  // Set the up servers\n  self.upServers = _upServersSorted;\n}",
   "ctx": {
    "type": "function",
    "name": "add_server",
    "string": "add_server()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore<br />Just return the currently picked active connection</p>",
    "summary": "<p>@ignore<br />Just return the currently picked active connection</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.allServerInstances = function() {\n  return this.servers;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "allServerInstances",
    "string": "Mongos.prototype.allServerInstances()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.setSocketOptions = function(options) {\n  var servers = this.allServerInstances();\n  for(var i = 0; i < servers.length; i++) {\n    servers[i].setSocketOptions(options);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "setSocketOptions",
    "string": "Mongos.prototype.setSocketOptions()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Always ourselves</p>",
    "summary": "<p>Always ourselves</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Mongos.prototype.setReadPreference = function() {}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "setReadPreference",
    "string": "Mongos.prototype.setReadPreference()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.allRawConnections = function() {\n  // Neeed to build a complete list of all raw connections, start with master server\n  var allConnections = [];\n  // Get all connected connections\n  for(var name in this.upServers) {\n    allConnections = allConnections.concat(this.upServers[name].allRawConnections());\n  }\n  // Return all the conections\n  return allConnections;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "allRawConnections",
    "string": "Mongos.prototype.allRawConnections()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.isConnected = function() {\n  return Object.keys(this.upServers).length > 0;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "isConnected",
    "string": "Mongos.prototype.isConnected()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.isAutoReconnect = function() {\n  return true;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "isAutoReconnect",
    "string": "Mongos.prototype.isAutoReconnect()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.canWrite = Mongos.prototype.isConnected;",
   "ctx": {
    "type": "property",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "canWrite",
    "value": "Mongos.prototype.isConnected",
    "string": "Mongos.prototype.canWrite"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.canRead = Mongos.prototype.isConnected;",
   "ctx": {
    "type": "property",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "canRead",
    "value": "Mongos.prototype.isConnected",
    "string": "Mongos.prototype.canRead"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.isDestroyed = function() {\n  return this._serverState == 'destroyed';\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "isDestroyed",
    "string": "Mongos.prototype.isDestroyed()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.checkoutWriter = function() {\n  // Checkout a writer\n  var keys = Object.keys(this.upServers);\n  if(keys.length == 0) return null;\n  return this.upServers[keys[0]].checkoutWriter();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "checkoutWriter",
    "string": "Mongos.prototype.checkoutWriter()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.checkoutReader = function(read) {\n  // If read is set to null default to primary\n  read = read || 'primary'\n  // If we have a read preference object unpack it\n  if(read != null && typeof read == 'object' && read['_type'] == 'ReadPreference') {\n    // Validate if the object is using a valid mode\n    if(!read.isValid()) throw new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(read));\n  } else if(!ReadPreference.isValid(read)) {\n    throw new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(read));\n  }\n\n  // Checkout a writer\n  var keys = Object.keys(this.upServers);\n  if(keys.length == 0) return null;\n  return this.upServers[keys[0]].checkoutWriter();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "checkoutReader",
    "string": "Mongos.prototype.checkoutReader()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype.close = function(callback) {\n  var self = this;\n  // Set server status as disconnected\n  this._serverState = 'destroyed';\n  // Number of connections to close\n  var numberOfConnectionsToClose = self.servers.length;\n  // If we have a ha process running kill it\n  if(self._replicasetTimeoutId != null) clearInterval(self._replicasetTimeoutId);\n  self._replicasetTimeoutId = null;\n  \n  // Emit close event\n  processor(function() {\n    self._emitAcrossAllDbInstances(self, null, \"close\", null, null, true)    \n  });\n\n  // Flush out any remaining call handlers\n  self._flushAllCallHandlers(utils.toError(\"Connection Closed By Application\"));\n\n  // No up servers just return\n  if(Object.keys(this.upServers) == 0) {\n    return callback(null);\n  }\n\n  // Close all the up servers\n  for(var name in this.upServers) {\n    this.upServers[name].close(function(err, result) {\n      numberOfConnectionsToClose = numberOfConnectionsToClose - 1;\n\n      // Callback if we have one defined\n      if(numberOfConnectionsToClose == 0 && typeof callback == 'function') {\n        callback(null);\n      }\n    });\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "close",
    "string": "Mongos.prototype.close()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore<br />Return the used state</p>",
    "summary": "<p>@ignore<br />Return the used state</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Mongos.prototype._isUsed = function() {\n  return this._used;\n}\n\nexports.Mongos = Mongos;",
   "ctx": {
    "type": "method",
    "constructor": "Mongos",
    "cons": "Mongos",
    "name": "_isUsed",
    "string": "Mongos.prototype._isUsed()"
   }
  }
 ],
 "replset": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a "
    },
    {
     "type": "",
     "string": "Replicaset Configuration"
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "list",
     "description": "of server objects participating in the replicaset."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the replicaset connection."
    }
   ],
   "description": {
    "full": "<p>ReplSet constructor provides replicaset functionality</p>\n\n<p>Options<br /> - <strong>ha</strong> {Boolean, default:true}, turn on high availability.<br /> - <strong>haInterval</strong> {Number, default:2000}, time between each replicaset status check.<br /> - <strong>reconnectWait</strong> {Number, default:1000}, time to wait in miliseconds before attempting reconnect.<br /> - <strong>retries</strong> {Number, default:30}, number of times to attempt a replicaset reconnect.<br /> - <strong>rs_name</strong> {String}, the name of the replicaset to connect to.<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>strategy</strong> {String, default:'ping'}, selection strategy for reads choose between (ping, statistical and none, default is ping)<br /> - <strong>secondaryAcceptableLatencyMS</strong> {Number, default:15}, sets the range of servers to pick when using NEAREST (lowest ping ms + the latency fence, ex: range of 1 to (1 + 15) ms)<br /> - <strong>connectWithNoPrimary</strong> {Boolean, default:false}, sets if the driver should connect even if no primary is available<br /> - <strong>connectArbiter</strong> {Boolean, default:false}, sets if the driver should connect to arbiters or not.<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>poolSize</strong> {Number, default:5}, number of connections in the connection pool for each server instance, set to 5 as default for legacy reasons.<br /> - <strong>ssl</strong> {Boolean, default:false}, use ssl connection (needs to have a mongod server with ssl support)<br /> - <strong>sslValidate</strong> {Boolean, default:false}, validate mongod server certificate against ca (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCA</strong> {Array, default:null}, Array of valid certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCert</strong> {Buffer/String, default:null}, String or buffer containing the certificate we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslKey</strong> {Buffer/String, default:null}, String or buffer containing the certificate private key we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslPass</strong> {Buffer/String, default:null}, String or buffer containing the certificate password (needs to have a mongod server with ssl support, 2.4 or higher)</p>",
    "summary": "<p>ReplSet constructor provides replicaset functionality</p>",
    "body": "<p>Options<br /> - <strong>ha</strong> {Boolean, default:true}, turn on high availability.<br /> - <strong>haInterval</strong> {Number, default:2000}, time between each replicaset status check.<br /> - <strong>reconnectWait</strong> {Number, default:1000}, time to wait in miliseconds before attempting reconnect.<br /> - <strong>retries</strong> {Number, default:30}, number of times to attempt a replicaset reconnect.<br /> - <strong>rs_name</strong> {String}, the name of the replicaset to connect to.<br /> - <strong>socketOptions</strong> {Object, default:null}, an object containing socket options to use (noDelay:(boolean), keepAlive:(number), connectTimeoutMS:(number), socketTimeoutMS:(number))<br /> - <strong>strategy</strong> {String, default:'ping'}, selection strategy for reads choose between (ping, statistical and none, default is ping)<br /> - <strong>secondaryAcceptableLatencyMS</strong> {Number, default:15}, sets the range of servers to pick when using NEAREST (lowest ping ms + the latency fence, ex: range of 1 to (1 + 15) ms)<br /> - <strong>connectWithNoPrimary</strong> {Boolean, default:false}, sets if the driver should connect even if no primary is available<br /> - <strong>connectArbiter</strong> {Boolean, default:false}, sets if the driver should connect to arbiters or not.<br /> - <strong>logger</strong> {Object, default:null}, an object representing a logger that you want to use, needs to support functions debug, log, error <strong>({error:function(message, object) {}, log:function(message, object) {}, debug:function(message, object) {}})</strong>.<br /> - <strong>poolSize</strong> {Number, default:5}, number of connections in the connection pool for each server instance, set to 5 as default for legacy reasons.<br /> - <strong>ssl</strong> {Boolean, default:false}, use ssl connection (needs to have a mongod server with ssl support)<br /> - <strong>sslValidate</strong> {Boolean, default:false}, validate mongod server certificate against ca (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCA</strong> {Array, default:null}, Array of valid certificates either as Buffers or Strings (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslCert</strong> {Buffer/String, default:null}, String or buffer containing the certificate we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslKey</strong> {Buffer/String, default:null}, String or buffer containing the certificate private key we wish to present (needs to have a mongod server with ssl support, 2.4 or higher)<br /> - <strong>sslPass</strong> {Buffer/String, default:null}, String or buffer containing the certificate password (needs to have a mongod server with ssl support, 2.4 or higher)</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var ReplSet = exports.ReplSet = function(servers, options) {\n  // Set up basic\n  if(!(this instanceof ReplSet))\n    return new ReplSet(servers, options);\n\n  // Set up event emitter\n  Base.call(this);\n\n  // Ensure we have a list of servers\n  if(!Array.isArray(servers)) throw Error(\"The parameter must be an array of servers and contain at least one server\");\n  // Ensure no Mongos's\n  for(var i = 0; i < servers.length; i++) {\n    if(!(servers[i] instanceof Server)) throw new Error(\"list of servers must be of type Server\");\n  }\n\n  // Save the options\n  this.options = new Options(options);\n  // Ensure basic validation of options\n  this.options.init();\n\n  // Server state\n  this._serverState = ReplSet.REPLSET_DISCONNECTED;\n  // Add high availability process\n  this._haProcess = new HighAvailabilityProcess(this, this.options);\n\n  // Let's iterate over all the provided server objects and decorate them\n  this.servers = this.options.decorateAndClean(servers, this._callBackStore);\n  // Throw error if no seed servers\n  if(this.servers.length == 0) throw new Error(\"No valid seed servers in the array\");\n\n  // Let's set up our strategy object for picking secondaries\n  if(this.options.strategy == 'ping') {\n    // Create a new instance\n    this.strategyInstance = new PingStrategy(this, this.options.secondaryAcceptableLatencyMS);\n  } else if(this.options.strategy == 'statistical') {\n    // Set strategy as statistical\n    this.strategyInstance = new StatisticsStrategy(this);\n    // Add enable query information\n    this.enableRecordQueryStats(true);\n  }\n\n  this.emitOpen = this.options.emitOpen || true;\n  // Set up a clean state\n  this._state = new ReplSetState(this);\n  // Current round robin selected server\n  this._currentServerChoice = 0;\n  // Ensure up the server callbacks\n  for(var i = 0; i < this.servers.length; i++) {\n    this.servers[i]._callBackStore = this._callBackStore;\n    this.servers[i].name = format(\"%s:%s\", this.servers[i].host, this.servers[i].port)\n    this.servers[i].replicasetInstance = this;\n    this.servers[i].options.auto_reconnect = false;\n    this.servers[i].inheritReplSetOptionsFrom(this);\n  }\n\n  // Allow setting the socketTimeoutMS on all connections\n  // to work around issues such as secondaries blocking due to compaction\n  utils.setSocketTimeoutProperty(this, this.options.socketOptions);\n}",
   "ctx": {
    "type": "declaration",
    "name": "ReplSet",
    "value": "exports.ReplSet = function(servers, options) {",
    "string": "ReplSet"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "inherits(ReplSet, Base);\n\n// Replicaset states\nReplSet.REPLSET_CONNECTING = 'connecting';\nReplSet.REPLSET_DISCONNECTED = 'disconnected';\nReplSet.REPLSET_CONNECTED = 'connected';\nReplSet.REPLSET_RECONNECTING = 'reconnecting';\nReplSet.REPLSET_DESTROYED = 'destroyed';\nReplSet.REPLSET_READ_ONLY = 'readonly';\n\nReplSet.prototype.isAutoReconnect = function() {\n  return true;\n}\n\nReplSet.prototype.canWrite = function() {\n  return this._state.master && this._state.master.isConnected();\n}\n\nReplSet.prototype.canRead = function(read) {\n  if((read == ReadPreference.PRIMARY \n      || (typeof read == 'object' && read.mode == ReadPreference.PRIMARY)\n      || read == null || read == false) && (this._state.master == null || !this._state.master.isConnected())) return false;\n  return Object.keys(this._state.secondaries).length > 0;\n}"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReplSet.prototype.enableRecordQueryStats = function(enable) {\n  // Set the global enable record query stats\n  this.recordQueryStats = enable;\n\n  // Enable all the servers\n  for(var i = 0; i < this.servers.length; i++) {\n    this.servers[i].enableRecordQueryStats(enable);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReplSet",
    "cons": "ReplSet",
    "name": "enableRecordQueryStats",
    "string": "ReplSet.prototype.enableRecordQueryStats()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReplSet.prototype.setSocketOptions = function(options) {\n  var servers = this.allServerInstances();\n  \n  if(typeof options.socketTimeoutMS == 'number') {\n    this.options.socketOptions.socketTimeoutMS = options.socketTimeoutMS;\n  }\n\n  if(typeof options.connectTimeoutMS == 'number')\n    this.options.socketOptions.connectTimeoutMS = options.connectTimeoutMS;\n\n  for(var i = 0; i < servers.length; i++) {\n    servers[i].setSocketOptions(options);\n  }\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReplSet",
    "cons": "ReplSet",
    "name": "setSocketOptions",
    "string": "ReplSet.prototype.setSocketOptions()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReplSet.prototype.setReadPreference = function(preference) {\n  this.options.readPreference = preference;\n}\n\nReplSet.prototype.connect = function(parent, options, callback) {\n  if(this._serverState != ReplSet.REPLSET_DISCONNECTED) \n    return callback(new Error(\"in process of connection\"));\n\n  // If no callback throw\n  if(!(typeof callback == 'function')) \n    throw new Error(\"cannot call ReplSet.prototype.connect with no callback function\");\n\n  var self = this;\n  // Save db reference\n  this.options.db = parent;\n  // Set replicaset as connecting\n  this._serverState = ReplSet.REPLSET_CONNECTING\n  // Copy all the servers to our list of seeds\n  var candidateServers = this.servers.slice(0);\n  // Pop the first server\n  var server = candidateServers.pop();\n  server.name = format(\"%s:%s\", server.host, server.port);\n  // Set up the options\n  var opts = {\n    returnIsMasterResults: true,\n    eventReceiver: server\n  }\n\n  // Register some event listeners\n  this.once(\"fullsetup\", function(err, db, replset) {\n    // Set state to connected\n    self._serverState = ReplSet.REPLSET_CONNECTED;\n    // Stop any process running\n    if(self._haProcess) self._haProcess.stop();\n    // Start the HA process\n    self._haProcess.start();\n\n    // Emit fullsetup\n    processor(function() {\n      if(self.emitOpen)\n        self._emitAcrossAllDbInstances(self, null, \"open\", null, null, null);        \n\n      self._emitAcrossAllDbInstances(self, null, \"fullsetup\", null, null, null);        \n    });\n\n    // If we have a strategy defined start it\n    if(self.strategyInstance) {\n      self.strategyInstance.start();\n    }\n\n    // Finishing up the call\n    callback(err, db, replset);\n  });\n\n  // Errors\n  this.once(\"connectionError\", function(err, result) {\n    callback(err, result);\n  });\n\n  // Attempt to connect to the server\n  server.connect(this.options.db, opts, _connectHandler(this, candidateServers, server));\n}\n\nReplSet.prototype.close = function(callback) {  \n  var self = this;\n  // Set as destroyed\n  this._serverState = ReplSet.REPLSET_DESTROYED;\n  // Stop the ha\n  this._haProcess.stop();\n  \n  // If we have a strategy stop it\n  if(this.strategyInstance) {\n    this.strategyInstance.stop();\n  }\n\n  // Kill all servers available\n  for(var name in this._state.addresses) {\n    this._state.addresses[name].close();\n  }\n\n  // Clean out the state\n  this._state = new ReplSetState(this); \n  \n  // Emit close event\n  processor(function() {\n    self._emitAcrossAllDbInstances(self, null, \"close\", null, null, true)    \n  });\n\n  // Flush out any remaining call handlers\n  self._flushAllCallHandlers(utils.toError(\"Connection Closed By Application\"));\n\n  // Callback\n  if(typeof callback == 'function') \n    return callback(null, null);\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReplSet",
    "cons": "ReplSet",
    "name": "setReadPreference",
    "string": "ReplSet.prototype.setReadPreference()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "host",
     "description": "- host:port pair (localhost:27017)"
    },
    {
     "type": "param",
     "types": [
      "ReplSet"
     ],
     "name": "replset",
     "description": "- the ReplSet instance"
    },
    {
     "type": "return",
     "types": [
      "Server"
     ],
     "description": ""
    },
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Creates a new server for the <code>replset</code> based on <code>host</code>.</p>",
    "summary": "<p>Creates a new server for the <code>replset</code> based on <code>host</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var createServer = function(self, host, options) {\n  // copy existing socket options to new server\n  var socketOptions = {}\n  if(options.socketOptions) {\n    var keys = Object.keys(options.socketOptions);\n    for(var k = 0; k < keys.length; k++) {\n      socketOptions[keys[k]] = options.socketOptions[keys[k]];\n    }\n  }\n\n  var parts = host.split(/:/);\n  if(1 === parts.length) {\n    parts[1] = Connection.DEFAULT_PORT;\n  }\n\n  socketOptions.host = parts[0];\n  socketOptions.port = parseInt(parts[1], 10);\n\n  var serverOptions = {\n    readPreference: options.readPreference,\n    socketOptions: socketOptions,\n    poolSize: options.poolSize,\n    logger: options.logger,\n    auto_reconnect: false,\n    ssl: options.ssl,\n    sslValidate: options.sslValidate,\n    sslCA: options.sslCA,\n    sslCert: options.sslCert,\n    sslKey: options.sslKey,\n    sslPass: options.sslPass\n  }\n\n  var server = new Server(socketOptions.host, socketOptions.port, serverOptions);\n  // Set up shared state\n  server._callBackStore = self._callBackStore;\n  server.replicasetInstance = self;\n  server.enableRecordQueryStats(self.recordQueryStats);\n  // Set up event handlers\n  server.on(\"close\", _handler(\"close\", self, server));\n  server.on(\"error\", _handler(\"error\", self, server));\n  server.on(\"timeout\", _handler(\"timeout\", self, server));\n  return server;\n}\n\nvar _handler = function(event, self, server) {\n  return function(err, doc) {\n    // The event happened to a primary\n    // Remove it from play\n    if(self._state.isPrimary(server)) {    \n      // Emit that the primary left the replicaset\n      self.emit('left', 'primary', server);\n      // Get the current master\n      var current_master = self._state.master;\n      self._state.master = null;\n      self._serverState = ReplSet.REPLSET_READ_ONLY;\n    \n      if(current_master != null) {\n        // Unpack variables\n        var host = current_master.socketOptions.host;\n        var port = current_master.socketOptions.port;\n\n        // Fire error on any unknown callbacks\n        self.__executeAllServerSpecificErrorCallbacks(host, port, err);        \n      }\n    } else if(self._state.isSecondary(server)) {\n      // Emit that a secondary left the replicaset\n      self.emit('left', 'secondary', server);\n      // Delete from the list\n      delete self._state.secondaries[server.name];\n    }\n\n    // If there is no more connections left and the setting is not destroyed\n    // set to disconnected\n    if(Object.keys(self._state.addresses).length == 0 \n      && self._serverState != ReplSet.REPLSET_DESTROYED) {\n        self._serverState = ReplSet.REPLSET_DISCONNECTED;\n\n        // Emit close across all the attached db instances\n        self._dbStore.emit(\"close\", new Error(\"replicaset disconnected, no valid servers contactable over tcp\"), null, true);\n    }\n\n    // Unpack variables\n    var host = server.socketOptions.host;\n    var port = server.socketOptions.port;\n\n    // Fire error on any unknown callbacks\n    self.__executeAllServerSpecificErrorCallbacks(host, port, err);\n  }\n}\n\nvar locateNewServers = function(self, state, candidateServers, ismaster) {\n  // Retrieve the host\n  var hosts = ismaster.hosts;\n  // In candidate servers\n  var inCandidateServers = function(name, candidateServers) {\n    for(var i = 0; i < candidateServers.length; i++) {\n      if(candidateServers[i].name == name) return true;\n    }\n\n    return false;\n  }\n\n  // New servers\n  var newServers = [];\n  if(Array.isArray(hosts)) {\n    // Let's go over all the hosts\n    for(var i = 0; i < hosts.length; i++) {\n      if(!state.contains(hosts[i]) \n        && !inCandidateServers(hosts[i], candidateServers)) {\n          newServers.push(createServer(self, hosts[i], self.options));\n      }\n    }    \n  }\n\n  // Return list of possible new servers\n  return newServers;\n}\n\nvar _connectHandler = function(self, candidateServers, instanceServer) {\n  return function(err, doc) {\n    // If we have an error add to the list\n    if(err) {\n      self._state.errors[instanceServer.name] = instanceServer;\n    } else {\n      delete self._state.errors[instanceServer.name];\n    }\n\n    if(!err) {      \n      var ismaster = doc.documents[0]\n\n      // Error the server if \n      if(!ismaster.ismaster\n        && !ismaster.secondary) {\n        self._state.errors[instanceServer.name] = instanceServer;\n      }\n    }\n\n\n    // No error let's analyse the ismaster command\n    if(!err && self._state.errors[instanceServer.name] == null) {\n      var ismaster = doc.documents[0]\n\n      // If no replicaset name exists set the current one\n      if(self.options.rs_name == null) {\n        self.options.rs_name = ismaster.setName;\n      }\n\n      // If we have a member that is not part of the set let's finish up\n      if(typeof ismaster.setName == 'string' && ismaster.setName != self.options.rs_name) {\n        return self.emit(\"connectionError\", new Error(\"Replicaset name \" + ismaster.setName + \" does not match specified name \" + self.options.rs_name));\n      }\n\n      // Add the error handlers\n      instanceServer.on(\"close\", _handler(\"close\", self, instanceServer));\n      instanceServer.on(\"error\", _handler(\"error\", self, instanceServer));\n      instanceServer.on(\"timeout\", _handler(\"timeout\", self, instanceServer));\n      \n      // Set any tags on the instance server\n      instanceServer.name = ismaster.me;\n      instanceServer.tags = ismaster.tags;\n\n      // Add the server to the list\n      self._state.addServer(instanceServer, ismaster);\n\n      // Check if we have more servers to add (only check when done with initial set)\n      if(candidateServers.length == 0) {\n        // Get additional new servers that are not currently in set\n        var new_servers = locateNewServers(self, self._state, candidateServers, ismaster);\n\n        // Locate any new servers that have not errored out yet\n        for(var i = 0; i < new_servers.length; i++) {\n          if(self._state.errors[new_servers[i].name] == null) {\n            candidateServers.push(new_servers[i])            \n          }\n        }\n      }\n    }\n\n    // If the candidate server list is empty and no valid servers\n    if(candidateServers.length == 0 &&\n      !self._state.hasValidServers()) {\n        return self.emit(\"connectionError\", new Error(\"No valid replicaset instance servers found\"));\n    } else if(candidateServers.length == 0) {      \n      if(!self.options.connectWithNoPrimary && (self._state.master == null || !self._state.master.isConnected())) {\n        return self.emit(\"connectionError\", new Error(\"No primary found in set\"));\n      }\n      return self.emit(\"fullsetup\", null, self.options.db, self);\n    }\n        \n    // Let's connect the next server    \n    var nextServer = candidateServers.pop();\n  \n    // Set up the options\n    var opts = {\n      returnIsMasterResults: true,\n      eventReceiver: nextServer\n    }\n\n    // Attempt to connect to the server\n    nextServer.connect(self.options.db, opts, _connectHandler(self, candidateServers, nextServer));\n  }\n}\n\nReplSet.prototype.isDestroyed = function() {\n  return this._serverState == ReplSet.REPLSET_DESTROYED;\n}\n\nReplSet.prototype.isConnected = function(read) {\n  var isConnected = false;  \n\n  if(read == null || read == ReadPreference.PRIMARY || read == false)\n    isConnected = this._state.master != null && this._state.master.isConnected();\n\n  if((read == ReadPreference.PRIMARY_PREFERRED || read == ReadPreference.SECONDARY_PREFERRED || read == ReadPreference.NEAREST)\n    && ((this._state.master != null && this._state.master.isConnected())\n    || (this._state && this._state.secondaries && Object.keys(this._state.secondaries).length > 0))) {\n      isConnected = true;\n  } else if(read == ReadPreference.SECONDARY) {\n    isConnected = this._state && this._state.secondaries && Object.keys(this._state.secondaries).length > 0;\n  }\n\n  // No valid connection return false\n  return isConnected;\n}\n\nReplSet.prototype.isMongos = function() {\n  return false;\n}\n\nReplSet.prototype.checkoutWriter = function() {\n  if(this._state.master) return this._state.master.checkoutWriter();\n  return new Error(\"no writer connection available\");\n}\n\nReplSet.prototype.processIsMaster = function(_server, _ismaster) {\n  // Server in recovery mode, remove it from available servers\n  if(!_ismaster.ismaster && !_ismaster.secondary) {\n    // Locate the actual server\n    var server = this._state.addresses[_server.name];\n    // Close the server, simulating the closing of the connection\n    // to get right removal semantics\n    if(server) server.close();\n    // Execute any callback errors\n    _handler(null, this, server)(new Error(\"server is in recovery mode\"));\n  }\n}\n\nReplSet.prototype.allRawConnections = function() {\n  var connections = [];\n\n  for(var name in this._state.addresses) {\n    connections = connections.concat(this._state.addresses[name].allRawConnections());\n  }\n\n  return connections;\n}",
   "ctx": {
    "type": "function",
    "name": "createServer",
    "string": "createServer()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReplSet.prototype.allServerInstances = function() {\n  var self = this;\n  // If no state yet return empty\n  if(!self._state) return [];\n  // Close all the servers (concatenate entire list of servers first for ease)\n  var allServers = self._state.master != null ? [self._state.master] : [];\n\n  // Secondary keys\n  var keys = Object.keys(self._state.secondaries);\n  // Add all secondaries\n  for(var i = 0; i < keys.length; i++) {\n    allServers.push(self._state.secondaries[keys[i]]);\n  }\n\n  // Return complete list of all servers\n  return allServers;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReplSet",
    "cons": "ReplSet",
    "name": "allServerInstances",
    "string": "ReplSet.prototype.allServerInstances()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReplSet.prototype.checkoutReader = function(readPreference, tags) {\n  var connection = null;\n\n  // If we have a read preference object unpack it\n  if(typeof readPreference == 'object' && readPreference['_type'] == 'ReadPreference') {\n    // Validate if the object is using a valid mode\n    if(!readPreference.isValid()) throw new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(readPreference.mode));\n    // Set the tag\n    tags = readPreference.tags;\n    readPreference = readPreference.mode;\n  } else if(typeof readPreference == 'object' && readPreference['_type'] != 'ReadPreference') {\n    return new Error(\"read preferences must be either a string or an instance of ReadPreference\");\n  }\n\n  // Set up our read Preference, allowing us to override the readPreference\n  var finalReadPreference = readPreference != null ? readPreference : this.options.readPreference;\n\n  // Ensure we unpack a reference\n  if(finalReadPreference != null && typeof finalReadPreference == 'object' && finalReadPreference['_type'] == 'ReadPreference') {\n    // Validate if the object is using a valid mode\n    if(!finalReadPreference.isValid()) throw new Error(\"Illegal readPreference mode specified, \" + JSON.stringify(finalReadPreference.mode));\n    // Set the tag\n    tags = finalReadPreference.tags;\n    readPreference = finalReadPreference.mode;\n  }\n\n  // Finalize the read preference setup\n  finalReadPreference = finalReadPreference == true ? ReadPreference.SECONDARY_PREFERRED : finalReadPreference;\n  finalReadPreference = finalReadPreference == null ? ReadPreference.PRIMARY : finalReadPreference;\n\n  // If we are reading from a primary\n  if(finalReadPreference == 'primary') {\n    // If we provide a tags set send an error\n    if(typeof tags == 'object' && tags != null) {\n      return new Error(\"PRIMARY cannot be combined with tags\");\n    }\n\n    // If we provide a tags set send an error\n    if(this._state.master == null) {\n      return new Error(\"No replica set primary available for query with ReadPreference PRIMARY\");\n    }\n\n    // Checkout a writer\n    return this.checkoutWriter();\n  }\n\n  // If we have specified to read from a secondary server grab a random one and read\n  // from it, otherwise just pass the primary connection\n  if((this.options.readSecondary || finalReadPreference == ReadPreference.SECONDARY_PREFERRED || finalReadPreference == ReadPreference.SECONDARY) && Object.keys(this._state.secondaries).length > 0) {\n    // If we have tags, look for servers matching the specific tag\n    if(this.strategyInstance != null) {\n      // Only pick from secondaries\n      var _secondaries = [];\n      for(var key in this._state.secondaries) {\n        _secondaries.push(this._state.secondaries[key]);\n      }\n\n      if(finalReadPreference == ReadPreference.SECONDARY) {\n        // Check out the nearest from only the secondaries\n        connection = this.strategyInstance.checkoutConnection(tags, _secondaries);\n      } else {\n        connection = this.strategyInstance.checkoutConnection(tags, _secondaries);\n        // No candidate servers that match the tags, error\n        if(connection == null || connection instanceof Error) {\n          // No secondary server avilable, attemp to checkout a primary server\n          connection = this.checkoutWriter();\n          // If no connection return an error\n          if(connection == null || connection instanceof Error) {\n            return new Error(\"No replica set members available for query\");\n          }\n        }\n      }\n    } else if(tags != null && typeof tags == 'object') {\n      // Get connection\n      connection = _pickFromTags(this, tags);// = function(self, readPreference, tags) {\n      // No candidate servers that match the tags, error\n      if(connection == null) {\n        return new Error(\"No replica set members available for query\");\n      }\n    } else {\n      connection = _roundRobin(this, tags);\n    }\n  } else if(finalReadPreference == ReadPreference.PRIMARY_PREFERRED) {\n    // Check if there is a primary available and return that if possible\n    connection = this.checkoutWriter();\n    // If no connection available checkout a secondary\n    if(connection == null || connection instanceof Error) {\n      // If we have tags, look for servers matching the specific tag\n      if(tags != null && typeof tags == 'object') {\n        // Get connection\n        connection = _pickFromTags(this, tags);// = function(self, readPreference, tags) {\n        // No candidate servers that match the tags, error\n        if(connection == null) {\n          return new Error(\"No replica set members available for query\");\n        }\n      } else {\n        connection = _roundRobin(this, tags);\n      }\n    }\n  } else if(finalReadPreference == ReadPreference.SECONDARY_PREFERRED) {\n    // If we have tags, look for servers matching the specific tag\n    if(this.strategyInstance != null) {\n      connection = this.strategyInstance.checkoutConnection(tags);\n      \n      // No candidate servers that match the tags, error\n      if(connection == null || connection instanceof Error) {\n        // No secondary server avilable, attemp to checkout a primary server\n        connection = this.checkoutWriter();\n        // If no connection return an error\n        if(connection == null || connection instanceof Error) {\n          var preferenceName = finalReadPreference == ReadPreference.SECONDARY ? 'secondary' : finalReadPreference;\n          return new Error(\"No replica set member available for query with ReadPreference \" + preferenceName + \" and tags \" + JSON.stringify(tags));\n        }\n      }\n    } else if(tags != null && typeof tags == 'object') {\n      // Get connection\n      connection = _pickFromTags(this, tags);// = function(self, readPreference, tags) {\n      // No candidate servers that match the tags, error\n      if(connection == null) {\n        // No secondary server avilable, attemp to checkout a primary server\n        connection = this.checkoutWriter();\n        // If no connection return an error\n        if(connection == null || connection instanceof Error) {\n          var preferenceName = finalReadPreference == ReadPreference.SECONDARY ? 'secondary' : finalReadPreference;\n          return new Error(\"No replica set member available for query with ReadPreference \" + preferenceName + \" and tags \" + JSON.stringify(tags));\n        }\n      }\n    }\n  } else if(finalReadPreference == ReadPreference.NEAREST && this.strategyInstance != null) {\n    connection = this.strategyInstance.checkoutConnection(tags);\n  } else if(finalReadPreference == ReadPreference.NEAREST && this.strategyInstance == null) {\n    return new Error(\"A strategy for calculating nearness must be enabled such as ping or statistical\");\n  } else if(finalReadPreference == ReadPreference.SECONDARY && Object.keys(this._state.secondaries).length == 0) {\n    if(tags != null && typeof tags == 'object') {\n      var preferenceName = finalReadPreference == ReadPreference.SECONDARY ? 'secondary' : finalReadPreference;\n      return new Error(\"No replica set member available for query with ReadPreference \" + preferenceName + \" and tags \" + JSON.stringify(tags));\n    } else {\n      return new Error(\"No replica set secondary available for query with ReadPreference SECONDARY\");\n    }\n  } else {\n    connection = this.checkoutWriter();\n  }\n\n  // Return the connection\n  return connection;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReplSet",
    "cons": "ReplSet",
    "name": "checkoutReader",
    "string": "ReplSet.prototype.checkoutReader()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var _pickFromTags = function(self, tags) {\n  // If we have an array or single tag selection\n  var tagObjects = Array.isArray(tags) ? tags : [tags];\n  // Iterate over all tags until we find a candidate server\n  for(var _i = 0; _i < tagObjects.length; _i++) {\n    // Grab a tag object\n    var tagObject = tagObjects[_i];\n    // Matching keys\n    var matchingKeys = Object.keys(tagObject);\n    // Match all the servers that match the provdided tags\n    var keys = Object.keys(self._state.secondaries);\n    var candidateServers = [];\n\n    for(var i = 0; i < keys.length; i++) {\n      var server = self._state.secondaries[keys[i]];\n      // If we have tags match\n      if(server.tags != null) {\n        var matching = true;\n        // Ensure we have all the values\n        for(var j = 0; j < matchingKeys.length; j++) {\n          if(server.tags[matchingKeys[j]] != tagObject[matchingKeys[j]]) {\n            matching = false;\n            break;\n          }\n        }\n\n        // If we have a match add it to the list of matching servers\n        if(matching) {\n          candidateServers.push(server);\n        }\n      }\n    }\n\n    // If we have a candidate server return\n    if(candidateServers.length > 0) {\n      if(self.strategyInstance) return self.strategyInstance.checkoutConnection(tags, candidateServers);\n      // Set instance to return\n      return candidateServers[Math.floor(Math.random() * candidateServers.length)].checkoutReader();\n    }\n  }\n\n  // No connection found\n  return null;\n}",
   "ctx": {
    "type": "function",
    "name": "_pickFromTags",
    "string": "_pickFromTags()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Pick a secondary using round robin</p>",
    "summary": "<p>Pick a secondary using round robin</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function _roundRobin (replset, tags) {\n  var keys = Object.keys(replset._state.secondaries);\n  // Update index\n  replset._currentServerChoice = replset._currentServerChoice + 1;\n  // Pick a server\n  var key = keys[replset._currentServerChoice % keys.length];\n\n  var conn = null != replset._state.secondaries[key]\n    ? replset._state.secondaries[key].checkoutReader()\n    : null;\n\n  // If connection is null fallback to first available secondary\n  if(null == conn) {\n    conn = pickFirstConnectedSecondary(replset, tags);\n  }\n\n  return conn;\n}",
   "ctx": {
    "type": "function",
    "name": "_roundRobin",
    "string": "_roundRobin()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var pickFirstConnectedSecondary = function pickFirstConnectedSecondary(self, tags) {\n  var keys = Object.keys(self._state.secondaries);\n  var connection;\n\n  // Find first available reader if any\n  for(var i = 0; i < keys.length; i++) {\n    connection = self._state.secondaries[keys[i]].checkoutReader();\n    if(connection) return connection;\n  }\n\n  // If we still have a null, read from primary if it's not secondary only\n  if(self._readPreference == ReadPreference.SECONDARY_PREFERRED) {\n    connection = self._state.master.checkoutReader();\n    if(connection) return connection;\n  }\n\n  var preferenceName = self._readPreference == ReadPreference.SECONDARY_PREFERRED\n    ? 'secondary'\n    : self._readPreference;\n\n  return new Error(\"No replica set member available for query with ReadPreference \"\n                  + preferenceName + \" and tags \" + JSON.stringify(tags));\n}",
   "ctx": {
    "type": "function",
    "name": "pickFirstConnectedSecondary",
    "string": "pickFirstConnectedSecondary()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Get list of secondaries</p>",
    "summary": "<p>Get list of secondaries</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(ReplSet.prototype, \"secondaries\", {enumerable: true\n  , get: function() {\n      return utils.objectToArray(this._state.secondaries);\n    }\n});"
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    }
   ],
   "description": {
    "full": "<p>Get list of secondaries</p>",
    "summary": "<p>Get list of secondaries</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Object.defineProperty(ReplSet.prototype, \"arbiters\", {enumerable: true\n  , get: function() {\n      return utils.objectToArray(this._state.arbiters);\n    }\n});"
  }
 ],
 "readpreference": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a Read Preference."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "the",
     "description": "read preference type"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "tags",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "ReadPreference"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the Read Preference.</p>\n\n<p>Read Preferences<br /> - <strong>ReadPreference.PRIMARY</strong>, Read from primary only. All operations produce an error (throw an exception where applicable) if primary is unavailable. Cannot be combined with tags (This is the default.).<br /> - <strong>ReadPreference.PRIMARY_PREFERRED</strong>, Read from primary if available, otherwise a secondary.<br /> - <strong>ReadPreference.SECONDARY</strong>, Read from secondary if available, otherwise error.<br /> - <strong>ReadPreference.SECONDARY_PREFERRED</strong>, Read from a secondary if available, otherwise read from the primary.<br /> - <strong>ReadPreference.NEAREST</strong>, All modes read from among the nearest candidates, but unlike other modes, NEAREST will include both the primary and all secondaries in the random selection.</p>",
    "summary": "<p>A class representation of the Read Preference.</p>",
    "body": "<p>Read Preferences<br /> - <strong>ReadPreference.PRIMARY</strong>, Read from primary only. All operations produce an error (throw an exception where applicable) if primary is unavailable. Cannot be combined with tags (This is the default.).<br /> - <strong>ReadPreference.PRIMARY_PREFERRED</strong>, Read from primary if available, otherwise a secondary.<br /> - <strong>ReadPreference.SECONDARY</strong>, Read from secondary if available, otherwise error.<br /> - <strong>ReadPreference.SECONDARY_PREFERRED</strong>, Read from a secondary if available, otherwise read from the primary.<br /> - <strong>ReadPreference.NEAREST</strong>, All modes read from among the nearest candidates, but unlike other modes, NEAREST will include both the primary and all secondaries in the random selection.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var ReadPreference = function(mode, tags) {\n  if(!(this instanceof ReadPreference))\n    return new ReadPreference(mode, tags);\n  this._type = 'ReadPreference';\n  this.mode = mode;\n  this.tags = tags;\n}",
   "ctx": {
    "type": "function",
    "name": "ReadPreference",
    "string": "ReadPreference()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadPreference.isValid = function(_mode) {\n  return (_mode == ReadPreference.PRIMARY || _mode == ReadPreference.PRIMARY_PREFERRED\n    || _mode == ReadPreference.SECONDARY || _mode == ReadPreference.SECONDARY_PREFERRED\n    || _mode == ReadPreference.NEAREST\n    || _mode == true || _mode == false || _mode == null);\n}",
   "ctx": {
    "type": "method",
    "receiver": "ReadPreference",
    "name": "isValid",
    "string": "ReadPreference.isValid()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadPreference.prototype.isValid = function(mode) {\n  var _mode = typeof mode == 'string' ? mode : this.mode;\n  return ReadPreference.isValid(_mode);\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReadPreference",
    "cons": "ReadPreference",
    "name": "isValid",
    "string": "ReadPreference.prototype.isValid()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadPreference.prototype.toObject = function() {\n  var object = {mode:this.mode};\n\n  if(this.tags != null) {\n    object['tags'] = this.tags;\n  }\n\n  return object;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ReadPreference",
    "cons": "ReadPreference",
    "name": "toObject",
    "string": "ReadPreference.prototype.toObject()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "ReadPreference.PRIMARY = 'primary';\nReadPreference.PRIMARY_PREFERRED = 'primaryPreferred';\nReadPreference.SECONDARY = 'secondary';\nReadPreference.SECONDARY_PREFERRED = 'secondaryPreferred';\nReadPreference.NEAREST = 'nearest'",
   "ctx": {
    "type": "property",
    "receiver": "ReadPreference",
    "name": "PRIMARY",
    "value": "'primary'",
    "string": "ReadPreference.PRIMARY"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.ReadPreference  = ReadPreference;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "ReadPreference",
    "value": "ReadPreference",
    "string": "exports.ReadPreference"
   }
  }
 ],
 "ordered": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a OrderedBulkOperation"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "collection",
     "description": "collection instance."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "a ordered bulk operation instance."
    }
   ],
   "description": {
    "full": "<p>Create a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Create a new OrderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function OrderedBulkOperation (collection, options) {\n\toptions = options == null ? {} : options;\n\t// TODO Bring from driver information in isMaster\n\tvar self = this;\n\tvar executed = false;\n\t\n\t// Current item\n\tvar currentOp = null;\n\n\t// Handle to the bson serializer, used to calculate running sizes\n  var db = collection.db;\n\tvar bson = db.bson;\n\n\t// Namespace for the operation\n  var namespace = collection.collectionName;  \n\n  // Set max byte size\n\tvar maxWriteBatchSize = db.serverConfig.checkoutWriter().maxWriteBatchSize || 1000;\n\tvar maxBatchSizeBytes = db.serverConfig.checkoutWriter().maxBsonSize;\n\n  // Get the write concern\n  var writeConcern = shared._getWriteConcern(collection, options);\n\t\n  // Current batch\n  var currentBatch = null;\n  var currentIndex = 0;\n  var currentBatchSize = 0;\n  var currentBatchSizeBytes = 0;\n  var batches = [];\n\n  // Final results\n  var bulkResult = {\n  \t  ok: 1\n    , writeErrors: []\n    , writeConcernErrors: []\n    , nInserted: 0\n    , nUpserted: 0\n    , nMatched: 0\n    , nModified: 0\n    , nRemoved: 0\n    , upserted: []\n  };\n\n  // Specify a full class so we can generate documentation correctly\n\tvar FindOperators = function() {",
   "ctx": {
    "type": "function",
    "name": "OrderedBulkOperation",
    "string": "OrderedBulkOperation()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "update operations"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single update document to the bulk operation</p>",
    "summary": "<p>Add a single update document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.update = function(updateDocument) {\n\t\t\t// Perform upsert\n\t\t\tvar upsert = typeof currentOp.upsert == 'boolean' ? currentOp.upsert : false;\n\t\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, u: updateDocument\n\t\t\t\t, multi: true\n\t\t\t\t, upsert: upsert\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the update document to the list\n\t\t\treturn addToOperationsList(self, common.UPDATE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "update",
    "string": "this.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "update operations"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single update one document to the bulk operation</p>",
    "summary": "<p>Add a single update one document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.updateOne = function(updateDocument) {\n\t\t\t// Perform upsert\n\t\t\tvar upsert = typeof currentOp.upsert == 'boolean' ? currentOp.upsert : false;\n\t\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, u: updateDocument\n\t\t\t\t, multi: false\n\t\t\t\t, upsert: upsert\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the update document to the list\n\t\t\treturn addToOperationsList(self, common.UPDATE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "updateOne",
    "string": "this.updateOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "the new document to replace the existing one with"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a replace one operation to the bulk operation</p>",
    "summary": "<p>Add a replace one operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.replaceOne = function(updateDocument) {\n\t\t\tthis.updateOne(updateDocument);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "replaceOne",
    "string": "this.replaceOne()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Upsert modifier for update bulk operation</p>",
    "summary": "<p>Upsert modifier for update bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.upsert = function() {\n\t\t\tcurrentOp.upsert = true;\n\t\t\treturn this;\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "upsert",
    "string": "this.upsert()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "selector for the removal of documents"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a remove one operation to the bulk operation</p>",
    "summary": "<p>Add a remove one operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.removeOne = function() {\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, limit: 1\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the remove document to the list\n\t\t\treturn addToOperationsList(self, common.REMOVE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "removeOne",
    "string": "this.removeOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "selector for the single document to remove"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a remove operation to the bulk operation</p>",
    "summary": "<p>Add a remove operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.remove = function() {\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, limit: 0\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the remove document to the list\n\t\t\treturn addToOperationsList(self, common.REMOVE, document);\t\t\t\t\n\t\t}\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "remove",
    "string": "this.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "the document to insert"
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single insert document to the bulk operation</p>",
    "summary": "<p>Add a single insert document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.insert = function(document) {\n\t\tif(document._id == null) document._id = new ObjectID();\n\t\treturn addToOperationsList(self, common.INSERT, document);\n\t}\n\n\tvar getOrderedCommand = function(_self, _namespace, _docType, _operationDocuments) {\n\t\t// Set up the types of operation\n\t\tif(_docType == common.INSERT) {\n\t\t\treturn {\n\t\t\t\t\tinsert: _namespace\n\t\t\t\t, documents: _operationDocuments\n\t\t\t\t, ordered:true \n\t\t\t}\n\t\t} else if(_docType == common.UPDATE) {\n\t\t\treturn {\n\t\t\t\t\tupdate: _namespace\n\t\t\t\t, updates: _operationDocuments\n\t\t\t\t, ordered:true\n\t\t\t};\n\t\t} else if(_docType == common.REMOVE) {\n\t\t\treturn {\n\t\t\t\t\tdelete: _namespace\n\t\t\t\t, deletes: _operationDocuments\n\t\t\t\t, ordered:true\n\t\t\t};\n\t\t}\t\t\n\t}\n\n\t// Add to internal list of documents\n\tvar addToOperationsList = function(_self, docType, document) {\n    // Get the bsonSize\n    var bsonSize = bson.calculateObjectSize(document, false);\n    // Throw error if the doc is bigger than the max BSON size\n    if(bsonSize >= maxBatchSizeBytes) throw utils.toError(\"document is larger than the maximum size \" + maxBatchSizeBytes);\n    // Create a new batch object if we don't have a current one\n    if(currentBatch == null) currentBatch = new Batch(docType, currentIndex);\n    \n    // Check if we need to create a new batch\n    if(((currentBatchSize + 1) >= maxWriteBatchSize)\n      || ((currentBatchSizeBytes +  currentBatchSizeBytes) >= maxBatchSizeBytes)\n      || (currentBatch.batchType != docType)) {\n      // Save the batch to the execution stack\n      batches.push(currentBatch);\n      \n      // Create a new batch\n      currentBatch = new Batch(docType, currentIndex);\n      \n      // Reset the current size trackers\n      currentBatchSize = 0;\n      currentBatchSizeBytes = 0;\n    } else {\n\t    // Update current batch size\n\t    currentBatchSize = currentBatchSize + 1;\n\t    currentBatchSizeBytes = currentBatchSizeBytes + bsonSize;\n    }\n\n    // We have an array of documents\n    if(Array.isArray(document)) {\n\t\t\tthrow utils.toError(\"operation passed in cannot be an Array\");\n    } else {\n    \tcurrentBatch.originalIndexes.push(currentIndex);\n      currentBatch.operations.push(document)\n      currentIndex = currentIndex + 1;\n    }\n\n    // Return self\n\t\treturn _self;\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "insert",
    "string": "this.insert()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": ""
    },
    {
     "type": "return",
     "types": [
      "OrderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initiate a find operation for an update/updateOne/remove/removeOne/replaceOne</p>",
    "summary": "<p>Initiate a find operation for an update/updateOne/remove/removeOne/replaceOne</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.find = function(selector) {\n\t\tif (!selector) {\n\t\t\tthrow utils.toError(\"Bulk find operation must specify a selector\");\n\t\t}\n\n\t\t// Save a current selector\n\t\tcurrentOp = {\n\t\t\tselector: selector\n\t\t}\n\n\t\treturn new FindOperators();\n\t}\n\n\t//\n\t// Execute next write command in a chain\n\tvar executeCommands = function(callback) {\n\t\tif(batches.length == 0) {\n\t\t\treturn callback(null, new BatchWriteResult(bulkResult));\n\t\t}\n\n\t\t// Ordered execution of the command\n\t\tvar batch = batches.shift();\n\t\t\n\t\t// Build the command\n\t\tvar cmd = null;\n\n    // Generate the right update\n    if(batch.batchType == common.UPDATE) {\n      cmd = { update: namespace, updates: batch.operations, ordered: true }\n    } else if(batch.batchType == common.INSERT) {\n      cmd = { insert: namespace, documents: batch.operations, ordered: true }\n    } else if(batch.batchType == common.REMOVE) {\n      cmd = { delete: namespace, deletes: batch.operations, ordered: true }\n    }\n\n    // If we have a write concern\n    if(writeConcern != null) {\n      cmd.writeConcern = writeConcern;\n    }    \n\n\t\t// Execute it\n\t\tdb.command(cmd, function(err, result) {\t\n\t\t\t// Merge the results together\n\t\t\tvar mergeResult = mergeBatchResults(true, batch, bulkResult, err, result);\n\t\t\tif(mergeResult != null) {\n\t\t\t\treturn callback(null, new BatchWriteResult(bulkResult));\n\t\t\t}\n\n\t\t\t// If we had a serious error\n\t\t\tif(bulkResult.ok == 0) {\n\t\t\t\treturn callback(bulkResult.error, null);\n\t\t\t}\n\n      // If we are ordered and have errors and they are \n      // not all replication errors terminate the operation          \n      if(bulkResult.writeErrors.length > 0) {\n        return callback(null, new BatchWriteResult(bulkResult));\n      }\n\n\t\t\t// Execute the next command in line\n\t\t\texecuteCommands(callback);\n\t\t});\n\t}\n\n\t// \n\t// Execute the inserts\n\tvar executeInserts = function(_collection, _batch, _result, _callback) {\n\t\tif(_batch.operations.length == 0) {\n\t\t\treturn _callback(null, _result);\n\t\t}\n\n\t\t// Get the first update\n\t\tvar document = _batch.operations.shift();\n\t\tvar index = _batch.originalIndexes.shift();\n\t\t\n\t\t// Options for the update operation\n\t\tvar options = writeConcern || {};\n\n\t\t// Execute the update\n\t\t_collection.insert(document, options, function(err, r) {\n\t\t\t// If we have don't have w:0 merge the result\n\t\t\tif(options.w == null || options.w != 0) {\n\t\t\t\t// Merge the results in \n\t\t\t\tvar result = common.mergeLegacyResults(true, document, _batch, bulkResult, err || r, index);\n\n\t\t\t\tif(result == false) {\n\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t}\t\t\t\t\n\t\t\t}\n\n\t\t\t// Update the index\n\t\t\t_batch.currentIndex = _batch.currentIndex + 1;\n\n\t\t\t// Execute the next insert\t\t\n\t\t\texecuteInserts(_collection, _batch, _result, _callback);\n\t\t});\n\t}\n\n\t//\n\t// Execute updates\n\tvar executeUpdates = function(_collection, _batch, _result, _callback) {\n\t\tif(_batch.operations.length == 0) {\n\t\t\treturn _callback(null, _result);\n\t\t}\n\n\t\t// Get the first update\n\t\tvar update = _batch.operations.shift();\n\t\tvar index = _batch.originalIndexes.shift();\n\t\t\n\t\t// Options for the update operation\n\t\tvar options = writeConcern != null ? common.cloneOptions(writeConcern) : {};\n\t\t\n\t\t// Add any additional options\n\t\tif(update.multi) options.multi = update.multi;\n\t\tif(update.upsert) options.upsert = update.upsert;\n\n\t\t// Execute the update\n\t\t_collection.update(update.q, update.u, options, function(err, r, full) {\n\t\t\t// If we have don't have w:0 merge the result\n\t\t\tif(options.w == null || options.w != 0) {\n\t\t\t\t// Merge the results in \n\t\t\t\tvar result = common.mergeLegacyResults(true, update, _batch, bulkResult, err || full, index);\n\t\t\t\tif(result == false) {\n\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Update the index\n\t\t\t_batch.currentIndex = _batch.currentIndex + 1;\n\n\t\t\t// Execute the next insert\t\t\n\t\t\texecuteUpdates(_collection, _batch, _result, _callback);\n\t\t});\n\t}\n\n\t//\n\t// Execute updates\n\tvar executeRemoves = function(_collection, _batch, _result, _callback) {\n\t\tif(_batch.operations.length == 0) {\n\t\t\treturn _callback(null, _result);\n\t\t}\n\n\t\t// Get the first update\n\t\tvar remove = _batch.operations.shift();\n\t\tvar index = _batch.originalIndexes.shift();\n\t\t\n\t\t// Options for the update operation\n\t\tvar options = writeConcern != null ? common.cloneOptions(writeConcern) : {};\n\t\t\n\t\t// Add any additional options\n\t\toptions.single = remove.limit == 1 ? true : false;\n\n\t\t// Execute the update\n\t\t_collection.remove(remove.q, options, function(err, r) {\n\t\t\t// If we have don't have w:0 merge the result\n\t\t\tif(options.w == null || options.w != 0) {\n\t\t\t\t// Merge the results in \n\t\t\t\tvar result = common.mergeLegacyResults(true, remove, _batch, bulkResult, err || r, index);\n\t\t\t\tif(result == false) {\n\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t// Update the index\n\t\t\t_batch.currentIndex = _batch.currentIndex + 1;\n\n\t\t\t// Execute the next insert\t\t\n\t\t\texecuteRemoves(_collection, _batch, _result, _callback);\n\t\t});\n\t}\n\n\t//\n\t// Execute all operation in backwards compatible fashion\n\tvar backwardsCompatibilityExecuteCommands = function(callback) {\n\t\tif(batches.length == 0) {\n\t\t\treturn callback(null, new BatchWriteResult(bulkResult));\n\t\t}\n\n\t\t// Ordered execution of the command\n\t\tvar batch = batches.shift();\n\n\t\t// Process the legacy operations\n\t\tvar processLegacyOperations = function(err, results) {\n\t\t\t// If we have any errors stop executing\n      if(bulkResult.writeErrors.length > 0) {\n\t\t\t\treturn callback(null, new BatchWriteResult(bulkResult));\n\t\t\t}\n\n\t\t\t// If we have a top level error stop\n\t\t\tif(bulkResult.ok == 0) {\n\t\t\t\treturn callback(bulkResult.error, null);\n\t\t\t}\n\n\t\t\t// Execute the next step\n\t\t\tbackwardsCompatibilityExecuteCommands(callback);\t\t\t\n\t\t}\n\n\t\t// Execute an insert batch\n\t\tif(batch.batchType == common.INSERT) {\n\t\t\treturn executeInserts(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\n\t\t// Execute an update batch\n\t\tif(batch.batchType == common.UPDATE) {\n\t\t\treturn executeUpdates(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\n\t\t// Execute an update batch\n\t\tif(batch.batchType == common.REMOVE) {\n\t\t\treturn executeRemoves(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "find",
    "string": "this.find()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from from the ordered bulk operation."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute the ordered bulk operation</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Execute the ordered bulk operation</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.execute = function(_writeConcern, callback) {\n\t\tif(executed) throw new utils.toError(\"batch cannot be re-executed\");\n\t\tif(typeof _writeConcern == 'function') {\n\t\t\tcallback = _writeConcern;\n\t\t} else {\n\t\t\twriteConcern = _writeConcern;\n\t\t}\n\n    // If we have current batch\n    if(currentBatch) batches.push(currentBatch);\n\n\t\t// If we have no operations in the bulk raise an error\n\t\tif(batches.length == 0) {\n\t\t\tthrow utils.toError(\"Invalid Operation, No operations in bulk\");\n\t\t}\n\n\t\t// Check if we support bulk commands, override if needed to use legacy ops\n\t\tif(hasWriteCommands(db.serverConfig.checkoutWriter()))\n\t\t\treturn executeCommands(callback);\n\n\t\t// Set nModified to null as we don't support this field\n\t\tbulkResult.nModified = null;\n\n\t\t// Run in backward compatibility mode\n\t\tbackwardsCompatibilityExecuteCommands(callback);\n\t}\n}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "execute",
    "string": "this.execute()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Returns an unordered batch object</p>",
    "summary": "<p>Returns an unordered batch object</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var initializeOrderedBulkOp = function(options) {\n\treturn new OrderedBulkOperation(this, options);\n}\n\nexports.initializeOrderedBulkOp = initializeOrderedBulkOp;",
   "ctx": {
    "type": "function",
    "name": "initializeOrderedBulkOp",
    "string": "initializeOrderedBulkOp()"
   }
  }
 ],
 "unordered": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a UnorderedBulkOperation"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "collection",
     "description": "collection instance."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options for the collection."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "a ordered bulk operation instance."
    }
   ],
   "description": {
    "full": "<p>Create a new UnorderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Create a new UnorderedBulkOperation instance (INTERNAL TYPE, do not instantiate directly)</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var UnorderedBulkOperation = function(collection, options) {\n\toptions = options == null ? {} : options;\n\n\t// Contains reference to self\n\tvar self = this;\n\t// Get the namesspace for the write operations\n  var namespace = collection.collectionName;\n  // Used to mark operation as executed\n  var executed = false;\n\n\t// Current item\n  // var currentBatch = null;\n\tvar currentOp = null;\n\tvar currentIndex = 0;\n  var currentBatchSize = 0;\n  var currentBatchSizeBytes = 0;\n  var batches = [];\n\n  // The current Batches for the different operations\n  var currentInsertBatch = null;\n  var currentUpdateBatch = null;\n  var currentRemoveBatch = null;\n\n\t// Handle to the bson serializer, used to calculate running sizes\n  var db = collection.db;\n\tvar bson = db.bson;\n\n  // Set max byte size\n\tvar maxBatchSizeBytes = db.serverConfig.checkoutWriter().maxBsonSize;\n\tvar maxWriteBatchSize = db.serverConfig.checkoutWriter().maxWriteBatchSize || 1000;\n\n  // Get the write concern\n  var writeConcern = shared._getWriteConcern(collection, options);\n\n  // Final results\n  var bulkResult = {\n  \t  ok: 1\n    , writeErrors: []\n    , writeConcernErrors: []\n    , nInserted: 0\n    , nUpserted: 0\n    , nMatched: 0\n    , nModified: 0\n    , nRemoved: 0\n    , upserted: []\n  };\n\n  // Specify a full class so we can generate documentation correctly\n\tvar FindOperators = function() {",
   "ctx": {
    "type": "function",
    "name": "UnorderedBulkOperation",
    "string": "UnorderedBulkOperation()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "update operations"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single update document to the bulk operation</p>",
    "summary": "<p>Add a single update document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.update = function(updateDocument) {\n\t\t\t// Perform upsert\n\t\t\tvar upsert = typeof currentOp.upsert == 'boolean' ? currentOp.upsert : false;\n\t\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, u: updateDocument\n\t\t\t\t, multi: true\n\t\t\t\t, upsert: upsert\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the update document to the list\n\t\t\treturn addToOperationsList(self, common.UPDATE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "update",
    "string": "this.update()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "update operations"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single update one document to the bulk operation</p>",
    "summary": "<p>Add a single update one document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.updateOne = function(updateDocument) {\n\t\t\t// Perform upsert\n\t\t\tvar upsert = typeof currentOp.upsert == 'boolean' ? currentOp.upsert : false;\n\t\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, u: updateDocument\n\t\t\t\t, multi: false\n\t\t\t\t, upsert: upsert\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the update document to the list\n\t\t\treturn addToOperationsList(self, common.UPDATE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "updateOne",
    "string": "this.updateOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "the new document to replace the existing one with"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a replace one operation to the bulk operation</p>",
    "summary": "<p>Add a replace one operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.replaceOne = function(updateDocument) {\n\t\t\tthis.updateOne(updateDocument);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "replaceOne",
    "string": "this.replaceOne()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Upsert modifier for update bulk operation</p>",
    "summary": "<p>Upsert modifier for update bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.upsert = function() {\n\t\t\tcurrentOp.upsert = true;\n\t\t\treturn this;\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "upsert",
    "string": "this.upsert()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "selector for the removal of documents"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a remove one operation to the bulk operation</p>",
    "summary": "<p>Add a remove one operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.removeOne = function() {\t\t\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, limit: 1\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the remove document to the list\n\t\t\treturn addToOperationsList(self, common.REMOVE, document);\n\t\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "removeOne",
    "string": "this.removeOne()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "selector for the single document to remove"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a remove operation to the bulk operation</p>",
    "summary": "<p>Add a remove operation to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.remove = function() {\n\t\t\t// Establish the update command\n\t\t\tvar document = {\n\t\t\t\t\tq: currentOp.selector\n\t\t\t\t, limit: 0\n\t\t\t}\n\n\t\t\t// Clear out current Op\n\t\t\tcurrentOp = null;\n\t\t\t// Add the remove document to the list\n\t\t\treturn addToOperationsList(self, common.REMOVE, document);\t\t\t\t\n\t\t}\n\t}\n\n\t// \n\t// Add to the operations list\n\t//\n\tvar addToOperationsList = function(_self, docType, document) {\n    // Get the bsonSize\n    var bsonSize = bson.calculateObjectSize(document, false);\n    // Throw error if the doc is bigger than the max BSON size\n    if(bsonSize >= maxBatchSizeBytes) throw utils.toError(\"document is larger than the maximum size \" + maxBatchSizeBytes);\n    // Holds the current batch\n    var currentBatch = null;\n    // Get the right type of batch\n    if(docType == common.INSERT) {\n    \tcurrentBatch = currentInsertBatch;\n    } else if(docType == common.UPDATE) {\n    \tcurrentBatch = currentUpdateBatch;\n    } else if(docType == common.REMOVE) {\n    \tcurrentBatch = currentRemoveBatch;\n    }\n\n    // Create a new batch object if we don't have a current one\n    if(currentBatch == null) currentBatch = new Batch(docType, currentIndex);\n    \n    // Check if we need to switch batch type\n    if(currentBatch.batchType != docType) {\n      // Save current batch\n      batches.push(currentBatch);\n      // Create a new batch\n      currentBatch = new Batch(docType, currentIndex);  \n\n      // Reset the current size trackers\n      currentBatchSize = 0;\n      currentBatchSizeBytes = 0;\n    }\n\n    // Check if we need to create a new batch\n    if(((currentBatchSize + 1) >= maxWriteBatchSize)\n      || ((currentBatchSizeBytes +  currentBatchSizeBytes) >= maxBatchSizeBytes)\n      || (currentBatch.batchType != docType)) {\n      // Save the batch to the execution stack\n      batches.push(currentBatch);\n      \n      // Create a new batch\n      currentBatch = new Batch(docType, currentIndex);\n      \n      // Reset the current size trackers\n      currentBatchSize = 0;\n      currentBatchSizeBytes = 0;\n    } else {\n\t    // Update current batch size\n\t    currentBatchSize = currentBatchSize + 1;\n\t    currentBatchSizeBytes = currentBatchSizeBytes + bsonSize;\n    }\n\n    // We have an array of documents\n    if(Array.isArray(document)) {\n    \tthrow utils.toError(\"operation passed in cannot be an Array\");\n    } else {\n      currentBatch.operations.push(document);\n      currentBatch.originalIndexes.push(currentIndex);\n      currentIndex = currentIndex + 1;\n    }\n\n    // Save back the current Batch to the right type\n    if(docType == common.INSERT) {\n    \tcurrentInsertBatch = currentBatch;\n    } else if(docType == common.UPDATE) {\n    \tcurrentUpdateBatch = currentBatch;\n    } else if(docType == common.REMOVE) {\n    \tcurrentRemoveBatch = currentBatch;\n    }\n\n    // Update current batch size\n    currentBatchSize = currentBatchSize + 1;\n    currentBatchSizeBytes = currentBatchSizeBytes + bsonSize;\n\n    // Return self\n\t\treturn _self;\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "remove",
    "string": "this.remove()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "doc",
     "description": "the document to insert"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Add a single insert document to the bulk operation</p>",
    "summary": "<p>Add a single insert document to the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.insert = function(document) {\n    if(document._id == null) document._id = new ObjectID();\n\t\treturn addToOperationsList(self, common.INSERT, document);\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "insert",
    "string": "this.insert()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "selector",
     "description": "the selector used to locate documents for the operation"
    },
    {
     "type": "return",
     "types": [
      "UnorderedBulkOperation"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Initiate a find operation for an update/updateOne/remove/removeOne/replaceOne</p>",
    "summary": "<p>Initiate a find operation for an update/updateOne/remove/removeOne/replaceOne</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.find = function(selector) {\n\t\tif (!selector) {\n\t\t\tthrow utils.toError(\"Bulk find operation must specify a selector\");\n\t\t}\n\n\t\t// Save a current selector\n\t\tcurrentOp = {\n\t\t\tselector: selector\n\t\t}\n\n\t\treturn new FindOperators();\n\t}\t\n\n\t//\n\t// Execute the command\n\tvar executeBatch = function(batch, callback) {\n\t\t// Contains the command we are going to execute\n\t\tvar cmd = null;\n\n    // Generate the right update\n    if(batch.batchType == common.UPDATE) {\n      cmd = { update: namespace, updates: batch.operations, ordered: false }\n    } else if(batch.batchType == common.INSERT) {\n      cmd = { insert: namespace, documents: batch.operations, ordered: false }\n    } else if(batch.batchType == common.REMOVE) {\n      cmd = { delete: namespace, deletes: batch.operations, ordered: false }\n    }\n\n    // If we have a write concern\n    if(writeConcern != null) {\n      cmd.writeConcern = writeConcern;\n    }    \n\n\t\t// Execute the write command\n\t\tdb.command(cmd, function(err, result) {\n\t\t\tcallback(null, mergeBatchResults(false, batch, bulkResult, err, result));\n\t\t});\n\t}\n\n\t//\n\t// Execute all the commands\n\tvar executeBatches = function(callback) {\n\t\tvar numberOfCommandsToExecute = batches.length;\n\t\t// Execute over all the batches\n\t\tfor(var i = 0; i < batches.length; i++) {\n\t\t\texecuteBatch(batches[i], function(err, result) {\n\t\t\t\tnumberOfCommandsToExecute = numberOfCommandsToExecute - 1;\n\n\t\t\t\t// Execute\n\t\t\t\tif(numberOfCommandsToExecute == 0) {\n\t\t\t\t\t// If we have an error stop\n\t\t\t\t\tif(bulkResult.ok == 0 && callback) {\n\t\t\t\t\t\treturn callback(bulkResult.error, null);\n\t\t\t\t\t}\n\n\t\t\t\t\tcallback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "find",
    "string": "this.find()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options during update."
    },
    {
     "type": "param",
     "types": [
      "Function"
     ],
     "name": "callback",
     "description": "this will be called after executing this method. The first parameter will contain the Error object if an error occured, or null otherwise. While the second parameter will contain the results from from the unordered bulk operation."
    },
    {
     "type": "return",
     "types": [
      "null"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Execute the unordered bulk operation</p>\n\n<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>",
    "summary": "<p>Execute the unordered bulk operation</p>",
    "body": "<p>Options<br /> - <strong>w</strong>, {Number/String, > -1 || 'majority' || tag name} the write concern for the operation where &lt; 1 is no acknowlegement of write and w >= 1, w = 'majority' or tag acknowledges the write<br /> - <strong>wtimeout</strong>, {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)<br /> - <strong>fsync</strong>, (Boolean, default:false) write waits for fsync before returning, from MongoDB 2.6 on, fsync cannot be combined with journal<br /> - <strong>j</strong>, (Boolean, default:false) write waits for journal sync before returning</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.execute = function(_writeConcern, callback) {\n\t\tif(executed) throw utils.toError(\"batch cannot be re-executed\");\n\t\tif(typeof _writeConcern == 'function') {\n\t\t\tcallback = _writeConcern;\n\t\t} else {\n\t\t\twriteConcern = _writeConcern;\n\t\t}\n\n    // If we have current batch\n    if(currentInsertBatch) batches.push(currentInsertBatch);\n    if(currentUpdateBatch) batches.push(currentUpdateBatch);\n    if(currentRemoveBatch) batches.push(currentRemoveBatch);\n\n\t\t// If we have no operations in the bulk raise an error\n\t\tif(batches.length == 0) {\n\t\t\tthrow utils.toError(\"Invalid Operation, No operations in bulk\");\n\t\t}\n\n\t\t// Check if we support bulk commands\n\t\tif(hasWriteCommands(db.serverConfig.checkoutWriter()))\n\t\t\treturn executeBatches(function(err, result) {\n\t\t\t\tcallback(err, result);\n\t\t\t});\n\n\t\t// Set nModified to null as we don't support this field\n\t\tbulkResult.nModified = null;\n\n\t\t// Run in backward compatibility mode\n\t\tbackwardsCompatibilityExecuteCommands(function(err, result) {\n\t\t\tcallback(err, result);\n\t\t});\n\t}\t\n\n\t// \n\t// Execute the inserts\n\tvar executeInserts = function(_collection, _batch, _result, _callback) {\n\t\tvar totalNumberOfInserts = _batch.operations.length;\n\n\t\t// Options for the update operation\n\t\tvar batchOptions = writeConcern || {};\n\n\t\t// Execute the op\n\t\tvar executeLegacyInsert = function(_i, _op, _options, __callback) {\n\t\t\t// Execute the update\n\t\t\t_collection.insert(_op.operation, _options, function(err, r) {\n\t\t\t\t// If we have don't have w:0 merge the result\n\t\t\t\tif(_options.w == null || _options.w != 0) {\n\t\t\t\t\t// Merge the results in \n\t\t\t\t\tvar result = common.mergeLegacyResults(false, _op.operation, _batch, bulkResult, err || r, _op.index);\n\t\t\t\t\tif(result == false) {\n\t\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t__callback(null, _result);\n\t\t\t});\n\t\t}\n\n\t\t// Execute all the insert operations\n\t\tfor(var i = 0; i < _batch.operations.length; i++) {\n\t\t\tvar legacyOp = new LegacyOp(_batch.batchType, _batch.operations[i], _batch.originalIndexes[i]);\n\t\t\texecuteLegacyInsert(i, legacyOp, batchOptions, function(err, result) {\n\t\t\t\ttotalNumberOfInserts = totalNumberOfInserts - 1;\n\t\t\t\t\n\t\t\t\t// No more inserts\n\t\t\t\tif(totalNumberOfInserts == 0) {\n\t\t\t\t\t_callback(null, _result);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\t//\n\t// Execute updates\n\tvar executeUpdates = function(_collection, _batch, _result, _callback) {\n\t\tvar totalNumberOfUpdates = _batch.operations.length;\n\t\t// Options for the update operation\n\t\tvar batchOptions = writeConcern || {};\n\n\t\t// Execute the op\n\t\tvar executeLegacyUpdate = function(_i, _op, _options, __callback) {\n\t\t\tvar options = common.cloneOptions(batchOptions);\n\n\t\t\t// Add any additional options\n\t\t\tif(_op.operation.multi != null) options.multi = _op.operation.multi ? true : false;\n\t\t\tif(_op.operation.upsert != null) options.upsert = _op.operation.upsert;\n\n\t\t\t// Execute the update\n\t\t\t_collection.update(_op.operation.q, _op.operation.u, options, function(err, r, full) {\n\t\t\t\t// If we have don't have w:0 merge the result\n\t\t\t\tif(options.w == null || options.w != 0) {\n\t\t\t\t\t// Merge the results in \n\t\t\t\t\tvar result = common.mergeLegacyResults(false, _op.operation, _batch, bulkResult, err || full, _op.index);\n\t\t\t\t\tif(result == false) {\n\t\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn __callback(null, _result);\n\t\t\t});\n\t\t}\n\n\t\t// Execute all the insert operations\n\t\tfor(var i = 0; i < _batch.operations.length; i++) {\n\t\t\tvar legacyOp = new LegacyOp(_batch.batchType, _batch.operations[i], _batch.originalIndexes[i]);\n\t\t\texecuteLegacyUpdate(i, legacyOp, options, function(err, result) {\n\t\t\t\ttotalNumberOfUpdates = totalNumberOfUpdates - 1;\n\t\t\t\t\n\t\t\t\t// No more inserts\n\t\t\t\tif(totalNumberOfUpdates == 0) {\n\t\t\t\t\t_callback(null, _result);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\t//\n\t// Execute updates\n\tvar executeRemoves = function(_collection, _batch, _result, _callback) {\n\t\tvar totalNumberOfRemoves = _batch.operations.length;\n\t\t// Options for the update operation\n\t\tvar batchOptions = writeConcern || {};\n\n\t\t// Execute the op\n\t\tvar executeLegacyRemove = function(_i, _op, _options, __callback) {\n\t\t\tvar options = common.cloneOptions(batchOptions);\n\n\t\t\t// Add any additional options\n\t\t\tif(_op.operation.limit != null) options.single = _op.operation.limit == 1 ? true : false;\n\n\t\t\t// Execute the update\n\t\t\t_collection.remove(_op.operation.q, options, function(err, r) {\n\t\t\t\t// If we have don't have w:0 merge the result\n\t\t\t\tif(options.w == null || options.w != 0) {\n\t\t\t\t\t// Merge the results in \n\t\t\t\t\tvar result = common.mergeLegacyResults(false, _op.operation, _batch, bulkResult, err || r, _op.index);\n\t\t\t\t\tif(result == false) {\n\t\t\t\t\t\treturn _callback(null, new BatchWriteResult(bulkResult));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn __callback(null, _result);\n\t\t\t});\n\t\t}\n\n\t\t// Execute all the insert operations\n\t\tfor(var i = 0; i < _batch.operations.length; i++) {\n\t\t\tvar legacyOp = new LegacyOp(_batch.batchType, _batch.operations[i], _batch.originalIndexes[i]);\n\t\t\texecuteLegacyRemove(i, legacyOp, options, function(err, result) {\n\t\t\t\ttotalNumberOfRemoves = totalNumberOfRemoves - 1;\n\t\t\t\t\n\t\t\t\t// No more inserts\n\t\t\t\tif(totalNumberOfRemoves == 0) {\n\t\t\t\t\t_callback(null, _result);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\t//\n\t// Execute all operation in backwards compatible fashion\n\tvar backwardsCompatibilityExecuteCommands = function(callback) {\n\t\tif(batches.length == 0) {\n\t\t\treturn callback(null, new BatchWriteResult(bulkResult));\n\t\t}\n\n\t\t// Ordered execution of the command\n\t\tvar batch = batches.shift();\n\n\t\t// Process the legacy operations\n\t\tvar processLegacyOperations = function(err, results) {\n\t\t\t// Merge the results together\n\t\t\tvar mergeResult = mergeBatchResults(false, batch, bulkResult, err, results);\n\t\t\tif(mergeResult != null) {\n\t\t\t\treturn callback(null, mergeResult)\n\t\t\t}\n\n\t\t\t// If we have an error stop\n\t\t\tif(bulkResult.ok == 0 && callback) {\n\t\t\t\tvar internalCallback = callback;\n\t\t\t\tcallback = null;\n\t\t\t\treturn internalCallback(bulkResult.error, null);\n\t\t\t} else if(bulkResult.ok == 0 && callback == null) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Execute the next step\n\t\t\tbackwardsCompatibilityExecuteCommands(callback);\t\t\t\n\t\t}\n\n\t\t// Execute an insert batch\n\t\tif(batch.batchType == common.INSERT) {\n\t\t\treturn executeInserts(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\n\t\t// Execute an update batch\n\t\tif(batch.batchType == common.UPDATE) {\n\t\t\treturn executeUpdates(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\n\t\t// Execute an update batch\n\t\tif(batch.batchType == common.REMOVE) {\n\t\t\treturn executeRemoves(collection, batch, {n: 0}, processLegacyOperations);\n\t\t}\n\t}\t\n}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "execute",
    "string": "this.execute()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Returns an unordered batch object</p>",
    "summary": "<p>Returns an unordered batch object</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var initializeUnorderedBulkOp = function(options) {\n\treturn new UnorderedBulkOperation(this, options);\n}\n\nexports.initializeUnorderedBulkOp = initializeUnorderedBulkOp;",
   "ctx": {
    "type": "function",
    "name": "initializeUnorderedBulkOp",
    "string": "initializeUnorderedBulkOp()"
   }
  }
 ],
 "batchwriteresult": [
  {
   "tags": [],
   "description": {
    "full": "<p>Helper function to define properties</p>",
    "summary": "<p>Helper function to define properties</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var defineReadOnlyProperty = function(self, name, value) {\n  Object.defineProperty(self, name, {\n      enumerable: true\n    , get: function() {\n      return value;\n    }\n  });\n}",
   "ctx": {
    "type": "function",
    "name": "defineReadOnlyProperty",
    "string": "defineReadOnlyProperty()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Keeps the state of a unordered batch so we can rewrite the results<br />correctly after command execution</p>",
    "summary": "<p>Keeps the state of a unordered batch so we can rewrite the results<br />correctly after command execution</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var Batch = function(batchType, originalZeroIndex) {  \n  this.originalZeroIndex = originalZeroIndex;\n  this.currentIndex = 0;\n  this.originalIndexes = [];\n  this.batchType = batchType;\n  this.operations = [];\n  this.size = 0;\n}",
   "ctx": {
    "type": "function",
    "name": "Batch",
    "string": "Batch()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Wraps a legacy operation so we can correctly rewrite it's error</p>",
    "summary": "<p>Wraps a legacy operation so we can correctly rewrite it's error</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var LegacyOp = function(batchType, operation, index) {\n  this.batchType = batchType;\n  this.index = index;\n  this.operation = operation;\n}",
   "ctx": {
    "type": "function",
    "name": "LegacyOp",
    "string": "LegacyOp()"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents a BatchWriteResult"
    },
    {
     "type": "property",
     "string": "**ok** {boolean} did bulk operation correctly execute"
    },
    {
     "type": "property",
     "string": "**nInserted** {number} number of inserted documents"
    },
    {
     "type": "property",
     "string": "**nUpdated** {number} number of documents updated logically"
    },
    {
     "type": "property",
     "string": "**nUpserted** {number} number of upserted documents"
    },
    {
     "type": "property",
     "string": "**nModified** {number} number of documents updated physically on disk"
    },
    {
     "type": "property",
     "string": "**nRemoved** {number} number of removed documents"
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "batchResult",
     "description": "internal data structure with results."
    },
    {
     "type": "return",
     "types": [
      "BatchWriteResult"
     ],
     "description": "a BatchWriteResult instance"
    }
   ],
   "description": {
    "full": "<p>Create a new BatchWriteResult instance (INTERNAL TYPE, do not instantiate directly)</p>",
    "summary": "<p>Create a new BatchWriteResult instance (INTERNAL TYPE, do not instantiate directly)</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var BatchWriteResult = function(bulkResult) {\n  defineReadOnlyProperty(this, \"ok\", bulkResult.ok);\n  defineReadOnlyProperty(this, \"nInserted\", bulkResult.nInserted);\n  defineReadOnlyProperty(this, \"nUpserted\", bulkResult.nUpserted);\n  defineReadOnlyProperty(this, \"nMatched\", bulkResult.nMatched);\n  defineReadOnlyProperty(this, \"nModified\", bulkResult.nModified);\n  defineReadOnlyProperty(this, \"nRemoved\", bulkResult.nRemoved);",
   "ctx": {
    "type": "function",
    "name": "BatchWriteResult",
    "string": "BatchWriteResult()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return an array of upserted ids</p>",
    "summary": "<p>Return an array of upserted ids</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getUpsertedIds = function() {\n    return bulkResult.upserted;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getUpsertedIds",
    "string": "this.getUpsertedIds()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "index",
     "description": "the number of the upserted id to return, returns undefined if no result for passed in index"
    },
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the upserted id at position x</p>",
    "summary": "<p>Return the upserted id at position x</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getUpsertedIdAt = function(index) {\n    return bulkResult.upserted[index]; \n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getUpsertedIdAt",
    "string": "this.getUpsertedIdAt()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return raw internal result</p>",
    "summary": "<p>Return raw internal result</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getRawResponse = function() {\n    return bulkResult;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getRawResponse",
    "string": "this.getRawResponse()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns true if the bulk operation contains a write error</p>",
    "summary": "<p>Returns true if the bulk operation contains a write error</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.hasWriteErrors = function() {\n    return bulkResult.writeErrors.length > 0;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "hasWriteErrors",
    "string": "this.hasWriteErrors()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the number of write errors off the bulk operation</p>",
    "summary": "<p>Returns the number of write errors off the bulk operation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getWriteErrorCount = function() {\n    return bulkResult.writeErrors.length;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getWriteErrorCount",
    "string": "this.getWriteErrorCount()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "WriteError"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a specific write error object</p>",
    "summary": "<p>Returns a specific write error object</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getWriteErrorAt = function(index) {\n    if(index < bulkResult.writeErrors.length) {\n      return bulkResult.writeErrors[index];\n    }\n    return null;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getWriteErrorAt",
    "string": "this.getWriteErrorAt()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve all write errors</p>",
    "summary": "<p>Retrieve all write errors</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getWriteErrors = function() {\n    return bulkResult.writeErrors;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getWriteErrors",
    "string": "this.getWriteErrors()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Array"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve lastOp if available</p>",
    "summary": "<p>Retrieve lastOp if available</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getLastOp = function() {\n    return bulkResult.lastOp;\n  }",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getLastOp",
    "string": "this.getLastOp()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "WriteConcernError"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Retrieve the write concern error if any</p>",
    "summary": "<p>Retrieve the write concern error if any</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "this.getWriteConcernError = function() {\n    if(bulkResult.writeConcernErrors.length == 0) {\n      return null;\n    } else if(bulkResult.writeConcernErrors.length == 1) {\n      // Return the error\n      return bulkResult.writeConcernErrors[0];\n    } else {\n\n      // Combine the errors\n      var errmsg = \"\";\n      for(var i = 0; i < bulkResult.writeConcernErrors.length; i++) {\n        var err = bulkResult.writeConcernErrors[i];\n        errmsg = errmsg + err.errmsg;\n        \n        // TODO: Something better\n        if(i == 0) errmsg = errmsg + \" and \";\n      }\n\n      return new WriteConcernError({ errmsg : errmsg, code : WRITE_CONCERN_ERROR });\n    }\n  }\n\n  this.toJSON = function() {\n    return bulkResult;\n  }\n\n  this.toString = function() {\n    return \"BatchWriteResult(\" + this.toJSON(bulkResult) + \")\";\n  }\n\n  this.isOk = function() {\n    return bulkResult.ok == 1;\n  }\n}",
   "ctx": {
    "type": "method",
    "receiver": "this",
    "name": "getWriteConcernError",
    "string": "this.getWriteConcernError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Wraps a write concern error</p>",
    "summary": "<p>Wraps a write concern error</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var WriteConcernError = function(err) {\n  if(!(this instanceof WriteConcernError)) return new WriteConcernError(err);\n\n  // Define properties\n  defineReadOnlyProperty(this, \"code\", err.code);\n  defineReadOnlyProperty(this, \"errmsg\", err.errmsg);\n\n  this.toJSON = function() {\n    return {code: err.code, errmsg: err.errmsg};\n  }\n\n  this.toString = function() {\n    return \"WriteConcernError(\" + err.errmsg + \")\";\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "WriteConcernError",
    "string": "WriteConcernError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Wraps the error</p>",
    "summary": "<p>Wraps the error</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var WriteError = function(err) {\n  if(!(this instanceof WriteError)) return new WriteError(err);\n\n  // Define properties\n  defineReadOnlyProperty(this, \"code\", err.code);\n  defineReadOnlyProperty(this, \"index\", err.index);\n  defineReadOnlyProperty(this, \"errmsg\", err.errmsg);\n\n  //\n  // Define access methods\n  this.getOperation = function() {\n    return err.op;\n  }\n\n  this.toJSON = function() {\n    return {code: err.code, index: err.index, errmsg: err.errmsg, op: err.op};\n  }\n\n  this.toString = function() {\n    return \"WriteError(\" + JSON.stringify(this.toJSON()) + \")\";\n  }\n}",
   "ctx": {
    "type": "function",
    "name": "WriteError",
    "string": "WriteError()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Merges results into shared data structure</p>",
    "summary": "<p>Merges results into shared data structure</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var mergeBatchResults = function(ordered, batch, bulkResult, err, result) {\n  // If we have an error set the result to be the err object\n  if(err) {\n    result = err;\n  }\n\n  // Do we have a top level error stop processing and return\n  if(result.ok == 0 && bulkResult.ok == 1) {\n    bulkResult.ok = 0;\n    bulkResult.error = utils.toError(result);\n    return;\n  } else if(result.ok == 0 && bulkResult.ok == 0) {\n    return;\n  }\n\n  // Add lastop if available\n  if(result.lastOp) {\n    bulkResult.lastOp = result.lastOp;\n  }\n\n  // If we have an insert Batch type\n  if(batch.batchType == INSERT && result.n) {\n    bulkResult.nInserted = bulkResult.nInserted + result.n;\n  }\n\n  // If we have an insert Batch type\n  if(batch.batchType == REMOVE && result.n) {\n    bulkResult.nRemoved = bulkResult.nRemoved + result.n;\n  }\n\n  var nUpserted = 0;\n\n  // We have an array of upserted values, we need to rewrite the indexes\n  if(Array.isArray(result.upserted)) {\n    nUpserted = result.upserted.length;\n\n    for(var i = 0; i < result.upserted.length; i++) {\n      bulkResult.upserted.push({\n          index: result.upserted[i].index + batch.originalZeroIndex\n        , _id: result.upserted[i]._id\n      });\n    }\n  } else if(result.upserted) {\n\n    nUpserted = 1;\n\n    bulkResult.upserted.push({\n        index: batch.originalZeroIndex\n      , _id: result.upserted\n    });\n  }\n\n  // If we have an update Batch type\n  if(batch.batchType == UPDATE && result.n) {\n    var nModified = result.nModified;\n    bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;\n    bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);\n    \n    if(typeof nModified == 'number') {\n      bulkResult.nModified = bulkResult.nModified + nModified;\n    } else {\n      bulkResult.nModified = null;\n    }\n  }\n\n  if(Array.isArray(result.writeErrors)) {\n    for(var i = 0; i < result.writeErrors.length; i++) {\n\n      var writeError = {\n          index: batch.originalZeroIndex + result.writeErrors[i].index\n        , code: result.writeErrors[i].code\n        , errmsg: result.writeErrors[i].errmsg\n        , op: batch.operations[result.writeErrors[i].index]\n      };\n\n      bulkResult.writeErrors.push(new WriteError(writeError));\n    }\n  }\n\n  if(result.writeConcernError) {\n    bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));\n  }\n}\n\n// \n// Merge a legacy result into the master results\nvar mergeLegacyResults = function(_ordered, _op, _batch, _results, _result, _index) {\n  // If we have an error already\n  if(_results.ok == 0) return false;\n  // Handle error\n  if((_result.errmsg || _result.err || _result instanceof Error) && _result.wtimeout != true) {\n    // && ((_result.wtimeout == null && _result.jnote == null && _result.wnote == null)) || _result.err == \"norepl\") {\n    var code = _result.code || UNKNOWN_ERROR; // Returned error code or unknown code\n    var errmsg = _result.errmsg || _result.err;\n    errmsg = errmsg || _result.message;\n\n    // Result is replication issue, rewrite error to match write command      \n    if(_result.wnote || _result.wtimeout || _result.jnote) {\n      // Set the code to replication error\n      code = WRITE_CONCERN_ERROR;\n      // Ensure we get the right error message\n      errmsg = _result.wnote || errmsg;\n      errmsg = _result.jnote || errmsg;\n    }\n\n    //\n    // We have an error that is a show stopper, 16544 and 13 are auth errors that should stop processing\n    if(_result.wnote \n      || _result.jnote == \"journaling not enabled on this server\" \n      || _result.err == \"norepl\"\n      || _result.code == 16544 \n      || _result.code == 13) {\n      _results.ok = 0;\n      _results.error = utils.toError({code: code, errmsg: errmsg});\n      return false;\n    }    \n\n    // Create a write error\n    var errResult = new WriteError({\n        index: _index\n      , code: code\n      , errmsg: errmsg\n      , op: _op      \n    });\n    \n    // Err details\n    _results.writeErrors.push(errResult);\n\n    // Check if we any errors\n    if(_ordered == true \n      && _result.jnote == null \n      && _result.wnote == null \n      && _result.wtimeout == null) {\n      return false;\n    }\n  } else if(_batch.batchType == INSERT) {\n    _results.nInserted = _results.nInserted + 1;\n  } else if(_batch.batchType == UPDATE) {\n    // If we have an upserted value or if the user provided a custom _id value\n    if(_result.upserted || (!_result.updatedExisting && _result.upserted == null)) {\n      _results.nUpserted = _results.nUpserted + 1;\n    } else {\n      _results.nMatched = _results.nMatched + _result.n;\n      _results.nModified = null;\n     }\n  } else if(_batch.batchType == REMOVE) {\n    _results.nRemoved = _results.nRemoved + _result;\n  }\n\n  // We have a write concern error, add a write concern error to the results\n  if(_result.wtimeout != null || _result.jnote != null || _result.wnote != null) {\n    var error = _result.err || _result.errmsg || _result.wnote || _result.jnote || _result.wtimeout;\n    var code = _result.code || WRITE_CONCERN_ERROR;\n    // Push a write concern error to the list\n    _results.writeConcernErrors.push(new WriteConcernError({errmsg: error, code: code}));\n  }\n\n  // We have an upserted field (might happen with a write concern error)\n  if(_result.upserted) {\n    _results.upserted.push({\n        index: _index\n      , _id: _result.upserted\n    })\n  } else if(!_result.updatedExisting && _result.upserted == null && _op.q && _op.q._id) {\n    _results.upserted.push({\n        index: _index\n      , _id: _op.q._id\n    })    \n  }\n}\n\n//\n// Clone the options\nvar cloneOptions = function(options) {\n  var clone = {};\n  var keys = Object.keys(options);\n  for(var i = 0; i < keys.length; i++) {\n    clone[keys[i]] = options[keys[i]];\n  }\n\n  return clone;\n}\n\n// Exports symbols\nexports.BatchWriteResult = BatchWriteResult;\nexports.WriteError = WriteError;\nexports.Batch = Batch;\nexports.LegacyOp = LegacyOp;\nexports.mergeBatchResults = mergeBatchResults;\nexports.cloneOptions = cloneOptions;\nexports.mergeLegacyResults = mergeLegacyResults;\nexports.INVALID_BSON_ERROR = INVALID_BSON_ERROR;\nexports.WRITE_CONCERN_ERROR = WRITE_CONCERN_ERROR;\nexports.MULTIPLE_ERROR = MULTIPLE_ERROR;\nexports.UNKNOWN_ERROR = UNKNOWN_ERROR;\nexports.INSERT = INSERT;\nexports.UPDATE = UPDATE;\nexports.REMOVE = REMOVE;",
   "ctx": {
    "type": "function",
    "name": "mergeBatchResults",
    "string": "mergeBatchResults()"
   }
  }
 ],
 "objectid": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var BinaryParser = require('./binary_parser').BinaryParser;",
   "ctx": {
    "type": "declaration",
    "name": "BinaryParser",
    "value": "require('./binary_parser').BinaryParser",
    "string": "BinaryParser"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Machine id.</p>\n\n<p>Create a random 3-byte value (i.e. unique for this<br />process). Other drivers use a md5 of the machine id here, but<br />that would mean an asyc call to gethostname, so we don't bother.</p>",
    "summary": "<p>Machine id.</p>",
    "body": "<p>Create a random 3-byte value (i.e. unique for this<br />process). Other drivers use a md5 of the machine id here, but<br />that would mean an asyc call to gethostname, so we don't bother.</p>"
   },
   "ignore": false,
   "code": "var MACHINE_ID = parseInt(Math.random() * 0xFFFFFF, 10);\n\n// Regular expression that checks for hex value\nvar checkForHexRegExp = new RegExp(\"^[0-9a-fA-F]{24}$\");",
   "ctx": {
    "type": "declaration",
    "name": "MACHINE_ID",
    "value": "parseInt(Math.random() * 0xFFFFFF, 10)",
    "string": "MACHINE_ID"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON ObjectID type"
    },
    {
     "type": "param",
     "types": [
      "String",
      "Number"
     ],
     "name": "id",
     "description": "Can be a 24 byte hex string, 12 byte binary string or a Number."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "instance of ObjectID."
    }
   ],
   "description": {
    "full": "<p>Create a new ObjectID instance</p>",
    "summary": "<p>Create a new ObjectID instance</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var ObjectID = function ObjectID(id) {\n  if(!(this instanceof ObjectID)) return new ObjectID(id);\n  if((id instanceof ObjectID)) return id;\n\n  this._bsontype = 'ObjectID';\n  var __id = null;\n  var valid = ObjectID.isValid(id);\n\n  // Throw an error if it's not a valid setup\n  if(!valid && id != null){\n    throw new Error(\"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters\");\n  } else if(valid && typeof id == 'string' && id.length == 24) {\n    return ObjectID.createFromHexString(id);\n  } else if(id == null || typeof id == 'number') {\n    // convert to 12 byte binary string\n    this.id = this.generate(id);\n  } else if(id != null && id.length === 12) {\n    // assume 12 byte string\n    this.id = id;\n  }\n\n  if(ObjectID.cacheHexString) this.__id = this.toHexString();\n};\n\n// Allow usage of ObjectId as well as ObjectID\nvar ObjectId = ObjectID;\n\n// Precomputed hex table enables speedy hex string conversion\nvar hexTable = [];\nfor (var i = 0; i < 256; i++) {\n  hexTable[i] = (i <= 15 ? '0' : '') + i.toString(16);\n}",
   "ctx": {
    "type": "function",
    "name": "ObjectID",
    "string": "ObjectID()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "return the 24 byte hex string representation."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the ObjectID id as a 24 byte hex string representation</p>",
    "summary": "<p>Return the ObjectID id as a 24 byte hex string representation</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.prototype.toHexString = function() {\n  if(ObjectID.cacheHexString && this.__id) return this.__id;\n\n  var hexString = '';\n\n  for (var i = 0; i < this.id.length; i++) {\n    hexString += hexTable[this.id.charCodeAt(i)];\n  }\n\n  if(ObjectID.cacheHexString) this.__id = hexString;\n  return hexString;\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "toHexString",
    "string": "ObjectID.prototype.toHexString()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns next index value."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Update the ObjectID index used in generating new ObjectID's on the driver</p>",
    "summary": "<p>Update the ObjectID index used in generating new ObjectID's on the driver</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.get_inc = function() {\n  return ObjectID.index = (ObjectID.index + 1) % 0xFFFFFF;\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "get_inc",
    "string": "ObjectID.prototype.get_inc()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns next index value."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Update the ObjectID index used in generating new ObjectID's on the driver</p>",
    "summary": "<p>Update the ObjectID index used in generating new ObjectID's on the driver</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.getInc = function() {\n  return this.get_inc();\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "getInc",
    "string": "ObjectID.prototype.getInc()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[time]",
     "description": "optional parameter allowing to pass in a second based timestamp."
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "return the 12 byte id binary string."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Generate a 12 byte id string used in ObjectID's</p>",
    "summary": "<p>Generate a 12 byte id string used in ObjectID's</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.generate = function(time) {\n  if ('number' != typeof time) {\n    time = parseInt(Date.now()/1000,10);\n  }\n  \n  var time4Bytes = BinaryParser.encodeInt(time, 32, true, true);",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "generate",
    "string": "ObjectID.prototype.generate()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>for time-based ObjectID the bytes following the time will be zeroed</p>",
    "summary": "<p>for time-based ObjectID the bytes following the time will be zeroed</p>",
    "body": ""
   },
   "ignore": false,
   "code": "var machine3Bytes = BinaryParser.encodeInt(MACHINE_ID, 24, false);\n  var pid2Bytes = BinaryParser.fromShort(typeof process === 'undefined' ? Math.floor(Math.random() * 100000) : process.pid);\n  var index3Bytes = BinaryParser.encodeInt(this.get_inc(), 24, false, true);\n\n  return time4Bytes + machine3Bytes + pid2Bytes + index3Bytes;\n};",
   "ctx": {
    "type": "declaration",
    "name": "machine3Bytes",
    "value": "BinaryParser.encodeInt(MACHINE_ID, 24, false)",
    "string": "machine3Bytes"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "return the 24 byte hex string representation."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts the id into a 24 byte hex string for printing</p>",
    "summary": "<p>Converts the id into a 24 byte hex string for printing</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.toString = function() {\n  return this.toHexString();\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "toString",
    "string": "ObjectID.prototype.toString()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "return the 24 byte hex string representation."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts to a string representation of this Id.</p>",
    "summary": "<p>Converts to a string representation of this Id.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.inspect = ObjectID.prototype.toString;",
   "ctx": {
    "type": "property",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "inspect",
    "value": "ObjectID.prototype.toString",
    "string": "ObjectID.prototype.inspect"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "return the 24 byte hex string representation."
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Converts to its JSON representation.</p>",
    "summary": "<p>Converts to its JSON representation.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.prototype.toJSON = function() {\n  return this.toHexString();\n};",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "toJSON",
    "string": "ObjectID.prototype.toJSON()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "otherID",
     "description": "ObjectID instance to compare against."
    },
    {
     "type": "return",
     "types": [
      "Bool"
     ],
     "description": "the result of comparing two ObjectID's"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Compares the equality of this ObjectID with <code>otherID</code>.</p>",
    "summary": "<p>Compares the equality of this ObjectID with <code>otherID</code>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.prototype.equals = function equals (otherID) {\n  if(otherID == null) return false;\n  var id = (otherID instanceof ObjectID || otherID.toHexString)\n    ? otherID.id\n    : ObjectID.createFromHexString(otherID).id;\n\n  return this.id === id;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "equals",
    "string": "ObjectID.prototype.equals()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Date"
     ],
     "description": "the generation date"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the generation date (accurate up to the second) that this ID was generated.</p>",
    "summary": "<p>Returns the generation date (accurate up to the second) that this ID was generated.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.prototype.getTimestamp = function() {\n  var timestamp = new Date();\n  timestamp.setTime(Math.floor(BinaryParser.decodeInt(this.id.substring(0,4), 32, true, true)) * 1000);\n  return timestamp;\n}",
   "ctx": {
    "type": "method",
    "constructor": "ObjectID",
    "cons": "ObjectID",
    "name": "getTimestamp",
    "string": "ObjectID.prototype.getTimestamp()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "ObjectID.index = parseInt(Math.random() * 0xFFFFFF, 10);\n\nObjectID.createPk = function createPk () {\n  return new ObjectID();\n};",
   "ctx": {
    "type": "property",
    "receiver": "ObjectID",
    "name": "index",
    "value": "parseInt(Math.random() * 0xFFFFFF, 10)",
    "string": "ObjectID.index"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "time",
     "description": "an integer number representing a number of seconds."
    },
    {
     "type": "return",
     "types": [
      "ObjectID"
     ],
     "description": "return the created ObjectID"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.</p>",
    "summary": "<p>Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.createFromTime = function createFromTime (time) {\n  var id = BinaryParser.encodeInt(time, 32, true, true) +\n           BinaryParser.encodeInt(0, 64, true, true);\n  return new ObjectID(id);\n};",
   "ctx": {
    "type": "method",
    "receiver": "ObjectID",
    "name": "createFromTime",
    "string": "ObjectID.createFromTime()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "hexString",
     "description": "create a ObjectID from a passed in 24 byte hexstring."
    },
    {
     "type": "return",
     "types": [
      "ObjectID"
     ],
     "description": "return the created ObjectID"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Creates an ObjectID from a hex string representation of an ObjectID.</p>",
    "summary": "<p>Creates an ObjectID from a hex string representation of an ObjectID.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.createFromHexString = function createFromHexString (hexString) {\n  // Throw an error if it's not a valid setup\n  if(typeof hexString === 'undefined' || hexString != null && hexString.length != 24)\n    throw new Error(\"Argument passed in must be a single String of 12 bytes or a string of 24 hex characters\");\n\n  var len = hexString.length;\n\n  if(len > 12*2) {\n    throw new Error('Id cannot be longer than 12 bytes');\n  }\n\n  var result = ''\n    , string\n    , number;\n\n  for (var index = 0; index < len; index += 2) {\n    string = hexString.substr(index, 2);\n    number = parseInt(string, 16);\n    result += BinaryParser.fromByte(number);\n  }\n\n  return new ObjectID(result, hexString);\n};",
   "ctx": {
    "type": "method",
    "receiver": "ObjectID",
    "name": "createFromHexString",
    "string": "ObjectID.createFromHexString()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "return true if the value is a valid bson ObjectId, return false otherwise."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Checks if a value is a valid bson ObjectId</p>",
    "summary": "<p>Checks if a value is a valid bson ObjectId</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "ObjectID.isValid = function isValid(id) {\n  if(id == null) return false;\n\n  if(id != null && 'number' != typeof id && (id.length != 12 && id.length != 24)) {\n    return false;\n  } else {\n    // Check specifically for hex correctness\n    if(typeof id == 'string' && id.length == 24) return checkForHexRegExp.test(id);\n    return true;\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "ObjectID",
    "name": "isValid",
    "string": "ObjectID.isValid()"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Object.defineProperty(ObjectID.prototype, \"generationTime\", {\n   enumerable: true\n , get: function () {\n     return Math.floor(BinaryParser.decodeInt(this.id.substring(0,4), 32, true, true));\n   }\n , set: function (value) {\n     var value = BinaryParser.encodeInt(value, 32, true, true);\n     this.id = value + this.id.substr(4);\n     // delete this.__id;\n     this.toHexString();\n   }\n});"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose.</p>",
    "summary": "<p>Expose.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.ObjectID = ObjectID;\nexports.ObjectId = ObjectID;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "ObjectID",
    "value": "ObjectID",
    "string": "exports.ObjectID"
   }
  }
 ],
 "binary": [
  {
   "tags": [],
   "description": {
    "full": "<p>Module dependencies.</p>",
    "summary": "<p>Module dependencies.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "if(typeof window === 'undefined') { \n  var Buffer = require('buffer').Buffer; // TODO just use global Buffer\n}\n\n// Binary default subtype\nvar BSON_BINARY_SUBTYPE_DEFAULT = 0;"
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var writeStringToArray = function(data) {\n  // Create a buffer\n  var buffer = typeof Uint8Array != 'undefined' ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length);\n  // Write the content to the buffer\n  for(var i = 0; i < data.length; i++) {\n    buffer[i] = data.charCodeAt(i);\n  }  \n  // Write the string to the buffer\n  return buffer;\n}",
   "ctx": {
    "type": "function",
    "name": "writeStringToArray",
    "string": "writeStringToArray()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Convert Array ot Uint8Array to Binary String</p>",
    "summary": "<p>Convert Array ot Uint8Array to Binary String</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var convertArraytoUtf8BinaryString = function(byteArray, startIndex, endIndex) {\n  var result = \"\";\n  for(var i = startIndex; i < endIndex; i++) {\n   result = result + String.fromCharCode(byteArray[i]);\n  }\n  return result;  \n};",
   "ctx": {
    "type": "function",
    "name": "convertArraytoUtf8BinaryString",
    "string": "convertArraytoUtf8BinaryString()"
   }
  },
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the Binary BSON type."
    },
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "buffer",
     "description": "a buffer object containing the binary data."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[subType]",
     "description": "the option binary type."
    },
    {
     "type": "return",
     "types": [
      "Grid"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON Binary type.</p>\n\n<p>Sub types<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_DEFAULT</strong>, default BSON type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_FUNCTION</strong>, BSON function type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY</strong>, BSON byte array type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_UUID</strong>, BSON uuid type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_MD5</strong>, BSON md5 type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_USER_DEFINED</strong>, BSON user defined type.</p>",
    "summary": "<p>A class representation of the BSON Binary type.</p>",
    "body": "<p>Sub types<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_DEFAULT</strong>, default BSON type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_FUNCTION</strong>, BSON function type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY</strong>, BSON byte array type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_UUID</strong>, BSON uuid type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_MD5</strong>, BSON md5 type.<br /> - <strong>BSON.BSON_BINARY_SUBTYPE_USER_DEFINED</strong>, BSON user defined type.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Binary(buffer, subType) {\n  if(!(this instanceof Binary)) return new Binary(buffer, subType);\n  \n  this._bsontype = 'Binary';\n\n  if(buffer instanceof Number) {\n    this.sub_type = buffer;\n    this.position = 0;\n  } else {    \n    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;\n    this.position = 0;\n  }\n\n  if(buffer != null && !(buffer instanceof Number)) {\n    // Only accept Buffer, Uint8Array or Arrays\n    if(typeof buffer == 'string') {\n      // Different ways of writing the length of the string for the different types\n      if(typeof Buffer != 'undefined') {\n        this.buffer = new Buffer(buffer);\n      } else if(typeof Uint8Array != 'undefined' || (Object.prototype.toString.call(buffer) == '[object Array]')) {\n        this.buffer = writeStringToArray(buffer);\n      } else {\n        throw new Error(\"only String, Buffer, Uint8Array or Array accepted\");\n      }\n    } else {\n      this.buffer = buffer;      \n    }\n    this.position = buffer.length;\n  } else {\n    if(typeof Buffer != 'undefined') {\n      this.buffer =  new Buffer(Binary.BUFFER_SIZE);      \n    } else if(typeof Uint8Array != 'undefined'){\n      this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE));\n    } else {\n      this.buffer = new Array(Binary.BUFFER_SIZE);\n    }\n    // Set position to start of buffer\n    this.position = 0;\n  }\n};",
   "ctx": {
    "type": "function",
    "name": "Binary",
    "string": "Binary()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Character"
     ],
     "name": "byte_value",
     "description": "a single byte we wish to write."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Updates this binary with byte_value.</p>",
    "summary": "<p>Updates this binary with byte_value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.prototype.put = function put(byte_value) {\n  // If it's a string and a has more than one character throw an error\n  if(byte_value['length'] != null && typeof byte_value != 'number' && byte_value.length != 1) throw new Error(\"only accepts single character String, Uint8Array or Array\");\n  if(typeof byte_value != 'number' && byte_value < 0 || byte_value > 255) throw new Error(\"only accepts number in a valid unsigned byte range 0-255\");\n  \n  // Decode the byte value once\n  var decoded_byte = null;\n  if(typeof byte_value == 'string') {\n    decoded_byte = byte_value.charCodeAt(0);      \n  } else if(byte_value['length'] != null) {\n    decoded_byte = byte_value[0];\n  } else {\n    decoded_byte = byte_value;\n  }\n  \n  if(this.buffer.length > this.position) {\n    this.buffer[this.position++] = decoded_byte;\n  } else {\n    if(typeof Buffer != 'undefined' && Buffer.isBuffer(this.buffer)) {    \n      // Create additional overflow buffer\n      var buffer = new Buffer(Binary.BUFFER_SIZE + this.buffer.length);\n      // Combine the two buffers together\n      this.buffer.copy(buffer, 0, 0, this.buffer.length);\n      this.buffer = buffer;\n      this.buffer[this.position++] = decoded_byte;\n    } else {\n      var buffer = null;\n      // Create a new buffer (typed or normal array)\n      if(Object.prototype.toString.call(this.buffer) == '[object Uint8Array]') {\n        buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length));\n      } else {\n        buffer = new Array(Binary.BUFFER_SIZE + this.buffer.length);\n      }      \n      \n      // We need to copy all the content to the new array\n      for(var i = 0; i < this.buffer.length; i++) {\n        buffer[i] = this.buffer[i];\n      }\n      \n      // Reassign the buffer\n      this.buffer = buffer;\n      // Write the byte\n      this.buffer[this.position++] = decoded_byte;\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "put",
    "string": "Binary.prototype.put()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer",
      "String"
     ],
     "name": "string",
     "description": "a string or buffer to be written to the Binary BSON object."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "offset",
     "description": "specify the binary of where to write the content."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Writes a buffer or string to the binary.</p>",
    "summary": "<p>Writes a buffer or string to the binary.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.prototype.write = function write(string, offset) {\n  offset = typeof offset == 'number' ? offset : this.position;\n\n  // If the buffer is to small let's extend the buffer\n  if(this.buffer.length < offset + string.length) {\n    var buffer = null;\n    // If we are in node.js\n    if(typeof Buffer != 'undefined' && Buffer.isBuffer(this.buffer)) {      \n      buffer = new Buffer(this.buffer.length + string.length);\n      this.buffer.copy(buffer, 0, 0, this.buffer.length);      \n    } else if(Object.prototype.toString.call(this.buffer) == '[object Uint8Array]') {\n      // Create a new buffer\n      buffer = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length))\n      // Copy the content\n      for(var i = 0; i < this.position; i++) {\n        buffer[i] = this.buffer[i];\n      }\n    }\n    \n    // Assign the new buffer\n    this.buffer = buffer;\n  }\n\n  if(typeof Buffer != 'undefined' && Buffer.isBuffer(string) && Buffer.isBuffer(this.buffer)) {\n    string.copy(this.buffer, offset, 0, string.length);\n    this.position = (offset + string.length) > this.position ? (offset + string.length) : this.position;\n    // offset = string.length\n  } else if(typeof Buffer != 'undefined' && typeof string == 'string' && Buffer.isBuffer(this.buffer)) {\n    this.buffer.write(string, 'binary', offset);\n    this.position = (offset + string.length) > this.position ? (offset + string.length) : this.position;\n    // offset = string.length;\n  } else if(Object.prototype.toString.call(string) == '[object Uint8Array]' \n    || Object.prototype.toString.call(string) == '[object Array]' && typeof string != 'string') {      \n    for(var i = 0; i < string.length; i++) {\n      this.buffer[offset++] = string[i];\n    }    \n\n    this.position = offset > this.position ? offset : this.position;\n  } else if(typeof string == 'string') {\n    for(var i = 0; i < string.length; i++) {\n      this.buffer[offset++] = string.charCodeAt(i);\n    }\n\n    this.position = offset > this.position ? offset : this.position;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "write",
    "string": "Binary.prototype.write()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "position",
     "description": "read from the given position in the Binary."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "length",
     "description": "the number of bytes to read."
    },
    {
     "type": "return",
     "types": [
      "Buffer"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Reads <strong>length</strong> bytes starting at <strong>position</strong>.</p>",
    "summary": "<p>Reads <strong>length</strong> bytes starting at <strong>position</strong>.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.prototype.read = function read(position, length) {\n  length = length && length > 0\n    ? length\n    : this.position;\n  \n  // Let's return the data based on the type we have\n  if(this.buffer['slice']) {\n    return this.buffer.slice(position, position + length);\n  } else {\n    // Create a buffer to keep the result\n    var buffer = typeof Uint8Array != 'undefined' ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);\n    for(var i = 0; i < length; i++) {\n      buffer[i] = this.buffer[position++];\n    }\n  }\n  // Return the buffer\n  return buffer;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "read",
    "string": "Binary.prototype.read()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": ""
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the value of this binary as a string.</p>",
    "summary": "<p>Returns the value of this binary as a string.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.prototype.value = function value(asRaw) {\n  asRaw = asRaw == null ? false : asRaw;  \n\n  // Optimize to serialize for the situation where the data == size of buffer\n  if(asRaw && typeof Buffer != 'undefined' && Buffer.isBuffer(this.buffer) && this.buffer.length == this.position)\n    return this.buffer;\n  \n  // If it's a node.js buffer object\n  if(typeof Buffer != 'undefined' && Buffer.isBuffer(this.buffer)) {\n    return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString('binary', 0, this.position);\n  } else {\n    if(asRaw) {\n      // we support the slice command use it\n      if(this.buffer['slice'] != null) {\n        return this.buffer.slice(0, this.position);\n      } else {\n        // Create a new buffer to copy content to\n        var newBuffer = Object.prototype.toString.call(this.buffer) == '[object Uint8Array]' ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position);\n        // Copy content\n        for(var i = 0; i < this.position; i++) {\n          newBuffer[i] = this.buffer[i];\n        }\n        // Return the buffer\n        return newBuffer;\n      }\n    } else {\n      return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "value",
    "string": "Binary.prototype.value()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the length of the binary."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Length.</p>",
    "summary": "<p>Length.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.prototype.length = function length() {\n  return this.position;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "length",
    "string": "Binary.prototype.length()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Binary.prototype.toJSON = function() {\n  return this.buffer != null ? this.buffer.toString('base64') : '';\n}",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "toJSON",
    "string": "Binary.prototype.toJSON()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Binary.prototype.toString = function(format) {\n  return this.buffer != null ? this.buffer.slice(0, this.position).toString(format) : '';\n}\n\nBinary.BUFFER_SIZE = 256;",
   "ctx": {
    "type": "method",
    "constructor": "Binary",
    "cons": "Binary",
    "name": "toString",
    "string": "Binary.prototype.toString()"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>Default BSON type</p>",
    "summary": "<p>Default BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_DEFAULT = 0;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_DEFAULT",
    "value": "0",
    "string": "Binary.SUBTYPE_DEFAULT"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>Function BSON type</p>",
    "summary": "<p>Function BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_FUNCTION = 1;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_FUNCTION",
    "value": "1",
    "string": "Binary.SUBTYPE_FUNCTION"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>Byte Array BSON type</p>",
    "summary": "<p>Byte Array BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_BYTE_ARRAY = 2;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_BYTE_ARRAY",
    "value": "2",
    "string": "Binary.SUBTYPE_BYTE_ARRAY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>OLD UUID BSON type</p>",
    "summary": "<p>OLD UUID BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_UUID_OLD = 3;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_UUID_OLD",
    "value": "3",
    "string": "Binary.SUBTYPE_UUID_OLD"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>UUID BSON type</p>",
    "summary": "<p>UUID BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_UUID = 4;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_UUID",
    "value": "4",
    "string": "Binary.SUBTYPE_UUID"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>MD5 BSON type</p>",
    "summary": "<p>MD5 BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_MD5 = 5;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_MD5",
    "value": "5",
    "string": "Binary.SUBTYPE_MD5"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>User BSON type</p>",
    "summary": "<p>User BSON type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Binary.SUBTYPE_USER_DEFINED = 128;",
   "ctx": {
    "type": "property",
    "receiver": "Binary",
    "name": "SUBTYPE_USER_DEFINED",
    "value": "128",
    "string": "Binary.SUBTYPE_USER_DEFINED"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose.</p>",
    "summary": "<p>Expose.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Binary = Binary;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Binary",
    "value": "Binary",
    "string": "exports.Binary"
   }
  }
 ],
 "code": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Code type."
    },
    {
     "type": "param",
     "types": [
      "String",
      "Function"
     ],
     "name": "code",
     "description": "a string or function."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[scope]",
     "description": "an optional scope for the function."
    },
    {
     "type": "return",
     "types": [
      "Code"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON Code type.</p>",
    "summary": "<p>A class representation of the BSON Code type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "var Code = function Code(code, scope) {\n  if(!(this instanceof Code)) return new Code(code, scope);\n  this._bsontype = 'Code';\n  this.code = code;\n  this.scope = scope == null ? {} : scope;\n};",
   "ctx": {
    "type": "function",
    "name": "Code",
    "string": "Code()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Code.prototype.toJSON = function() {\n  return {scope:this.scope, code:this.code};\n}\n\nexports.Code = Code;",
   "ctx": {
    "type": "method",
    "constructor": "Code",
    "cons": "Code",
    "name": "toJSON",
    "string": "Code.prototype.toJSON()"
   }
  }
 ],
 "db_ref": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON DBRef type."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "namespace",
     "description": "the collection name."
    },
    {
     "type": "param",
     "types": [
      "ObjectID"
     ],
     "name": "oid",
     "description": "the reference ObjectID."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "[db]",
     "description": "optional db name, if omitted the reference is local to the current db."
    },
    {
     "type": "return",
     "types": [
      "DBRef"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON DBRef type.</p>",
    "summary": "<p>A class representation of the BSON DBRef type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function DBRef(namespace, oid, db) {\n  if(!(this instanceof DBRef)) return new DBRef(namespace, oid, db);\n  \n  this._bsontype = 'DBRef';\n  this.namespace = namespace;\n  this.oid = oid;\n  this.db = db;\n};",
   "ctx": {
    "type": "function",
    "name": "DBRef",
    "string": "DBRef()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "DBRef.prototype.toJSON = function() {\n  return {\n    '$ref':this.namespace,\n    '$id':this.oid,\n    '$db':this.db == null ? '' : this.db\n  };\n}\n\nexports.DBRef = DBRef;",
   "ctx": {
    "type": "method",
    "constructor": "DBRef",
    "cons": "DBRef",
    "name": "toJSON",
    "string": "DBRef.prototype.toJSON()"
   }
  }
 ],
 "double": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Double type."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "the number we want to represent as a double."
    },
    {
     "type": "return",
     "types": [
      "Double"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON Double type.</p>",
    "summary": "<p>A class representation of the BSON Double type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Double(value) {\n  if(!(this instanceof Double)) return new Double(value);\n  \n  this._bsontype = 'Double';\n  this.value = value;\n}",
   "ctx": {
    "type": "function",
    "name": "Double",
    "string": "Double()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the wrapped double number."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Access the number value.</p>",
    "summary": "<p>Access the number value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Double.prototype.valueOf = function() {\n  return this.value;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Double",
    "cons": "Double",
    "name": "valueOf",
    "string": "Double.prototype.valueOf()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Double.prototype.toJSON = function() {\n  return this.value;\n}\n\nexports.Double = Double;",
   "ctx": {
    "type": "method",
    "constructor": "Double",
    "cons": "Double",
    "name": "toJSON",
    "string": "Double.prototype.toJSON()"
   }
  }
 ],
 "minkey": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON MinKey type."
    },
    {
     "type": "return",
     "types": [
      "MinKey"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON MinKey type.</p>",
    "summary": "<p>A class representation of the BSON MinKey type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function MinKey() {\n  if(!(this instanceof MinKey)) return new MinKey();\n  \n  this._bsontype = 'MinKey';\n}\n\nexports.MinKey = MinKey;",
   "ctx": {
    "type": "function",
    "name": "MinKey",
    "string": "MinKey()"
   }
  }
 ],
 "maxkey": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON MaxKey type."
    },
    {
     "type": "return",
     "types": [
      "MaxKey"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON MaxKey type.</p>",
    "summary": "<p>A class representation of the BSON MaxKey type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function MaxKey() {\n  if(!(this instanceof MaxKey)) return new MaxKey();\n  \n  this._bsontype = 'MaxKey';  \n}\n\nexports.MaxKey = MaxKey;",
   "ctx": {
    "type": "function",
    "name": "MaxKey",
    "string": "MaxKey()"
   }
  }
 ],
 "symbol": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Symbol type."
    },
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "value",
     "description": "the string representing the symbol."
    },
    {
     "type": "return",
     "types": [
      "Symbol"
     ],
     "description": ""
    }
   ],
   "description": {
    "full": "<p>A class representation of the BSON Symbol type.</p>",
    "summary": "<p>A class representation of the BSON Symbol type.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Symbol(value) {\n  if(!(this instanceof Symbol)) return new Symbol(value);\n  this._bsontype = 'Symbol';\n  this.value = value;\n}",
   "ctx": {
    "type": "function",
    "name": "Symbol",
    "string": "Symbol()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "returns the wrapped string."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Access the wrapped string value.</p>",
    "summary": "<p>Access the wrapped string value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Symbol.prototype.valueOf = function() {\n  return this.value;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Symbol",
    "cons": "Symbol",
    "name": "valueOf",
    "string": "Symbol.prototype.valueOf()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Symbol.prototype.toString = function() {\n  return this.value;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Symbol",
    "cons": "Symbol",
    "name": "toString",
    "string": "Symbol.prototype.toString()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Symbol.prototype.inspect = function() {\n  return this.value;\n}",
   "ctx": {
    "type": "method",
    "constructor": "Symbol",
    "cons": "Symbol",
    "name": "inspect",
    "string": "Symbol.prototype.inspect()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Symbol.prototype.toJSON = function() {\n  return this.value;\n}\n\nexports.Symbol = Symbol;",
   "ctx": {
    "type": "method",
    "constructor": "Symbol",
    "cons": "Symbol",
    "name": "toJSON",
    "string": "Symbol.prototype.toJSON()"
   }
  }
 ],
 "timestamp": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Timestamp type."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "low",
     "description": "the low (signed) 32 bits of the Timestamp."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "high",
     "description": "the high (signed) 32 bits of the Timestamp."
    }
   ],
   "description": {
    "full": "<p>Defines a Timestamp class for representing a 64-bit two's-complement<br />integer value, which faithfully simulates the behavior of a Java \"Timestamp\". This<br />implementation is derived from TimestampLib in GWT.</p>\n\n<p>Constructs a 64-bit two's-complement integer, given its low and high 32-bit<br />values as <em>signed</em> integers.  See the from* functions below for more<br />convenient ways of constructing Timestamps.</p>\n\n<p>The internal representation of a Timestamp is the two given signed, 32-bit values.<br />We use 32-bit pieces because these are the size of integers on which<br />Javascript performs bit-operations.  For operations like addition and<br />multiplication, we split each number into 16-bit pieces, which can easily be<br />multiplied within Javascript's floating-point representation without overflow<br />or change in sign.</p>\n\n<p>In the algorithms below, we frequently reduce the negative case to the<br />positive case by negating the input(s) and then post-processing the result.<br />Note that we must ALWAYS check specially whether those values are MIN_VALUE<br />(-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as<br />a positive number, it overflows back into a negative).  Not handling this<br />case would often result in infinite recursion.</p>",
    "summary": "<p>Defines a Timestamp class for representing a 64-bit two's-complement<br />integer value, which faithfully simulates the behavior of a Java \"Timestamp\". This<br />implementation is derived from TimestampLib in GWT.</p>",
    "body": "<p>Constructs a 64-bit two's-complement integer, given its low and high 32-bit<br />values as <em>signed</em> integers.  See the from* functions below for more<br />convenient ways of constructing Timestamps.</p>\n\n<p>The internal representation of a Timestamp is the two given signed, 32-bit values.<br />We use 32-bit pieces because these are the size of integers on which<br />Javascript performs bit-operations.  For operations like addition and<br />multiplication, we split each number into 16-bit pieces, which can easily be<br />multiplied within Javascript's floating-point representation without overflow<br />or change in sign.</p>\n\n<p>In the algorithms below, we frequently reduce the negative case to the<br />positive case by negating the input(s) and then post-processing the result.<br />Note that we must ALWAYS check specially whether those values are MIN_VALUE<br />(-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as<br />a positive number, it overflows back into a negative).  Not handling this<br />case would often result in infinite recursion.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Timestamp(low, high) {\n  if(!(this instanceof Timestamp)) return new Timestamp(low, high);\n  this._bsontype = 'Timestamp';",
   "ctx": {
    "type": "function",
    "name": "Timestamp",
    "string": "Timestamp()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "this.low_ = low | 0;  // force into 32 signed bits.",
   "ctx": {
    "type": "property",
    "receiver": "this",
    "name": "low_",
    "value": "low | 0",
    "string": "this.low_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "this.high_ = high | 0;  // force into 32 signed bits.\n};",
   "ctx": {
    "type": "property",
    "receiver": "this",
    "name": "high_",
    "value": "high | 0",
    "string": "this.high_"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the value, assuming it is a 32-bit integer."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the int value.</p>",
    "summary": "<p>Return the int value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.toInt = function() {\n  return this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "toInt",
    "string": "Timestamp.prototype.toInt()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the closest floating-point representation to this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the Number value.</p>",
    "summary": "<p>Return the Number value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.toNumber = function() {\n  return this.high_ * Timestamp.TWO_PWR_32_DBL_ +\n         this.getLowBitsUnsigned();\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "toNumber",
    "string": "Timestamp.prototype.toNumber()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "the JSON representation."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the JSON value.</p>",
    "summary": "<p>Return the JSON value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.toJSON = function() {\n  return this.toString();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "toJSON",
    "string": "Timestamp.prototype.toJSON()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[opt_radix]",
     "description": "the radix in which the text should be written."
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "the textual representation of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the String value.</p>",
    "summary": "<p>Return the String value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.toString = function(opt_radix) {\n  var radix = opt_radix || 10;\n  if (radix < 2 || 36 < radix) {\n    throw Error('radix out of range: ' + radix);\n  }\n\n  if (this.isZero()) {\n    return '0';\n  }\n\n  if (this.isNegative()) {\n    if (this.equals(Timestamp.MIN_VALUE)) {\n      // We need to change the Timestamp value before it can be negated, so we remove\n      // the bottom-most digit in this base and then recurse to do the rest.\n      var radixTimestamp = Timestamp.fromNumber(radix);\n      var div = this.div(radixTimestamp);\n      var rem = div.multiply(radixTimestamp).subtract(this);\n      return div.toString(radix) + rem.toInt().toString(radix);\n    } else {\n      return '-' + this.negate().toString(radix);\n    }\n  }\n\n  // Do several (6) digits each time through the loop, so as to\n  // minimize the calls to the very expensive emulated div.\n  var radixToPower = Timestamp.fromNumber(Math.pow(radix, 6));\n\n  var rem = this;\n  var result = '';\n  while (true) {\n    var remDiv = rem.div(radixToPower);\n    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();\n    var digits = intval.toString(radix);\n\n    rem = remDiv;\n    if (rem.isZero()) {\n      return digits + result;\n    } else {\n      while (digits.length < 6) {\n        digits = '0' + digits;\n      }\n      result = '' + digits + result;\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "toString",
    "string": "Timestamp.prototype.toString()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the high 32-bits as a signed value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the high 32-bits value.</p>",
    "summary": "<p>Return the high 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.getHighBits = function() {\n  return this.high_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "getHighBits",
    "string": "Timestamp.prototype.getHighBits()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the low 32-bits as a signed value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the low 32-bits value.</p>",
    "summary": "<p>Return the low 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.getLowBits = function() {\n  return this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "getLowBits",
    "string": "Timestamp.prototype.getLowBits()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the low 32-bits as an unsigned value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the low unsigned 32-bits value.</p>",
    "summary": "<p>Return the low unsigned 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.getLowBitsUnsigned = function() {\n  return (this.low_ >= 0) ?\n      this.low_ : Timestamp.TWO_PWR_32_DBL_ + this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "getLowBitsUnsigned",
    "string": "Timestamp.prototype.getLowBitsUnsigned()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "Returns the number of bits needed to represent the absolute value of this Timestamp."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the number of bits needed to represent the absolute value of this Timestamp.</p>",
    "summary": "<p>Returns the number of bits needed to represent the absolute value of this Timestamp.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.getNumBitsAbs = function() {\n  if (this.isNegative()) {\n    if (this.equals(Timestamp.MIN_VALUE)) {\n      return 64;\n    } else {\n      return this.negate().getNumBitsAbs();\n    }\n  } else {\n    var val = this.high_ != 0 ? this.high_ : this.low_;\n    for (var bit = 31; bit > 0; bit--) {\n      if ((val & (1 << bit)) != 0) {\n        break;\n      }\n    }\n    return this.high_ != 0 ? bit + 33 : bit + 1;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "getNumBitsAbs",
    "string": "Timestamp.prototype.getNumBitsAbs()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is zero."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is zero.</p>",
    "summary": "<p>Return whether this value is zero.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.isZero = function() {\n  return this.high_ == 0 && this.low_ == 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "isZero",
    "string": "Timestamp.prototype.isZero()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is negative."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is negative.</p>",
    "summary": "<p>Return whether this value is negative.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.isNegative = function() {\n  return this.high_ < 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "isNegative",
    "string": "Timestamp.prototype.isNegative()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is odd."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is odd.</p>",
    "summary": "<p>Return whether this value is odd.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.isOdd = function() {\n  return (this.low_ & 1) == 1;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "isOdd",
    "string": "Timestamp.prototype.isOdd()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp equals the other"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp equals the other</p>",
    "summary": "<p>Return whether this Timestamp equals the other</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.equals = function(other) {\n  return (this.high_ == other.high_) && (this.low_ == other.low_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "equals",
    "string": "Timestamp.prototype.equals()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp does not equal the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp does not equal the other.</p>",
    "summary": "<p>Return whether this Timestamp does not equal the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.notEquals = function(other) {\n  return (this.high_ != other.high_) || (this.low_ != other.low_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "notEquals",
    "string": "Timestamp.prototype.notEquals()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp is less than the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp is less than the other.</p>",
    "summary": "<p>Return whether this Timestamp is less than the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.lessThan = function(other) {\n  return this.compare(other) < 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "lessThan",
    "string": "Timestamp.prototype.lessThan()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp is less than or equal to the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp is less than or equal to the other.</p>",
    "summary": "<p>Return whether this Timestamp is less than or equal to the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.lessThanOrEqual = function(other) {\n  return this.compare(other) <= 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "lessThanOrEqual",
    "string": "Timestamp.prototype.lessThanOrEqual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp is greater than the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp is greater than the other.</p>",
    "summary": "<p>Return whether this Timestamp is greater than the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.greaterThan = function(other) {\n  return this.compare(other) > 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "greaterThan",
    "string": "Timestamp.prototype.greaterThan()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Timestamp is greater than or equal to the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Timestamp is greater than or equal to the other.</p>",
    "summary": "<p>Return whether this Timestamp is greater than or equal to the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.greaterThanOrEqual = function(other) {\n  return this.compare(other) >= 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "greaterThanOrEqual",
    "string": "Timestamp.prototype.greaterThanOrEqual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "0 if they are the same, 1 if the this is greater, and -1 if the given one is greater."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Compares this Timestamp with the given one.</p>",
    "summary": "<p>Compares this Timestamp with the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.compare = function(other) {\n  if (this.equals(other)) {\n    return 0;\n  }\n\n  var thisNeg = this.isNegative();\n  var otherNeg = other.isNegative();\n  if (thisNeg && !otherNeg) {\n    return -1;\n  }\n  if (!thisNeg && otherNeg) {\n    return 1;\n  }\n\n  // at this point, the signs are the same, so subtraction will not overflow\n  if (this.subtract(other).isNegative()) {\n    return -1;\n  } else {\n    return 1;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "compare",
    "string": "Timestamp.prototype.compare()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the negation of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The negation of this value.</p>",
    "summary": "<p>The negation of this value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.negate = function() {\n  if (this.equals(Timestamp.MIN_VALUE)) {\n    return Timestamp.MIN_VALUE;\n  } else {\n    return this.not().add(Timestamp.ONE);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "negate",
    "string": "Timestamp.prototype.negate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to add to this one."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the sum of this and the given Timestamp."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the sum of this and the given Timestamp.</p>",
    "summary": "<p>Returns the sum of this and the given Timestamp.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.add = function(other) {\n  // Divide each number into 4 chunks of 16 bits, and then sum the chunks.\n\n  var a48 = this.high_ >>> 16;\n  var a32 = this.high_ & 0xFFFF;\n  var a16 = this.low_ >>> 16;\n  var a00 = this.low_ & 0xFFFF;\n\n  var b48 = other.high_ >>> 16;\n  var b32 = other.high_ & 0xFFFF;\n  var b16 = other.low_ >>> 16;\n  var b00 = other.low_ & 0xFFFF;\n\n  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;\n  c00 += a00 + b00;\n  c16 += c00 >>> 16;\n  c00 &= 0xFFFF;\n  c16 += a16 + b16;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c32 += a32 + b32;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c48 += a48 + b48;\n  c48 &= 0xFFFF;\n  return Timestamp.fromBits((c16 << 16) | c00, (c48 << 16) | c32);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "add",
    "string": "Timestamp.prototype.add()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to subtract from this."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the difference of this and the given Timestamp."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the difference of this and the given Timestamp.</p>",
    "summary": "<p>Returns the difference of this and the given Timestamp.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.subtract = function(other) {\n  return this.add(other.negate());\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "subtract",
    "string": "Timestamp.prototype.subtract()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp to multiply with this."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the product of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the product of this and the given Timestamp.</p>",
    "summary": "<p>Returns the product of this and the given Timestamp.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.multiply = function(other) {\n  if (this.isZero()) {\n    return Timestamp.ZERO;\n  } else if (other.isZero()) {\n    return Timestamp.ZERO;\n  }\n\n  if (this.equals(Timestamp.MIN_VALUE)) {\n    return other.isOdd() ? Timestamp.MIN_VALUE : Timestamp.ZERO;\n  } else if (other.equals(Timestamp.MIN_VALUE)) {\n    return this.isOdd() ? Timestamp.MIN_VALUE : Timestamp.ZERO;\n  }\n\n  if (this.isNegative()) {\n    if (other.isNegative()) {\n      return this.negate().multiply(other.negate());\n    } else {\n      return this.negate().multiply(other).negate();\n    }\n  } else if (other.isNegative()) {\n    return this.multiply(other.negate()).negate();\n  }\n\n  // If both Timestamps are small, use float multiplication\n  if (this.lessThan(Timestamp.TWO_PWR_24_) &&\n      other.lessThan(Timestamp.TWO_PWR_24_)) {\n    return Timestamp.fromNumber(this.toNumber() * other.toNumber());\n  }\n\n  // Divide each Timestamp into 4 chunks of 16 bits, and then add up 4x4 products.\n  // We can skip products that would overflow.\n\n  var a48 = this.high_ >>> 16;\n  var a32 = this.high_ & 0xFFFF;\n  var a16 = this.low_ >>> 16;\n  var a00 = this.low_ & 0xFFFF;\n\n  var b48 = other.high_ >>> 16;\n  var b32 = other.high_ & 0xFFFF;\n  var b16 = other.low_ >>> 16;\n  var b00 = other.low_ & 0xFFFF;\n\n  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;\n  c00 += a00 * b00;\n  c16 += c00 >>> 16;\n  c00 &= 0xFFFF;\n  c16 += a16 * b00;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c16 += a00 * b16;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c32 += a32 * b00;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c32 += a16 * b16;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c32 += a00 * b32;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;\n  c48 &= 0xFFFF;\n  return Timestamp.fromBits((c16 << 16) | c00, (c48 << 16) | c32);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "multiply",
    "string": "Timestamp.prototype.multiply()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp by which to divide."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "this Timestamp divided by the given one."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Timestamp divided by the given one.</p>",
    "summary": "<p>Returns this Timestamp divided by the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.div = function(other) {\n  if (other.isZero()) {\n    throw Error('division by zero');\n  } else if (this.isZero()) {\n    return Timestamp.ZERO;\n  }\n\n  if (this.equals(Timestamp.MIN_VALUE)) {\n    if (other.equals(Timestamp.ONE) ||\n        other.equals(Timestamp.NEG_ONE)) {\n      return Timestamp.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE\n    } else if (other.equals(Timestamp.MIN_VALUE)) {\n      return Timestamp.ONE;\n    } else {\n      // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.\n      var halfThis = this.shiftRight(1);\n      var approx = halfThis.div(other).shiftLeft(1);\n      if (approx.equals(Timestamp.ZERO)) {\n        return other.isNegative() ? Timestamp.ONE : Timestamp.NEG_ONE;\n      } else {\n        var rem = this.subtract(other.multiply(approx));\n        var result = approx.add(rem.div(other));\n        return result;\n      }\n    }\n  } else if (other.equals(Timestamp.MIN_VALUE)) {\n    return Timestamp.ZERO;\n  }\n\n  if (this.isNegative()) {\n    if (other.isNegative()) {\n      return this.negate().div(other.negate());\n    } else {\n      return this.negate().div(other).negate();\n    }\n  } else if (other.isNegative()) {\n    return this.div(other.negate()).negate();\n  }\n\n  // Repeat the following until the remainder is less than other:  find a\n  // floating-point that approximates remainder / other *from below*, add this\n  // into the result, and subtract it from the remainder.  It is critical that\n  // the approximate value is less than or equal to the real value so that the\n  // remainder never becomes negative.\n  var res = Timestamp.ZERO;\n  var rem = this;\n  while (rem.greaterThanOrEqual(other)) {\n    // Approximate the result of division. This may be a little greater or\n    // smaller than the actual value.\n    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));\n\n    // We will tweak the approximate result by changing it in the 48-th digit or\n    // the smallest non-fractional digit, whichever is larger.\n    var log2 = Math.ceil(Math.log(approx) / Math.LN2);\n    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);\n\n    // Decrease the approximation until it is smaller than the remainder.  Note\n    // that if it is too large, the product overflows and is negative.\n    var approxRes = Timestamp.fromNumber(approx);\n    var approxRem = approxRes.multiply(other);\n    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {\n      approx -= delta;\n      approxRes = Timestamp.fromNumber(approx);\n      approxRem = approxRes.multiply(other);\n    }\n\n    // We know the answer can't be zero... and actually, zero would cause\n    // infinite recursion since we would make no progress.\n    if (approxRes.isZero()) {\n      approxRes = Timestamp.ONE;\n    }\n\n    res = res.add(approxRes);\n    rem = rem.subtract(approxRem);\n  }\n  return res;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "div",
    "string": "Timestamp.prototype.div()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "Timestamp by which to mod."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "this Timestamp modulo the given one."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Timestamp modulo the given one.</p>",
    "summary": "<p>Returns this Timestamp modulo the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.modulo = function(other) {\n  return this.subtract(this.div(other).multiply(other));\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "modulo",
    "string": "Timestamp.prototype.modulo()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the bitwise-NOT of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The bitwise-NOT of this value.</p>",
    "summary": "<p>The bitwise-NOT of this value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.not = function() {\n  return Timestamp.fromBits(~this.low_, ~this.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "not",
    "string": "Timestamp.prototype.not()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "the Timestamp with which to AND."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the bitwise-AND of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-AND of this Timestamp and the given one.</p>",
    "summary": "<p>Returns the bitwise-AND of this Timestamp and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.and = function(other) {\n  return Timestamp.fromBits(this.low_ & other.low_, this.high_ & other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "and",
    "string": "Timestamp.prototype.and()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "the Timestamp with which to OR."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the bitwise-OR of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-OR of this Timestamp and the given one.</p>",
    "summary": "<p>Returns the bitwise-OR of this Timestamp and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.or = function(other) {\n  return Timestamp.fromBits(this.low_ | other.low_, this.high_ | other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "or",
    "string": "Timestamp.prototype.or()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Timestamp"
     ],
     "name": "other",
     "description": "the Timestamp with which to XOR."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the bitwise-XOR of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-XOR of this Timestamp and the given one.</p>",
    "summary": "<p>Returns the bitwise-XOR of this Timestamp and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.xor = function(other) {\n  return Timestamp.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "xor",
    "string": "Timestamp.prototype.xor()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "this shifted to the left by the given amount."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Timestamp with bits shifted to the left by the given amount.</p>",
    "summary": "<p>Returns this Timestamp with bits shifted to the left by the given amount.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.shiftLeft = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var low = this.low_;\n    if (numBits < 32) {\n      var high = this.high_;\n      return Timestamp.fromBits(\n                 low << numBits,\n                 (high << numBits) | (low >>> (32 - numBits)));\n    } else {\n      return Timestamp.fromBits(0, low << (numBits - 32));\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "shiftLeft",
    "string": "Timestamp.prototype.shiftLeft()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "this shifted to the right by the given amount."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Timestamp with bits shifted to the right by the given amount.</p>",
    "summary": "<p>Returns this Timestamp with bits shifted to the right by the given amount.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.shiftRight = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var high = this.high_;\n    if (numBits < 32) {\n      var low = this.low_;\n      return Timestamp.fromBits(\n                 (low >>> numBits) | (high << (32 - numBits)),\n                 high >> numBits);\n    } else {\n      return Timestamp.fromBits(\n                 high >> (numBits - 32),\n                 high >= 0 ? 0 : -1);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "shiftRight",
    "string": "Timestamp.prototype.shiftRight()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "this shifted to the right by the given amount, with zeros placed into the new leading bits."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Timestamp with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.</p>",
    "summary": "<p>Returns this Timestamp with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.prototype.shiftRightUnsigned = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var high = this.high_;\n    if (numBits < 32) {\n      var low = this.low_;\n      return Timestamp.fromBits(\n                 (low >>> numBits) | (high << (32 - numBits)),\n                 high >>> numBits);\n    } else if (numBits == 32) {\n      return Timestamp.fromBits(high, 0);\n    } else {\n      return Timestamp.fromBits(high >>> (numBits - 32), 0);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Timestamp",
    "cons": "Timestamp",
    "name": "shiftRightUnsigned",
    "string": "Timestamp.prototype.shiftRightUnsigned()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "the 32-bit integer in question."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the corresponding Timestamp value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Timestamp representing the given (32-bit) integer value.</p>",
    "summary": "<p>Returns a Timestamp representing the given (32-bit) integer value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.fromInt = function(value) {\n  if (-128 <= value && value < 128) {\n    var cachedObj = Timestamp.INT_CACHE_[value];\n    if (cachedObj) {\n      return cachedObj;\n    }\n  }\n\n  var obj = new Timestamp(value | 0, value < 0 ? -1 : 0);\n  if (-128 <= value && value < 128) {\n    Timestamp.INT_CACHE_[value] = obj;\n  }\n  return obj;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Timestamp",
    "name": "fromInt",
    "string": "Timestamp.fromInt()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "the number in question."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the corresponding Timestamp value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Timestamp representing the given value, provided that it is a finite number. Otherwise, zero is returned.</p>",
    "summary": "<p>Returns a Timestamp representing the given value, provided that it is a finite number. Otherwise, zero is returned.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.fromNumber = function(value) {\n  if (isNaN(value) || !isFinite(value)) {\n    return Timestamp.ZERO;\n  } else if (value <= -Timestamp.TWO_PWR_63_DBL_) {\n    return Timestamp.MIN_VALUE;\n  } else if (value + 1 >= Timestamp.TWO_PWR_63_DBL_) {\n    return Timestamp.MAX_VALUE;\n  } else if (value < 0) {\n    return Timestamp.fromNumber(-value).negate();\n  } else {\n    return new Timestamp(\n               (value % Timestamp.TWO_PWR_32_DBL_) | 0,\n               (value / Timestamp.TWO_PWR_32_DBL_) | 0);\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "Timestamp",
    "name": "fromNumber",
    "string": "Timestamp.fromNumber()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "lowBits",
     "description": "the low 32-bits."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "highBits",
     "description": "the high 32-bits."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the corresponding Timestamp value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Timestamp representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.</p>",
    "summary": "<p>Returns a Timestamp representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.fromBits = function(lowBits, highBits) {\n  return new Timestamp(lowBits, highBits);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Timestamp",
    "name": "fromBits",
    "string": "Timestamp.fromBits()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "str",
     "description": "the textual representation of the Timestamp."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "opt_radix",
     "description": "the radix in which the text is written."
    },
    {
     "type": "return",
     "types": [
      "Timestamp"
     ],
     "description": "the corresponding Timestamp value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Timestamp representation of the given string, written using the given radix.</p>",
    "summary": "<p>Returns a Timestamp representation of the given string, written using the given radix.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Timestamp.fromString = function(str, opt_radix) {\n  if (str.length == 0) {\n    throw Error('number format error: empty string');\n  }\n\n  var radix = opt_radix || 10;\n  if (radix < 2 || 36 < radix) {\n    throw Error('radix out of range: ' + radix);\n  }\n\n  if (str.charAt(0) == '-') {\n    return Timestamp.fromString(str.substring(1), radix).negate();\n  } else if (str.indexOf('-') >= 0) {\n    throw Error('number format error: interior \"-\" character: ' + str);\n  }\n\n  // Do several (8) digits each time through the loop, so as to\n  // minimize the calls to the very expensive emulated div.\n  var radixToPower = Timestamp.fromNumber(Math.pow(radix, 8));\n\n  var result = Timestamp.ZERO;\n  for (var i = 0; i < str.length; i += 8) {\n    var size = Math.min(8, str.length - i);\n    var value = parseInt(str.substring(i, i + size), radix);\n    if (size < 8) {\n      var power = Timestamp.fromNumber(Math.pow(radix, size));\n      result = result.multiply(power).add(Timestamp.fromNumber(value));\n    } else {\n      result = result.multiply(radixToPower);\n      result = result.add(Timestamp.fromNumber(value));\n    }\n  }\n  return result;\n};\n\n// NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the\n// from* methods on which they depend.",
   "ctx": {
    "type": "method",
    "receiver": "Timestamp",
    "name": "fromString",
    "string": "Timestamp.fromString()"
   }
  },
  {
   "tags": [
    {
     "type": "type",
     "types": [
      "Object"
     ]
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>A cache of the Timestamp representations of small integer values.</p>",
    "summary": "<p>A cache of the Timestamp representations of small integer values.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.INT_CACHE_ = {};\n\n// NOTE: the compiler should inline these constant values below and then remove\n// these variables, so there should be no runtime penalty for these.",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "INT_CACHE_",
    "value": "{}",
    "string": "Timestamp.INT_CACHE_"
   }
  },
  {
   "tags": [
    {
     "type": "type",
     "types": [
      "number"
     ]
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Number used repeated below in calculations.  This must appear before the<br />first call to any from* function below.</p>",
    "summary": "<p>Number used repeated below in calculations.  This must appear before the<br />first call to any from* function below.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_16_DBL_ = 1 << 16;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_16_DBL_",
    "value": "1 << 16",
    "string": "Timestamp.TWO_PWR_16_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_24_DBL_ = 1 << 24;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_24_DBL_",
    "value": "1 << 24",
    "string": "Timestamp.TWO_PWR_24_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_32_DBL_ = Timestamp.TWO_PWR_16_DBL_ * Timestamp.TWO_PWR_16_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_32_DBL_",
    "value": "Timestamp.TWO_PWR_16_DBL_ * Timestamp.TWO_PWR_16_DBL_",
    "string": "Timestamp.TWO_PWR_32_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_31_DBL_ = Timestamp.TWO_PWR_32_DBL_ / 2;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_31_DBL_",
    "value": "Timestamp.TWO_PWR_32_DBL_ / 2",
    "string": "Timestamp.TWO_PWR_31_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_48_DBL_ = Timestamp.TWO_PWR_32_DBL_ * Timestamp.TWO_PWR_16_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_48_DBL_",
    "value": "Timestamp.TWO_PWR_32_DBL_ * Timestamp.TWO_PWR_16_DBL_",
    "string": "Timestamp.TWO_PWR_48_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_64_DBL_ = Timestamp.TWO_PWR_32_DBL_ * Timestamp.TWO_PWR_32_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_64_DBL_",
    "value": "Timestamp.TWO_PWR_32_DBL_ * Timestamp.TWO_PWR_32_DBL_",
    "string": "Timestamp.TWO_PWR_64_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_63_DBL_ = Timestamp.TWO_PWR_64_DBL_ / 2;",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_63_DBL_",
    "value": "Timestamp.TWO_PWR_64_DBL_ / 2",
    "string": "Timestamp.TWO_PWR_63_DBL_"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Timestamp.ZERO = Timestamp.fromInt(0);",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "ZERO",
    "value": "Timestamp.fromInt(0)",
    "string": "Timestamp.ZERO"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Timestamp.ONE = Timestamp.fromInt(1);",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "ONE",
    "value": "Timestamp.fromInt(1)",
    "string": "Timestamp.ONE"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Timestamp.NEG_ONE = Timestamp.fromInt(-1);",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "NEG_ONE",
    "value": "Timestamp.fromInt(-1)",
    "string": "Timestamp.NEG_ONE"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Timestamp.MAX_VALUE =\n    Timestamp.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Timestamp.MIN_VALUE = Timestamp.fromBits(0, 0x80000000 | 0);",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "MIN_VALUE",
    "value": "Timestamp.fromBits(0, 0x80000000 | 0)",
    "string": "Timestamp.MIN_VALUE"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {Timestamp}</p>",
    "summary": "<p>@type {Timestamp}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Timestamp.TWO_PWR_24_ = Timestamp.fromInt(1 << 24);",
   "ctx": {
    "type": "property",
    "receiver": "Timestamp",
    "name": "TWO_PWR_24_",
    "value": "Timestamp.fromInt(1 << 24)",
    "string": "Timestamp.TWO_PWR_24_"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose.</p>",
    "summary": "<p>Expose.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Timestamp = Timestamp;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Timestamp",
    "value": "Timestamp",
    "string": "exports.Timestamp"
   }
  }
 ],
 "long": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Long type."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "low",
     "description": "the low (signed) 32 bits of the Long."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "high",
     "description": "the high (signed) 32 bits of the Long."
    }
   ],
   "description": {
    "full": "<p>Defines a Long class for representing a 64-bit two's-complement<br />integer value, which faithfully simulates the behavior of a Java \"Long\". This<br />implementation is derived from LongLib in GWT.</p>\n\n<p>Constructs a 64-bit two's-complement integer, given its low and high 32-bit<br />values as <em>signed</em> integers.  See the from* functions below for more<br />convenient ways of constructing Longs.</p>\n\n<p>The internal representation of a Long is the two given signed, 32-bit values.<br />We use 32-bit pieces because these are the size of integers on which<br />Javascript performs bit-operations.  For operations like addition and<br />multiplication, we split each number into 16-bit pieces, which can easily be<br />multiplied within Javascript's floating-point representation without overflow<br />or change in sign.</p>\n\n<p>In the algorithms below, we frequently reduce the negative case to the<br />positive case by negating the input(s) and then post-processing the result.<br />Note that we must ALWAYS check specially whether those values are MIN_VALUE<br />(-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as<br />a positive number, it overflows back into a negative).  Not handling this<br />case would often result in infinite recursion.</p>",
    "summary": "<p>Defines a Long class for representing a 64-bit two's-complement<br />integer value, which faithfully simulates the behavior of a Java \"Long\". This<br />implementation is derived from LongLib in GWT.</p>",
    "body": "<p>Constructs a 64-bit two's-complement integer, given its low and high 32-bit<br />values as <em>signed</em> integers.  See the from* functions below for more<br />convenient ways of constructing Longs.</p>\n\n<p>The internal representation of a Long is the two given signed, 32-bit values.<br />We use 32-bit pieces because these are the size of integers on which<br />Javascript performs bit-operations.  For operations like addition and<br />multiplication, we split each number into 16-bit pieces, which can easily be<br />multiplied within Javascript's floating-point representation without overflow<br />or change in sign.</p>\n\n<p>In the algorithms below, we frequently reduce the negative case to the<br />positive case by negating the input(s) and then post-processing the result.<br />Note that we must ALWAYS check specially whether those values are MIN_VALUE<br />(-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as<br />a positive number, it overflows back into a negative).  Not handling this<br />case would often result in infinite recursion.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function Long(low, high) {\n  if(!(this instanceof Long)) return new Long(low, high);\n  \n  this._bsontype = 'Long';",
   "ctx": {
    "type": "function",
    "name": "Long",
    "string": "Long()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "this.low_ = low | 0;  // force into 32 signed bits.",
   "ctx": {
    "type": "property",
    "receiver": "this",
    "name": "low_",
    "value": "low | 0",
    "string": "this.low_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "this.high_ = high | 0;  // force into 32 signed bits.\n};",
   "ctx": {
    "type": "property",
    "receiver": "this",
    "name": "high_",
    "value": "high | 0",
    "string": "this.high_"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the value, assuming it is a 32-bit integer."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the int value.</p>",
    "summary": "<p>Return the int value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.toInt = function() {\n  return this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "toInt",
    "string": "Long.prototype.toInt()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the closest floating-point representation to this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the Number value.</p>",
    "summary": "<p>Return the Number value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.toNumber = function() {\n  return this.high_ * Long.TWO_PWR_32_DBL_ +\n         this.getLowBitsUnsigned();\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "toNumber",
    "string": "Long.prototype.toNumber()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "the JSON representation."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the JSON value.</p>",
    "summary": "<p>Return the JSON value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.toJSON = function() {\n  return this.toString();\n}",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "toJSON",
    "string": "Long.prototype.toJSON()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "[opt_radix]",
     "description": "the radix in which the text should be written."
    },
    {
     "type": "return",
     "types": [
      "String"
     ],
     "description": "the textual representation of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the String value.</p>",
    "summary": "<p>Return the String value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.toString = function(opt_radix) {\n  var radix = opt_radix || 10;\n  if (radix < 2 || 36 < radix) {\n    throw Error('radix out of range: ' + radix);\n  }\n\n  if (this.isZero()) {\n    return '0';\n  }\n\n  if (this.isNegative()) {\n    if (this.equals(Long.MIN_VALUE)) {\n      // We need to change the Long value before it can be negated, so we remove\n      // the bottom-most digit in this base and then recurse to do the rest.\n      var radixLong = Long.fromNumber(radix);\n      var div = this.div(radixLong);\n      var rem = div.multiply(radixLong).subtract(this);\n      return div.toString(radix) + rem.toInt().toString(radix);\n    } else {\n      return '-' + this.negate().toString(radix);\n    }\n  }\n\n  // Do several (6) digits each time through the loop, so as to\n  // minimize the calls to the very expensive emulated div.\n  var radixToPower = Long.fromNumber(Math.pow(radix, 6));\n\n  var rem = this;\n  var result = '';\n  while (true) {\n    var remDiv = rem.div(radixToPower);\n    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();\n    var digits = intval.toString(radix);\n\n    rem = remDiv;\n    if (rem.isZero()) {\n      return digits + result;\n    } else {\n      while (digits.length < 6) {\n        digits = '0' + digits;\n      }\n      result = '' + digits + result;\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "toString",
    "string": "Long.prototype.toString()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the high 32-bits as a signed value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the high 32-bits value.</p>",
    "summary": "<p>Return the high 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.getHighBits = function() {\n  return this.high_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "getHighBits",
    "string": "Long.prototype.getHighBits()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the low 32-bits as a signed value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the low 32-bits value.</p>",
    "summary": "<p>Return the low 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.getLowBits = function() {\n  return this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "getLowBits",
    "string": "Long.prototype.getLowBits()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "the low 32-bits as an unsigned value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return the low unsigned 32-bits value.</p>",
    "summary": "<p>Return the low unsigned 32-bits value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.getLowBitsUnsigned = function() {\n  return (this.low_ >= 0) ?\n      this.low_ : Long.TWO_PWR_32_DBL_ + this.low_;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "getLowBitsUnsigned",
    "string": "Long.prototype.getLowBitsUnsigned()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "Returns the number of bits needed to represent the absolute value of this Long."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the number of bits needed to represent the absolute value of this Long.</p>",
    "summary": "<p>Returns the number of bits needed to represent the absolute value of this Long.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.getNumBitsAbs = function() {\n  if (this.isNegative()) {\n    if (this.equals(Long.MIN_VALUE)) {\n      return 64;\n    } else {\n      return this.negate().getNumBitsAbs();\n    }\n  } else {\n    var val = this.high_ != 0 ? this.high_ : this.low_;\n    for (var bit = 31; bit > 0; bit--) {\n      if ((val & (1 << bit)) != 0) {\n        break;\n      }\n    }\n    return this.high_ != 0 ? bit + 33 : bit + 1;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "getNumBitsAbs",
    "string": "Long.prototype.getNumBitsAbs()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is zero."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is zero.</p>",
    "summary": "<p>Return whether this value is zero.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.isZero = function() {\n  return this.high_ == 0 && this.low_ == 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "isZero",
    "string": "Long.prototype.isZero()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is negative."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is negative.</p>",
    "summary": "<p>Return whether this value is negative.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.isNegative = function() {\n  return this.high_ < 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "isNegative",
    "string": "Long.prototype.isNegative()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this value is odd."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this value is odd.</p>",
    "summary": "<p>Return whether this value is odd.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.isOdd = function() {\n  return (this.low_ & 1) == 1;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "isOdd",
    "string": "Long.prototype.isOdd()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long equals the other"
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long equals the other</p>",
    "summary": "<p>Return whether this Long equals the other</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.equals = function(other) {\n  return (this.high_ == other.high_) && (this.low_ == other.low_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "equals",
    "string": "Long.prototype.equals()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long does not equal the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long does not equal the other.</p>",
    "summary": "<p>Return whether this Long does not equal the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.notEquals = function(other) {\n  return (this.high_ != other.high_) || (this.low_ != other.low_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "notEquals",
    "string": "Long.prototype.notEquals()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long is less than the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long is less than the other.</p>",
    "summary": "<p>Return whether this Long is less than the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.lessThan = function(other) {\n  return this.compare(other) < 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "lessThan",
    "string": "Long.prototype.lessThan()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long is less than or equal to the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long is less than or equal to the other.</p>",
    "summary": "<p>Return whether this Long is less than or equal to the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.lessThanOrEqual = function(other) {\n  return this.compare(other) <= 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "lessThanOrEqual",
    "string": "Long.prototype.lessThanOrEqual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long is greater than the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long is greater than the other.</p>",
    "summary": "<p>Return whether this Long is greater than the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.greaterThan = function(other) {\n  return this.compare(other) > 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "greaterThan",
    "string": "Long.prototype.greaterThan()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "whether this Long is greater than or equal to the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Return whether this Long is greater than or equal to the other.</p>",
    "summary": "<p>Return whether this Long is greater than or equal to the other.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.greaterThanOrEqual = function(other) {\n  return this.compare(other) >= 0;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "greaterThanOrEqual",
    "string": "Long.prototype.greaterThanOrEqual()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to compare against."
    },
    {
     "type": "return",
     "types": [
      "Boolean"
     ],
     "description": "0 if they are the same, 1 if the this is greater, and -1 if the given one is greater."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Compares this Long with the given one.</p>",
    "summary": "<p>Compares this Long with the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.compare = function(other) {\n  if (this.equals(other)) {\n    return 0;\n  }\n\n  var thisNeg = this.isNegative();\n  var otherNeg = other.isNegative();\n  if (thisNeg && !otherNeg) {\n    return -1;\n  }\n  if (!thisNeg && otherNeg) {\n    return 1;\n  }\n\n  // at this point, the signs are the same, so subtraction will not overflow\n  if (this.subtract(other).isNegative()) {\n    return -1;\n  } else {\n    return 1;\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "compare",
    "string": "Long.prototype.compare()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the negation of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The negation of this value.</p>",
    "summary": "<p>The negation of this value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.negate = function() {\n  if (this.equals(Long.MIN_VALUE)) {\n    return Long.MIN_VALUE;\n  } else {\n    return this.not().add(Long.ONE);\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "negate",
    "string": "Long.prototype.negate()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to add to this one."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the sum of this and the given Long."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the sum of this and the given Long.</p>",
    "summary": "<p>Returns the sum of this and the given Long.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.add = function(other) {\n  // Divide each number into 4 chunks of 16 bits, and then sum the chunks.\n\n  var a48 = this.high_ >>> 16;\n  var a32 = this.high_ & 0xFFFF;\n  var a16 = this.low_ >>> 16;\n  var a00 = this.low_ & 0xFFFF;\n\n  var b48 = other.high_ >>> 16;\n  var b32 = other.high_ & 0xFFFF;\n  var b16 = other.low_ >>> 16;\n  var b00 = other.low_ & 0xFFFF;\n\n  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;\n  c00 += a00 + b00;\n  c16 += c00 >>> 16;\n  c00 &= 0xFFFF;\n  c16 += a16 + b16;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c32 += a32 + b32;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c48 += a48 + b48;\n  c48 &= 0xFFFF;\n  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "add",
    "string": "Long.prototype.add()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to subtract from this."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the difference of this and the given Long."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the difference of this and the given Long.</p>",
    "summary": "<p>Returns the difference of this and the given Long.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.subtract = function(other) {\n  return this.add(other.negate());\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "subtract",
    "string": "Long.prototype.subtract()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long to multiply with this."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the product of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the product of this and the given Long.</p>",
    "summary": "<p>Returns the product of this and the given Long.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.multiply = function(other) {\n  if (this.isZero()) {\n    return Long.ZERO;\n  } else if (other.isZero()) {\n    return Long.ZERO;\n  }\n\n  if (this.equals(Long.MIN_VALUE)) {\n    return other.isOdd() ? Long.MIN_VALUE : Long.ZERO;\n  } else if (other.equals(Long.MIN_VALUE)) {\n    return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;\n  }\n\n  if (this.isNegative()) {\n    if (other.isNegative()) {\n      return this.negate().multiply(other.negate());\n    } else {\n      return this.negate().multiply(other).negate();\n    }\n  } else if (other.isNegative()) {\n    return this.multiply(other.negate()).negate();\n  }\n\n  // If both Longs are small, use float multiplication\n  if (this.lessThan(Long.TWO_PWR_24_) &&\n      other.lessThan(Long.TWO_PWR_24_)) {\n    return Long.fromNumber(this.toNumber() * other.toNumber());\n  }\n\n  // Divide each Long into 4 chunks of 16 bits, and then add up 4x4 products.\n  // We can skip products that would overflow.\n\n  var a48 = this.high_ >>> 16;\n  var a32 = this.high_ & 0xFFFF;\n  var a16 = this.low_ >>> 16;\n  var a00 = this.low_ & 0xFFFF;\n\n  var b48 = other.high_ >>> 16;\n  var b32 = other.high_ & 0xFFFF;\n  var b16 = other.low_ >>> 16;\n  var b00 = other.low_ & 0xFFFF;\n\n  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;\n  c00 += a00 * b00;\n  c16 += c00 >>> 16;\n  c00 &= 0xFFFF;\n  c16 += a16 * b00;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c16 += a00 * b16;\n  c32 += c16 >>> 16;\n  c16 &= 0xFFFF;\n  c32 += a32 * b00;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c32 += a16 * b16;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c32 += a00 * b32;\n  c48 += c32 >>> 16;\n  c32 &= 0xFFFF;\n  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;\n  c48 &= 0xFFFF;\n  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "multiply",
    "string": "Long.prototype.multiply()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long by which to divide."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "this Long divided by the given one."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Long divided by the given one.</p>",
    "summary": "<p>Returns this Long divided by the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.div = function(other) {\n  if (other.isZero()) {\n    throw Error('division by zero');\n  } else if (this.isZero()) {\n    return Long.ZERO;\n  }\n\n  if (this.equals(Long.MIN_VALUE)) {\n    if (other.equals(Long.ONE) ||\n        other.equals(Long.NEG_ONE)) {\n      return Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE\n    } else if (other.equals(Long.MIN_VALUE)) {\n      return Long.ONE;\n    } else {\n      // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.\n      var halfThis = this.shiftRight(1);\n      var approx = halfThis.div(other).shiftLeft(1);\n      if (approx.equals(Long.ZERO)) {\n        return other.isNegative() ? Long.ONE : Long.NEG_ONE;\n      } else {\n        var rem = this.subtract(other.multiply(approx));\n        var result = approx.add(rem.div(other));\n        return result;\n      }\n    }\n  } else if (other.equals(Long.MIN_VALUE)) {\n    return Long.ZERO;\n  }\n\n  if (this.isNegative()) {\n    if (other.isNegative()) {\n      return this.negate().div(other.negate());\n    } else {\n      return this.negate().div(other).negate();\n    }\n  } else if (other.isNegative()) {\n    return this.div(other.negate()).negate();\n  }\n\n  // Repeat the following until the remainder is less than other:  find a\n  // floating-point that approximates remainder / other *from below*, add this\n  // into the result, and subtract it from the remainder.  It is critical that\n  // the approximate value is less than or equal to the real value so that the\n  // remainder never becomes negative.\n  var res = Long.ZERO;\n  var rem = this;\n  while (rem.greaterThanOrEqual(other)) {\n    // Approximate the result of division. This may be a little greater or\n    // smaller than the actual value.\n    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));\n\n    // We will tweak the approximate result by changing it in the 48-th digit or\n    // the smallest non-fractional digit, whichever is larger.\n    var log2 = Math.ceil(Math.log(approx) / Math.LN2);\n    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);\n\n    // Decrease the approximation until it is smaller than the remainder.  Note\n    // that if it is too large, the product overflows and is negative.\n    var approxRes = Long.fromNumber(approx);\n    var approxRem = approxRes.multiply(other);\n    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {\n      approx -= delta;\n      approxRes = Long.fromNumber(approx);\n      approxRem = approxRes.multiply(other);\n    }\n\n    // We know the answer can't be zero... and actually, zero would cause\n    // infinite recursion since we would make no progress.\n    if (approxRes.isZero()) {\n      approxRes = Long.ONE;\n    }\n\n    res = res.add(approxRes);\n    rem = rem.subtract(approxRem);\n  }\n  return res;\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "div",
    "string": "Long.prototype.div()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "Long by which to mod."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "this Long modulo the given one."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Long modulo the given one.</p>",
    "summary": "<p>Returns this Long modulo the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.modulo = function(other) {\n  return this.subtract(this.div(other).multiply(other));\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "modulo",
    "string": "Long.prototype.modulo()"
   }
  },
  {
   "tags": [
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the bitwise-NOT of this value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>The bitwise-NOT of this value.</p>",
    "summary": "<p>The bitwise-NOT of this value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.not = function() {\n  return Long.fromBits(~this.low_, ~this.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "not",
    "string": "Long.prototype.not()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "the Long with which to AND."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the bitwise-AND of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-AND of this Long and the given one.</p>",
    "summary": "<p>Returns the bitwise-AND of this Long and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.and = function(other) {\n  return Long.fromBits(this.low_ & other.low_, this.high_ & other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "and",
    "string": "Long.prototype.and()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "the Long with which to OR."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the bitwise-OR of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-OR of this Long and the given one.</p>",
    "summary": "<p>Returns the bitwise-OR of this Long and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.or = function(other) {\n  return Long.fromBits(this.low_ | other.low_, this.high_ | other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "or",
    "string": "Long.prototype.or()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Long"
     ],
     "name": "other",
     "description": "the Long with which to XOR."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the bitwise-XOR of this and the other."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns the bitwise-XOR of this Long and the given one.</p>",
    "summary": "<p>Returns the bitwise-XOR of this Long and the given one.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.xor = function(other) {\n  return Long.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "xor",
    "string": "Long.prototype.xor()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "this shifted to the left by the given amount."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Long with bits shifted to the left by the given amount.</p>",
    "summary": "<p>Returns this Long with bits shifted to the left by the given amount.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.shiftLeft = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var low = this.low_;\n    if (numBits < 32) {\n      var high = this.high_;\n      return Long.fromBits(\n                 low << numBits,\n                 (high << numBits) | (low >>> (32 - numBits)));\n    } else {\n      return Long.fromBits(0, low << (numBits - 32));\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "shiftLeft",
    "string": "Long.prototype.shiftLeft()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "this shifted to the right by the given amount."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Long with bits shifted to the right by the given amount.</p>",
    "summary": "<p>Returns this Long with bits shifted to the right by the given amount.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.shiftRight = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var high = this.high_;\n    if (numBits < 32) {\n      var low = this.low_;\n      return Long.fromBits(\n                 (low >>> numBits) | (high << (32 - numBits)),\n                 high >> numBits);\n    } else {\n      return Long.fromBits(\n                 high >> (numBits - 32),\n                 high >= 0 ? 0 : -1);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "shiftRight",
    "string": "Long.prototype.shiftRight()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numBits",
     "description": "the number of bits by which to shift."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "this shifted to the right by the given amount, with zeros placed into the new leading bits."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns this Long with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.</p>",
    "summary": "<p>Returns this Long with bits shifted to the right by the given amount, with the new top bits matching the current sign bit.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.prototype.shiftRightUnsigned = function(numBits) {\n  numBits &= 63;\n  if (numBits == 0) {\n    return this;\n  } else {\n    var high = this.high_;\n    if (numBits < 32) {\n      var low = this.low_;\n      return Long.fromBits(\n                 (low >>> numBits) | (high << (32 - numBits)),\n                 high >>> numBits);\n    } else if (numBits == 32) {\n      return Long.fromBits(high, 0);\n    } else {\n      return Long.fromBits(high >>> (numBits - 32), 0);\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "constructor": "Long",
    "cons": "Long",
    "name": "shiftRightUnsigned",
    "string": "Long.prototype.shiftRightUnsigned()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "the 32-bit integer in question."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the corresponding Long value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Long representing the given (32-bit) integer value.</p>",
    "summary": "<p>Returns a Long representing the given (32-bit) integer value.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.fromInt = function(value) {\n  if (-128 <= value && value < 128) {\n    var cachedObj = Long.INT_CACHE_[value];\n    if (cachedObj) {\n      return cachedObj;\n    }\n  }\n\n  var obj = new Long(value | 0, value < 0 ? -1 : 0);\n  if (-128 <= value && value < 128) {\n    Long.INT_CACHE_[value] = obj;\n  }\n  return obj;\n};",
   "ctx": {
    "type": "method",
    "receiver": "Long",
    "name": "fromInt",
    "string": "Long.fromInt()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "value",
     "description": "the number in question."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the corresponding Long value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.</p>",
    "summary": "<p>Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.fromNumber = function(value) {\n  if (isNaN(value) || !isFinite(value)) {\n    return Long.ZERO;\n  } else if (value <= -Long.TWO_PWR_63_DBL_) {\n    return Long.MIN_VALUE;\n  } else if (value + 1 >= Long.TWO_PWR_63_DBL_) {\n    return Long.MAX_VALUE;\n  } else if (value < 0) {\n    return Long.fromNumber(-value).negate();\n  } else {\n    return new Long(\n               (value % Long.TWO_PWR_32_DBL_) | 0,\n               (value / Long.TWO_PWR_32_DBL_) | 0);\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "Long",
    "name": "fromNumber",
    "string": "Long.fromNumber()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "lowBits",
     "description": "the low 32-bits."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "highBits",
     "description": "the high 32-bits."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the corresponding Long value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Long representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.</p>",
    "summary": "<p>Returns a Long representing the 64-bit integer that comes by concatenating the given high and low bits. Each is assumed to use 32 bits.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.fromBits = function(lowBits, highBits) {\n  return new Long(lowBits, highBits);\n};",
   "ctx": {
    "type": "method",
    "receiver": "Long",
    "name": "fromBits",
    "string": "Long.fromBits()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "String"
     ],
     "name": "str",
     "description": "the textual representation of the Long."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "opt_radix",
     "description": "the radix in which the text is written."
    },
    {
     "type": "return",
     "types": [
      "Long"
     ],
     "description": "the corresponding Long value."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Returns a Long representation of the given string, written using the given radix.</p>",
    "summary": "<p>Returns a Long representation of the given string, written using the given radix.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "Long.fromString = function(str, opt_radix) {\n  if (str.length == 0) {\n    throw Error('number format error: empty string');\n  }\n\n  var radix = opt_radix || 10;\n  if (radix < 2 || 36 < radix) {\n    throw Error('radix out of range: ' + radix);\n  }\n\n  if (str.charAt(0) == '-') {\n    return Long.fromString(str.substring(1), radix).negate();\n  } else if (str.indexOf('-') >= 0) {\n    throw Error('number format error: interior \"-\" character: ' + str);\n  }\n\n  // Do several (8) digits each time through the loop, so as to\n  // minimize the calls to the very expensive emulated div.\n  var radixToPower = Long.fromNumber(Math.pow(radix, 8));\n\n  var result = Long.ZERO;\n  for (var i = 0; i < str.length; i += 8) {\n    var size = Math.min(8, str.length - i);\n    var value = parseInt(str.substring(i, i + size), radix);\n    if (size < 8) {\n      var power = Long.fromNumber(Math.pow(radix, size));\n      result = result.multiply(power).add(Long.fromNumber(value));\n    } else {\n      result = result.multiply(radixToPower);\n      result = result.add(Long.fromNumber(value));\n    }\n  }\n  return result;\n};\n\n// NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the\n// from* methods on which they depend.",
   "ctx": {
    "type": "method",
    "receiver": "Long",
    "name": "fromString",
    "string": "Long.fromString()"
   }
  },
  {
   "tags": [
    {
     "type": "type",
     "types": [
      "Object"
     ]
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>A cache of the Long representations of small integer values.</p>",
    "summary": "<p>A cache of the Long representations of small integer values.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.INT_CACHE_ = {};\n\n// NOTE: the compiler should inline these constant values below and then remove\n// these variables, so there should be no runtime penalty for these.",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "INT_CACHE_",
    "value": "{}",
    "string": "Long.INT_CACHE_"
   }
  },
  {
   "tags": [
    {
     "type": "type",
     "types": [
      "number"
     ]
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Number used repeated below in calculations.  This must appear before the<br />first call to any from* function below.</p>",
    "summary": "<p>Number used repeated below in calculations.  This must appear before the<br />first call to any from* function below.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_16_DBL_ = 1 << 16;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_16_DBL_",
    "value": "1 << 16",
    "string": "Long.TWO_PWR_16_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_24_DBL_ = 1 << 24;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_24_DBL_",
    "value": "1 << 24",
    "string": "Long.TWO_PWR_24_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_32_DBL_ = Long.TWO_PWR_16_DBL_ * Long.TWO_PWR_16_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_32_DBL_",
    "value": "Long.TWO_PWR_16_DBL_ * Long.TWO_PWR_16_DBL_",
    "string": "Long.TWO_PWR_32_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_31_DBL_ = Long.TWO_PWR_32_DBL_ / 2;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_31_DBL_",
    "value": "Long.TWO_PWR_32_DBL_ / 2",
    "string": "Long.TWO_PWR_31_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_48_DBL_ = Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_16_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_48_DBL_",
    "value": "Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_16_DBL_",
    "string": "Long.TWO_PWR_48_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_64_DBL_ = Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_32_DBL_;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_64_DBL_",
    "value": "Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_32_DBL_",
    "string": "Long.TWO_PWR_64_DBL_"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {number}</p>",
    "summary": "<p>@type {number}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_63_DBL_ = Long.TWO_PWR_64_DBL_ / 2;",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_63_DBL_",
    "value": "Long.TWO_PWR_64_DBL_ / 2",
    "string": "Long.TWO_PWR_63_DBL_"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Long.ZERO = Long.fromInt(0);",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "ZERO",
    "value": "Long.fromInt(0)",
    "string": "Long.ZERO"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Long.ONE = Long.fromInt(1);",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "ONE",
    "value": "Long.fromInt(1)",
    "string": "Long.ONE"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Long.NEG_ONE = Long.fromInt(-1);",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "NEG_ONE",
    "value": "Long.fromInt(-1)",
    "string": "Long.NEG_ONE"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Long.MAX_VALUE =\n    Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);"
  },
  {
   "tags": [],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "ignore": false,
   "code": "Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0);",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "MIN_VALUE",
    "value": "Long.fromBits(0, 0x80000000 | 0)",
    "string": "Long.MIN_VALUE"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@type {Long}</p>",
    "summary": "<p>@type {Long}</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "Long.TWO_PWR_24_ = Long.fromInt(1 << 24);",
   "ctx": {
    "type": "property",
    "receiver": "Long",
    "name": "TWO_PWR_24_",
    "value": "Long.fromInt(1 << 24)",
    "string": "Long.TWO_PWR_24_"
   }
  },
  {
   "tags": [],
   "description": {
    "full": "<p>Expose.</p>",
    "summary": "<p>Expose.</p>",
    "body": ""
   },
   "ignore": false,
   "code": "exports.Long = Long;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Long",
    "value": "Long",
    "string": "exports.Long"
   }
  }
 ],
 "bson": [
  {
   "tags": [
    {
     "type": "class",
     "string": "Represents the BSON Parser"
    },
    {
     "type": "return",
     "types": [
      "BSON"
     ],
     "description": "instance of BSON Parser."
    }
   ],
   "description": {
    "full": "<p>Create a new BSON instance</p>",
    "summary": "<p>Create a new BSON instance</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "function BSON () {};",
   "ctx": {
    "type": "function",
    "name": "BSON",
    "string": "BSON()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "// BSON MAX VALUES\nBSON.BSON_INT32_MAX = 0x7FFFFFFF;\nBSON.BSON_INT32_MIN = -0x80000000;\n\nBSON.BSON_INT64_MAX = Math.pow(2, 63) - 1;\nBSON.BSON_INT64_MIN = -Math.pow(2, 63);\n\n// JS MAX PRECISE VALUES\nBSON.JS_INT_MAX = 0x20000000000000;  // Any integer up to 2^53 can be precisely represented by a double.\nBSON.JS_INT_MIN = -0x20000000000000;  // Any integer down to -2^53 can be precisely represented by a double.\n\n// Internal long versions\nvar JS_INT_MAX_LONG = Long.fromNumber(0x20000000000000);  // Any integer up to 2^53 can be precisely represented by a double.\nvar JS_INT_MIN_LONG = Long.fromNumber(-0x20000000000000);  // Any integer down to -2^53 can be precisely represented by a double."
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_NUMBER"
    }
   ],
   "description": {
    "full": "<p>Number BSON Type</p>",
    "summary": "<p>Number BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_NUMBER = 1;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_NUMBER",
    "value": "1",
    "string": "BSON.BSON_DATA_NUMBER"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_STRING"
    }
   ],
   "description": {
    "full": "<p>String BSON Type</p>",
    "summary": "<p>String BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_STRING = 2;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_STRING",
    "value": "2",
    "string": "BSON.BSON_DATA_STRING"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_OBJECT"
    }
   ],
   "description": {
    "full": "<p>Object BSON Type</p>",
    "summary": "<p>Object BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_OBJECT = 3;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_OBJECT",
    "value": "3",
    "string": "BSON.BSON_DATA_OBJECT"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_ARRAY"
    }
   ],
   "description": {
    "full": "<p>Array BSON Type</p>",
    "summary": "<p>Array BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_ARRAY = 4;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_ARRAY",
    "value": "4",
    "string": "BSON.BSON_DATA_ARRAY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_BINARY"
    }
   ],
   "description": {
    "full": "<p>Binary BSON Type</p>",
    "summary": "<p>Binary BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_BINARY = 5;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_BINARY",
    "value": "5",
    "string": "BSON.BSON_DATA_BINARY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_UNDEFINED"
    }
   ],
   "description": {
    "full": "<p>Binary BSON Type</p>",
    "summary": "<p>Binary BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_UNDEFINED = 6;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_UNDEFINED",
    "value": "6",
    "string": "BSON.BSON_DATA_UNDEFINED"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_OID"
    }
   ],
   "description": {
    "full": "<p>ObjectID BSON Type</p>",
    "summary": "<p>ObjectID BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_OID = 7;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_OID",
    "value": "7",
    "string": "BSON.BSON_DATA_OID"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_BOOLEAN"
    }
   ],
   "description": {
    "full": "<p>Boolean BSON Type</p>",
    "summary": "<p>Boolean BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_BOOLEAN = 8;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_BOOLEAN",
    "value": "8",
    "string": "BSON.BSON_DATA_BOOLEAN"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_DATE"
    }
   ],
   "description": {
    "full": "<p>Date BSON Type</p>",
    "summary": "<p>Date BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_DATE = 9;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_DATE",
    "value": "9",
    "string": "BSON.BSON_DATA_DATE"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_NULL"
    }
   ],
   "description": {
    "full": "<p>null BSON Type</p>",
    "summary": "<p>null BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_NULL = 10;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_NULL",
    "value": "10",
    "string": "BSON.BSON_DATA_NULL"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_REGEXP"
    }
   ],
   "description": {
    "full": "<p>RegExp BSON Type</p>",
    "summary": "<p>RegExp BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_REGEXP = 11;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_REGEXP",
    "value": "11",
    "string": "BSON.BSON_DATA_REGEXP"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_CODE"
    }
   ],
   "description": {
    "full": "<p>Code BSON Type</p>",
    "summary": "<p>Code BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_CODE = 13;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_CODE",
    "value": "13",
    "string": "BSON.BSON_DATA_CODE"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_SYMBOL"
    }
   ],
   "description": {
    "full": "<p>Symbol BSON Type</p>",
    "summary": "<p>Symbol BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_SYMBOL = 14;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_SYMBOL",
    "value": "14",
    "string": "BSON.BSON_DATA_SYMBOL"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_CODE_W_SCOPE"
    }
   ],
   "description": {
    "full": "<p>Code with Scope BSON Type</p>",
    "summary": "<p>Code with Scope BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_CODE_W_SCOPE = 15;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_CODE_W_SCOPE",
    "value": "15",
    "string": "BSON.BSON_DATA_CODE_W_SCOPE"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_INT"
    }
   ],
   "description": {
    "full": "<p>32 bit Integer BSON Type</p>",
    "summary": "<p>32 bit Integer BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_INT = 16;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_INT",
    "value": "16",
    "string": "BSON.BSON_DATA_INT"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_TIMESTAMP"
    }
   ],
   "description": {
    "full": "<p>Timestamp BSON Type</p>",
    "summary": "<p>Timestamp BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_TIMESTAMP = 17;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_TIMESTAMP",
    "value": "17",
    "string": "BSON.BSON_DATA_TIMESTAMP"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_LONG"
    }
   ],
   "description": {
    "full": "<p>Long BSON Type</p>",
    "summary": "<p>Long BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_LONG = 18;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_LONG",
    "value": "18",
    "string": "BSON.BSON_DATA_LONG"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_MIN_KEY"
    }
   ],
   "description": {
    "full": "<p>MinKey BSON Type</p>",
    "summary": "<p>MinKey BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_MIN_KEY = 0xff;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_MIN_KEY",
    "value": "0xff",
    "string": "BSON.BSON_DATA_MIN_KEY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_DATA_MAX_KEY"
    }
   ],
   "description": {
    "full": "<p>MaxKey BSON Type</p>",
    "summary": "<p>MaxKey BSON Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_DATA_MAX_KEY = 0x7f;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_DATA_MAX_KEY",
    "value": "0x7f",
    "string": "BSON.BSON_DATA_MAX_KEY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_DEFAULT"
    }
   ],
   "description": {
    "full": "<p>Binary Default Type</p>",
    "summary": "<p>Binary Default Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_DEFAULT = 0;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_DEFAULT",
    "value": "0",
    "string": "BSON.BSON_BINARY_SUBTYPE_DEFAULT"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_FUNCTION"
    }
   ],
   "description": {
    "full": "<p>Binary Function Type</p>",
    "summary": "<p>Binary Function Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_FUNCTION = 1;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_FUNCTION",
    "value": "1",
    "string": "BSON.BSON_BINARY_SUBTYPE_FUNCTION"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_BYTE_ARRAY"
    }
   ],
   "description": {
    "full": "<p>Binary Byte Array Type</p>",
    "summary": "<p>Binary Byte Array Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_BYTE_ARRAY",
    "value": "2",
    "string": "BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_UUID"
    }
   ],
   "description": {
    "full": "<p>Binary UUID Type</p>",
    "summary": "<p>Binary UUID Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_UUID = 3;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_UUID",
    "value": "3",
    "string": "BSON.BSON_BINARY_SUBTYPE_UUID"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_MD5"
    }
   ],
   "description": {
    "full": "<p>Binary MD5 Type</p>",
    "summary": "<p>Binary MD5 Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_MD5 = 4;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_MD5",
    "value": "4",
    "string": "BSON.BSON_BINARY_SUBTYPE_MD5"
   }
  },
  {
   "tags": [
    {
     "type": "classconstant",
     "string": "BSON_BINARY_SUBTYPE_USER_DEFINED"
    }
   ],
   "description": {
    "full": "<p>Binary User Defined Type</p>",
    "summary": "<p>Binary User Defined Type</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.BSON_BINARY_SUBTYPE_USER_DEFINED = 128;",
   "ctx": {
    "type": "property",
    "receiver": "BSON",
    "name": "BSON_BINARY_SUBTYPE_USER_DEFINED",
    "value": "128",
    "string": "BSON.BSON_BINARY_SUBTYPE_USER_DEFINED"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to calculate the BSON byte size for."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[serializeFunctions]",
     "description": "serialize all functions in the object **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the number of bytes the BSON object will take up."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Calculate the bson size for a passed in Javascript object.</p>",
    "summary": "<p>Calculate the bson size for a passed in Javascript object.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.calculateObjectSize = function calculateObjectSize(object, serializeFunctions) {\n  var totalLength = (4 + 1);\n\n  if(Array.isArray(object)) {\n    for(var i = 0; i < object.length; i++) {\n      totalLength += calculateElement(i.toString(), object[i], serializeFunctions)\n    }\n  } else {\n\t\t// If we have toBSON defined, override the current object\n\t\tif(object.toBSON) {\n\t\t\tobject = object.toBSON();\n\t\t}\n\n\t\t// Calculate size\n    for(var key in object) {\n      totalLength += calculateElement(key, object[key], serializeFunctions)\n    }\n  }\n\n  return totalLength;\n}",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "calculateObjectSize",
    "string": "BSON.calculateObjectSize()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "function calculateElement(name, value, serializeFunctions) {\n  var isBuffer = typeof Buffer !== 'undefined';\n  \n  // If we have toBSON defined, override the current object\n  if(value && value.toBSON){\n        value = value.toBSON();\n  }\n  \n  switch(typeof value) {\n    case 'string':\n      return 1 + (!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1 + 4 + (!isBuffer ? numberOfBytes(value) : Buffer.byteLength(value, 'utf8')) + 1;\n    case 'number':\n      if(Math.floor(value) === value && value >= BSON.JS_INT_MIN && value <= BSON.JS_INT_MAX) {\n        if(value >= BSON.BSON_INT32_MIN && value <= BSON.BSON_INT32_MAX) { // 32 bit\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (4 + 1);\n        } else {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (8 + 1);\n        }\n      } else {  // 64 bit\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (8 + 1);\n      }\n    case 'undefined':\n      return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (1);\n    case 'boolean':\n      return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (1 + 1);\n    case 'object':\n      if(value == null || value instanceof MinKey || value instanceof MaxKey || value['_bsontype'] == 'MinKey' || value['_bsontype'] == 'MaxKey') {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (1);\n      } else if(value instanceof ObjectID || value['_bsontype'] == 'ObjectID') {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (12 + 1);\n      } else if(value instanceof Date || isDate(value)) {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (8 + 1);\n      } else if(typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (1 + 4 + 1) + value.length;\n      } else if(value instanceof Long || value instanceof Double || value instanceof Timestamp\n          || value['_bsontype'] == 'Long' || value['_bsontype'] == 'Double' || value['_bsontype'] == 'Timestamp') {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (8 + 1);\n      } else if(value instanceof Code || value['_bsontype'] == 'Code') {\n        // Calculate size depending on the availability of a scope\n        if(value.scope != null && Object.keys(value.scope).length > 0) {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + 4 + 4 + (!isBuffer ? numberOfBytes(value.code.toString()) : Buffer.byteLength(value.code.toString(), 'utf8')) + 1 + BSON.calculateObjectSize(value.scope, serializeFunctions);\n        } else {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + 4 + (!isBuffer ? numberOfBytes(value.code.toString()) : Buffer.byteLength(value.code.toString(), 'utf8')) + 1;\n        }\n      } else if(value instanceof Binary || value['_bsontype'] == 'Binary') {\n        // Check what kind of subtype we have\n        if(value.sub_type == Binary.SUBTYPE_BYTE_ARRAY) {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (value.position + 1 + 4 + 1 + 4);\n        } else {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + (value.position + 1 + 4 + 1);\n        }\n      } else if(value instanceof Symbol || value['_bsontype'] == 'Symbol') {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + ((!isBuffer ? numberOfBytes(value.value) : Buffer.byteLength(value.value, 'utf8')) + 4 + 1 + 1);\n      } else if(value instanceof DBRef || value['_bsontype'] == 'DBRef') {\n        // Set up correct object for serialization\n        var ordered_values = {\n            '$ref': value.namespace\n          , '$id' : value.oid\n        };\n\n        // Add db reference if it exists\n        if(null != value.db) {\n          ordered_values['$db'] = value.db;\n        }\n\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + BSON.calculateObjectSize(ordered_values, serializeFunctions);\n      } else if(value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + (!isBuffer ? numberOfBytes(value.source) : Buffer.byteLength(value.source, 'utf8')) + 1\n            + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1\n      } else {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + BSON.calculateObjectSize(value, serializeFunctions) + 1;\n      }\n    case 'function':\n      // WTF for 0.4.X where typeof /someregexp/ === 'function'\n      if(value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) == '[object RegExp]') {\n        return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + (!isBuffer ? numberOfBytes(value.source) : Buffer.byteLength(value.source, 'utf8')) + 1\n          + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1\n      } else {\n        if(serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + 4 + 4 + (!isBuffer ? numberOfBytes(value.toString()) : Buffer.byteLength(value.toString(), 'utf8')) + 1 + BSON.calculateObjectSize(value.scope, serializeFunctions);\n        } else if(serializeFunctions) {\n          return (name != null ? ((!isBuffer ? numberOfBytes(name) : Buffer.byteLength(name, 'utf8')) + 1) : 0) + 1 + 4 + (!isBuffer ? numberOfBytes(value.toString()) : Buffer.byteLength(value.toString(), 'utf8')) + 1;\n        }\n      }\n  }\n\n  return 0;\n}",
   "ctx": {
    "type": "function",
    "name": "calculateElement",
    "string": "calculateElement()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to serialize."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "checkKeys",
     "description": "the serializer will check if keys are valid."
    },
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "buffer",
     "description": "the Buffer you pre-allocated to store the serialized BSON object."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "index",
     "description": "the index in the buffer where we wish to start serializing into."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "serializeFunctions",
     "description": "serialize the javascript functions **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the new write index in the Buffer."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.</p>",
    "summary": "<p>Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.serializeWithBufferAndIndex = function serializeWithBufferAndIndex(object, checkKeys, buffer, index, serializeFunctions) {\n  // Default setting false\n  serializeFunctions = serializeFunctions == null ? false : serializeFunctions;\n  // Write end information (length of the object)\n  var size = buffer.length;\n  // Write the size of the object\n  buffer[index++] = size & 0xff;\n  buffer[index++] = (size >> 8) & 0xff;\n  buffer[index++] = (size >> 16) & 0xff;\n  buffer[index++] = (size >> 24) & 0xff;\n  return serializeObject(object, checkKeys, buffer, index, serializeFunctions) - 1;\n}",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "serializeWithBufferAndIndex",
    "string": "BSON.serializeWithBufferAndIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var serializeObject = function(object, checkKeys, buffer, index, serializeFunctions) {\n  if(object.toBSON) {\n    if(typeof object.toBSON != 'function') throw new Error(\"toBSON is not a function\");\n    object = object.toBSON();\n    if(object != null && typeof object != 'object') throw new Error(\"toBSON function did not return an object\");\n  }\n\n  // Process the object\n  if(Array.isArray(object)) {\n    for(var i = 0; i < object.length; i++) {\n      index = packElement(i.toString(), object[i], checkKeys, buffer, index, serializeFunctions);\n    }\n  } else {\n\t\t// If we have toBSON defined, override the current object\n\t\tif(object.toBSON) {\n\t\t\tobject = object.toBSON();\n\t\t}\n\n\t\t// Serialize the object\n    for(var key in object) {\n      // Check the key and throw error if it's illegal\n      if (key != '$db' && key != '$ref' && key != '$id') {\n        // dollars and dots ok\n        BSON.checkKey(key, !checkKeys);\n      }\n\n      // Pack the element\n      index = packElement(key, object[key], checkKeys, buffer, index, serializeFunctions);\n    }\n  }\n\n  // Write zero\n  buffer[index++] = 0;\n  return index;\n}\n\nvar stringToBytes = function(str) {\n  var ch, st, re = [];\n  for (var i = 0; i < str.length; i++ ) {\n    ch = str.charCodeAt(i);  // get char\n    st = [];                 // set up \"stack\"\n    do {\n      st.push( ch & 0xFF );  // push byte to stack\n      ch = ch >> 8;          // shift value down by 1 byte\n    }\n    while ( ch );\n    // add stack contents to result\n    // done because chars have \"wrong\" endianness\n    re = re.concat( st.reverse() );\n  }\n  // return an array of bytes\n  return re;\n}\n\nvar numberOfBytes = function(str) {\n  var ch, st, re = 0;\n  for (var i = 0; i < str.length; i++ ) {\n    ch = str.charCodeAt(i);  // get char\n    st = [];                 // set up \"stack\"\n    do {\n      st.push( ch & 0xFF );  // push byte to stack\n      ch = ch >> 8;          // shift value down by 1 byte\n    }\n    while ( ch );\n    // add stack contents to result\n    // done because chars have \"wrong\" endianness\n    re = re + st.length;\n  }\n  // return an array of bytes\n  return re;\n}",
   "ctx": {
    "type": "function",
    "name": "serializeObject",
    "string": "serializeObject()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var writeToTypedArray = function(buffer, string, index) {\n  var bytes = stringToBytes(string);\n  for(var i = 0; i < bytes.length; i++) {\n    buffer[index + i] = bytes[i];\n  }\n  return bytes.length;\n}",
   "ctx": {
    "type": "function",
    "name": "writeToTypedArray",
    "string": "writeToTypedArray()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var supportsBuffer = typeof Buffer != 'undefined';",
   "ctx": {
    "type": "declaration",
    "name": "supportsBuffer",
    "value": "typeof Buffer != 'undefined'",
    "string": "supportsBuffer"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var packElement = function(name, value, checkKeys, buffer, index, serializeFunctions) {\n\t\n  // If we have toBSON defined, override the current object\n  if(value && value.toBSON){\n        value = value.toBSON();\n  }\n  \n  var startIndex = index;\n\n  switch(typeof value) {\n    case 'string':\n      // console.log(\"+++++++++++ index string:: \" + index)\n      // Encode String type\n      buffer[index++] = BSON.BSON_DATA_STRING;\n      // Number of written bytes\n      var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n      // Encode the name\n      index = index + numberOfWrittenBytes + 1;\n      buffer[index - 1] = 0;\n\n      // Calculate size\n      var size = supportsBuffer ? Buffer.byteLength(value) + 1 : numberOfBytes(value) + 1;\n      // console.log(\"====== key :: \" + name + \" size ::\" + size)\n      // Write the size of the string to buffer\n      buffer[index + 3] = (size >> 24) & 0xff;\n      buffer[index + 2] = (size >> 16) & 0xff;\n      buffer[index + 1] = (size >> 8) & 0xff;\n      buffer[index] = size & 0xff;\n      // Ajust the index\n      index = index + 4;\n      // Write the string\n      supportsBuffer ? buffer.write(value, index, 'utf8') : writeToTypedArray(buffer, value, index);\n      // Update index\n      index = index + size - 1;\n      // Write zero\n      buffer[index++] = 0;\n      // Return index\n      return index;\n    case 'number':\n      // We have an integer value\n      if(Math.floor(value) === value && value >= BSON.JS_INT_MIN && value <= BSON.JS_INT_MAX) {\n        // If the value fits in 32 bits encode as int, if it fits in a double\n        // encode it as a double, otherwise long\n        if(value >= BSON.BSON_INT32_MIN && value <= BSON.BSON_INT32_MAX) {\n          // Set int type 32 bits or less\n          buffer[index++] = BSON.BSON_DATA_INT;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Write the int value\n          buffer[index++] = value & 0xff;\n          buffer[index++] = (value >> 8) & 0xff;\n          buffer[index++] = (value >> 16) & 0xff;\n          buffer[index++] = (value >> 24) & 0xff;\n        } else if(value >= BSON.JS_INT_MIN && value <= BSON.JS_INT_MAX) {\n          // Encode as double\n          buffer[index++] = BSON.BSON_DATA_NUMBER;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Write float\n          writeIEEE754(buffer, value, index, 'little', 52, 8);\n          // Ajust index\n          index = index + 8;\n        } else {\n          // Set long type\n          buffer[index++] = BSON.BSON_DATA_LONG;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          var longVal = Long.fromNumber(value);\n          var lowBits = longVal.getLowBits();\n          var highBits = longVal.getHighBits();\n          // Encode low bits\n          buffer[index++] = lowBits & 0xff;\n          buffer[index++] = (lowBits >> 8) & 0xff;\n          buffer[index++] = (lowBits >> 16) & 0xff;\n          buffer[index++] = (lowBits >> 24) & 0xff;\n          // Encode high bits\n          buffer[index++] = highBits & 0xff;\n          buffer[index++] = (highBits >> 8) & 0xff;\n          buffer[index++] = (highBits >> 16) & 0xff;\n          buffer[index++] = (highBits >> 24) & 0xff;\n        }\n      } else {\n        // Encode as double\n        buffer[index++] = BSON.BSON_DATA_NUMBER;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Write float\n        writeIEEE754(buffer, value, index, 'little', 52, 8);\n        // Ajust index\n        index = index + 8;\n      }\n\n      return index;\n    case 'undefined':\n      // Set long type\n      buffer[index++] = BSON.BSON_DATA_NULL;\n      // Number of written bytes\n      var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n      // Encode the name\n      index = index + numberOfWrittenBytes + 1;\n      buffer[index - 1] = 0;\n      return index;\n    case 'boolean':\n      // Write the type\n      buffer[index++] = BSON.BSON_DATA_BOOLEAN;\n      // Number of written bytes\n      var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n      // Encode the name\n      index = index + numberOfWrittenBytes + 1;\n      buffer[index - 1] = 0;\n      // Encode the boolean value\n      buffer[index++] = value ? 1 : 0;\n      return index;\n    case 'object':\n      if(value === null || value instanceof MinKey || value instanceof MaxKey\n          || value['_bsontype'] == 'MinKey' || value['_bsontype'] == 'MaxKey') {\n        // Write the type of either min or max key\n        if(value === null) {\n          buffer[index++] = BSON.BSON_DATA_NULL;\n        } else if(value instanceof MinKey) {\n          buffer[index++] = BSON.BSON_DATA_MIN_KEY;\n        } else {\n          buffer[index++] = BSON.BSON_DATA_MAX_KEY;\n        }\n\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        return index;\n      } else if(value instanceof ObjectID || value['_bsontype'] == 'ObjectID') {\n        // console.log(\"+++++++++++ index OBJECTID:: \" + index)\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_OID;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n\n        // Write objectid\n        supportsBuffer ? buffer.write(value.id, index, 'binary') : writeToTypedArray(buffer, value.id, index);\n        // Ajust index\n        index = index + 12;\n        return index;\n      } else if(value instanceof Date || isDate(value)) {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_DATE;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n\n        // Write the date\n        var dateInMilis = Long.fromNumber(value.getTime());\n        var lowBits = dateInMilis.getLowBits();\n        var highBits = dateInMilis.getHighBits();\n        // Encode low bits\n        buffer[index++] = lowBits & 0xff;\n        buffer[index++] = (lowBits >> 8) & 0xff;\n        buffer[index++] = (lowBits >> 16) & 0xff;\n        buffer[index++] = (lowBits >> 24) & 0xff;\n        // Encode high bits\n        buffer[index++] = highBits & 0xff;\n        buffer[index++] = (highBits >> 8) & 0xff;\n        buffer[index++] = (highBits >> 16) & 0xff;\n        buffer[index++] = (highBits >> 24) & 0xff;\n        return index;\n      } else if(typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_BINARY;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Get size of the buffer (current write point)\n        var size = value.length;\n        // Write the size of the string to buffer\n        buffer[index++] = size & 0xff;\n        buffer[index++] = (size >> 8) & 0xff;\n        buffer[index++] = (size >> 16) & 0xff;\n        buffer[index++] = (size >> 24) & 0xff;\n        // Write the default subtype\n        buffer[index++] = BSON.BSON_BINARY_SUBTYPE_DEFAULT;\n        // Copy the content form the binary field to the buffer\n        value.copy(buffer, index, 0, size);\n        // Adjust the index\n        index = index + size;\n        return index;\n      } else if(value instanceof Long || value instanceof Timestamp || value['_bsontype'] == 'Long' || value['_bsontype'] == 'Timestamp') {\n        // Write the type\n        buffer[index++] = value instanceof Long || value['_bsontype'] == 'Long' ? BSON.BSON_DATA_LONG : BSON.BSON_DATA_TIMESTAMP;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Write the date\n        var lowBits = value.getLowBits();\n        var highBits = value.getHighBits();\n        // Encode low bits\n        buffer[index++] = lowBits & 0xff;\n        buffer[index++] = (lowBits >> 8) & 0xff;\n        buffer[index++] = (lowBits >> 16) & 0xff;\n        buffer[index++] = (lowBits >> 24) & 0xff;\n        // Encode high bits\n        buffer[index++] = highBits & 0xff;\n        buffer[index++] = (highBits >> 8) & 0xff;\n        buffer[index++] = (highBits >> 16) & 0xff;\n        buffer[index++] = (highBits >> 24) & 0xff;\n        return index;\n      } else if(value instanceof Double || value['_bsontype'] == 'Double') {\n        // Encode as double\n        buffer[index++] = BSON.BSON_DATA_NUMBER;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Write float\n        writeIEEE754(buffer, value, index, 'little', 52, 8);\n        // Ajust index\n        index = index + 8;\n        return index;\n      } else if(value instanceof Code || value['_bsontype'] == 'Code') {\n        if(value.scope != null && Object.keys(value.scope).length > 0) {\n          // Write the type\n          buffer[index++] = BSON.BSON_DATA_CODE_W_SCOPE;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Calculate the scope size\n          var scopeSize = BSON.calculateObjectSize(value.scope, serializeFunctions);\n          // Function string\n          var functionString = value.code.toString();\n          // Function Size\n          var codeSize = supportsBuffer ? Buffer.byteLength(functionString) + 1 : numberOfBytes(functionString) + 1;\n\n          // Calculate full size of the object\n          var totalSize = 4 + codeSize + scopeSize + 4;\n\n          // Write the total size of the object\n          buffer[index++] = totalSize & 0xff;\n          buffer[index++] = (totalSize >> 8) & 0xff;\n          buffer[index++] = (totalSize >> 16) & 0xff;\n          buffer[index++] = (totalSize >> 24) & 0xff;\n\n          // Write the size of the string to buffer\n          buffer[index++] = codeSize & 0xff;\n          buffer[index++] = (codeSize >> 8) & 0xff;\n          buffer[index++] = (codeSize >> 16) & 0xff;\n          buffer[index++] = (codeSize >> 24) & 0xff;\n\n          // Write the string\n          supportsBuffer ? buffer.write(functionString, index, 'utf8') : writeToTypedArray(buffer, functionString, index);\n          // Update index\n          index = index + codeSize - 1;\n          // Write zero\n          buffer[index++] = 0;\n          // Serialize the scope object\n          var scopeObjectBuffer = supportsBuffer ? new Buffer(scopeSize) : new Uint8Array(new ArrayBuffer(scopeSize));\n          // Execute the serialization into a seperate buffer\n          serializeObject(value.scope, checkKeys, scopeObjectBuffer, 0, serializeFunctions);\n\n          // Adjusted scope Size (removing the header)\n          var scopeDocSize = scopeSize;\n          // Write scope object size\n          buffer[index++] = scopeDocSize & 0xff;\n          buffer[index++] = (scopeDocSize >> 8) & 0xff;\n          buffer[index++] = (scopeDocSize >> 16) & 0xff;\n          buffer[index++] = (scopeDocSize >> 24) & 0xff;\n\n          // Write the scopeObject into the buffer\n          supportsBuffer ? scopeObjectBuffer.copy(buffer, index, 0, scopeSize) : buffer.set(scopeObjectBuffer, index);\n          // Adjust index, removing the empty size of the doc (5 bytes 0000000005)\n          index = index + scopeDocSize - 5;\n          // Write trailing zero\n          buffer[index++] = 0;\n          return index\n        } else {\n          buffer[index++] = BSON.BSON_DATA_CODE;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Function string\n          var functionString = value.code.toString();\n          // Function Size\n          var size = supportsBuffer ? Buffer.byteLength(functionString) + 1 : numberOfBytes(functionString) + 1;\n          // Write the size of the string to buffer\n          buffer[index++] = size & 0xff;\n          buffer[index++] = (size >> 8) & 0xff;\n          buffer[index++] = (size >> 16) & 0xff;\n          buffer[index++] = (size >> 24) & 0xff;\n          // Write the string\n          supportsBuffer ? buffer.write(functionString, index, 'utf8') : writeToTypedArray(buffer, functionString, index);\n          // Update index\n          index = index + size - 1;\n          // Write zero\n          buffer[index++] = 0;\n          return index;\n        }\n      } else if(value instanceof Binary || value['_bsontype'] == 'Binary') {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_BINARY;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Extract the buffer\n        var data = value.value(true);\n        // Calculate size\n        var size = value.position;\n        // Write the size of the string to buffer\n        buffer[index++] = size & 0xff;\n        buffer[index++] = (size >> 8) & 0xff;\n        buffer[index++] = (size >> 16) & 0xff;\n        buffer[index++] = (size >> 24) & 0xff;\n        // Write the subtype to the buffer\n        buffer[index++] = value.sub_type;\n\n        // If we have binary type 2 the 4 first bytes are the size\n        if(value.sub_type == Binary.SUBTYPE_BYTE_ARRAY) {\n          buffer[index++] = size & 0xff;\n          buffer[index++] = (size >> 8) & 0xff;\n          buffer[index++] = (size >> 16) & 0xff;\n          buffer[index++] = (size >> 24) & 0xff;\n        }\n\n        // Write the data to the object\n        supportsBuffer ? data.copy(buffer, index, 0, value.position) : buffer.set(data, index);\n        // Ajust index\n        index = index + value.position;\n        return index;\n      } else if(value instanceof Symbol || value['_bsontype'] == 'Symbol') {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_SYMBOL;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Calculate size\n        var size = supportsBuffer ? Buffer.byteLength(value.value) + 1 : numberOfBytes(value.value) + 1;\n        // Write the size of the string to buffer\n        buffer[index++] = size & 0xff;\n        buffer[index++] = (size >> 8) & 0xff;\n        buffer[index++] = (size >> 16) & 0xff;\n        buffer[index++] = (size >> 24) & 0xff;\n        // Write the string\n        buffer.write(value.value, index, 'utf8');\n        // Update index\n        index = index + size - 1;\n        // Write zero\n        buffer[index++] = 0x00;\n        return index;\n      } else if(value instanceof DBRef || value['_bsontype'] == 'DBRef') {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_OBJECT;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n        // Set up correct object for serialization\n        var ordered_values = {\n            '$ref': value.namespace\n          , '$id' : value.oid\n        };\n\n        // Add db reference if it exists\n        if(null != value.db) {\n          ordered_values['$db'] = value.db;\n        }\n\n        // Message size\n        var size = BSON.calculateObjectSize(ordered_values, serializeFunctions);\n        // Serialize the object\n        var endIndex = BSON.serializeWithBufferAndIndex(ordered_values, checkKeys, buffer, index, serializeFunctions);\n        // Write the size of the string to buffer\n        buffer[index++] = size & 0xff;\n        buffer[index++] = (size >> 8) & 0xff;\n        buffer[index++] = (size >> 16) & 0xff;\n        buffer[index++] = (size >> 24) & 0xff;\n        // Write zero for object\n        buffer[endIndex++] = 0x00;\n        // Return the end index\n        return endIndex;\n      } else if(value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_REGEXP;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n\n        // Write the regular expression string\n        supportsBuffer ? buffer.write(value.source, index, 'utf8') : writeToTypedArray(buffer, value.source, index);\n        // Adjust the index\n        index = index + (supportsBuffer ? Buffer.byteLength(value.source) : numberOfBytes(value.source));\n        // Write zero\n        buffer[index++] = 0x00;\n        // Write the parameters\n        if(value.global) buffer[index++] = 0x73; // s\n        if(value.ignoreCase) buffer[index++] = 0x69; // i\n        if(value.multiline) buffer[index++] = 0x6d; // m\n        // Add ending zero\n        buffer[index++] = 0x00;\n        return index;\n      } else {\n        // Write the type\n        buffer[index++] = Array.isArray(value) ? BSON.BSON_DATA_ARRAY : BSON.BSON_DATA_OBJECT;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Adjust the index\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n\t      var endIndex = serializeObject(value, checkKeys, buffer, index + 4, serializeFunctions);\n        // Write size\n        var size = endIndex - index;\n        // Write the size of the string to buffer\n        buffer[index++] = size & 0xff;\n        buffer[index++] = (size >> 8) & 0xff;\n        buffer[index++] = (size >> 16) & 0xff;\n        buffer[index++] = (size >> 24) & 0xff;\n        return endIndex;\n      }\n    case 'function':\n      // WTF for 0.4.X where typeof /someregexp/ === 'function'\n      if(value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) == '[object RegExp]') {\n        // Write the type\n        buffer[index++] = BSON.BSON_DATA_REGEXP;\n        // Number of written bytes\n        var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n        // Encode the name\n        index = index + numberOfWrittenBytes + 1;\n        buffer[index - 1] = 0;\n\n        // Write the regular expression string\n        buffer.write(value.source, index, 'utf8');\n        // Adjust the index\n        index = index + (supportsBuffer ? Buffer.byteLength(value.source) : numberOfBytes(value.source));\n        // Write zero\n        buffer[index++] = 0x00;\n        // Write the parameters\n        if(value.global) buffer[index++] = 0x73; // s\n        if(value.ignoreCase) buffer[index++] = 0x69; // i\n        if(value.multiline) buffer[index++] = 0x6d; // m\n        // Add ending zero\n        buffer[index++] = 0x00;\n        return index;\n      } else {\n        if(serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {\n          // Write the type\n          buffer[index++] = BSON.BSON_DATA_CODE_W_SCOPE;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Calculate the scope size\n          var scopeSize = BSON.calculateObjectSize(value.scope, serializeFunctions);\n          // Function string\n          var functionString = value.toString();\n          // Function Size\n          var codeSize = supportsBuffer ? Buffer.byteLength(functionString) + 1 : numberOfBytes(functionString) + 1;\n\n          // Calculate full size of the object\n          var totalSize = 4 + codeSize + scopeSize;\n\n          // Write the total size of the object\n          buffer[index++] = totalSize & 0xff;\n          buffer[index++] = (totalSize >> 8) & 0xff;\n          buffer[index++] = (totalSize >> 16) & 0xff;\n          buffer[index++] = (totalSize >> 24) & 0xff;\n\n          // Write the size of the string to buffer\n          buffer[index++] = codeSize & 0xff;\n          buffer[index++] = (codeSize >> 8) & 0xff;\n          buffer[index++] = (codeSize >> 16) & 0xff;\n          buffer[index++] = (codeSize >> 24) & 0xff;\n\n          // Write the string\n          supportsBuffer ? buffer.write(functionString, index, 'utf8') : writeToTypedArray(buffer, functionString, index);\n          // Update index\n          index = index + codeSize - 1;\n          // Write zero\n          buffer[index++] = 0;\n          // Serialize the scope object\n          var scopeObjectBuffer = new Buffer(scopeSize);\n          // Execute the serialization into a seperate buffer\n          serializeObject(value.scope, checkKeys, scopeObjectBuffer, 0, serializeFunctions);\n\n          // Adjusted scope Size (removing the header)\n          var scopeDocSize = scopeSize - 4;\n          // Write scope object size\n          buffer[index++] = scopeDocSize & 0xff;\n          buffer[index++] = (scopeDocSize >> 8) & 0xff;\n          buffer[index++] = (scopeDocSize >> 16) & 0xff;\n          buffer[index++] = (scopeDocSize >> 24) & 0xff;\n\n          // Write the scopeObject into the buffer\n          scopeObjectBuffer.copy(buffer, index, 0, scopeSize);\n\n          // Adjust index, removing the empty size of the doc (5 bytes 0000000005)\n          index = index + scopeDocSize - 5;\n          // Write trailing zero\n          buffer[index++] = 0;\n          return index\n        } else if(serializeFunctions) {\n          buffer[index++] = BSON.BSON_DATA_CODE;\n          // Number of written bytes\n          var numberOfWrittenBytes = supportsBuffer ? buffer.write(name, index, 'utf8') : writeToTypedArray(buffer, name, index);\n          // Encode the name\n          index = index + numberOfWrittenBytes + 1;\n          buffer[index - 1] = 0;\n          // Function string\n          var functionString = value.toString();\n          // Function Size\n          var size = supportsBuffer ? Buffer.byteLength(functionString) + 1 : numberOfBytes(functionString) + 1;\n          // Write the size of the string to buffer\n          buffer[index++] = size & 0xff;\n          buffer[index++] = (size >> 8) & 0xff;\n          buffer[index++] = (size >> 16) & 0xff;\n          buffer[index++] = (size >> 24) & 0xff;\n          // Write the string\n          supportsBuffer ? buffer.write(functionString, index, 'utf8') : writeToTypedArray(buffer, functionString, index);\n          // Update index\n          index = index + size - 1;\n          // Write zero\n          buffer[index++] = 0;\n          return index;\n        }\n      }\n  }\n\n  // If no value to serialize\n  return index;\n}",
   "ctx": {
    "type": "function",
    "name": "packElement",
    "string": "packElement()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to serialize."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "checkKeys",
     "description": "the serializer will check if keys are valid."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "asBuffer",
     "description": "return the serialized object as a Buffer object **(ignore)**."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "serializeFunctions",
     "description": "serialize the javascript functions **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Buffer"
     ],
     "description": "returns the Buffer object containing the serialized object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Serialize a Javascript object.</p>",
    "summary": "<p>Serialize a Javascript object.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.serialize = function(object, checkKeys, asBuffer, serializeFunctions) {\n  // Throw error if we are trying serialize an illegal type\n  if(object == null || typeof object != 'object' || Array.isArray(object)) \n    throw new Error(\"Only javascript objects supported\");\n  \n  // Emoty target buffer\n  var buffer = null;\n  // Calculate the size of the object\n  var size = BSON.calculateObjectSize(object, serializeFunctions);\n  // Fetch the best available type for storing the binary data\n  if(buffer = typeof Buffer != 'undefined') {\n    buffer = new Buffer(size);\n    asBuffer = true;\n  } else if(typeof Uint8Array != 'undefined') {\n    buffer = new Uint8Array(new ArrayBuffer(size));\n  } else {\n    buffer = new Array(size);\n  }\n\n  // If asBuffer is false use typed arrays\n  BSON.serializeWithBufferAndIndex(object, checkKeys, buffer, 0, serializeFunctions);\n  // console.log(\"++++++++++++++++++++++++++++++++++++ OLDJS :: \" + buffer.length)  \n  // console.log(buffer.toString('hex'))\n  // console.log(buffer.toString('ascii'))\n  return buffer;\n}",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "serialize",
    "string": "BSON.serialize()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Contains the function cache if we have that enable to allow for avoiding the eval step on each deserialization, comparison is by md5</p>",
    "summary": "<p>Contains the function cache if we have that enable to allow for avoiding the eval step on each deserialization, comparison is by md5</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var functionCache = BSON.functionCache = {};",
   "ctx": {
    "type": "declaration",
    "name": "functionCache",
    "value": "BSON.functionCache = {}",
    "string": "functionCache"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Crc state variables shared by function</p>",
    "summary": "<p>Crc state variables shared by function</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];",
   "ctx": {
    "type": "declaration",
    "name": "table",
    "value": "[0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D]",
    "string": "table"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>CRC32 hash method, Fast and enough versitility for our usage</p>",
    "summary": "<p>CRC32 hash method, Fast and enough versitility for our usage</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var crc32 =  function(string, start, end) {\n  var crc = 0\n  var x = 0;\n  var y = 0;\n  crc = crc ^ (-1);\n\n  for(var i = start, iTop = end; i < iTop;i++) {\n  \ty = (crc ^ string[i]) & 0xFF;\n    x = table[y];\n  \tcrc = (crc >>> 8) ^ x;\n  }\n\n  return crc ^ (-1);\n}",
   "ctx": {
    "type": "function",
    "name": "crc32",
    "string": "crc32()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "data",
     "description": "the buffer containing the serialized set of BSON documents."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "startIndex",
     "description": "the start index in the data Buffer where the deserialization is to start."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numberOfDocuments",
     "description": "number of documents to deserialize."
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "documents",
     "description": "an array where to store the deserialized documents."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "docStartIndex",
     "description": "the index in the documents array from where to start inserting documents."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options used for the deserialization."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the next index in the buffer after deserialization **x** numbers of documents."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deserialize stream data as BSON documents.</p>\n\n<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits</p>",
    "summary": "<p>Deserialize stream data as BSON documents.</p>",
    "body": "<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.deserializeStream = function(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {\n  // if(numberOfDocuments !== documents.length) throw new Error(\"Number of expected results back is less than the number of documents\");\n  options = options != null ? options : {};\n  var index = startIndex;\n  // Loop over all documents\n  for(var i = 0; i < numberOfDocuments; i++) {\n    // Find size of the document\n    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24;\n    // Update options with index\n    options['index'] = index;\n    // Parse the document at this point\n    documents[docStartIndex + i] = BSON.deserialize(data, options);\n    // Adjust index by the document size\n    index = index + size;\n  }\n\n  // Return object containing end index of parsing and list of documents\n  return index;\n}",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "deserializeStream",
    "string": "BSON.deserializeStream()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Ensure eval is isolated.</p>",
    "summary": "<p>Ensure eval is isolated.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var isolateEvalWithHash = function(functionCache, hash, functionString, object) {\n  // Contains the value we are going to set\n  var value = null;\n\n  // Check for cache hit, eval if missing and return cached function\n  if(functionCache[hash] == null) {\n    eval(\"value = \" + functionString);\n    functionCache[hash] = value;\n  }\n  // Set the object\n  return functionCache[hash].bind(object);\n}",
   "ctx": {
    "type": "function",
    "name": "isolateEvalWithHash",
    "string": "isolateEvalWithHash()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Ensure eval is isolated.</p>",
    "summary": "<p>Ensure eval is isolated.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var isolateEval = function(functionString) {\n  // Contains the value we are going to set\n  var value = null;\n  // Eval the function\n  eval(\"value = \" + functionString);\n  return value;\n}",
   "ctx": {
    "type": "function",
    "name": "isolateEval",
    "string": "isolateEval()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Convert Uint8Array to String</p>",
    "summary": "<p>Convert Uint8Array to String</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "var convertUint8ArrayToUtf8String = function(byteArray, startIndex, endIndex) {\n  return BinaryParser.decode_utf8(convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex));\n}\n\nvar convertArraytoUtf8BinaryString = function(byteArray, startIndex, endIndex) {\n  var result = \"\";\n  for(var i = startIndex; i < endIndex; i++) {\n    result = result + String.fromCharCode(byteArray[i]);\n  }\n\n  return result;\n};",
   "ctx": {
    "type": "function",
    "name": "convertUint8ArrayToUtf8String",
    "string": "convertUint8ArrayToUtf8String()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "buffer",
     "description": "the buffer containing the serialized set of BSON documents."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options used for the deserialization."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[isArray]",
     "description": "ignore used for recursive parsing."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "returns the deserialized Javascript Object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deserialize data as BSON.</p>\n\n<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits</p>",
    "summary": "<p>Deserialize data as BSON.</p>",
    "body": "<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.<br /> - <strong>promoteLongs</strong> {Boolean, default:true}, when deserializing a Long will fit it into a Number if it's smaller than 53 bits</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.deserialize = function(buffer, options, isArray) {\n  // Options\n  options = options == null ? {} : options;\n  var evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];\n  var cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];\n  var cacheFunctionsCrc32 = options['cacheFunctionsCrc32'] == null ? false : options['cacheFunctionsCrc32'];\n  var promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];\n\n  // Validate that we have at least 4 bytes of buffer\n  if(buffer.length < 5) throw new Error(\"corrupt bson message < 5 bytes long\");\n\n  // Set up index\n  var index = typeof options['index'] == 'number' ? options['index'] : 0;\n  // Reads in a C style string\n  var readCStyleString = function() {\n    // Get the start search index\n    var i = index;\n    // Locate the end of the c string\n    while(buffer[i] !== 0x00 && i < buffer.length) { \n      i++ \n    }\n    // If are at the end of the buffer there is a problem with the document\n    if(i >= buffer.length) throw new Error(\"Bad BSON Document: illegal CString\")\n    // Grab utf8 encoded string\n    var string = supportsBuffer && Buffer.isBuffer(buffer) ? buffer.toString('utf8', index, i) : convertUint8ArrayToUtf8String(buffer, index, i);\n    // Update index position\n    index = i + 1;\n    // Return string\n    return string;\n  }\n\n  // Create holding object\n  var object = isArray ? [] : {};\n\n  // Read the document size\n  var size = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n\n  // Ensure buffer is valid size\n  if(size < 5 || size > buffer.length) throw new Error(\"corrupt bson message\");\n\n  // While we have more left data left keep parsing\n  while(true) {\n    // Read the type\n    var elementType = buffer[index++];\n    // If we get a zero it's the last byte, exit\n    if(elementType == 0) break;\n    // Read the name of the field\n    var name = readCStyleString();\n    // Switch on the type\n    switch(elementType) {\n      case BSON.BSON_DATA_OID:\n        var string = supportsBuffer && Buffer.isBuffer(buffer) ? buffer.toString('binary', index, index + 12) : convertArraytoUtf8BinaryString(buffer, index, index + 12);\n        // Decode the oid\n        object[name] = new ObjectID(string);\n        // Update index\n        index = index + 12;\n        break;\n      case BSON.BSON_DATA_STRING:\n        // Read the content of the field\n        var stringSize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Add string to object\n        object[name] = supportsBuffer && Buffer.isBuffer(buffer) ? buffer.toString('utf8', index, index + stringSize - 1) : convertUint8ArrayToUtf8String(buffer, index, index + stringSize - 1);\n        // Update parse index position\n        index = index + stringSize;\n        break;\n      case BSON.BSON_DATA_INT:\n        // Decode the 32bit value\n        object[name] = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        break;\n      case BSON.BSON_DATA_NUMBER:\n        // Decode the double value\n        object[name] = readIEEE754(buffer, index, 'little', 52, 8);\n        // Update the index\n        index = index + 8;\n        break;\n      case BSON.BSON_DATA_DATE:\n        // Unpack the low and high bits\n        var lowBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        var highBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Set date object\n        object[name] = new Date(new Long(lowBits, highBits).toNumber());\n        break;\n      case BSON.BSON_DATA_BOOLEAN:\n        // Parse the boolean value\n        object[name] = buffer[index++] == 1;\n        break;\n      case BSON.BSON_DATA_UNDEFINED:\n      case BSON.BSON_DATA_NULL:\n        // Parse the boolean value\n        object[name] = null;\n        break;\n      case BSON.BSON_DATA_BINARY:\n        // Decode the size of the binary blob\n        var binarySize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Decode the subtype\n        var subType = buffer[index++];\n        // Decode as raw Buffer object if options specifies it\n        if(buffer['slice'] != null) {\n          // If we have subtype 2 skip the 4 bytes for the size\n          if(subType == Binary.SUBTYPE_BYTE_ARRAY) {\n            binarySize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n          }\n          // Slice the data\n          object[name] = new Binary(buffer.slice(index, index + binarySize), subType);\n        } else {\n          var _buffer = typeof Uint8Array != 'undefined' ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize);\n          // If we have subtype 2 skip the 4 bytes for the size\n          if(subType == Binary.SUBTYPE_BYTE_ARRAY) {\n            binarySize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n          }\n          // Copy the data\n          for(var i = 0; i < binarySize; i++) {\n            _buffer[i] = buffer[index + i];\n          }\n          // Create the binary object\n          object[name] = new Binary(_buffer, subType);\n        }\n        // Update the index\n        index = index + binarySize;\n        break;\n      case BSON.BSON_DATA_ARRAY:\n        options['index'] = index;\n        // Decode the size of the array document\n        var objectSize = buffer[index] | buffer[index + 1] << 8 | buffer[index + 2] << 16 | buffer[index + 3] << 24;\n        // Set the array to the object\n        object[name] = BSON.deserialize(buffer, options, true);\n        // Adjust the index\n        index = index + objectSize;\n        break;\n      case BSON.BSON_DATA_OBJECT:\n        options['index'] = index;\n        // Decode the size of the object document\n        var objectSize = buffer[index] | buffer[index + 1] << 8 | buffer[index + 2] << 16 | buffer[index + 3] << 24;\n        // Set the array to the object\n        object[name] = BSON.deserialize(buffer, options, false);\n        // Adjust the index\n        index = index + objectSize;\n        break;\n      case BSON.BSON_DATA_REGEXP:\n        // Create the regexp\n        var source = readCStyleString();\n        var regExpOptions = readCStyleString();\n        // For each option add the corresponding one for javascript\n        var optionsArray = new Array(regExpOptions.length);\n\n        // Parse options\n        for(var i = 0; i < regExpOptions.length; i++) {\n          switch(regExpOptions[i]) {\n            case 'm':\n              optionsArray[i] = 'm';\n              break;\n            case 's':\n              optionsArray[i] = 'g';\n              break;\n            case 'i':\n              optionsArray[i] = 'i';\n              break;\n          }\n        }\n\n        object[name] = new RegExp(source, optionsArray.join(''));\n        break;\n      case BSON.BSON_DATA_LONG:\n        // Unpack the low and high bits\n        var lowBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        var highBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Create long object\n        var long = new Long(lowBits, highBits); \n        // Promote the long if possible\n        if(promoteLongs) {\n          object[name] = long.lessThanOrEqual(JS_INT_MAX_LONG) && long.greaterThanOrEqual(JS_INT_MIN_LONG) ? long.toNumber() : long;\n        } else {\n          object[name] = long;\n        }\n        break;\n      case BSON.BSON_DATA_SYMBOL:\n        // Read the content of the field\n        var stringSize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Add string to object\n        object[name] = new Symbol(buffer.toString('utf8', index, index + stringSize - 1));\n        // Update parse index position\n        index = index + stringSize;\n        break;\n      case BSON.BSON_DATA_TIMESTAMP:\n        // Unpack the low and high bits\n        var lowBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        var highBits = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Set the object\n        object[name] = new Timestamp(lowBits, highBits);\n        break;\n      case BSON.BSON_DATA_MIN_KEY:\n        // Parse the object\n        object[name] = new MinKey();\n        break;\n      case BSON.BSON_DATA_MAX_KEY:\n        // Parse the object\n        object[name] = new MaxKey();\n        break;\n      case BSON.BSON_DATA_CODE:\n        // Read the content of the field\n        var stringSize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Function string\n        var functionString = supportsBuffer && Buffer.isBuffer(buffer) ? buffer.toString('utf8', index, index + stringSize - 1) : convertUint8ArrayToUtf8String(buffer, index, index + stringSize - 1);\n\n        // If we are evaluating the functions\n        if(evalFunctions) {\n          // Contains the value we are going to set\n          var value = null;\n          // If we have cache enabled let's look for the md5 of the function in the cache\n          if(cacheFunctions) {\n            var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString;\n            // Got to do this to avoid V8 deoptimizing the call due to finding eval\n            object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);\n          } else {\n            // Set directly\n            object[name] = isolateEval(functionString);\n          }\n        } else {\n          object[name]  = new Code(functionString, {});\n        }\n\n        // Update parse index position\n        index = index + stringSize;\n        break;\n      case BSON.BSON_DATA_CODE_W_SCOPE:\n        // Read the content of the field\n        var totalSize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        var stringSize = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;\n        // Javascript function\n        var functionString = supportsBuffer && Buffer.isBuffer(buffer) ? buffer.toString('utf8', index, index + stringSize - 1) : convertUint8ArrayToUtf8String(buffer, index, index + stringSize - 1);\n        // Update parse index position\n        index = index + stringSize;\n        // Parse the element\n        options['index'] = index;\n        // Decode the size of the object document\n        var objectSize = buffer[index] | buffer[index + 1] << 8 | buffer[index + 2] << 16 | buffer[index + 3] << 24;\n        // Decode the scope object\n        var scopeObject = BSON.deserialize(buffer, options, false);\n        // Adjust the index\n        index = index + objectSize;\n\n        // If we are evaluating the functions\n        if(evalFunctions) {\n          // Contains the value we are going to set\n          var value = null;\n          // If we have cache enabled let's look for the md5 of the function in the cache\n          if(cacheFunctions) {\n            var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString;\n            // Got to do this to avoid V8 deoptimizing the call due to finding eval\n            object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);\n          } else {\n            // Set directly\n            object[name] = isolateEval(functionString);\n          }\n\n          // Set the scope on the object\n          object[name].scope = scopeObject;\n        } else {\n          object[name]  = new Code(functionString, scopeObject);\n        }\n\n        // Add string to object\n        break;\n    }\n  }\n\n  // Check if we have a db ref object\n  if(object['$id'] != null) object = new DBRef(object['$ref'], object['$id'], object['$db']);\n\n  // Return the final objects\n  return object;\n}",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "deserialize",
    "string": "BSON.deserialize()"
   }
  },
  {
   "tags": [
    {
     "type": "ignore",
     "string": ""
    },
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>Check if key name is valid.</p>",
    "summary": "<p>Check if key name is valid.</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "BSON.checkKey = function checkKey (key, dollarsAndDotsOk) {\n  if (!key.length) return;\n  // Check if we have a legal key for the object\n  if (!!~key.indexOf(\"\\x00\")) {\n    // The BSON spec doesn't allow keys with null bytes because keys are\n    // null-terminated.\n    throw Error(\"key \" + key + \" must not contain null bytes\");\n  }\n  if (!dollarsAndDotsOk) {\n    if('$' == key[0]) {\n      throw Error(\"key \" + key + \" must not start with '$'\");\n    } else if (!!~key.indexOf('.')) {\n      throw Error(\"key \" + key + \" must not contain '.'\");\n    }\n  }\n};",
   "ctx": {
    "type": "method",
    "receiver": "BSON",
    "name": "checkKey",
    "string": "BSON.checkKey()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "buffer",
     "description": "the buffer containing the serialized set of BSON documents."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options used for the deserialization."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[isArray]",
     "description": "ignore used for recursive parsing."
    },
    {
     "type": "return",
     "types": [
      "Object"
     ],
     "description": "returns the deserialized Javascript Object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deserialize data as BSON.</p>\n\n<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.</p>",
    "summary": "<p>Deserialize data as BSON.</p>",
    "body": "<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.prototype.deserialize = function(data, options) {\n  return BSON.deserialize(data, options);\n}",
   "ctx": {
    "type": "method",
    "constructor": "BSON",
    "cons": "BSON",
    "name": "deserialize",
    "string": "BSON.prototype.deserialize()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "data",
     "description": "the buffer containing the serialized set of BSON documents."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "startIndex",
     "description": "the start index in the data Buffer where the deserialization is to start."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "numberOfDocuments",
     "description": "number of documents to deserialize."
    },
    {
     "type": "param",
     "types": [
      "Array"
     ],
     "name": "documents",
     "description": "an array where to store the deserialized documents."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "docStartIndex",
     "description": "the index in the documents array from where to start inserting documents."
    },
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "[options]",
     "description": "additional options used for the deserialization."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the next index in the buffer after deserialization **x** numbers of documents."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Deserialize stream data as BSON documents.</p>\n\n<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.</p>",
    "summary": "<p>Deserialize stream data as BSON documents.</p>",
    "body": "<p>Options<br /> - <strong>evalFunctions</strong> {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized.<br /> - <strong>cacheFunctions</strong> {Boolean, default:false}, cache evaluated functions for reuse.<br /> - <strong>cacheFunctionsCrc32</strong> {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function.</p>"
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.prototype.deserializeStream = function(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {\n  return BSON.deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options);\n}",
   "ctx": {
    "type": "method",
    "constructor": "BSON",
    "cons": "BSON",
    "name": "deserializeStream",
    "string": "BSON.prototype.deserializeStream()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to serialize."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "checkKeys",
     "description": "the serializer will check if keys are valid."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "asBuffer",
     "description": "return the serialized object as a Buffer object **(ignore)**."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "serializeFunctions",
     "description": "serialize the javascript functions **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Buffer"
     ],
     "description": "returns the Buffer object containing the serialized object."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Serialize a Javascript object.</p>",
    "summary": "<p>Serialize a Javascript object.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.prototype.serialize = function(object, checkKeys, asBuffer, serializeFunctions) {\n  return BSON.serialize(object, checkKeys, asBuffer, serializeFunctions);\n}",
   "ctx": {
    "type": "method",
    "constructor": "BSON",
    "cons": "BSON",
    "name": "serialize",
    "string": "BSON.prototype.serialize()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to calculate the BSON byte size for."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "[serializeFunctions]",
     "description": "serialize all functions in the object **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the number of bytes the BSON object will take up."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Calculate the bson size for a passed in Javascript object.</p>",
    "summary": "<p>Calculate the bson size for a passed in Javascript object.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.prototype.calculateObjectSize = function(object, serializeFunctions) {\n  return BSON.calculateObjectSize(object, serializeFunctions);\n}",
   "ctx": {
    "type": "method",
    "constructor": "BSON",
    "cons": "BSON",
    "name": "calculateObjectSize",
    "string": "BSON.prototype.calculateObjectSize()"
   }
  },
  {
   "tags": [
    {
     "type": "param",
     "types": [
      "Object"
     ],
     "name": "object",
     "description": "the Javascript object to serialize."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "checkKeys",
     "description": "the serializer will check if keys are valid."
    },
    {
     "type": "param",
     "types": [
      "Buffer"
     ],
     "name": "buffer",
     "description": "the Buffer you pre-allocated to store the serialized BSON object."
    },
    {
     "type": "param",
     "types": [
      "Number"
     ],
     "name": "index",
     "description": "the index in the buffer where we wish to start serializing into."
    },
    {
     "type": "param",
     "types": [
      "Boolean"
     ],
     "name": "serializeFunctions",
     "description": "serialize the javascript functions **(default:false)**."
    },
    {
     "type": "return",
     "types": [
      "Number"
     ],
     "description": "returns the new write index in the Buffer."
    },
    {
     "type": "api",
     "visibility": "public"
    }
   ],
   "description": {
    "full": "<p>Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.</p>",
    "summary": "<p>Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.</p>",
    "body": ""
   },
   "isPrivate": false,
   "ignore": false,
   "code": "BSON.prototype.serializeWithBufferAndIndex = function(object, checkKeys, buffer, startIndex, serializeFunctions) {\n  return BSON.serializeWithBufferAndIndex(object, checkKeys, buffer, startIndex, serializeFunctions);\n}",
   "ctx": {
    "type": "method",
    "constructor": "BSON",
    "cons": "BSON",
    "name": "serializeWithBufferAndIndex",
    "string": "BSON.prototype.serializeWithBufferAndIndex()"
   }
  },
  {
   "tags": [
    {
     "type": "api",
     "visibility": "private"
    }
   ],
   "description": {
    "full": "<p>@ignore</p>",
    "summary": "<p>@ignore</p>",
    "body": ""
   },
   "isPrivate": true,
   "ignore": false,
   "code": "exports.Code = Code;\nexports.Symbol = Symbol;\nexports.BSON = BSON;\nexports.DBRef = DBRef;\nexports.Binary = Binary;\nexports.ObjectID = ObjectID;\nexports.Long = Long;\nexports.Timestamp = Timestamp;\nexports.Double = Double;\nexports.MinKey = MinKey;\nexports.MaxKey = MaxKey;",
   "ctx": {
    "type": "property",
    "receiver": "exports",
    "name": "Code",
    "value": "Code",
    "string": "exports.Code"
   }
  }
 ]
}