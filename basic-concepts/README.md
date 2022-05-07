# Basic concepts

## Observables

Observables are a stream or a data source. It's often an **unicast** structure that can provide
a system that emits notification always a change occur and from that we can accomplish an action.

In some situations an observable can be a **multicast** structure when needed.

```
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```

## Subscriptions

A subscription represents the execution of an Observable, and can be stored in an object variable. 
A subscription has one important method called unsubscribe, that can cancel a subscription in an
observable.


```
import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```

## Observer

An observer is consumer of the data provided by an observable. Programatically, the observable
is the set of callbacks proposed by an observable.

```
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
}
```