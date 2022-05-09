const {from, mergeMap, map} = require("rxjs");

const vaccines = [
    "influenza",
    "rabies",
    "giardia"
];
const animals = [
    {name: "Marie", vaccines: ["influenza"]},
    {name: "Godofredo", vaccines: ["influenza", "rabies", "giardia"]}
];

const vaccines$ = from(vaccines);
const animals$ = from(animals);

animals$.pipe(
     mergeMap((animal) => {
         return vaccines$.pipe(
             map((vaccine) => {
                 return animal.vaccines.includes(vaccine) ? `${animal.name} was vaccinated to ${vaccine}` : `${animal.name} needs to be vaccinated to ${vaccine}`;
             })
         )
     })
).subscribe(console.log)
/**
 *
 * return
 *
 * Marie was vaccinated to influenza
 * Marie needs to be vaccinated to rabies
 * Marie needs to be vaccinated to giardia
 * Godofredo was vaccinated to influenza
 * Godofredo was vaccinated to rabies
 * Godofredo was vaccinated to giardia
 */
