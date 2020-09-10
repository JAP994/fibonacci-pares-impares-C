//CALCULAR TODA LA SERIE FIBONACCI CON 20 ELEMETOS.
    //le esta llamando al id del boton serie y le da la funcionalidad de click.
    document.getElementById('serie')
        //esta es una funcion anónima
        .addEventListener('click', function () {
            //Es un contador para calcular el máximo de números de la serie.
            var maximo = 1;
            //este es un arreglo donde guarda los numeros de la serie fibonacci.
            var arregloSerieFibonacci = [1, 2];
            /*Llama a la funcion gerneradorFibonacci y 
            le envia los parametros del anterior y el 
            último para ir calculando la serie*/
            generadorFibonacci(1, 2);
            //Creas la funcion para generar los numeros de la serie.
            function generadorFibonacci(anterior, ultimo) {
                //Uso un condiconal para ir contando la cantidad de elemtos de la serie.
                if (maximo > 18) {
                    //Creo un alert para mostrar el resultado de la serie
                    alert("la serie es : " + arregloSerieFibonacci);
                } else {
                    //como el contador aun no es mayor a 18 sigue con la serie.
                    numNuevo = anterior + ultimo;
                    //guardo el ultimo numero en el arreglo arregloSerieFibonacci
                    arregloSerieFibonacci.push(numNuevo);
                    //aumentar el contador en 1
                    maximo++;
                    //vuelvo a llamar a mi funcion. 
                    return generadorFibonacci(ultimo, numNuevo)
                }
            }
        });