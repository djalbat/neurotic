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

model.train(corpus);

model.serialise();
