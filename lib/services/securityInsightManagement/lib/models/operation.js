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

/**
 * Operation provided by provider
 *
 */
class Operation {
  /**
   * Create a Operation.
   * @property {string} [name] Name of the operation
   * @property {object} [display] Properties of the operation
   * @property {string} [display.provider] Provider name
   * @property {string} [display.resource] Resource name
   * @property {string} [display.operation] Operation name
   * @property {string} [display.description] Description of the operation
   */
  constructor() {
  }

  /**
   * Defines the metadata of Operation
   *
   * @returns {object} metadata of Operation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'operation',
      type: {
        name: 'Composite',
        className: 'Operation',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'OperationDisplay'
            }
          }
        }
      }
    };
  }
}

module.exports = Operation;