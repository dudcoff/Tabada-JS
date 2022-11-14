const numeroDesejado = prompt("Tabuada do número: ");
let numero = 0;
let contador = 1;
let resultado = `Tabuada do número ${numeroDesejado}:`;
 
while(numero < 10)
{
    numero = numero + 1;
    contador = numeroDesejado * numero;
    resultado = `${resultado} \n ${numeroDesejado} x ${numero} = ${contador}`;
} 

alert(resultado);


