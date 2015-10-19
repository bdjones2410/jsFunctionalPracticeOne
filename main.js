0.
function forEach(array, callback){
  for (i = 0; i < array.length; i++){
    var a = array[i];
    callback(a);
  }
}
// and finally assert; if this fails, the program stops
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });

console.assert(total === 24);


1.
function sum(){
  var args = [].slice.call(arguments);
  var total = 0;
  for(var i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total
}

console.assert(sum(1, 2, 3, 4, 5) === 15 )


2.

function average() {
  var args =[].slice.call(arguments);
  var sum = 0
  for (i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  var avg = sum / args.length;
  return avg;
}

console.assert( average(2, 4, 6, 8) === 5 )

//3.

function largest() {
  var args = [].slice.call(arguments);
    var bigNum = 0;
    for (i = 0; i < args.length; i++) {
      if(args[i] > bigNum) {
        bigNum = args[i];
      }

    }
    return bigNum
}

console.assert( largest(2, 4, 6, 8) === 8 )

4.
 function longest() {
   var args =[].slice.call(arguments);
   var longString = 0;
   for (i = 0; i < args.length; i++) {
     if(args[i].length > longString ) {
      var longWord = args[i];
      longString = args[i].length;
     }
     else {
       longString = longString;
     }

   }
return longWord
 }

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );


  function compare(thing, secondthing) {
      if (thing === secondthing) {
        return true;
      }
      else {
        return false;
      }
  };



  function apples(banana, oranges) {
      if (banana.length === oranges.length) {
          for (i = 0; i < banana.length; i++) {
              if (banana[i] === oranges[i]) {
                  console.log("winning");
              }else {
                  return false;
              }
          }
      } else {return false;}
      return true;
  }





console.assert(apples([1, 2, 3, 4],[1, 2, 3, 4]));

  // .sort()
     console.assert(apples([3, 2, 4, 1].sort(),[1, 2, 3, 4]));

  // .concat()
     console.assert(apples([3, 2].concat([1, 4]),[3, 2, 1, 4]));

  // .indexOf()
        console.assert([1, 2, "foxy", 4].indexOf("foxy") === 2);

  // .split()
  function splitting(fillwords) {
    banana = fillwords.split(" ");
     }
     splitting("I fox will");
  console.assert(apples( banana, ["I", "fox", "will"]));

  // .join()
      console.assert(["Fish", "dog", "cat"].join(" ")=== "Fish dog cat")

  // .pop()
      console.assert([1, 2, 3, 4].pop() === 4);

  // .push()
      var red = [1, 2, 3, 4];
        console.assert(red.push(5) === 5);


  // .slice()
      var silver = [1, 2, 3, 4, 5, 6, "foxy"];
      var sver = silver.slice(1,5);
      console.assert(apples(sver, [2, 3, 4, 5]));


  // .splice()
      var spliceNDice = [1, 2, 3, 4, 5, 6, "foxy"];
      spliceNDice.splice(6, 1, 7, 8)
      console.assert(apples(spliceNDice , [1, 2, 3, 4, 5, 6, 7, 8]));



  // .shift()

       var shiftWork =[1, 2, 3, 4, 5, 6, "foxy"];
       shiftWork.shift();
       console.assert(apples(shiftWork,[2, 3, 4, 5, 6, "foxy"]));


  // .unshift()
      var notSoShifty = [2, 3, 4, 5, 6];
      notSoShifty.unshift(1);
      console.assert(apples(notSoShifty, [1, 2, 3, 4, 5, 6]));

  // .filter()
        function tooSmall(bed) {
          if(isNaN(bed)) {
            return bed
          }
        }
          var goldieLox = [1, 3, "BabyBear", 4, "MamaBear", "PapaBear", 5];
          var porridge = goldieLox.filter(tooSmall);
          console.assert(apples(porridge,["BabyBear", "MamaBear", "PapaBear"]));

  // .map()
        function wording(value) {
          return value.length
        }
       var fruity = ["apple", "orange", "banana"];
       var letters = fruity.map(wording);
       console.log("runs the function wording once for each element in the array.");
       console.assert(apples(letters,[5, 6, 6]));
