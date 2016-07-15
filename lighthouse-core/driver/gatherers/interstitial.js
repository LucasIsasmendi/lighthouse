/**
 * @license
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

const Gather = require('./gather');

/* global window, document, __returnResults */

/* istanbul ignore next */
function getInterstitial() {
  const viewportSize = window.outerWidth * window.outerHeight;

  // Walk the tree of elements
  const candidates = [...document.querySelectorAll('*')]
    .filter(e => {
      // Check for position fixed.
      const isFixed = window.getComputedStyle(e).position === 'fixed';

      // Check for nav elements.
      const regExpNav = /menu|nav|sidebar|drawer/i;
      const isNav = regExpNav.test(e.className) || regExpNav.test(e.id);

      // Get the size of the element.
      const eBCR = e.getBoundingClientRect();
      const size = eBCR.width * eBCR.height;

      // Only allow through fixed, non-nav elements whose size makes them cover
      // over 50% of the available viewport.
      return isFixed && !isNav && (size / viewportSize > 0.5);
    });

  // __returnResults is injected by evaluateAsync for passing back the result.
  __returnResults(candidates);
}

class Interstitial extends Gather {

  afterPass(options) {
    const driver = options.driver;

    return driver.evaluateAsync(`(${getInterstitial.toString()}())`)

    .then(returnedValue => {
      this.artifact = returnedValue;
    }, _ => {
      this.artifact = -1;
      return;
    });
  }
}

module.exports = Interstitial;
