module.exports = {
  
  permutations: function(input){

    const string  = input.split("");
    const output = input.split("");
    console.log(`String variable: ${string}`);
    console.log(`String length variable: ${string.length}`);
    //let collection = [];
    for(let i=0; i<string.length ;i++){
      let collection = [];
      console.log(`Iteration: ${i}`);
      for(let j=0; j<string.length; j++){
          
          //console.log(`string: ${string}` );
          console.log(`i: ${i}`);
          console.log(`j: ${j}`);
          //collection = string[i] + string[j];
          if(string[i] == string[j]){
            console.log(`cannot have duplicate elements.`);
          } else {
            collection = string[i] + string[j];
            console.log(`collection: ${collection}`);
            //console.log(`string: ${string}`);
            output.push(collection);
            //collection = [];
            console.log(`collection pushed to output: ${output}`);
          }       
          
        
      }
          //output.push(collection);
          console.log(`output: ${output}`);

    }

    return output;
  },

  combinations: function(str){

      //giving credit where credit is due
      //https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
      
      var fn = function(active, rest, a) {
          if (!active && !rest)
              return;
          if (!rest) {
              a.push(active);
          } else {
              fn(active + rest[0], rest.slice(1), a);
              fn(active, rest.slice(1), a);
          }
          return a;
      }
      return fn("", str, []);
  }
  
}