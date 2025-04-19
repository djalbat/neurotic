"use strict";

import { Model, Corpus, Vocabulary } from "./index";  ///

import "./ngl";

const corpus = Corpus.fromFile(),
      model =

        <Model>
          <Vocabulary/>
        </Model>

      ;

model.train(corpus);

model.serialise();
