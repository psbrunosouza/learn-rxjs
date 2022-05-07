/**
 * Create an observable
 *
 * We can create an observable by a source of data with:
 *
 * from() - create an observable from a data source
 * fromEvent() - create an observable from an event
 * of() - create an observable from a data source
 */

// using from()
const {from, of} = require("rxjs");

const dataSourceToBeWatched = [1, 3, 4];
const observableFrom$ = from(dataSourceToBeWatched);

//using of()
const dataSourceToBeWatched2 = [1, 3, 4];
const observableOf$ = of(dataSourceToBeWatched2);

