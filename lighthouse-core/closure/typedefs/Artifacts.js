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

/**
 * Typing externs file for collected output of the artifact gatherers stage.
 * @externs
 */

/**
 * @struct
 * @record
 */
function Artifacts() {}

/** @type {string} */
Artifacts.prototype.HTML;

/** @type {string} */
Artifacts.prototype.HTMLWithoutJavaScript;

/** @type {boolean} */
Artifacts.prototype.HTTPS;

/** @type {!Array<!Object>} */
Artifacts.prototype.networkRecords;

/** @type {?} */
Artifacts.prototype.traceContents;

/** @type {!ManifestNode<(!Manifest|undefined)>} */
Artifacts.prototype.Manifest;

/** @type {!ServiceWorkerArtifact} */
Artifacts.prototype.ServiceWorker;

/** @type {?string} */
Artifacts.prototype.ThemeColor;

/** @type {string} */
Artifacts.prototype.URL;

/** @type {?string} */
Artifacts.prototype.Viewport;

/** @type {number} */
Artifacts.prototype.Offline;

/** @type {{value: boolean, debugString: (string|undefined)}} */
Artifacts.prototype.HTTPRedirect;

/** @type {!Accessibility} */
Artifacts.prototype.Accessibility;

/** @type {!Array<!Object>} */
Artifacts.prototype.ScreenshotFilmstrip;

/** @type {!Object<!Object>} */
Artifacts.prototype.CriticalRequestChains;

/** @type {{first: number, complete: number, duration: number, frames: !Array<!Object>, debugString: (string|undefined)}} */
Artifacts.prototype.Speedline;

/** @type {{scrollWidth: number, viewportWidth: number}} */
Artifacts.prototype.ContentWidth;

/** @type {!Array<string>} */
Artifacts.prototype.CacheContents;
