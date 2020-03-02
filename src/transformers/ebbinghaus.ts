/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
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
 * Hermann Ebbinghaus is credited with discovering the forgetting curve.
 *
 * This class stores data the compiler would typically loose to the forgetting curve.
 * For instance:
 *  - original source contained a `hashbang`
 *  - original source used external imports
 *
 * This data can be used later to inform transforms following Closure Compiler.
 *
 * For more information, visit: https://en.wikipedia.org/wiki/Hermann_Ebbinghaus
 */

export class Ebbinghaus {
  public hashbang: string | null = null;
  public rename: {
    enabled: boolean;
    currentCharPositions: Array<number>;
    candidates: Set<string>;
    mapping: Map<string, string>;
    unavailable: Set<string>;
  } = {
    enabled: false,
    currentCharPositions: [0],
    candidates: new Set(),
    mapping: new Map(),
    unavailable: new Set(),
  };
}