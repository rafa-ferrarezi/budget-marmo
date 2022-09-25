const display = document.getElementById('display')

// display.innerText = 'Hello world!'

// Arredondar valor
function arredondar(valor) {
  return Math.round(valor * 100) / 100
}

// Add elementos
function addElement(parent, elementType, text) {
  const element = document.createElement(elementType)
  if (text !== '' && text !== undefined && text !== null) {
    element.innerText = text
  }
  parent.appendChild(element)
}

function formatarDinheiro(valor) {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  }).format(valor)
}

function calcularValor(quantidade) {
  return Math.round(quantidade * precoMaterial * 100) / 100
}

class BancadaComMeiaEsquadria {
  constructor(
    nomeBancada,
    comprimentoBancada,
    larguraBancada,
    metrosBancada,
    larguraFaixa,
    comprimentoFaixa,
    metrosFaixa,
    valorFaixa,
    valorBancada,
    materialBancada,
    precoMaterial,
    metrosTotal,
    valorMetrosTotal,
    Total
  ) {
    this.nomeBancada = nomeBancada
    this.comprimentoBancada = comprimentoBancada
    this.larguraBancada = larguraBancada
    this.metrosBancada = metrosBancada
    this.larguraFaixa = larguraFaixa
    this.comprimentoFaixa = comprimentoFaixa
    this.metrosFaixa = metrosFaixa
    this.valorFaixa = valorFaixa
    this.valorBancada = valorBancada
    this.materialBancada = materialBancada
    this.precoMaterial = precoMaterial
    this.metrosTotal = metrosTotal
    this.valorMetrosTotal = valorMetrosTotal
    this.Total = Total
  }
}

class AcabamentoMeiaEsquadria {
  constructor(
    nomeAcabamentoSaia,
    alturaSaia,
    comprimentoSaia,
    metrosSaia,
    valorMetrosSaia,
    metrosMeiaEsquadria,
    precoMeiaEsquadria,
    valorMeiaEsquadria,
    totalSaia
  ) {
    this.nomeAcabamentoSaia = nomeAcabamentoSaia
    this.alturaSaia = alturaSaia
    this.comprimentoSaia = comprimentoSaia
    this.metrosSaia = metrosSaia
    this.valorMetrosSaia = valorMetrosSaia
    this.metrosMeiaEsquadria = metrosMeiaEsquadria
    this.precoMeiaEsquadria = precoMeiaEsquadria
    this.valorMeiaEsquadria = valorMeiaEsquadria
    this.totalSaia = totalSaia
  }
}

