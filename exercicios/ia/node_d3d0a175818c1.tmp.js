const brain = require('brain.js');

// Criar uma nova rede neural
const net = new brain.NeuralNetwork();
let c =0
// Treinar a rede neural com dados de treinamento
while(c = 20000){

    net.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ]);
        c++
      console.log(c)
}

// Fazer previsões com a rede neural treinada
const output = net.run([1, 0]); // [0.987]
console.log(output);