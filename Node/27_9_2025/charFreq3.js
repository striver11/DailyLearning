function secretWord(words,secret){

    let secMap={}

    for(let i of secret){

        secMap[i]=(secMap[i]||0)+1;
    }
    console.log(secMap)

    function buldfre(word){
        const fre={}

        for(let i of word){
            fre[i]=(fre[i]||0)+1
        }
        return fre
    }

    for(const word of words){
        const wordCount=buldfre(word)

        console.log(wordCount)


        let valid=true

        for(let ch in secMap){
            if((wordCount[ch]||0)< secMap[ch]){
                valid=false;
                break
            }
        }

        if (valid) return word;
    }

    return "No match"
}

console.log(secretWord(["bonney", "bubble", "carrrot", "zack"], "cat")); // "carrrot"
// console.log(secretWord(["calculattor", "submarine", "banana"], "tac")); // "calculattor"
// console.log(secretWord(["book", "boo", "boooook", "rookie"], "ookb"));  // "book"