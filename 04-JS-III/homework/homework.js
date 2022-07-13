// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:    
  return (array[0]);
}
devolverPrimerElemento([1,2,3]);
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:   
    return array[array.length-1];
}
devolverUltimoElemento([10,10,16,12])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  
  return (array.length);
}
obtenerLargoDelArray([10,10,16,12]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var newarray = [];
  for (i = 0;i<array.length ; i++) {
    newarray [i] = array[i] + 1;}
  return newarray;
}
incrementarPorUno([0,1,4,7]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([1,2],"Tedy");

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([5,4],'mio');

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let nwarr = '';
  for (i = 0; i<palabras.length ; i++){    
    if (i===palabras.length-1) {nwarr = nwarr + palabras[i];}
    if(i < palabras.length-1) {
      nwarr = nwarr + palabras[i] +' ';
      } 
    }  
  return nwarr;
}
dePalabrasAFrase(['hola','mundo'])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
    if (array.includes(elemento)) return true;  
    return false;    
}
arrayContiene([5,7],5)

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;
  for (i=0; i<numeros.length; i++){
    sum = sum + numeros[i];
  }
  return sum;
}
agregarNumeros([6,9]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var prom = 0;
  for (i = 0; i< resultadosTest.length; i++) {
    prom = prom + resultadosTest[i];
  }
  return prom/resultadosTest.length;
}
promedioResultadosTest([8,4]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var may = 0;    
    may = Math.max.apply(null,numeros);  
    return may;
}
numeroMasGrande([9,1,3]);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resul = 1;  
  if (arguments.length ===0) return 0;
  if (arguments.length > 0) {
    for (i=0;i<arguments.length;i++) {      
      resul = resul*arguments[i];}          
      }
  return resul;
}
multiplicarArgumentos(9,5)

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí 
  var cont = 0;
  for (i=0;i<arreglo.length;i++) {
    if (arreglo[i] > 18) {
      cont = cont +1;
    }
  }
  return cont;
}
cuentoElementos([11,3,21,32])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  
  switch (numeroDeDia) {
    case 1:
    case 7: 
    return 'Es fin de semana';
    break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 2:
    return 'Es dia Laboral';
    break;
    }    
} 
diaDeLaSemana(3);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí  
  var nueve = n.toString();
  if (nueve[0] === '9') return true;
  return false;
}
empiezaConNueve(98);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(i=0; i<arreglo.length-2; i++) {
    if(i < arreglo.length-2) {
      if(arreglo[i+1]===arreglo[i]) {return true;}
    }     
    return false;
  }    
} 
todosIguales([5,5,3]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nwa = [];
  for (i = 0; i<array.length; i++) {
    if(array[i]==="Enero" || array[i]==="Marzo" || array[i]=== "Noviembre") {
      nwa.push(array[i]);
      }      
    }
    if (nwa.length<3) {return "No se encontraron los meses pedidos"; }
  return nwa;
}
mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nwa = [];
  for (i = 0; i<array.length; i++) {
    if(array[i] > 100) {
      nwa.push(array[i]);
      }      
    }    
  return nwa;
}
mayorACien([5,6,25,102,195,36]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arrayn = []; 
  var num = numero;     
  for(i=0; i < 10; i++) { 
    num = num + 2;  
    if(num === i) {break;}        
     else {
      arrayn.push(num);
      }           
    } 
    if(arrayn.length < 10) {return "Se interrumpió la ejecución";} 
    else if (arrayn.length === 10) {return arrayn;}         
}
breakStatement(50);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arrayc = []; 
  var numr = numero;     
  for(i=0; i < 10; i++) {      
    if(i === 5) {continue;} 
    numr = numr + 2;     
    arrayc.push(numr);                
    } 
    return arrayc;
}
continueStatement(10);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
