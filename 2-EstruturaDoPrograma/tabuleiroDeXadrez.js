var size = 8
var tabuleiro = ""

for (var rows = 1; rows <= size; rows++){
    if (rows % 2 == 0) {
        for (var columns = 1; columns <= size; columns++){
            if (columns % 2 == 0) {
                tabuleiro += "#"
            } else{
                tabuleiro += " "
            }
        }
    } else{
        for (var columns = 1; columns <= size; columns++){
            if (columns % 2 != 0) {
                tabuleiro += "#"
            } else{
                tabuleiro += " "
            }
        }
    }
    tabuleiro += "\n"
}

console.log(tabuleiro)