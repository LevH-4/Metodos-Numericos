/*Funcion para impiar los cuadros*/
function limpiar1() {
    document.getElementById('formulario-rela-asolud').reset();
}
function limpiar2(){
    document.getElementById('formu-redon').reset();
}
/*Error Relativo y Absoluto */
function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3;
    var num4;
    num3 = num1 - num2;
    document.getElementById('el-resultado1').innerHTML = num3;
    num4 = num3 / num2;
    document.getElementById('el-resultado2').innerHTML = num4;
}
/*Metodo de redondeo*/
function redondeo(){
    var x = document.getElementById("redon").value;
    var num;
    num = Math.round(x);
    document.getElementById('redondeo').innerHTML = num;
}

/*Bisección*/

/*1. Definimos una funcion de variable real*/
function f(x){
    return (x*x)-100;
}

/*2. Definimos una funcion auxiliarpara el valor absoluto*/
function abs_(a,b){
    if(x<0){return -x;}
    return x;
}

/*3. Definimos el metodo de biseccion*/
function biseccion_(a,b){
    var c = 0;
    var continuar = 1;
    var tolerancia = 0.0000001;
    if(f(a)*f(b)<0){
        while(continuar){
            c = (a+b)/2;
            if(abs_(f(c))<=tolerancia){
                return c;
            }
            else{
                if(f(a)*f(c)<0){b = c;}
                if(f(c)*f(b)<0){a = c;}
            }
        }
    }
    else{
        alert("Proporciona a y b adecuadamente");
    }
    return c;
}

/*4. Funcion a usar en el Frontend para ver los resultados*/
function respuesta(){
    document.getElementById("Respuesta").innertHTML = "La raiz es: " + biseccion_(a,b,c)
}

/*----------------------------------------------------------------------------------------------- */
function funcionAsociadaBoton(){
    history.go(-1);
}