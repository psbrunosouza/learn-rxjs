const { from, filter} = require("rxjs");

const frameworks = [
    {name: "express js", platform: "backend"},
    {name: "angular", platform: "frontend"},
    {name: "react js", platform: "backend"}
];

const frameworks$ = from(frameworks);

// filter just the frontend frameworks
frameworks$.pipe(
    filter((framework) => {
        return framework.platform === "frontend"
    })
    // return { name: 'angular', platform: 'frontend' }
).subscribe(console.log);
