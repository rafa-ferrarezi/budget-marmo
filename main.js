// Arredondar valor
function arredondar(valor) {
  return Math.round(valor * 100) / 100
}

let teste = '<p>Bancada da Cuba de Cozinha de 200x60 </p>'

let show = document.querySelector('.display')

let tabela = document.querySelector('.tabela')

show.innerHTML = teste
// exemplos:
// uma bancada da cozinha de 200 por 60 no granito preto com acabamento meia esquadria com saia de 10cm e frontao, com colagem da cuba tramontina numero 2
// quantidade, tipo, ambiente, tamanho(comprimente, largura), material(nome, tipo, valor), acabamento(tipo, tamanhoSaia, valor), frontao(temOuNaoTem, alturaFrontao, temRebaixo, quantidadeRebaixo, valorRebaixo), colagem(simouNao, quantidadeColagem, Valor), cuba(simouNao, quantidade, nome, marca)

// bancada da area de lazer no granito verde com acabamento simples de 4cm e frontao de 15cm, com colagem da cuba tramontina e corte do cooktop

class Produto {
  constructor(nome, tipo, acabamento) {}
}

// Inicio do app

let comprimentoBancada = 3
let larguraBancada = 0.62
let alturaSaia = 0.1
let larguraFaixa = 0.05
let alturaFrontao = 0.15

let quantidadeTampo = arredondar(comprimentoBancada * larguraBancada)

tabela.innerHTML +=
  '<th scope="row">1</th><td> Tampo: </td> <td> ' + quantidadeTampo + '</td>'

let faixaEngrosso = arredondar(
  (3 * comprimentoBancada + 3 * larguraBancada) * larguraFaixa
)

tabela.innerHTML +=
  '<th scope="row">2</th><td> Faixa: </td> <td> ' + faixaEngrosso + '</td>'

let saiaBancada = arredondar((comprimentoBancada + larguraBancada) * alturaSaia)

tabela.innerHTML +=
  '<th scope="row">3</th><td> Saia: </td> <td> ' + saiaBancada + '</td>'

let meiaEsquadria = arredondar(saiaBancada / alturaSaia)

tabela.innerHTML +=
  '<th scope="row">4</th><td> Meia Esquadria: </td> <td> ' +
  meiaEsquadria +
  '</td>'

let frontaoBancada = arredondar(meiaEsquadria * alturaFrontao)

tabela.innerHTML +=
  '<th scope="row">5</th><td> Frontão: </td> <td> ' + frontaoBancada + '</td>'

let rebaixoFrontao = arredondar(frontaoBancada / alturaFrontao)

tabela.innerHTML +=
  '<th scope="row">6</th><td> Rebaixo: </td> <td> ' + rebaixoFrontao + '</td>'

let totalMaterial = arredondar(
  quantidadeTampo + faixaEngrosso + saiaBancada + frontaoBancada
)

tabela.innerHTML +=
  '<th scope="row">#</th><td> Total de material: </td> <td> ' +
  totalMaterial +
  ' m² </td>'
