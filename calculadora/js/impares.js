//CALCULAR UN ARRAY CON 50 NUMEROS ALEATORIOS Y DEVOLVER LA SUMA DE LOS IMPARES    
    // Creo el botón para mostrar los numeros impares de la serie fibonacci
    document.getElementById('impares')
        .addEventListener('click', function () {
            var numerosAleatorios = [];
            var impares = [];
            var sumaImpares=0;
            var maximo = 50;
            generarNumerosAleatorios(maximo);
            impares.forEach(element => {
                sumaImpares+=element;
                    });
            alert("La suma es :"+ sumaImpares);
            function generarNumerosAleatorios(max) {
                if (max === 0) {
                    alert("numeros aleatorios" + numerosAleatorios)
                    alert("numeros impares" + impares);
                   
                } else {
                    var num = Math.floor(Math.random() * 100) + 1;
                    numerosAleatorios.push(num);
                    if (esImpar(num)) {
                        impares.push(num);
                    }
                    max--;
                    generarNumerosAleatorios(max)
                }
            }
            function esImpar (numero) {
                if (numero % 2 === 1) {
                    return true;
                } else {
                    return false;
                }
            }
        });