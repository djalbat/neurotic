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

  // const corpus = Corpus.fromJSON([
  //   ["Cats", "Meow"]
  // ]);

  tokens = corpus.asTokens();

  const model =

    <Model>
      <Vocabulary tokens={tokens} />
      <Weights/>
    </Model>

  ;

  model.train(corpus);

  // console.log(model.weights.matrix.asString())

  const token = "Fluffy",
        length = 10;

  for (let count = 0; count < 50; count++) {
    tokens = model.infer(token, length);

    console.log(JSON.stringify(tokens));
  }
}