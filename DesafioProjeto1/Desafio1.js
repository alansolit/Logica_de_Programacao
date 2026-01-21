

const levels = ['Ferro','Bronze','Prata','Ouro','Diamante','Lendário','Imortal']
let wins = 42
let defeats = 11
let result = (wins - defeats)


function rankedCalc(wins, defeats){    

    if (result >= 1 && result <= 10) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[0])
    } 
    if (result >= 11 && result <= 20) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[1])    
    }
    if (result >= 21 && result <= 50) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[2])
    }
    if (result >= 51 && result <= 80) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[3])    
    }
    if (result >= 81 && result <= 90) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[4])    
    }
    if (result >= 91 && result <= 100) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[5])    
    }
    if (result >= 101 && result >= 101) {
        console.log('O herói tem saldo de vitórias: ' + result + ' E está no nível: ' + levels[6])    
    }
    else if(result == 0) {
      console.log('O jogador tem saldo de vitórias: ' + result + ' E não está em nenhum nível')
    }
}

rankedCalc(wins, defeats)