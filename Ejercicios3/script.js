// David Pérez Saché
'use strict'

/**
 * Función que muestra por consola los números del 1 al 42.
*/
function ejercicio1()
{
    for(let i=1; i<=42; i++) 
        console.log(i);
}

/**
 * Función que muestra por consola los números del 42 al 100, pero saltando de 3 en 3 (42, 45, 48, 51..)
*/
function ejercicio2()
{
    for(let i=42; i<=100; i+=3)
        console.log(i);
}

/**
 * Función que muestra por consola los números del 42 al 23.
*/
function ejercicio3()
{
    for(let i=42; i>=23; i--)
        console.log(i);
}

/**
 * Función que muestra por consola los números del 100 al 42 pero saltando de 7 en 7 (100, 93, 86, 79…)
*/
function ejercicio4()
{
    for(let i=100; i>=42; i-=7)
        console.log(i);
}

/**
 * Función que recibe un número y muestra por consola la tabla de multiplicar de ese número.
 * @param {Number} numero Número entero.
*/
function ejercicio5(numero)
{
    if(isNaN(numero)) throw 'No has introducido un número';

    for(let i=1; i<=10; i++)
        console.log(numero + ' x ' + i + ' = ' + numero*i);
}

/**
 *  Función que muestra por consola las tablas de multiplicar de los números del 1 al 15. Aprovecha para ello la función anterior.
*/
function ejercicio6()
{
    for(let i=1; i<=15; i++)
    {
        for(let j=1; j<=10; j++)
            console.log(i + ' x ' + j + ' = ' + i*j);
        console.log('');
    }
}

/**
 * Función que reciba un número mayor que cero y nos muestre el término correspondiente de la Sucesión de Fibonacci. 
 * Por ejemplo, el término 10 de la sucesión es 55 y el décimo tercero es 233.
 * @param {Number} numero Número entero. 
*/
function ejercicio7(numero)
{
    if (isNaN(numero) || numero<0) throw 'No has introducido un número'; 

    let fibonacci1 = 1;
    let fibonacci2 = 1;

    for(let i=2; i<=numero; i++)
    {
        console.log(fibonacci2);
        fibonacci2 = fibonacci1 + fibonacci2;
        fibonacci1 = fibonacci2 - fibonacci1;
    }
}

/**
 * Hacer una función que reciba una matriz y nos devuelva la suma de todos sus elementos.
 * @param {Array} matriz Matriz con valores.
 * @returns {Number} Suma de todos los valores de la matriz.
*/
function ejercicio8(matriz)
{
    if (!(matriz instanceof Array)) throw 'No has pasado una matriz';

    let suma=0;

    for(let i=0; i<matriz.length; i++)
    {
        for(let j=0; j<matriz[i].length; j++)
            suma += matriz[i][j];
    }

    return suma;
}

/**
 * Hacer funciones que reciban el número de líneas y representen las siguientes figuras. Estos son los ejemplos para 5 líneas:
 * @param {Number} numLineas 
*/
function ejercicio9(numLineas)
{
    if(isNaN(numLineas)) throw 'No has introducido un número';

    // Triángulo
    for(let i=0; i<=numLineas; i++)
    {
        console.log('*'.repeat(i));
    }

    let str, str2;

    // Pirámide
    for(let i=1; i<=numLineas; i++)
    {
        str = ' '.repeat(numLineas-i);
        str2 = '*'.repeat(i*2-1)
        console.log(str + str2 + str);
    }
    
    // Flecha
    str = '';
    for(let i=0; i<=numLineas-1; i++)
    {
        for(let j=0; j<=i; j++)
            str += '*';
        str += '\n';
    }

    for(let i=numLineas-1; i>=0; i--)
    {
        for(let j=0; j<=i-1; j++)
            str += '*';
        str +='\n'
    }
    console.log(str)
}

/**
 * Función que recibe dos matrices numéricas. Primero comprobará que ambas tienen las dimensiones correctas para poder multiplicarse 
 * y luego devolverá la matriz que resulta de multiplicar ambas matrices. El algoritmo para multiplicar matrices está explicado en Wikipedia. 
 * Consiste en calcular el elemento i,j de la matriz resultante mediante la multiplicación y suma de los elementos de la fila i de la primera 
 * matriz con los elementos de la columna j de la segunda matriz.
 * @param {Array} matrizA Primera matriz con valores.
 * @param {Array} matrizB Segunda matriz con valores.
 * @returns {Array} Matriz con el resultado.
*/
function ejercicio10(matrizA, matrizB)
{
    // Comprobar que es array
	if (!(matrizA instanceof Array)) throw 'matrizA no es una matriz';
    if (!(matrizB instanceof Array)) throw 'matrizB no es una matriz';

    // Comprobar que son bidimensionales y cuadradas
    let dimension = matrizA.length;
    for(let i=0; i<matrizA.length; i++)
        if(matrizA[i].length != dimension) 
            throw 'matrizA no es una matriz cuadrada';

    dimension = matrizB.length;
    for(let i=0; i<matrizB.length; i++)
        if(matrizB[i].length != dimension) 
            throw 'matrizB no es una matriz cuadrada';


    // Generar matriz con resultados
    let matrizC = new Array(dimension);

    for(let i=0; i<dimension; i++)
        matrizC[i] = new Array(dimension);

    for(let i=0; i<dimension; i++)
    {
        for(let j=0; j<dimension; j++)
        {
            matrizC[i][j] = 0;
            for(let k=0; k<dimension; k++)
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }

    return matrizC;
}

/**
 * Función que le pide al usuario (con prompt) un número entre 0 y 10. La función volverá a pedir el número al usuario hasta que cumpla las condiciones.
*/
function ejercicio11()
{
    let numero = -1;

    while(numero<0 || numero>10)
        numero = prompt('Introduce un número entre 0 y 10');

    console.log(numero);
}

/**
 * Función que rellena un array de 5 posiciones con números enteros aleatorios entre 1 y 10 sin repeticiones. 
*/
function ejercicio12()
{
    let array = [];
    let repetidos = [];
    let contador = 0;
    let random;
    let repetido;

    while(contador<5)
    {
        repetido = false;
        random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        
        if(repetidos.length>0)
        {
            for(let i=0; i<repetidos.length; i++)
            {
                if(repetidos[i] == random)
                {
                    repetido = true;
                    break;
                }
            }
        }

        if(!repetido)
        {
            repetidos[contador] = random;
            array[contador] = random;
            contador++;
        }
    }

    console.table(array)
}

ejercicio12()