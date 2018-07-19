/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
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

import {loadScript, validateData} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function admanmedia(global, data) {

  validateData(data, ['id']);

  const encodedId = encodeURIComponent(data.id);
  // VAST
  // loadScript(global, `http://localhost:4000/go?replay=true&vast=http%3A%2F%2Fmona.admanmedia.com%2Fvast%3Fpmo%3D7a4d4868&id=${encodedId}`, () => {
  // VPAID
  // loadScript(global, `http://localhost:4000/go?vast=http%3A%2F%2Fbs.serving-sys.com%2FServing%3Fcn%3Ddisplay%26c%3D23%26pl%3DVAST%26pli%3D21266633%26PluID%3D0%26pos%3D1719%26ord%3D%5Btimestamp%5D%26cim%3D1&id=${encodedId}`, () => {
  loadScript(global, `http://localhost:4000/go?replay=true&id=${encodedId}`, () => {
    const pattern = `script[src$="id=${encodedId}"]`;
    const scriptTag = global.document.querySelector(pattern);
    scriptTag.setAttribute('id', `hybs-${encodedId}`);
    global.context.renderStart();
  }, () => {
    global.context.noContentAvailable();
  });

  // this is only for testing if Duplicate tag exception is launched inside AMP iframe comment it otherwise
  // loadScript(global, `http://localhost:4000/go?id=${encodedId}`, () => {
  //   const pattern = `script[src$="id=${encodedId}"]`;
  //   const scriptTag = global.document.querySelectorAll(pattern)[1];
  //   console.log('script tags', scriptTag);
  //   scriptTag.setAttribute('id', `hybs-${encodedId}`);
  //   global.context.renderStart();
  // }, () => {
  //   global.context.noContentAvailable();
  // });
}
