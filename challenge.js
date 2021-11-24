/* SUM ZERO
    Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise. */
let addToZero = (arr) => {
    numArray = [...arr]
    for (let i=0; i<arr.length; i++){
        num = parseInt(numArray.splice(0,1))
        // console.log(num)
        if (arr.includes(num*-1)){
            // num*-1 === arr[arr.indexOf(num*-1)]
            return `True, ${num} + ${num*-1} = 0`
        }
    }
    return "False, none of the numbers add to 0"
}
// console.log(addToZero([]))              // False   
// console.log(addToZero([1]))             // False
// console.log(addToZero([1, 2, 3]))       // False
// console.log(addToZero([1, 2, 3, -2]))   // True


/* I believe the runtime complexity of my code is O(n). includes() is a linear search = O(n). parseInt() is also linear search because string being passed in can have any number of characters. splice() may be O(1) because simple deletion, but could be O(n) worst case */
/* I belive the space complexity of my code is O(n) because the size of the arr parameter can vary, it can have any number of elements */






/* UNIQUE CHARACTERS
    Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise. */
let hasUniqueChars = (word) => {
    for (const char in word){
        // console.log(word[char])
        if (word.indexOf(word[char]) != word.lastIndexOf(word[char])){
            return false
        }
    }
    return true
}
// console.log(hasUniqueChars("Wow"))       // True
// console.log(hasUniqueChars("Monday"))    // True
// console.log(hasUniqueChars("Moonday"))   // False


/* I believe the runtime complexity of my code is O(n). for loop is O(n) and indexOf() is a linear search = O(n) */
/* I belive the space complexity of my code is O(n) because the size of the word parameter can vary, it can have any number of different characters (all stored together in sequence). Strings and arrays are both data structures */






/* PANAGRAM SENTENCE
    - A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
    - Write a function to check a sentence to see if it is a pangram or not. */
function isPangram(sentence){
    /* 'declared an array named alpha, and fulfill it with integer that represent charCode from string and filling it with the length of 26.' */
    // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    /* 'by using map function i change all the number from every element in alpha become string and save it into variable name alphabet.' */
    // const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    // console.log(alphabet);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (const letter in alphabet){
        if(!sentence.includes(alphabet[letter])){
            return `False: this sentence is not a pangram because it does not include '${alphabet[letter]}'`
        }
    }
    return `True: this sentence is a pangram`
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!")) // True
// console.log(isPangram("I like cats, but not mice")) // False


/* I belive the runtime complexity of my code is O(n). includes() is O(n), dependent on the number of characters in the sentence (data type = string) parameter. The alphabet array in the function has a constant index of 26. The for loop will always loop up to 26 times, so runtime complexity is O(26) which reduces to O(1). But runtime complexity we care only about the largest/slowest part, so the answer is still O(n) */
/* I belive the space complexity of my code is O(n) because the size of the sentence parameter can vary, it can have any number of different characters (all stored together in sequence) */






/* LONGEST WORD
    Write a function, find_longest_word, that takes a list of words and returns the length of the longest one. */
let findLongestWord = function (words) {
    if (words.length === 1) {return words[0].length}
    let longestWord = undefined
    words.forEach((word, i) => {
        // console.log(`${word} ${i}`)
        if (words[i+1] !== undefined && word.length < words[i+1].length){
            longestWord = words[i+1]
        }
    })
    return longestWord.length
}
// console.log(findLongestWord(["word"])) // 4
// console.log(findLongestWord(["hi", "hey", "hello"])) // 5
// console.log(findLongestWord(["huh", "hi", "hoot", "wow", "wowzers", "boop"])) // 7


/* I belive the runtime complexity of my code O(n). forEach() is O(n) */
/* I belive the space complexity of my code is O(n) because the size of the words (data type = array) parameter can vary, it can have any number of elements */