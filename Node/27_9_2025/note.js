function find(words, note) {
    // Helper: check if a word can be formed from note letters without reusing letters
    function canForm(word, note) {
        const noteCount = {};
        for (const char of note) noteCount[char] = (noteCount[char] || 0) + 1;
        console.log(noteCount)
        for (const char of word) {
            if (!noteCount[char]) return false; // letter not available or already used
            noteCount[char]--;
        }
        console.log(noteCount)
        return true;
    }

    for (const word of words) {
        if (canForm(word, note)) return word;
    }
    
    return "-";
}

// Test cases
const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"];

console.log(find(words, "ctay"));            // "cat"
// console.log(find(words, "bcanihjsrrrferet")); // "cat"
// console.log(find(words, "tbaykkjlga"));      // "-"
// console.log(find(words, "bbbblkkjbaby"));    // "baby"
// console.log(find(words, "dad"));             // "-"
// console.log(find(words, "breadmaking"));     // "bird"
// console.log(find(words, "dadaa"));           // "dada"
