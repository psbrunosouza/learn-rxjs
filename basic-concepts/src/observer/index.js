/**
 * Observer
 *
 * set of callbacks from an observable
 */

// using from()
const {from} = require("rxjs");

const dataSourceToBeWatched = [1, 3, 4];
const observableFrom$ = from(dataSourceToBeWatched);

const observer = {
    next: (result) => {
        console.log(result)
    }, // success action
    error: () => {}, // when there is an error
    complete: () => {} // action performed independently of result
}

observableFrom$.subscribe(observer)

