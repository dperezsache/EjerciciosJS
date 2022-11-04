// David Pérez Saché
'use strict'

/** 
* Función que recibe dos números enteros por el teclado y devuelve su suma.
* @returns {Number} Suma de num1 y num2.
**/
function funcion1()
{
    let num1, num2;
    do
    {
        num1 = parseInt(prompt('Introduce un número'));
        num2 = parseInt(prompt('Introduce otro número'));
    } while(isNaN(num1) || isNaN(num2));

    return num1+num2;
}

/**
 * Función que recibe el precio y la cantidad de un producto y devuelva el total.
 * @param {Number} precio Precio del producto.
 * @param {Number} total Número de productos.
 * @returns {Number} Precio total
**/
function funcion2(precio, total)
{
    if (isNaN(precio) || isNaN(total)) throw 'No has introducido un número';
    return precio*total;
}

/**
 * Función que recibe tres números y devuelve la suma de los dos primeros, dividida por el tercero.
 * @param {Number} num1 Primer número.
 * @param {Number} num2 Segundo número.
 * @param {Number} num3 Tercer número.
 * @returns {Number} Suma de num1 y num2 dividida por num3.
**/
function funcion3(num1, num2, num3)
{
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) throw 'No has introducido un número';
    return (num1 + num2) / num3;
}

/**
 * Función que calcula el cuadrado de un número.
 * @param {Number} numero Número del que calcular el cuadrado.
 * @returns {Number} Cuadrado de 'numero'.
**/
function funcion4(numero)
{
    if (isNaN(numero)) throw 'No has introducido un número';
    return numero*numero;
}

/**
 * Función que recibe el precio, la cantidad de un producto y el porcentaje de descuento y devuelve el total.
 * @param {Number} precio Precio del producto.
 * @param {Number} cantidad Cantidad de productos.
 * @param {Number} porcentaje Porcentaje de descuento.
 * @returns {Number} Precio total.
**/
function funcion5(precio, cantidad, porcentaje)
{
    if (isNaN(precio) || isNaN(cantidad) || isNaN(porcentaje)) throw 'No has introducido un número';
    let total = precio * cantidad;
    let rebaja = porcentaje / 100 * total;
    return total - rebaja;
}

/**
 * Función que recibe la longitud de dos catetos de un triángulo rectángulo, y calcula el valor de la hipotenusa.
 * @param {Number} a Cateto 1.
 * @param {Number} b Cateto 2.
 * @returns {Number} Valor de la hipotenusa.
**/
function funcion6(a, b)
{
    if (isNaN(a) || isNaN(b)) throw 'No has introducido un número';
    return a*a + b*b;
}

/**
 * Función que pasa de grados Celsius a grados Fahrenheit.
 * @param {Number} temperatura Temperatura en grados Celsius.
 * @returns {Number} Temperatura en grados Fahrenheit.
**/
function funcion7(temperatura)
{
    if (isNaN(temperatura)) throw 'No has introducido un número';
    return (temperatura * 9 / 5) + 32;
}

/**
 * Función que calcula con horas minutos y segundos, el tiempo que
 * tardará un móvil en recorrer una cantidad de kilómetros K, a una velocidad media
 * V, dada en metros/segundos. El tiempo lo ha de dar en horas, minutos y segundos.
 * @param {Number} K Distancia en kilómetros.
 * @param {Number} V Velocidad media en m/s.
**/
function funcion8(K, V)
{
    if (isNaN(K) || isNaN(V)) throw 'No has introducido un número';
    let tiempo = (K * 1000) / V;
    let horas = parseInt(tiempo / 3600);
    let minutos = parseInt(tiempo / 60);
    let segundos = parseInt(tiempo % 60);
    console.log(horas + 'h ' + minutos + 'm ' + segundos + 's');
}

/**
 * Función que recibe el radio R de una circunferencia, y muestre por consola la longitud y el área.
 * @param {Number} R Radio de una circunferencia.
**/
function funcion9(R)
{
    if (isNaN(R)) throw 'No has introducido un número';
    console.log('Longitud: ' + 2 * 3.14159 * R);
    console.log('Área: ' + 3.14159 * R * R);
}

/**
 * Función que recibe la longitud de dos lados de un rectángulo C1 y C2, y muestra por consola el perímetro, el área y la longitud de la diagonal.
 * @param {Number} C1 Lado 1.
 * @param {Number} C2 Lado 2.
*/
function funcion10(C1, C2)
{
    if (isNaN(C1) || isNaN(C2)) throw 'No has introducido un número';
    console.log('Perimetro: ' + (C1+C1) + (C2+C2) + ' cm');
    console.log('Área: ' + C1 * C2 + ' cm');
    console.log('Longitud: ' + Math.sqrt(C1*C1 + C2*C2) + ' cm');
}