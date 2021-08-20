//  Attempt at solving problem 1) Sum Zero; after doing it, it definitely has a time complexity of greater than linear. I'm thinking O(2n), because even though it loops through the same array twice, and not two different arrays, the length of the array can exponentially make the runtime longer.

// The space complexity of this first one I think is O(n), because the size needed is only determined by the length of the array. The for loop doesn't push anything, so the size of it doesn't really change in the operations, and the array length will stay the same.

const nums = [1, 2, 3]
const nums2 = [1, 2, 3, -2]

const sumZero = (arrOfNums) => {
    for (let i = 0; i < arrOfNums.length; i++) {
        for (let j = 0; j < arrOfNums.length; j++) {
            if (arrOfNums[i] + arrOfNums[j] === 0) {
                return true
            } else {
                // continue
            }
        }
    } return false
}


console.log(sumZero(nums))
console.log(sumZero(nums2))



// Attempt at 2) Unique characters; I would say this is an exponential time complexity again, as it will grow larger and larger, as the string is longer.

// The space complexity, I believe will also just be O(n), because it is determined by the size of the string, which will remain consistent. There is a variable established in the function of the string, but it will only be the same length as the string itself, so the size dedication will be proportional.

const myStr = "Monday"
const myStr2 = "Moonday"

const uChar = (str) => {
    const lcStr = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        for (let j = 1; j < str.length; j++){
            if (i !== j && lcStr[i] === lcStr[j]){
                return false
            }
        }
    } return true
}

console.log(uChar(myStr))
console.log(uChar(myStr2))


// Attempt at 3) Pangram Sentence;

// This ones time complexity will be O(n^2) I believe, because there is a forloop with an if statement. The best case scenario on the time is that it will be linear if the forloop only goes through the string once and never pushes to the array. But worst case scenario, the loop will go through every letter of the string, have to push it to the array which makes the arrach longer, which increases the length of time needed for the next letter of the string to check if the letter already exists in the array. I don't think its exponential, because it isn't necessarily multiplying itself, but I could be wrong on that.

// The space complexity I think will, at worst cast scenario be O(n), because it will need to store the string, and worst case the string twice, if every letter is unique. However, because it will stop storing items to the array after all 26 letters, it could be O(log n), which I think is worse than constant, but means that because the letters array will always be <=26, it can't grow any larger than that. Honestly, the log space/time complexity does confuse me a little so I could be wrong.


const isPangram = (str) => {
    // const lStr = str.replace(/ /g, "").toLowerCase()
    const lStr = str.toLowerCase()
    const excludes = [".", ",", "!", " "]
    let letters = []

    for (let i = 0; i < lStr.length; i++) {
       if (letters.includes(lStr[i]) === false && excludes.includes(lStr[i]) === false){
           letters.push(lStr[i])
       }
    }
    return (letters.length === 26)
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));


// Attempt at 4) Longest Word

// I believe the time complexity of this is O(n) linear, because it is determined with the array length. All of the operations happen once per array element, meaning the time will grow in proportion to the array length.

// The size complexity will also be O(n), I believe. Because the size is determined by the length of the original array, which will then be duplicated as the new array in the function is added to for every iteration. Meaning it will always be proportional to the size fo the original array.

const findLongestWord = (wordArr) => {
    let wordLengths = []
    
    for (let i = 0; i < wordArr.length; i++){
        wordLengths.push(wordArr[i].length)
    }
    return(Math.max(... wordLengths))
};

console.log(findLongestWord(["hi", "hello"]))
