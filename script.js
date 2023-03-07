function permiteAdmin () {

let resposta = prompt('Qual é o tipo de acesso?').toLowerCase()

while (resposta !== 'a') {
    console.log('Acesso negado')
    resposta = prompt('Qual é o tipo de acesso?').toLowerCase()
}

console.log('Bem vindo, Administrador')

}

permiteAdmin()