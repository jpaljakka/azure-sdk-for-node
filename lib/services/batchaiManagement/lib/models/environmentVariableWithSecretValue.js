/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A collection of environment variables with secret values to set.
 *
 */
class EnvironmentVariableWithSecretValue {
  /**
   * Create a EnvironmentVariableWithSecretValue.
   * @member {string} name The name of the environment variable to store the
   * secret value.
   * @member {string} [value] The value of the environment variable. This value
   * will never be reported back by Batch AI.
   * @member {object} [valueSecretReference] Specifies the location of the
   * Azure KeyVault secret which will be used as the environment variable
   * value. Specifies KeyVault Store and Secret which contains the value for
   * the environment variable. One of value or valueSecretReference must be
   * provided.
   * @member {object} [valueSecretReference.sourceVault]
   * @member {string} [valueSecretReference.sourceVault.id] The ID of the
   * resource
   * @member {string} [valueSecretReference.secretUrl]
   */
  constructor() {
  }

  /**
   * Defines the metadata of EnvironmentVariableWithSecretValue
   *
   * @returns {object} metadata of EnvironmentVariableWithSecretValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnvironmentVariableWithSecretValue',
      type: {
        name: 'Composite',
        className: 'EnvironmentVariableWithSecretValue',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          valueSecretReference: {
            required: false,
            serializedName: 'valueSecretReference',
            type: {
              name: 'Composite',
              className: 'KeyVaultSecretReference'
            }
          }
        }
      }
    };
  }
}

module.exports = EnvironmentVariableWithSecretValue;