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

let result;

result = model.train(corpus);

result.log(console);

result = model.evaluate(corpus);

result.log(console);

model.forward("Fluffy");

model.serialise();
