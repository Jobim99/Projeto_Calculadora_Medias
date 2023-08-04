const form = document.getElementById('form-atividade')
const atividade = []
const notas = []
const notaMinima = parseFloat(prompt('Digite A Nota Mínima:'))
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!!`)
    }else {
        atividade.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? `<img src="img/festa.png" alt="emoji festa">` : `<img src="img/triste.png" alt="emoji festa">`}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal.toFixed(2) >= notaMinima ? `<span class="result aprovado">Aprovado</span>` : `<span class="result reprovado">Reprovado</span>`



}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    
    return somaDasNotas / notas.length
}