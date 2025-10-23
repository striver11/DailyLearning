function findSecretWord(words, secret) {
    // Helper function to count character frequencies in a string
    function countCharacters(str) {
        const charCount = {};
        for (const char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    }

    const secretCharCounts = countCharacters(secret);

    for (const word of words) {
        const wordCharCounts = countCharacters(word);
        let match = true;

        for (const char in secretCharCounts) {
            if (!(char in wordCharCounts) || wordCharCounts[char] < secretCharCounts[char]) {
                match = false;
                break;
            }
        }

        if (match) {
            return word;
        }
    }

    return "No Match";
}

console.log(findSecretWord(["bonney", "bubble", "carrrot", "zack"], "cat"));
// "carrrot"

console.log(findSecretWord(["calculattor", "submarine", "banana"], "tac"));
// "calculattor"

console.log(findSecretWord(["book", "boo", "boooook", "rookie"], "ookb"));
// "book"

console.log(findSecretWord([], "abc"));
// "No Match"

console.log(findSecretWord(["cabbage", "cab", "cabb"], "cabb"));
// "cabb"
