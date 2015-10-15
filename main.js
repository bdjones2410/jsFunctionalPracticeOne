// //0.
// function forEach(array, callback){
//   for (i = 0; i < array.length; i++){
//     var a = array[i];
//     console.log(array[i]);
//     callback(a);
//   }
// }
// // and finally assert; if this fails, the program stops
// var total = 1;
// forEach([1, 2, 3, 4], function(a){ total *= a; });
//
// console.assert(total === 24);


//1.
// function sum(){
//   var args = [].slice.call(arguments);
//   var total = 0;
//   for(var i = 0; i < args.length; i++) {
//     total = total + args[i];
//   }
// }
//
// console.assert(sum(1, 2, 3, 4, 5) === 15 )


//2.
//
// function average() {
//   var args =[].slice.call(arguments);
//   var sum = 0
//   for (i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   var avg = sum / args.length;
//   console.log(avg);
// }
//
// console.assert( average(2, 4, 6, 8) === 5 )

// //3.
//
// function largest() {
//   var args = [].slice.call(arguments);
//     var bigNum = 0;
//     for (i = 0; i < args.length; i++) {
//       if(args[i] > bigNum) {
//         bigNum = args[i];
//       }
//       else {
//         bigNum = bigNum;
//       }
//       console.log(bigNum);
//     }
//
// }
//
// console.assert( largest(2, 4, 6, 8) === 8 )

//4.
 // function longest() {
 //   var args =[].slice.call(arguments);
 //   var longString = 0;
 //   for (i = 0; i < args.length; i++) {
 //     if(args[i].length > longString ) {
 //      var longWord = args[i];
 //      longString = args[i].length;
 //     }
 //     else {
 //       longString = longString;
 //     }
 //     console.log(longString);
 //     console.log(longWord);
 //   }
 // }
 //
 // console.assert( longest("this", "is", "a", "awesome", "function") === "function" );



 // .sort()

 // .concat()

 // .indexOf()

 // .split()

     // function splitting(fillwords) {
     //   myArr = fillwords.split(" ");
     //    for (i = 0; i < myArr.length; i = i + 2) {
     //      console.log(myArr[i]);
     //    }
     // }
     // console.assert( splitting("I fox will wolf only apple read wood every duck other silver word"));

 // .join()

 // .pop()
    // function popping() {
    //   var silver =[].slice.call(arguments);
    //   console.log(silver);
    //   silver.pop();
    //   console.log("I removed the last array item ");
    //   console.log(silver)
    // };
    // console.assert( popping(1, 2, 3, 4, 5, 6, "foxy"));


 // // .push()
    //   function ahPushIt() {
    //    var silver =[].slice.call(arguments);
     //
    //    console.log(silver);
     //
    //    silver.push("foxy kitten");
     //
    //    console.log("I added the last array item ");
    //    console.log(silver)
    //  };
    //  console.assert( ahPushIt(1, 2, 3, 4, 5, 6, "foxy"));

 // // .slice()
 //

 // // .splice()
 //


 // // .shift()
 // function shiftWork() {
 //   var silver =[].slice.call(arguments);
 //   console.log(silver);
 //   silver.shift();
 //   console.log("I removed the first array item ");
 //   console.log(silver)
 // };
 // console.assert( shiftWork(1, 2, 3, 4, 5, 6, "foxy"));


 // // // .unshift()
 // function notSoShifty() {
 //   var silver =[].slice.call(arguments);
 //   console.log(silver);
 //   silver.unshift("owls ");
 //   console.log("I added the first array item! ");
 //   console.log(silver)
 // };
 // console.assert( notSoShifty(1, 2, 3, 4, 5, 6, "foxy"));

 // // .filter()
 //
 // // .map()
