/* 
 * Create a function which accepts a string parameter
 * Return the number of characters in that string
 * E.g: if the string provided as an input is “test 1” then the count returned is 6
 */

let myString: string = `Bob Bobbington`;

function getNumberOfCharacters(str :string) {
    let length:number = str.length;

    for(let i:number = 0; i < str.length; i++) {

        if(str.charAt(i) == ' ') {
            length--;
        }
    }
    return length;
}

console.log(getNumberOfCharacters(myString));
