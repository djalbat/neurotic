"use strict";

import { Model, Corpus, Weights, Vocabulary } from "../index";  ///

export default function fluffyCatExampleI() {
  let tokens;

  // const corpus = Corpus.fromJSON([
  //   ["Fluffy", "Cat"],
  //   ["Smelly", "Dog"],
  //   ["Fluffy", "Cat", "Purrs"],
  //   ["Smelly", "Dog", "Barks"],
  //   ["Dog", "Chases", "Cat"],
  //   ["Cat", "Scratches", "Dog"]
  // ]);

  const corpus = Corpus.fromJSON([
    ["Cats", "Meow"]
  ]);

  tokens = corpus.asTokens();

  const model =

    <Model>
      <Vocabulary tokens={tokens} />
      <Weights/>
    </Model>

  ;

  model.train(corpus);

  console.log(model.weights.matrix.asString())

  const token = "Cats",
        length = 2,
        cutoff = 1/3,
        threshold = 1;

  tokens = model.infer(token, length, cutoff, threshold);

  console.log(JSON.stringify(tokens));
}