class AcabamentoFrontao {
  constructor(
    nomeAcabamentoFrontao,
    alturaFrontao,
    comprimentoFrontao,
    metrosFrontao,
    valorMetrosFrontao,
    metrosRebaixo,
    precoRebaixo,
    valorRebaixo,
    totalFrontao
  ) {
    this.nomeAcabamentoFrontao = nomeAcabamentoFrontao
    this.alturaFrontao = alturaFrontao
    this.comprimentoFrontao = comprimentoFrontao
    this.metrosFrontao = metrosFrontao
    this.valorMetrosFrontao = valorMetrosFrontao
    this.metrosRebaixo = metrosRebaixo
    this.precoRebaixo = precoRebaixo
    this.valorRebaixo = valorRebaixo
    this.totalFrontao = totalFrontao
  }
}
function bancadaComDoisLados() {
  //materia prima
  materialBancada = 'Granito Preto São Gabriel'
  precoMaterial = 610

  //info da bancada em m
  nomeBancada = 'Bancada da Pia'
  comprimentoBancada = 2
  larguraBancada = 0.6
  alturaFrontao = 0.1
  alturaSaia = 0.1
  larguraFaixa = 0.05
  nomeAcabamentoSaia = '1/2 Esquadria'
  nomeAcabamentoFrontao = 'Rebaixo'

  //preco dos acabamentos
  precoMeiaEsquadria = 78
  precoRebaixo = 42

  //calculando --------------------------------------- //
  metrosBancada = arredondar(comprimentoBancada * larguraBancada)
  valorBancada = calcularValor(metrosBancada)
  console.log('Bancada: ', metrosBancada)
  console.log('Valor: ', valorBancada)

  comprimentoFaixa = arredondar(3 * (comprimentoBancada + larguraBancada))
  metrosFaixa = arredondar(comprimentoFaixa * larguraFaixa)
  valorFaixa = calcularValor(metrosFaixa)
  console.log('Faixa: ', metrosFaixa)
  console.log('Valor: ', valorFaixa)

  comprimentoSaia = arredondar(comprimentoBancada + larguraBancada)
  metrosSaia = arredondar(comprimentoSaia * alturaSaia)
  valorMetrosSaia = calcularValor(metrosSaia)
  metrosMeiaEsquadria = arredondar(comprimentoBancada + larguraBancada)
  valorMeiaEsquadria = arredondar(metrosMeiaEsquadria * precoMeiaEsquadria)
  totalSaia = arredondar(valorMeiaEsquadria + valorMetrosSaia)
  console.log('Saia: ', metrosSaia)
  console.log('Valor: ', valorMetrosSaia)
  console.log('Meia Esquadria: ', metrosMeiaEsquadria)
  console.log('Valor: ', valorMeiaEsquadria)
  console.log('Total Saia: ', totalSaia)

  comprimentoFrontao = arredondar(comprimentoBancada + larguraBancada)
  metrosFrontao = arredondar(comprimentoFrontao * alturaFrontao)
  valorMetrosFrontao = calcularValor(metrosFrontao)
  metrosRebaixo = arredondar(comprimentoBancada + larguraBancada)
  valorRebaixo = arredondar(metrosRebaixo * precoRebaixo)
  totalFrontao = arredondar(valorMetrosFrontao + valorRebaixo)
  console.log('Frontao: ', metrosFrontao)
  console.log('Valor: ', valorMetrosFrontao)
  console.log('Rebaixo: ', metrosRebaixo)
  console.log('Valor: ', valorRebaixo)
  console.log('Total Frontao: ', totalFrontao)

  metrosTotal = arredondar(
    metrosBancada + metrosFaixa + metrosFrontao + metrosSaia
  )
  valorMetrosTotal = calcularValor(metrosTotal)

  Total = arredondar(valorMetrosTotal + valorMeiaEsquadria + valorRebaixo)

  console.log('Metragem Total: ', metrosTotal)
  console.log('Valor da metragem: ', valorMetrosTotal)
  console.log('Total da Bancada: ', Total)

  const tabelaOrcamento = document.createElement('table')
  tabelaOrcamento.className = 'table table-striped table-bordered'
  const tabelaCabecalho = document.createElement('thead')
  tabelaCabecalho.className = 'thead-dark'

  const linhaTitulo = document.createElement('tr')

  addElement(linhaTitulo, 'th', 'Material')
  addElement(linhaTitulo, 'th', 'Descrição')
  addElement(linhaTitulo, 'th', 'Comp')
  addElement(linhaTitulo, 'th', 'Larg')
  addElement(linhaTitulo, 'th', 'Área')
  addElement(linhaTitulo, 'th', 'Preço/m²')
  addElement(linhaTitulo, 'th', 'Valor')
  addElement(linhaTitulo, 'th', 'Acabemnto')
  addElement(linhaTitulo, 'th', 'Metros')
  addElement(linhaTitulo, 'th', 'Preco/ml')
  addElement(linhaTitulo, 'th', 'Valor')
  addElement(linhaTitulo, 'th', 'Total')
  tabelaOrcamento.appendChild(tabelaCabecalho)
  tabelaCabecalho.appendChild(linhaTitulo)

  const linhaBancada = document.createElement('tr')
  addElement(linhaBancada, 'th', materialBancada)
  addElement(linhaBancada, 'td', nomeBancada)
  addElement(linhaBancada, 'td', comprimentoBancada)
  addElement(linhaBancada, 'td', larguraBancada)
  addElement(linhaBancada, 'td', metrosBancada)
  addElement(linhaBancada, 'td', formatarDinheiro(precoMaterial))
  addElement(linhaBancada, 'td', formatarDinheiro(valorBancada))
  addElement(linhaBancada, 'td', '')
  addElement(linhaBancada, 'td', '')
  addElement(linhaBancada, 'td', '')
  addElement(linhaBancada, 'td', '')
  addElement(linhaBancada, 'td', formatarDinheiro(valorBancada))
  tabelaOrcamento.appendChild(linhaBancada)

  const linhaFaixa = document.createElement('tr')
  addElement(linhaFaixa, 'td', materialBancada)
  addElement(linhaFaixa, 'td', 'Faixa')
  addElement(linhaFaixa, 'td', comprimentoFaixa)
  addElement(linhaFaixa, 'td', larguraFaixa)
  addElement(linhaFaixa, 'td', metrosFaixa)
  addElement(linhaFaixa, 'td', formatarDinheiro(precoMaterial))
  addElement(linhaFaixa, 'td', formatarDinheiro(valorFaixa))
  addElement(linhaFaixa, 'td', '')
  addElement(linhaFaixa, 'td', '')
  addElement(linhaFaixa, 'td', '')
  addElement(linhaFaixa, 'td', '')
  addElement(linhaFaixa, 'td', formatarDinheiro(valorFaixa))
  tabelaOrcamento.appendChild(linhaFaixa)

  const linhaSaia = document.createElement('tr')
  addElement(linhaSaia, 'td', materialBancada)
  addElement(linhaSaia, 'td', 'Saia')
  addElement(linhaSaia, 'td', comprimentoSaia)
  addElement(linhaSaia, 'td', alturaSaia)
  addElement(linhaSaia, 'td', metrosSaia)
  addElement(linhaSaia, 'td', formatarDinheiro(precoMaterial))
  addElement(linhaSaia, 'td', formatarDinheiro(valorMetrosSaia))
  addElement(linhaSaia, 'td', nomeAcabamentoSaia)
  addElement(linhaSaia, 'td', metrosMeiaEsquadria)
  addElement(linhaSaia, 'td', formatarDinheiro(precoMeiaEsquadria))
  addElement(linhaSaia, 'td', formatarDinheiro(valorMeiaEsquadria))
  addElement(linhaSaia, 'td', formatarDinheiro(totalSaia))
  tabelaOrcamento.appendChild(linhaSaia)

  const linhaFrontao = document.createElement('tr')
  addElement(linhaFrontao, 'td', materialBancada)
  addElement(linhaFrontao, 'td', 'Frontao')
  addElement(linhaFrontao, 'td', comprimentoFrontao)
  addElement(linhaFrontao, 'td', alturaFrontao)
  addElement(linhaFrontao, 'td', metrosFrontao)
  addElement(linhaFrontao, 'td', formatarDinheiro(precoMaterial))
  addElement(linhaFrontao, 'td', formatarDinheiro(valorMetrosFrontao))
  addElement(linhaFrontao, 'td', nomeAcabamentoFrontao)
  addElement(linhaFrontao, 'td', metrosRebaixo)
  addElement(linhaFrontao, 'td', formatarDinheiro(precoRebaixo))
  addElement(linhaFrontao, 'td', formatarDinheiro(valorRebaixo))
  addElement(linhaFrontao, 'td', formatarDinheiro(totalFrontao))
  tabelaOrcamento.appendChild(linhaFrontao)

  display.appendChild(tabelaOrcamento)
  const mostraTotal = document.createElement('div')
  addElement(mostraTotal, 'h1', 'Total da Bancada: ')
  addElement(mostraTotal, 'h1', formatarDinheiro(Total))
  display.appendChild(mostraTotal)
}

bancadaComDoisLados()

{
  /* <table class="table table-striped table-bordered tabela">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Material</th>
          <th scope="col">Descrição</th>
          <th scope="col">QT</th>
          <th scope="col">Comprimento</th>
          <th scope="col">Largura</th>
          <th scope="col">Área</th>
          <th scope="col">Preço/m²</th>
          <th scope="col">Valor</th>
          <th scope="col">Acabamento</th>
          <th scope="col">QT</th>
          <th scope="col">Preço/ml</th>
          <th scope="col">Valor</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>GRANITO PRETO SÃO GABRIEL</td>
          <td> <strong>BANCADA DA PIA </strong></td>
          <td>1</td>
          <td>2,00</td>
          <td>0,60</td>
          <td>1,20</td>
          <td>R$ 610,00</td>
          <td>R$ 732,00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>R$ 732,0 0</td>
        </tr> */
}
