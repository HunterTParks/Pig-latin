var vowels = ["a", "A", "e", "E", "i", "I", "o","O", "u", "U"];
// STEP #4 CHECK FOR VOWELS
var check = function(test) {

  debugger;
  // STEP #5 'J' IS THE COUNTER FOR CHECKING EACH CHARACTER
  // IN THE SENTENCE THE USER INPUTTED BELOW
  for(var j = 0; j < test.length; j++){

    if(test[j + 1] === " "){
      counter = 1;
    }
    // STEP #6 'i' CHECKS EACH INDIVIDUAL CHARACTER IF IT IS A VOWEL
    for(var i = 0; i < vowels.length; i++){
      if (test[j] === vowels[i]) {

        // STEP #7 IF A VOWEL IS FOUND, CHECK TO SEE IF THE SPACE
        // BEHIND IT IS A SPACE; IF IT IS, IT IS THE BEGINNING OF
        // THE WORD.
        if(test[j - 1] === " "){

          // STEP #8 - 9 CALLS FUNCTION 'func'
          var test1 = func(test, j);

        }
      }
      else if (test[j] !== vowels[i]) {
        var test2 = funct(test, j, vowels);

      }
      else {
        alert("TEST");
      }
    }

  };
  return test;
};

var func = function(test, j) {

  // STEP #8 CHECKS THE NEXT FEW SPACES FOR AN EMPTY SLOT;
  // TO FIND THE END OF THE WORD
  for(var k = 1; k < 10; k++){
    if(test[j + k] === " " || test[j + k] === undefined){

      // STEP #9 ADDS WAY TO THE END OF THE WORD
      test[j + (k - 1)] = (test[j + (k - 1)] + "way");
      return 0;
    }
    else {

    }
  }
};

var funct = function(test, j, vowels) {

  if(test[j - 1] === " " || test[j - 1] === undefined) {
    for(var l = 0; l < vowels.length; l++) {

       for(var m = 0; m < vowels.length; m++){
        if(test[j + l] === vowels[l]) {
          var arr = test.splice(test[j + l], l);
          //var counter = countspace(j, arr, test);
          return arr;
        }
      }
    }
  }
  return 1;
};

var countspace = function(j, arr, test) {
  for(var counter = 0; counter < 10; counter++){
    if(test[j] === test[j]){
      //if(counter = 1){
        test[j + (counter - 1)] = test[j + (counter - 1)] + arr + "ay";
        console.log("TESTHURRR");
        return 0;
      //}
    }
    console.log("TESTDUUUUU");
  }
};

$(document).ready(function() {
  $("form#form").submit(function(event) {
    // #STEP 1 INITIATE SUBMIT
    event.preventDefault();
    var test = $("input#input").val();
    // #STEP 2 SPLIT INTO ARRAY
    test = test.split("");
    // STEP #3 - 9 CALL FUNCTION 'check'
    var converted = check(test);

    converted = converted.join("");
    console.log(converted);
  });
});
