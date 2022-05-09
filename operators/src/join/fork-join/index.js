const {forkJoin, from, map} = require("rxjs");

const name = ["José"];

const lastName = ["Tomás"];

const name$ = from(name);
const lastName$ = from(lastName);

forkJoin([name$, lastName$])
.pipe(
    map(([name, lastName]) => {
        return `${name} ${lastName}`
    })
).subscribe((fullName) => {
    console.log(fullName)
})