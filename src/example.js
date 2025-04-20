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

const results = model.train(corpus);

results.forEach((result) => {
  result.log(console);
});

const token = "Fluffy",
      length = 1,
      tokens = model.infer(token, length);

console.log(JSON.stringify(tokens));

// model.serialise();
