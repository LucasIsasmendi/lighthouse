/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* eslint-env mocha */

const InterstitialGatherer = require('../../../driver/gatherers/interstitial');
const assert = require('assert');
let interstitialGatherer;

describe('Interstitial gatherer', () => {
  // Reset the Gatherer before each test.
  beforeEach(() => {
    interstitialGatherer = new InterstitialGatherer();
  });

  it('returns an artifact', () => {
    return interstitialGatherer.afterPass({
      driver: {
        evaluateAsync() {
          return Promise.resolve(['test']);
        }
      }
    }).then(_ => {
      assert.ok(Array.isArray(interstitialGatherer.artifact));
      assert.equal(interstitialGatherer.artifact.length, 1);
    });
  });

  it('handles driver failure', () => {
    return interstitialGatherer.afterPass({
      driver: {
        evaluateAsync() {
          return Promise.reject('such a fail');
        }
      }
    }).then(_ => {
      assert(false);
    }).catch(_ => {
      assert.equal(interstitialGatherer.artifact, -1);
    });
  });
});
