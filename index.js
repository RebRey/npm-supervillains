// see https://www.npmjs.com/package/supervillains documentation

// STEP 1: incorporate module into the current project by requiring it.
const supervillains = require('supervillains');
 
// STEP 2: use the random method to generate random super villain names and store the output (random super villain name) into a variable called mySuperVillainName
const mySuperVillainName = supervillains.random();

// STEP 3: Log the super villain name into the command line so we can see it
console.log(mySuperVillainName);

// STEP 4: on the terminal cd into this project and run the following code "node index.js"
// this will generate a random super villain name such as "Morgan le Fay"