/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The entry point for AMP Runtime (v0.js) when AMP Runtime may support
 * multiple AMP Docs in Shadow DOM.
 */

// src/polyfills.js must be the first import.
import './polyfills'; // eslint-disable-line sort-imports-es6-autofix/sort-imports-es6

import {Services} from './services';
import {
  adoptShadowMode,
  installAmpdocServices,
  installBuiltins,
  installRuntimeServices,
} from './runtime';
import {
  bodyAlwaysVisible,
  installStylesForDoc,
  makeBodyVisible,
} from './style-installer';
import {cssText} from '../build/css';
import {deactivateChunking} from './chunk';
import {doNotTrackImpression} from './impression';
import {installDocService} from './service/ampdoc-impl';
import {installPerformanceService} from './service/performance-impl';
import {isExperimentOn} from './experiments';
import {stubElementsForDoc} from './service/custom-element-registry';

// This feature doesn't make sense in shadow mode as it only applies to
// background rendered iframes;
deactivateChunking();

// Declare that this runtime will support multiple shadow-root docs.
installDocService(self, /* isSingleDoc */ false);

// Core services.
installRuntimeServices(self);

// Impression tracking for PWA is not meaningful, but the dependent code
// has to be unblocked.
doNotTrackImpression();

if (isExperimentOn(self, 'ampdoc-shell')) {
  //Shadow mode with an Ampdoc for the shell
  installPerformanceService(self);
  const ampdocService = Services.ampdocServiceFor(self);
  const ampdocShell = ampdocService.installShellShadowDoc();
  installStylesForDoc(ampdocShell, cssText, () => {
    installAmpdocServices(ampdocShell);

    // Builtins.
    installBuiltins(self);

    // Final configuration and stubbing.
    adoptShadowMode(self);

    // Pre-stub already known elements.
    stubElementsForDoc(ampdocShell);

    makeBodyVisible(self.document, /* waitForServices */ true);
    Services.resourcesForDoc(ampdocShell).ampInitComplete();
  }, /* opt_isRuntimeCss */ true, /* opt_ext */ 'amp-runtime');
} else {
  // PWA shell manages its own visibility and shadow ampdocs their own.
  bodyAlwaysVisible(self);

  // Builtins.
  installBuiltins(self);

  // Final configuration and stubbing.
  adoptShadowMode(self);
}

// Output a message to the console and add an attribute to the <html>
// tag to give some information that can be used in error reports.
// (At least by sophisticated users).
if (self.console) {
  (console.info || console.log).call(console,
      'Powered by AMP ⚡ HTML shadows – Version $internalRuntimeVersion$');
}
self.document.documentElement.setAttribute('amp-version',
    '$internalRuntimeVersion$');
