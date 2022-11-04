// David Pérez Saché
'use strict'

let fecha = new Date();
const DIA = fecha.getDate();      // Constante para ejercicio 8 y 9
const MES = fecha.getMonth()-1;   // Constante para ejercicio 9

/**
 * Función que recibe dos números y muestra por consola el mayor de ellos.
 * @param {Number} num1 1º número
 * @param {Number} num2 2º número
*/
function funcion1(num1, num2)
{
    if(isNaN(num1) || isNaN(num2)) throw 'No se han introducido números';

    if(num1 > num2) 
        console.log(num1);
    
    else
        console.log(num2);
}

/**
 * Función que recibe dos textos y muestra por consola el que sea más largo (utiliza el método String.length)
 * @param {String} texto1 1º texto
 * @param {String} texto2 2º texto
*/
function funcion2(texto1, texto2)
{
    if(texto1==null || texto2==null && texto1=='' || texto2=='') throw 'No se han introducido textos';

    if(texto1.length > texto2.length)
        console.log(texto1);

    else
        console.log(texto2);
}

/**
 * Función que recibe dos números y muestra por consola texto “PRIMERO” si el primero es mayor que el segundo, 
 * “SEGUNDO” si el segundo es mayor que el primero o “IGUALES” si ambos números son iguales..
 * @param {Number} num1 1º número
 * @param {Number} num2 2º número
*/
function funcion3(num1, num2)
{
    if(isNaN(num1) || isNaN(num2)) throw 'No se han introducido números';

    if(num1 > num2) 
        console.log('PRIMERO');

    else if(num2 > num1)
        console.log('SEGUNDO');

    else
        console.log('IGUALES');
}

/**
 * Función que recibe dos números y dos textos y que muestra por consola el primer texto si el primer número es mayor que el segundo,
 * el segundo texto si el segundo número es mayor o el texto “IGUALES” si ambos números son iguales.
 * @param {Number} num1 1º número
 * @param {Number} num2 2º número
 * @param {String} texto1 1º texto
 * @param {String} texto2 2º segundo
*/
function funcion4(num1, num2, texto1, texto2)
{
    if(isNaN(num1) || isNaN(num2)) throw 'No se han introducido números';
    if(texto1==null || texto2==null && texto1=='' || texto2=='') throw 'No se han introducido textos';

    if(num1 > num2)
        console.log(texto1);

    else if(num2 > num1)
        console.log(texto2);

    else 
        console.log('IGUALES');
}

/**
 * Función que recibe tres números y muestra por consola el mayor de ellos, o el texto “IGUALES” si los tres son iguales
 * @param {Number} num1 1º número
 * @param {Number} num2 2º número
 * @param {Number} num3 3º número
*/
function funcion5(num1, num2, num3)
{
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) throw 'No se han introducido números';
    
    if(num1 > num2 && num1 > num3)
        console.log(num1);
    
    else if(num2 > num1 && num2 > num3)
        console.log(num2);

    else if(num3 > num1 && num3 > num2)
        console.log(num3);

    else
        console.log('IGUALES');
}

/**
 * Función que recibe tres números y muestra por consola la posición del menor de ellos (1, 2 ó 3) o el texto “IGUALES” si los tres son iguales.
 * @param {Number} num1 1º número
 * @param {Number} num2 2º número
 * @param {Number} num3 3º número
*/
function funcion6(num1, num2, num3)
{
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) throw 'No se han introducido números';
    
    if(num1 < num2 && num1 < num3)
        console.log('1');
    
    else if(num2 < num1 && num2 < num3)
        console.log('2');

    else if(num3 < num1 && num3 < num2)
        console.log('3');

    else
        console.log('IGUALES');
}

/**
 * El Clasificador de Sardinas. El tamaño de una sardina se simula como un número entero introducido por el usuario entre 0 y 10. 
 * Si el tamaño es menor que tres, el sistema devolverá la sardina al mar, está entre tres y seis (ambos incluidos) la clasificará como “pequeña”,
 * si el tamaño es 7 indicará que es el tamaño justo para la lata de sardinas estándar y, si es mayor que siete la clasificará para su venta en lonja.
*/
function funcion7()
{
    let numero = 0;

    do
    {
        numero = prompt('Introduce número entre 1 y 10');
    } while(numero<=0 || numero>10);

    if(numero<3)
        console.log('La sardina vuelve al mar');

    else if(numero>=3 && numero<=6)
        console.log('Sardina pequeña');

    else if(numero==7)
        console.log('Tamaño justo para lata de sardinas estándar');

    else if(numero>7)
        console.log('Apta para venta en lonja');
}

/**
 * Haz una constante y asígnale el valor del día del mes de hoy (por ejemplo const DIA = 13). Luego haz una función que reciba un día del mes.
 * @param {Number} dia Día a comprobar.
 * @returns {undefined|Boolean} Si el día no es válido (es mayor que 31 o menor que 1) la función devolverá undefined. Si no, booleano indicando si el día recibido es mayor o igual que el día del mes de hoy.
*/
function funcion8(dia)
{
    if(isNaN(dia)) throw 'No se ha introducido un número';

    if(dia<1 || dia>31)
        return undefined;

    if(dia>DIA)
        return true;

    return false;
}

/**
 * Haz dos constantes y asígnales los valores del día, el mes de hoy.  Luego haz una función que reciba un día del mes y un mes,  
 * @param {Number} dia Día a comprobar.
 * @param {Number} mes Mes a comprobar.
 * @returns {undefined | Boolean} Si el día no es válido (es mayor que 31 o menor que 1) o el mes no es válido (menor que 1 o mayor que 12) la función devolverá undefined. 
 * Si son válidos devolverá un booleano indicando si el día y mes recibidos corresponden a una fecha mayor o igual que el día y mes de hoy que está definido en las constantes.
*/
function funcion9(dia, mes)
{
    if(isNaN(dia) || isNaN(mes)) throw 'No se han introducido números';

    if(dia<1 || dia>31 && mes<1 || mes>12)
        return undefined;

    if(dia>=DIA && mes>=MES)
        return true;

    return false;
}

/**
 *  Queremos programar una nevera inteligente capaz de decirle a un usuario si un yogur está caducado. 
 *  Haz un programa que le pida al usuario la fecha de caducidad de un yogur (día, mes y año) y le responda si el yogur está caducado o no.
*/
function funcion10()
{
    let dia, mes, ano;
    let fecha;

    do
    {
        dia = prompt('Introduce día de caducación');
        mes = prompt('Introduce mes de caducación');
        ano = prompt('Introduce año de caducación');
    } while(isNaN(dia) || isNaN(mes) || isNaN(ano));
    
    fecha = new Date(ano, mes-1, dia);
    fecha.setDate(fecha.getDate() + 60);
    console.log('El yogur no será apto para el consumo a partir del: ' + fecha.getDate() + '/' + (fecha.getMonth()+1) + '/' + fecha.getFullYear());
}