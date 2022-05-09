const { map, of } = require("rxjs");

const fruits = [
    {name: "apple", color: "red"},
    {name: "strawberry", color: "red"},
    {name: "watermelon", color: "green"}
];

const fruits$ = of(fruits);

// transform from [...{name: string, color: string}] to [...string]
fruits$.pipe(
    map((fruits) => {
        return fruits.map((fruit) => fruit.name)
    })
    // return [ 'apple', 'strawberry', 'watermelon' ]
).subscribe(console.log);
