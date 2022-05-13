const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

const lottoNumbers = []
const colors = ["tomato", "teal", "orange", "purple", "blue"]

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number / 10)
    
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}

drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
    console.log(lottoNumbers)
})

resetButton.addEventListener("click", function(){
    numbersDiv.innerHTML = ""
    //innerHTML 요소에 담겨있는 html코드를 가져옴, 위의 코드는 
    // 코드를 다 가져와서 비워버리는 것
    lottoNumbers.splice(0, 6)
})