//requiring uuid
const uuid = require('uuid');
const newUuid = uuid();

// you are requiring or importing the my-library module, which you previously exported here
const myLibrary = require('./my-library');

// execute my-library here
myLibrary.myFirstMethod();