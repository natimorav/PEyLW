function suma(){
    var x,y, sum, salida;
    x=prompt("Valor del primer numero: ", );
    y=prompt("Valor del segundo numero: ", );
    sum= parseInt(x)+parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + "+" + y + "=" + sum + '\n';


}
function resta(){
    var x, y, res, salida ;
    x=prompt("Valor del primer numero: ", );
    y=prompt("Valor del segundo numero: ", );
    res=parseInt(x)-parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + "-" + y + "=" + res +'\n';
}
function division(){
    var x,y, div, salida ;
    x=prompt("Valor del dividendo: ", );
    y=prompt("Valor del divisor: ", );
    div=parseInt(x)/parseInt(y)
    salida = document.getElementById("salida");
    salida.value += x + "/" + y + "=" + div +'\n' ; 
}
function multiplicacion(){
    var x,y, mul, salida ;
    x=prompt("Valor del primer numero: ", );
    y=prompt("Valor del segundo numero: ", );
    mul=parseInt(x)*parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + "X" + y + "=" + mul+'\n' ;
}
function potencia() {
    var x,y, pot, salida; 
    x=prompt("Valor de la base: ", );
    y=prompt("Valor del exponente: ", );
    pot = Math.pow(parseInt(x), parseInt(y));
    salida = document.getElementById("salida");
    salida.value += x + ' ^ ' + y + ' = ' + pot + '\n'; //agrega al text area el relsultado de la suma
}

function cuadrado(x){
    var x, cuad, base;
    x=prompt("Valor de un numero: ", )
    base = parseInt(x)
    cuad = Math.sqrt(x,2);
    salida = document.getElementById("salida");
    salida.value += "raiz de "+ x + "=" + cuad +'\n';

}