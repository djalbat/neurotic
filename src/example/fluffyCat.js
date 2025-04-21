"use strict";

import { Model, Corpus, Weights, Vocabulary } from "../index";  ///

export default function fluffyCatExampleI() {
  let tokens;

  const corpus = Corpus.fromJSON([
    ["Fluffy", "Cat"],
    ["Smelly", "Dog"],
    ["Fluffy", "Cat", "Purrs"],
    ["Smelly", "Dog", "Barks"],
    ["Dog", "Chases", "Cat"],
    ["Cat", "Scratches", "Dog"]
  ]);

  tokens = corpus.asTokens();

  const model =

          <Model>
            <Vocabulary tokens={tokens} />
            <Weights/>
          </Model>

        ,
        batch = false,
        epochs = 10,
        learningRate = 0.5;

  model.train(corpus, batch, epochs, learningRate);

  const token = "Cat",
        length = 2,
        cutoff = 0.03,
        threshold = 3/4,
        temperature = 1/2;

  for (let count = 0; count < 100; count++) {
    tokens = model.infer(token, length, cutoff, threshold, temperature);

    console.log(JSON.stringify(tokens));
  }
}
