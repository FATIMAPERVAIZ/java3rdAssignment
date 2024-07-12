//Exercise # 6.1
// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.

function addNum(a, b) {
    return a + b;
}
let n1 = parseFloat(prompt("Enter number 1: "));
let n2 = parseFloat(prompt("Enter number 2: "));
let sum1 = addNum(n1, n2);

console.log("Result1: Sum of two parameter is ", sum1);

let sum2 = addNum(5, 3)
console.log("Result:2 Sum of two parameter is ", sum2);
// Exercise # 6.2 
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function.
function myfunc() {
    let name = prompt("Enter name");
    let random = Math.random() * array.length;
    let index = Math.floor(random);
    console.log("Randomly selected " + array[index])
    console.log("Name entered by user is " + name)
}
const array = ["apple", "Mango", "Bnana", "pear"]
myfunc();
//  Create a basic calculator that takes two numbers and one string value indicating
//  an operation. If the operation equals add, the two numbers should be added. If the
//  operation equals subtract, the two numbers should be subtracted from one another.
//  If there is no option specified, the value of the option should be add.
//  The result of this function needs to be logged. Test your function by invoking it
//  with different operators and no operator specified.
//  1. Set up two variables containing number values.
//  2. Set up a variable to hold an operator, either + or -.
//  3. Create a function that retrieves the two values and the operator string value
//  within its parameters. Use those values with a condition to check if the
//  operator is + or -, and add or subtract the values accordingly (remember if
//  not presented with a valid operator, the function should default to addition).
//  4. Within console.log(), call the function using your variables and output
//  the response to the console.
//  5. Update the operator value to be the other operator type—either plus or
//  minus—and call to the function again with the new updated argument

let num1 = 10;
let num2 = 5;
let operator;

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            console.log("Invalid operator. Defaulting to addition.");
            return num1 + num2;
    }
}

operator = '+';
console.log(`Result of ${num1} ${operator} ${num2} = ${calculate(num1, num2, operator)}`);

operator = '-';
console.log(`Result of ${num1} ${operator} ${num2} = ${calculate(num1, num2, operator)}`);

operator = '*';
console.log(`Result of ${num1} + ${num2} = ${calculate(num1, num2, operator)}`);

// Practice exercise 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string

let prize = Number(prompt("Enter value in between 0 and 10"))
let outputmsg = "My Selection: ";
let prizemsg;
switch (prize) {
    case 1:
        prizemsg = "You won a keychain!";
        break;
    case 2:
        prizemsg = "You won a pen!";
        break;
    case 3:
        prizemsg = "You won a notebook!";
        break;
    case 4:
        prizemsg = "You won a mug!";
        break;
    case 5:
        prizemsg = "You won a t-shirt!";
        break;
    case 6:
        prizemsg = "You won a hat!";
        break;
    case 7:
        prizemsg = "No prize! better luck next time.";
        break;
    case 8:
        prizemsg = "You won a book!";
        break;
    case 9:
        prizemsg = "You won a backpack!";
        break;
    default:
        cout << "Invalid  prize selection kindly select between 0 and 9" << endl;
}
outputmsg = outputmsg + prize + ". " + prizemsg;
alert(outputmsg)

// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

function numbergame() {
    let define_no = Math.floor(Math.random() * 1000) + 1;

    let user_no = parseInt(prompt(("Enter any number from 1 to 1000"), 10));

    if (user_no > define_no) {
        console.log("User guess number is greater than dynamic generated number")
    }
    else if (user_no == define_no) {
        console.log("User guess number is equal to  dynamic generated number")
    }
    else {
        console.log("User guess number is less than dynamic generated number")
    }
}

numbergame();

//  Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

function frndcheckergame() {
    let input = prompt("Enter name")
    switch (input) {
        case "Tamsal":
        case "tamsal":
            console.log("Hello my Friend " + input + " I hope you are doing well!.....")
            break;

        case "Fareeha":
        case "fareeha":
            console.log("Hello my Friend " + input + " I hope you are doing well!.....")
            break;

        case "Rameen":
        case "rameen":
            console.log("Hello my Friend " + input + " I hope you are doing well!.....")
            break;
        default:
            console.log("Sorry I don't have any friend named " + input)
    }
}
frndcheckergame();

function gameRPC() {
    const option = ['Rock', 'Paper', 'Scissors'];
    let playerChoose = Math.floor(Math.random() * 3);
    let compChoose = Math.floor(Math.random() * 3);
    let finalmsg = "Player choose: " + option[playerChoose] + " Computer choose: " + option[compChoose];

    if (playerChoose == compChoose) {
        finalmsg += "\nMtah tie..."
    }
    else if (playerChoose == 0 && compChoose == 2)
        finalmsg += "\nRock beats Scissors\nPlayer wins..."
    else if (playerChoose == 1 && compChoose == 0) {
        finalmsg += "\nPaper beats Rock\nPlayer wins..."
    }
    else if (playerChoose == 2 && compChoose == 1) {
        finalmsg += "\nScissors beat Paper\nPlayer wins..."
    }
    else if (compChoose == 0 && playerChoose == 2)
        finalmsg += "\nRock beats Scissors\nComputer wins..."
    else if (compChoose == 1 && playerChoose == 0) {
        finalmsg += "\nPaper beats Rock\nComputer wins..."
    }
    else  {
        finalmsg += "\nScissors beat Paper\nComputer wins..."
    }

    return finalmsg;

}
console.log(gameRPC())