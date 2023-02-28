var size = 8
var tabuleiro = ""

for (var rows = 1; rows <= size; rows++){
    for (var columns = 1; columns <= size; columns++){
        if ((rows+columns) % 2 == 0) {
            tabuleiro += "#"
        } else{
            tabuleiro += " "
        }
    }
    tabuleiro += "\n"
}

console.log(tabuleiro)