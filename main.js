const form = document.querySelector("#form")
const botao = document.querySelector("#botao")

function validaSexo(form){
    valida = form.masculino.checked
    let sexo
    if (valida){
        sexo = "o senhor"
    } else{
        sexo = "a senhora"
    }
    return sexo
}

function validaRequisito(form){
    validar = form.requisicao.checked
    let requisito
    if (validar){
        requisito = "solicitando"
    } else{
        requisito = "informando"
    }
    return requisito
}

function createCard(sexo, requisitos, nome, login, local, ramal, patrimonio){
    
    return `
        <div class="card">
            <p class="mensagem">Prezados,<span>${sexo}</span> ${nome} entrou em contato ${requisitos} </p>
            <p class="nomeCard">Nome: ${nome}</p>
            <p class="loginCard">Login: ${login}</p>
            <p class="localCard">Local: ${local}</p>
            <p class="ramalCard">Ramal: ${ramal}</p>
            <p class="patrimonioCard">Patrimônio: ${patrimonio}</p>
            
        </div>
    `
    //<button id="btn">Completo</button>
}

botao.addEventListener("click", (e) =>{
    e.preventDefault()
    const nome = form.nome.value
    const login = form.login.value
    const local = form.local.value
    const ramal = form.ramal.value
    const patrimonio = form.patrimonio.value

    const requisito = validaRequisito(form)
    const sexo = validaSexo(form)

    const cards = document.querySelector("#cards").innerHTML += createCard(sexo, requisito, nome, login, local, ramal, patrimonio)

    form.reset()
})


//Código ainda não implementado (Em desesenvolvilvimento...)

// const btn = document.querySelector("#btn")
//     btn.addEventListener("click", (e) =>{
//         e.preventDefault()
//         const div = document.querySelector(".card")
//         console.log(div)
//         div += div.classList.add("cardVerde")
//     })