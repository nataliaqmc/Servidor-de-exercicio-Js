const axios = require("axios");
const options = {
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
}
function soma(entrada,head){
  resultado = entrada['soma']['entrada']['a'] + entrada['soma']['entrada']['b']
  console.log('soma: ',resultado)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/soma',{ "resposta": resultado}, head)
    .then((response)=> console.log(response.data))
  return resultado
}
function tamanhoString(entrada,head){
  resultado = entrada['tamanho-string']['entrada']['string']
  console.log('tamanho string: ',resultado.length)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string',{ "resposta": resultado.length}, head)
    .then((response)=> console.log(response.data))
  return resultado.length
}
function nomeUsuario(entrada,head){
  resultado = entrada['nome-do-usuario']['entrada']['email']
  r = resultado.split('@')
  console.log('nome usuario: ',r[0])
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario',{ "resposta": r[0]}, head)
    .then((response)=> console.log(response.data))
  return r[0]
}
function jacaWars(entrada,head){
  velocidade = entrada['jaca-wars']['entrada']['v']
  theta = entrada['jaca-wars']['entrada']['theta']
  resultado = ((velocidade*velocidade)*Math.sin(2*(theta*Math.PI/180)))/9.8
  if (resultado <= 98) {
    r = -1
  }
  else if (resultado >98 && resultado <102) {
    r = 0
  } 
  else {
    r = 1
  }
  console.log('jaca wars: ', r, resultado)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function anoBissexto(entrada,head){
  ano = entrada['ano-bissexto']['entrada']['ano']
  if (ano % 4 == 0 &&  ano % 100 != 0 || ano % 400 == 0) {
    r = true
  }
  else {
    r = false
  }
  console.log('ano bissexto: ',ano, r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function volumePizza(entrada,head){
  raio = entrada['volume-da-pizza']['entrada']['z']
  altura = entrada['volume-da-pizza']['entrada']['a']
  r = Math.round(Math.PI*raio*raio*altura)
  console.log('volume da pizza: ',r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function mru(entrada,head){
  s0 = entrada['mru']['entrada']['s0']
  v = entrada['mru']['entrada']['v']
  t = entrada['mru']['entrada']['t']
  r = s0+v*t
  console.log('mru: ',r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/mru',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function inverteString(entrada,head){
  resultado = entrada['inverte-string']['entrada']['string']
  r = resultado.split("").reverse().join("")
  console.log('inverte string: ',r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/inverte-string',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function somaValores(entrada,head){
  resultado = entrada['soma-valores']['entrada']['objeto']
  index = 0
  r=0
  for (k in resultado) {
    v = parseInt(resultado[k])
    r +=v
  }
  console.log('soma valores: ',r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-valores',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function nEsimoPrimo(entrada,head){
  resultado = entrada['n-esimo-primo']['entrada']['n']
  console.log('n esimo: ',resultado)
  i = 2
  primo = []
  while (primo.length < parseInt(resultado)){
    if (((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0))|| (( i == 2 )|| (i == 3) || (i == 5) || (i == 7))){
      primo.push(i)
      for (p in primo){
        if (i % primo[p] == 0 && i != primo[p]) {
          primo.length = primo.length - 1
          break
        }
      }
    }
    i += 1
  }
  r = String(primo[primo.length-1])
  console.log(primo)
  console.log('primo ultimo = ', r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function maiorPrefixoComum(entrada,head){
  resultado = entrada['maior-prefixo-comum']['entrada']['strings']
  index = 0
  r=0
  prefixo = ''
  
  console.log('soma valores: ',resultado,r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function somaSegundoMaiorMenor(entrada,head){
  resultado = entrada['soma-segundo-maior-e-menor-numeros']['entrada']['numeros']
  r = resultado.sort((a, b) => a-b);
  segundoMaior = r[r.length-2]
  segundoMenor = r[1]
  r = segundoMenor+segundoMaior
  console.log('Segundo maior = ', segundoMaior)
  console.log('SEGUNDO MENOR = ', segundoMenor)
  console.log('Total =  ',r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function contaPalindromos(entrada,head){
  resultado = entrada['conta-palindromos']['entrada']['palavras']
  r=0
  for (k in resultado) {
    tamanho = resultado[k].length
    palavra = resultado[k]
    inversa = resultado[k].split("").reverse().join("")
    if (palavra == inversa ){
      r += 1
    }
  }
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}
function somaStringsInts(entrada,head){
  resultado = entrada['soma-de-strings-de-ints']['entrada']['strings']
  result = resultado.map((n) => parseInt(n))
  r = result.reduce((a,b) => a+b, 0)
  console.log('SOMA STRINGS INTS = ', r)
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints',{ "resposta": r}, head)
    .then((response)=> console.log(response.data))
  return r
}

async function somaRequisicoes(entrada,head) {
  resultado = entrada['soma-com-requisicoes']['entrada']['endpoints']
  total = 0
  for (i in resultado){
    promessa = axios.get(resultado[i],head).then((response) => {console.log(response.data), (total += parseInt((response.data)))})
    r = await promessa
  }
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes',{ "resposta": total}, head)
    .then((response)=> console.log(response.data))
  return r
}
async function cacaTesouro(entrada,head){
  resultado = entrada['caca-ao-tesouro']['entrada']['inicio']
  console.log('caça tesouro: ',resultado)
  total = 0
  promessa = axios.get(resultado,head).then((response) => {console.log(response.data)})
  r = await promessa
  axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro',{ "resposta": total}, head)
    .then((response)=> console.log(response.data));
    
  return r
}
function exercicios(accessToken){
  const exercicio = {
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': ('Bearer '+accessToken)}
  };
  axios
    .get('https://tecweb-js.insper-comp.com.br/exercicio', exercicio)
    .then((response) => {console.log(response.data), 
                          soma(response.data, exercicio),
                          tamanhoString(response.data, exercicio),
                          nomeUsuario(response.data, exercicio),
                          jacaWars(response.data, exercicio),
                          anoBissexto(response.data, exercicio),
                          volumePizza(response.data, exercicio),
                          mru(response.data, exercicio),
                          inverteString(response.data, exercicio),
                          somaValores(response.data, exercicio),
                          somaStringsInts(response.data, exercicio),
                          contaPalindromos(response.data, exercicio),
                          somaSegundoMaiorMenor(response.data, exercicio),
                          nEsimoPrimo(response.data, exercicio),
                          maiorPrefixoComum(response.data, exercicio),
                          somaRequisicoes(response.data, exercicio)
                          });
  perguntas = exercicio
  return exercicio
}



var accessToken = {}
axios
  .post('https://tecweb-js.insper-comp.com.br/token', {username: 'nataliaqmc'}, options)
  .then((response) => {console.log(response.data), accessToken=(response.data['accessToken']),exercicios(accessToken)});


