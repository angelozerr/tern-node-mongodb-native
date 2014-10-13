# tern-node-mongodb-native

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-node-mongodb-native.png)](http://travis-ci.org/angelozerr/tern-node-mongodb-native)

[tern-node-mongodb-native](https://github.com/angelozerr/tern-node-mongodb-native) is a plugin which adds support for [Mongo DB Native NodeJS Driver](http://mongodb.github.io/node-mongodb-native/) to the JavaSript code intelligence system [Tern](http://ternjs.net/).

## Demo

You can see demo with CodeMirror (inside Web Browser) [demos/mongodb.html](https://github.com/angelozerr/tern-node-mongodb-native/blob/master/demos/mongodb.html) :

TODO

## Generator

npm install

Generate `generator/data/api.json` from JS sources with dox : 

 * edit generator\data\node\js2api_mongodb.js
 
 var basedir = "D:/_Projects/git/node-mongodb-native/"
 
  * cmd
  
`node generator/data/node/js2api_mongodb`

 * Generate `node-mongodb-native.js` from api.json : 
 
`node generator/node/make_plugin`


## Structure

The basic structure of the project is given in the following way:

* `node-mongodb-native.js` the tern plugin.
* `demos/` demos with express tern plugin which use CodeMirror.
