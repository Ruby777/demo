//requiring uuid
const uuid = require('uuid');
const newUuid = uuid();

module.exports = {
    myFirstMethod: () => {
        console.log('This is my first method');
    },
};