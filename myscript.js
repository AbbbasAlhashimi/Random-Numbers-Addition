//This Part involves Entries Processing
//---------------------------------------


//Once the Button is Clicked, the function becomes active
btn.onclick = function ()
{
    //When the user insert anything into the [Input Box], it will be stored into [insertedValue]
    insertedValue = checkAnswer.value; //Check the input value
    //If the Answer value is equal to number1 + number2, then return [You are correct]
    if (insertedValue == answer)
    {
        alert('You are correct');
    }
    //If the Answer value is NOT equal to number1 + number2, then return Message & Correct Answer
    else
    {
        alert('You are incorrect, the answer is ' + answer);
    }

    //Whatever the user inputs, it will be stored inside [checkAnswer]
    document.querySelector('input[type=text]').value = "";
    //Setting Values appearing in [numberOne] Div
    document.getElementById('numberOne').innerHTML = "";
        //Setting Values appearing in [numberTwoe] Div
    document.getElementById('numberTwo').innerHTML = "";

    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);

    document.getElementById('numberOne').innerHTML = number1;
    document.getElementById('numberTwo').innerHTML = number2;

    answer = number1 + number2


};