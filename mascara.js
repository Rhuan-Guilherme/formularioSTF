const input = document.querySelector("#local")

input.addEventListener("keypress", () =>{
    let inputLength = input.value.length
    console.log(inputLength)
    if (inputLength === 8){
        input.value += ` / `
    } else if (inputLength === 13){
        input.value += `° andar / sala `
    }
})

const patri = document.querySelector("#patrimonio")
patri.addEventListener("keypress", () =>{
    let patriLength = patri.value.length
    if (patriLength === 3){
        patri.value += `.`
    }
})