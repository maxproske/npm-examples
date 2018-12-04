const _ = require('lodash');

const numbers = [412,74,21,13,9,34,9];

_.each(numbers, function(number, i){
    console.log(number)
});