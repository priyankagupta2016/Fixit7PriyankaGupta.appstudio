// a. Create a variable named quoteString
let quoString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(quoString);

// b. Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString
let upperCaseString = quoString.toUpperCase()
console.log(upperCaseString);

// c. Create a new variable named authorString 
let authorString = "-Henry Ford"
console.log(authorString);

// d. Use a string method to put the authorString value on the end of the quoteString value, saving the new string in a variable named completeString
let completeString = quoString.concat(authorString)
console.log(completeString);

// e. Create a new string variable named secondQuote
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

// f. Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString);

//g. Find the character at the 3rd position of secondQuote
let letter = secondQuote.charAt(2)
console.log(letter);

// h. Create a new variable named findString
let findString = secondQuote.replace ("What separates the talented individual from the successful one is a lot of hard work.","")
console.log(findString);