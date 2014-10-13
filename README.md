# tern-node-mongodb-native

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-node-mongodb-native.png)](http://travis-ci.org/angelozerr/tern-node-mongodb-native)

[tern-node-mongodb-native](https://github.com/angelozerr/tern-node-mongodb-native) is a plugin which adds support for [Mongo DB Native NodeJS Driver](http://mongodb.github.io/node-mongodb-native/) to the JavaSript code intelligence system [Tern](http://ternjs.net/).

## Demo

You can see demo with CodeMirror (inside Web Browser) [demos/mongodb.html](https://github.com/angelozerr/tern-node-mongodb-native/blob/master/demos/mongodb.html) :

TODO

## How to generate node-mongodb-native.js?

### Introduction

The tern plugin [node-mongodb-native.js](https://github.com/angelozerr/tern-node-mongodb-native/blob/master/node-mongodb-native.js) is generated from the JavaScript sources of [Mongo DB Native NodeJS Driver](http://mongodb.github.io/node-mongodb-native/).
Process of this generation is : 

 * generate a JSON Representation (api.json) of JavaScript sources of [Mongo DB Native NodeJS Driver](http://mongodb.github.io/node-mongodb-native/) by using [dox](https://github.com/visionmedia/dox).
 * generate a JSON Type Definition from the generated dox JSON Representation.
 * generate the tern plugin by using the generated JSON Type Definition.
 
### Instruction 

Here the steps : 
  
* open cmd  
* `cd $HOME/tern-node-mongodb-native`
* `npm install` (to install dox)
* Generate **generator/data/api.json** from JS sources with dox : 
  
  * edit generator/data/node/js2api_mongodb.js with the path of the [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) :
 
 	`var basedir = "D:/_Projects/git/node-mongodb-native/"`
 
  * launch the following command to generate **generator/data/api.json** :
  
	`node generator/data/node/js2api_mongodb`

 * Generate the tern plugin **node-mongodb-native.js** from api.json, by launching :
 
	`node generator/node/make_plugin`

### Advanced informations

JS sources are sometimes NOT well annotated, so it misses some information (some return function, parameter type, etc). The [generator/dox2tern_mongodb.js](generator/dox2tern_mongodb.js) gives the capability to override information of JS sources.

## Structure

The basic structure of the project is given in the following way:

* `node-mongodb-native.js` the tern plugin.
* `demos/` demos with express tern plugin which use CodeMirror.
