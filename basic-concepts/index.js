const {from} = require("rxjs");

const arr = [1, 3, 4];
const arr$ = from(arr);

 console.log(arr$)
