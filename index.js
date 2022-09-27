const { userInformation } = require('./information');
console.log(`${userInformation.name} ${userInformation.location}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: userInformation.name + ' ' + userInformation.location,
    e: "oO",
    T: "W",
}));