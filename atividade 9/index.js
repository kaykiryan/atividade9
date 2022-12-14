 const calcularMultiplicaçao = function(){
     let primeiroNumero = prompt("informe um numero inteiro")
   let segundoNumero = prompt("informe outro numero inteiro ")
     let multiplicacao = parseInt(primeiroNumero) * parseInt(segundoNumero)
     alert("seu resultado é " + multiplicacao)
 }

 const CalcularPotencia = function(){
     let base = prompt("informe um numero base")
     let expoente = prompt("informe outro numero expoente ")
     let potencia = Math.pow(parseInt(base), parseInt(expoente))
    alert("seu resultado é " + potencia)
    
   
 }
 function Data () {
 let nome=prompt("digite seu nome ")
 let idade=prompt("digite sua idade")
let data=prompt("digite sua data de nascimento")
 alert("voce nasceu em"+data)
  alert("seu nome é "+nome)
   alert("sua idade é"+idade)
   const dia = String(data.getdate().padstart(2,  '0')) //1-> 01
   const mes= String(data.getmonth()+ 1).padstart(2,  '0') // jan=0,3 -> 03
  const ano= data= data.getfullyear()// 2022
  const dataAtual = $(dia)/$(mes)/$(ano)
 console.log(dataAtual)

  }
  alert(Data())




     var num1 =Number(prompt ("digite seu saldo "))
     var num2 = Number(prompt (" digite o valor do produto") )
     const calcularsoma =  soma ()
     function soma (){
     if(num1<num2){
         return alert ("saldo insuficiente")
     }
     var res = num1 - num2
     alert ("seu resultado e "+res)
    
     }
    
    
     let num7 = prompt ("informe o primeiro nummero ")
     let num5 = prompt ("informe o segundo numero")
     let num3 = prompt ("informeo terceiro numero ")
     let num4 = prompt ("informe o quarto numero ")
     let soma2 = Number(num7)+  Number(num5)+  Number(num3) +  Number(num4)
     alert("seu resultado é " + soma2)
     alert ("informe novamente mais 4 numeros ")
     let num8 = prompt ("informe o primeiro nummero ")
     let num6 = prompt ("informe o segundo numero")
     let num9 = prompt ("informeo terceiro numero ")
    let num10 = prompt ("informe o quarto numero ")
    var resultado = num8 + num6 +num9 + num10 /4
     alert ("sua media é, " + resultado)
     var quantidadeDeNumeros = prompt ("Informe a quantidade de números a serem informados")
    console.log(quantidadeDeNumeros)
    
     var soma3 = 0
    
     for(var i = 0; i < Number(quantidadeDeNumeros); i++) {
    
    var numeroInformado = prompt("Informe o número")
     soma3 = soma3 + Number(numeroInformado)
    
    
    }
    
     alert("A soma é " + soma3)
     alert("A média é " + soma3 / quantidadeDeNumeros) 
    
    
    
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    
    function somar() {
    
       var N1 = Number(n1.value)
       var N2 = Number(n2.value)
       resultado.innerHTML = N1 + N2
    }
    
    function somar() {  

        var N1 = Number(n1.value)
        var N2 = Number(n2.value)
        resultado.innerHTML = N1 + N2
     }
 
     function subtrair() {
 
 var N1 = Number(n1.value)
 var N2 = Number(n2.value)
 resultado.innerHTML = N1 - N2
 }
 
     function multiplicar() {
 
 var N1 = Number(n1.value)
 var N2 = Number(n2.value)
 resultado.innerHTML = N1 * N2
 }
 
 function dividir() {
 
 var N1 = Number(n1.value)
 var N2 = Number(n2.value)
 resultado.innerHTML = N1 / N2
 }
    
     var num15 = Number(prompt("Primeiro valor"))
     var num13 = Number(prompt("Segundo valor"))
    
     var soma5 = 0;
     for(var i = num15; i <= num13; i++){
     if( i%2 != 0){
         soma5 +=i;
     }
     }
     alert(`a soma é ${soma5}`) 
    
    console.log(calculadora())