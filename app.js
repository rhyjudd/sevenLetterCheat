

const express   = require('express');
const permute   = require('./scrambler.js').permutations;
const combine   = require('./scrambler.js').combinations;
const checkWord = require('check-word');
const app       = express();
const port      = 3000;


//setting the language for check, default is english
words = checkWord('en');


//EJS
app.set('view engine', 'ejs');


//Main route
app.get('/', (req, res) =>{
  res.render('index');
});


app.get('/submit', (req,res)=>{
  /*
  this was the first attempt at a homemade function
  for finding all the combinations of a set of characters

  const result = permute(req.query.fname);
  */

  const rawCombinations = combine(req.query.fname);
  const filteredCombinations = rawCombinations.filter((element)=>{
    //console.log(element);
    return words.check(element);
  });

  //res.send(filteredCombinations.sort((a,b)=>{
  //  return b.length - a.length;
  //}));
  console.log(filteredCombinations);
  res.render('output', );
  
});


app.listen(port, () =>{
  let d = new Date();
  console.log(`Server started on port ${port} on ${d.toUTCString()}`);
});