//CALCULAR UN ARRAY CON 50 NUMEROS ALEATORIOS Y DEVOLVER LA SUMA DE LOS PARES
    // Creo el botón para mostrar los numeros pares de la serie fibonacci
    document.getElementById('pares')
        .addEventListener('click', function () {
            //arreglo para guardar numeros Aleatorios
            var numerosAleatorios = [];
            //arreglo para guardar numeros pares
            var pares = [];
            //variable para guardar la suma de los pares
            var sumaPares=0;
            //valor maximo de numeros que se generan aleatoriamente
            var maximo = 50;
            //Llamo a mi funcion para generar los numeros aleatorios
            generarNumerosAleatorios(maximo);
            //uso un for each para sumar todos los numeros pares;
            pares.forEach(element => {
                        sumaPares+=element;
                    });
            //Imprimo la suma de todos los numeros pares
            alert("La suma es :"+ sumaPares);
            //creo mi funcion para generar los numeros aleatorios
            function generarNumerosAleatorios(max) {
                if (max === 0) {
                    alert("numeros aleatorios" + numerosAleatorios)
                    alert("numeros pares" + pares);
                } else {
                    var num = Math.floor(Math.random() * 100) + 1;
                    numerosAleatorios.push(num);
                    if (esPar(num)) {
                        pares.push(num);
                    }
                    max--;
                    generarNumerosAleatorios(max)
                }
            }
            function esPar (numero) {
                if (numero % 2 === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        });