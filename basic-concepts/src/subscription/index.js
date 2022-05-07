/**
 * Subscription
 *
 * using an observable
 */

const {from} = require("rxjs");

const dataSourceToBeWatched = [1, 3, 4];
const observableFrom$ = from(dataSourceToBeWatched);

// console 1, 2, 3
const subscription = observableFrom$.subscribe(console.log)

// action to cancel subscription
subscription.unsubscribe();