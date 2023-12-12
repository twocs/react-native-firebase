/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export default class TotpMultiFactorGenerator {
  static FACTOR_ID = 'totp';

  constructor() {
    throw new Error(
      '`new TotpMultiFactorGenerator()` is not supported on the native Firebase SDKs.',
    );
  }

  // TotpSecret has a fair bit of stuff going on: https://firebase.google.com/docs/reference/js/auth.totpsecret.md#totpsecret_class
  // static assertionForEnrollment(secret: TotpSecret, oneTimePassword: string): TotpMultiFactorAssertion {
  //   return null;
  // }

  // TotpMultiFactorAssertion is a trivial subclass
  // static assertionForSignIn(enrollmentId: string, oneTimePassword: string): TotpMultiFactorAssertion {
  //   return null;
  // }

  // static generateSecret(session: MultiFactorSession): Promise<TotpSecret> {
  //   return null;
  // }

}
