/*
 * Create a function which accepts a string parameter
 * Return the number of characters in that string
 * E.g: if the string provided as an input is “test 1” then the count returned is 6
 */
var myString = "Bob Bobbington";
function getNumberOfCharacters(str) {
    var length = str.length;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            length--;
        }
    }
    // return str.indexOf(' ') === -1;
    return length;
}
//getNumberOfCharacters(myString);
console.log(getNumberOfCharacters(myString));
