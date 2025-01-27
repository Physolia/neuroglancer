/**
 * @license
 * Copyright 2023 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {CodecKind} from 'neuroglancer/datasource/zarr/codec';
import {registerCodec} from 'neuroglancer/datasource/zarr/codec/resolve';
import {verifyInt, verifyObject, verifyObjectProperty} from 'neuroglancer/util/json';

export interface Configuration {
  level: number;
}

registerCodec({
  name: 'gzip',
  kind: CodecKind.bytesToBytes,
  resolve(configuration: unknown): {configuration: Configuration} {
    verifyObject(configuration);
    const level = verifyObjectProperty(configuration, 'level', verifyInt);
    return {configuration: {level}};
  },
});
