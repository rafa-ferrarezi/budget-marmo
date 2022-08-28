let teste = '<p>Bancada da Cuba de Cozinha de 200x60 </p>'

let show = document.querySelector('.display')

let tabela = document.querySelector('.tabela')

show.innerHTML = teste

// Inicio do app

let comprimentoBancada = 2
let larguraBancada = 0.6
let alturaSaia = 0.1
let larguraFaixa = 0.05
let alturaFrontao = 0.15

let quantidadeTampo = comprimentoBancada * larguraBancada

tabela.innerHTML +=
  '<th scope="row">1</th><td> Quantidade m² tampo: </td> <td> ' +
  quantidadeTampo +
  '</td>'

let faixaEngrosso = (3 * comprimentoBancada + 3 * larguraBancada) * larguraFaixa

tabela.innerHTML +=
  '<th scope="row">2</th><td> Faixa:: </td> <td> ' + faixaEngrosso + '</td>'

let saiaBancada = (comprimentoBancada + larguraBancada) * alturaSaia

tabela.innerHTML +=
  '<th scope="row">3</th><td> Saia: </td> <td> ' + saiaBancada + '</td>'

let meiaEsquadria = saiaBancada / alturaSaia

tabela.innerHTML +=
  '<th scope="row">4</th><td> Meia Esquadria: </td> <td> ' +
  meiaEsquadria +
  '</td>'

let frontaoBancada = meiaEsquadria * alturaFrontao

tabela.innerHTML +=
  '<th scope="row">5</th><td> Frontão: </td> <td> ' + frontaoBancada + '</td>'

let rebaixoFrontao = frontaoBancada / alturaFrontao

tabela.innerHTML +=
  '<th scope="row">6</th><td> Rebaixo: </td> <td> ' + rebaixoFrontao + '</td>'
