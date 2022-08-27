function upperCase(word){
    return /[A-Z]/.test(word.charAt(0))
}

console.log(upperCase('regexp')) ;
console.log(upperCase('RegExp')) ;