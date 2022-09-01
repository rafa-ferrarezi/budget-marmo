// Arredondar valor
function arredondar(valor) {
  return Math.round(valor * 100) / 100
}

let show = document.querySelector('.display')
let tabela = document.querySelector('.tabela')

// Inicio do app

let comprimentoBancada
let larguraBancada
let alturaSaia
let larguraFaixa
let alturaFrontao

function adicionarLancamento() {
  const comprimento1 = parseFloat(document.getElementById('comprimento').value)
  const largura1 = parseFloat(document.getElementById('largura').value)
  const alturasaia1 = parseFloat(document.getElementById('alturaSa').value)
  const alturafrontao1 = parseFloat(document.getElementById('alturaFro').value)
  comprimentoBancada = comprimento1 / 100
  larguraBancada = largura1 / 100
  alturaSaia = alturasaia1 / 100
  alturaFrontao = alturafrontao1 / 100
  const quantidadeTampo = comprimentoBancada * larguraBancada
  console.log(quantidadeTampo)
}

// let tabela = document.querySelector('.tabela')
// const teste = `<h2>Bancada de ${comprimentoBancada}x${larguraBancada} com Saia de ${alturaSaia} e com Frontão de ${alturaFrontao} </h2>`

// show.innerHTML = teste

// tabela.innerHTML +=
//   '<th scope="row">1</th><td> Tampo: </td> <td> ' + quantidadeTampo + '</td>'
// let faixaEngrosso = arredondar(
//   (3 * comprimentoBancada + 3 * larguraBancada) * larguraFaixa
// )

// tabela.innerHTML +=
//   '<th scope="row">2</th><td> Faixa: </td> <td> ' + faixaEngrosso + '</td>'

// let saiaBancada = arredondar(
//   (comprimentoBancada + larguraBancada) * alturaSaia
// )

// tabela.innerHTML +=
//   '<th scope="row">3</th><td> Saia: </td> <td> ' + saiaBancada + '</td>'

// let meiaEsquadria = arredondar(saiaBancada / alturaSaia)

// tabela.innerHTML +=
//   '<th scope="row">4</th><td> Meia Esquadria: </td> <td> ' +
//   meiaEsquadria +
//   '</td>'

// let frontaoBancada = arredondar(meiaEsquadria * alturaFrontao)

// tabela.innerHTML +=
//   '<th scope="row">5</th><td> Frontão: </td> <td> ' + frontaoBancada + '</td>'

// let rebaixoFrontao = arredondar(frontaoBancada / alturaFrontao)

// tabela.innerHTML +=
//   '<th scope="row">6</th><td> Rebaixo: </td> <td> ' + rebaixoFrontao + '</td>'

// let totalMaterial = arredondar(
//   quantidadeTampo + faixaEngrosso + saiaBancada + frontaoBancada
// )

// tabela.innerHTML +=
//   '<th scope="row">#</th><td> Total de material: </td> <td> ' +
//   totalMaterial +
//   ' m² </td>'
// console.log(m)
// return quantidadeTampo

// const botao = document.getElementById('botao')
// botao.addEventListener('click', adicionarLancamento)
// stop
