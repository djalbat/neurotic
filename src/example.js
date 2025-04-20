"use strict";

import { Model, Corpus, Weights, Vocabulary } from "./index";  ///

import "./ngl";

const corpus = Corpus.fromFile(),
      model =

        <Model>
          <Vocabulary/>
          <Weights/>
        </Model>

      ;

const epochs = 10,
      learningRate = 0.25,
      results = model.train(corpus, epochs, learningRate);

results.forEach((result) => {
  result.log(console);
});

const token = "Fluffy",
      length = 1,
      sampling = false,
      tokens = model.infer(token, length, sampling);

console.log(JSON.stringify(tokens));

model.serialise();
