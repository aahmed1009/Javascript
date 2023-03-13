//unpack
//values from array
//properties from objects
//into distinct variables
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// TODO:Using Destructuring:
// const [gold, silver, bronze] = raceResults;
// console.log(gold);
// gold; //'Eliud Kipchoge'
// silver; //'Feyisa Lelisa'
// bronze; //'Galen Rupp'

// const [first, , , fourth] = raceResults;
// first; //'Eliud Kipchoge'
// fourth; //'Ghirmay Ghebreslassie'

// const [winner, ...others] = raceResults;
// winner; //'Eliud Kipchoge'
// others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

//TODO:Destructring objects
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};
// const {
//   first,
//   last,
//   time
// } = runner;
const { country: nation, title: honorific } = runner;

const { first, last, ...other } = runner;

//TODO:DESTRUCTURING PARAMS
const runnner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

function print(human) {
  const { first, last, title } = human;
  console.log(`${first},${last},${title}`);
}
print(runnner);

// We can unpack the values we want right in the parameter list:

const response = ["HTTP/1.1", "200 OK", "application/json"];

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response);
