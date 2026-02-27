window.onload= iniciar;

function iniciar(){
    const redNeuronal = new brain.NeuralNetwork();

    const datos =[
        {
            "input":{"R":0.78, "G":0.9, "B":1}, // CELESTE
            "output":{"claro":1}
        },
        {
            "input":{"R":0, "G":0.11, "B":0.2}, // AZUL OSCURO
            "output":{"oscuro":1}
        },
        {
            "input":{"R":0.1, "G":0.2, "B":0.3}, // oscuro
            "output":{"oscuro":1}
        },
        {
            "input":{"R":0.74, "G":0.78, "B":0.86}, // claro
            "output":{"claro":1}
        },
    ];
redNeuronal.train(datos);

// Verde claro
let resultado_1 = brain.likely({"R":0.57, "G":0.58, "B":0.61}, redNeuronal);
alert(resultado)
// Rojo oscuro
let resultado_2 = brain.likely({"R":0.29, "G":0.007, "B":0.007}, redNeuronal);
alert(resultado)

}