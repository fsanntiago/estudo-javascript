// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranaforme o array em um texto e onde eram espaços, coloque _

let phrase = "Programação é bacana de mais.";
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toLowerCase());
