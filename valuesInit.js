//This Part involves Entries Initialization
//---------------------------------------
var number1;
var number2;


//[Math.Floor] is a function that returns Integer Values Only
//[Math.random()] is a Parameter and a Function that returns a value btween 0 (inclusive) and 1 (Exlusive)

// [* 20] refers to a selection among 20 numbers
number1 = Math.floor((Math.random() * 20) + 1);
// [* 10] refers to a selection among 10 numbers
number2 = Math.floor((Math.random() * 10) + 1);

//Injecting Randomly generated value of [number1] into [numberOne] DIV
document.getElementById("numberOne").innerHTML = number1;
//Injecting Randomly generated value of [number2] into [numberTwo] DIV
document.getElementById("numberTwo").innerHTML = number2;

//Set the result value to involve the Sum of number 1 and number 2
var answer = number1 + number2;

//Add click handler that checks the answer
// The [querySelector] Method is used to return the First element that matches
// a specified CSS selector[s)in the document [input]
var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value; //Value is a temporary variable that stores whatever the user inputs using [checkAnswer] method
var btn = document.querySelector('input[type=button][value=check]'); //Button Role and Text Label
