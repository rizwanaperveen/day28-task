//**Question 82:** Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
//**Explain & TIP:** The `.length` property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with.
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Tayyaba"));
//**Question 83:** Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
//**Explain & TIP:** The `.toUpperCase()` and `.toLowerCase()` methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
function convertingCase(str) {
    var upperCase = str.toUpperCase();
    var lowerCase = str.toLowerCase();
    console.log("UpperCase:", upperCase, "LowerCase:", lowerCase);
}
convertingCase("pakistan");
//**Question 84:** Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
//**Explain & TIP:** The `.replace()` method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
function replaceJavascriptwithTypescript(sentence) {
    return sentence.replace(/Javascript/g, "Typescript");
}
console.log(replaceJavascriptwithTypescript("I love Javascript, Javascript is an amazing programmig language."));
// This function swaps "JavaScript" with "TypeScript" in a sentence
//function replaceJavaScriptWithTypeScript(sentence: string): string {
//  return sentence.replace(/JavaScript/g, "TypeScript");
// Uses a regular expression with the 'g' flag for a global replacement
//}
// Example: Changing a programming language name in a sentence
//console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
