//requiring uuid
const uuid = require('uuid');
const newUuid = uuid();

console.log(`youe new Uniersally unique identifier is ${newUuid}`);

module.exports = {
    myFirstMethod: () => {
        console.log('This is my first method');
    },
};