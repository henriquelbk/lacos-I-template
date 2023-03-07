function permiteAdmin () {

let resposta = prompt('Qual é o tipo de acesso?').toLowerCase()

while (resposta !== 'a') {
    console.log('Acesso negado')
    resposta = prompt('Qual é o tipo de acesso?').toLowerCase()
}

console.log('Bem vindo, Administrador')

}

permiteAdmin()

for(let i = 1; i <= 10; i++){
	console.log(`2 x ${i} = ${2*i}`)
}

const arrays = ['cds', 'oiwsh', ',', '4']

for(i = 0; i <= 4; i++){
    const maiuscula = arrays[i].toUpperCase()
    console.log(maiuscula)
}