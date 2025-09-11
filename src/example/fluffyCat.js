"use strict";

import { Model, Corpus, Vocabulary, AttentionHead } from "../index";  ///

export default function fluffyCatExampleI() {
  // const corpus = Corpus.fromJSON([
  //   ["Fluffy", "Cat"],
  //   ["Smelly", "Dog"],
  //   ["Fluffy", "Cat", "Purrs"],
  //   ["Smelly", "Dog", "Barks"],
  //   ["Dog", "Chases", "Cat"],
  //   ["Cat", "Scratches", "Dog"]
  // ]);

  const corpus = Corpus.fromJSON([
    ["Eek", "Meow"],
    ["Bark", "Hungry"],
    ["Meow", "Hungry"]
  ]);

  const tokens = corpus.asTokens(),
        model =

          <Model>
            <Vocabulary tokens={tokens} />
            <AttentionHead/>
          </Model>

        ;

  model.train(corpus);

  // console.log(model.weights.matrix.asString())

  const token = "Eek",
        length = 100;

  for (let count = 0; count < 50; count++) {
    const tokens = model.infer(token, length);

    console.log(JSON.stringify(tokens));
  }
}