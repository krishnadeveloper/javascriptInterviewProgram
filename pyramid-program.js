/**
 * 
 * @param {*} Snipet 
 *     
 * 1
   212
  32123
 4321234
543212345
 */

function drawNewRR(userInput){
    let twoArr = [];
    for(let i = userInput; i>=1; i--){
        twoArr.push(i)
    }
    return twoArr.join("")
}

function drawPeramid(userInput){
    // Checkstring
    if(isNaN(userInput)){
        console.log('Please enter valid input')
        return 
    }
    // input must be between 1-9 > check
    if(userInput>0 && userInput<=9){
        for(let i = 1; i<=userInput; i++){
           let abd = drawNewRR(i)
           let pqr = drawNewRR(i).split('').reverse().join('').slice(1, this.length)
           let addSpace = ' '.repeat(userInput-i)
           console.log(`${addSpace}${abd}${pqr}${addSpace}`)   
        }
    }
    else {
        console.log('Please enter value between 1-9')
        return 
    }
}

drawPeramid(9)
