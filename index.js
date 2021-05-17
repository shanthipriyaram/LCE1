let shuttlename = "Determination"
let shuttlespeedmph = 17500
let marsdistancekm = 225000000
let moondistancekm = 384400
let mpkm = 0.621

console.log(typeof "Determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

let milestomars = marsdistancekm * mpkm;
let hourstomars = milestomars / shuttlespeedmph;
let daystomars = hourstomars / 24;

console.log(shuttlename + " will take " + daystomars + " days to reach Mars " );


let milestomoon = moondistancekm * mpkm;
let hourstomoon = milestomoon / shuttlespeedmph;
let daystomoon = hourstomoon / 24;

console.log(shuttlename + " will take " + daystomoon + " days to reach Moon");

