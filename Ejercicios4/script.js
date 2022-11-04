// David Pérez Saché
'use strict'

function ejercicio1(minimo, maximo)
{
    if(isNaN(minimo) || isNaN(maximo)) throw 'No se han introducido números';

    if(minimo > maximo) 
        return Math.floor(Math.random() * (minimo - maximo + 1)) + maximo;
    else 
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function ejercicio2(numero)
{
    if(isNaN(numero) || numero<1) throw 'No se ha introducido un número, o no es válido';
    let array = [];

    for(let i=0; i<numero; i++)
        array[i] =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    
    console.table(array);
}

function ejercicio3()
{
    let array = [];
    let total = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

    for(let i=0; i<total; i++)
    {
        array[i] = [];
    }

    for(let i=0; i<array.length; i++)
    {
        for(let j=0; j<5; j++)
            array[i][j] = Math.floor(Math.random() * (100 - -100 + 1)) + -100;
    }

    console.table(array);
}

function ejercicio4(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';
    return array.reduce((partialSum, a) => partialSum + a, 0);
}

function ejercicio5(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';

    let suma = 0;
    for(let i=0; i<array.length; i++)
    {
        for(let j=0; j<array[i].length; j++)
        {
            if((i+j) %2 == 0)
                suma += array[i][j];
        }
    }

    return suma;
}

function ejercicio6(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';

    suma = 0;
    for(let i=0; i<array.length; i++)
    {
        if(array[i] > 10)
            suma += array[i];
    }

    return suma;
}

function ejercicio7(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';

    let suma;
    let longitud = array.length;

    for(let i=0; i<longitud; i++)
    {
        suma = 0;
        for(let j=0; j<array[i].length; j++)
        {
            suma += array[i][j];
        }

        array.push(suma);
    }

    return array;
}

function ejercicio9(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';

    let contador = 0;

    for(let i=0; i<array.length; i++)
    {
        if(!isNaN(array[i]))
        {
            if(array[i] % 2 == 0) 
                contador++;
        }
    }

    return contador;
}

function ejercicio10(array)
{
    if(!Array.isArray(array)) throw 'No se ha introducido un array';

    let contador = 0;

    for(let i=0; i<array.length; i+=2)
    {
        for(let j=0; j<array[i].length; i++)
        {
            if(array[i][j] % 2 != 0)
                contador++;
        }
    }

    return contador;
}

let arr = [
    [1,2,3,4,5,6,7,8,9],
    [10,20,30,40,50,60,70,80,90],
    [100,200,300,400,500,600,700,800,900],
    [1000,2000,3000,4000,5000,6000,7000,8000,9000]
];
console.log(ejercicio10(arr))