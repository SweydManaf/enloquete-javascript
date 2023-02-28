function countBs(word, char="B"){
    let occurences = 0
    for(let c = 0; c <= word.length; c++){
        if(word[c] === char){
            occurences++
        }
    }
    return occurences
}

function countChar(word, char){
    return countBs(word, char)
}

console.log(countBs("BBs"))
console.log(countChar('kakkerlak', 'k'))