//1: Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:")  
var fullName = firstName + " " + lastName;

 alert("Hello, " + fullName + " Welcome!");
        


//  2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var phoneModel = prompt("Please enter your favorite mobile phone model:");
var lengthOfString = phoneModel.length;


document.write("My favourite phone is: " + phoneModel + "<br>" + "Lenght of string: " + lengthOfString + "<br>")


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
var index = word.indexOf('n');


document.write("String: " + word + "<br>" + "Index of n: " + index + "<br>")


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


var sentence = "Hello World";
var lastIndex = sentence.lastIndexOf('l');



document.write("String: " + sentence + "<br>" + "Last index of L: " + lastIndex + "<br>")


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

        
var word = "Pakistani";
var midofIndex = word.charAt(3);


document.write("String: " + word + "<br>" + "Character at index 3: " + midofIndex + "<br>")


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");



document.write("City: " + city + "<br>" + "After replacement: " + newCity+ "<br>")



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.write("Message: " + newMessage + "<br>")


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


var num1 = "472";

document.write( "Value: " + num1 + "<br>" + "Type: " + typeof num1 + "<br>")

var number = parseInt("472");
document.write("Value: " + number + "<br>" + "Type: " + typeof number + "<br>")



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput = prompt("Please enter some text:");
var uppercaseInput = userInput.toUpperCase();

document.write("User Input: " + userInput + "<br>" + "Upper Case: " + uppercaseInput + "<br>")



// 11. Write a program that takes user input. Convert and
// show the input in title case.

var userInput = prompt("Please enter some text:");
var titlecaseInput = userInput.slice(0,1).toUpperCase()
var titlecaseInput2 = userInput.slice(1).toLowerCase()
var userInput = titlecaseInput+titlecaseInput2


document.write("Title case: " + userInput + "<br>")

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var result = num.toString().replace('.', '');

document.write("Number: " + num + "<br>" + "Result: " + result + "<br>")

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


var username = prompt("Enter your name:");
var charValue;
for(var i=0; i<username.length; i++){
    charValue=username[i].charCodeAt(0);
    if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 48)
        alert("Please enter a valid username")
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

        
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");
userInput = userInput.toLowerCase();
var found = false;


for (var i = 0; i < A.length; i++) {
         if (A[i].toLowerCase() === userInput) {
         found = true;
         break;
                }
            }

            if (found) {
                alert("Yes, '" + userInput + "' is found in the list.");
            } else {
                alert("No, '" + userInput + "' is not found in the list.");
            }
        



            // 16. Write a program to convert the following string to an
            // array using string split method.
            // var university = “University of Karachi”;
            // Display the elements of array in your browser.


            var university = "University of Karachi";
            var arrayUniversity = university.split(' ');

document.write("Array Elements: " + arrayUniversity + "<br>")


// 17. Write a program to display the last character of a user
// input.
        
var words = "Pakistan";
var lastIndex = words.charAt(7)

document.write("User input: " + words + "<br>" + "Last character of input: " + lastIndex)


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var str = "The quick brown fox jumps over the lazy dog";

            var searchTerm = "the";
            var lowerCaseStr = str.toLowerCase();
            var words = lowerCaseStr.split(' ');
            var count = 0;

            for (var i = 0; i < words.length; i++) {
                if (words[i] === searchTerm) {
                    count++;
                }
            }


            // document.getElementById("result").innerText = "Occurrences of '" + searchTerm + "': " + count;

            document.write("Text: " + str + "<br>" + "There are " + count + " occurences of word " + searchTerm) 
         