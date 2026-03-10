var img;
var mobilenet;
var x_length = 800;
var y_length = 600;
var route ='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg';


var imagenCargada = false;
var modeloCargado = false;
function setup() {
    createCanvas(x_length, y_length);

    img = createImg(route, imagenLista);
    img.hide();

    mobilenet = ml5.imageClassifier('MobileNet', modeloListo);
}

function imagenLista() {
    imagenCargada= true;
    image(img, 0, 0, x_length, y_length);
    //incompatible con verion 8.0 mobilenet.predict(img, obtenerResultados);
    intentarPredecir();
}

function modeloListo() {
    console.log('modelo listo!');
    modeloCargado=true;
    intentarPredecir();
}

function intentarPredecir() {
    if (imagenCargada && modeloCargado) {
        // mobilenet.predict(img, obtenerResultados);
        mobilenet.classify(img, obtenerResultados); 
    }
}

function obtenerResultados(error, resultados) {
    if (error) {
        console.error(error);
    } else {
        console.log(resultados);
        //incompatible con 8.0 [0].className
        var etiqueta = resultados[0].label;
        //incompatible con 8.0 [0].probability
        var prob = resultados[0].confidence * 100;
 

    }
}