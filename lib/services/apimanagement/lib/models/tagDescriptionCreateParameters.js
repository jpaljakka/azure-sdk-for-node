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
 * Parameters supplied to the Create TagDescription operation.
 *
 */
class TagDescriptionCreateParameters {
  /**
   * Create a TagDescriptionCreateParameters.
   * @property {string} [description] Description of the Tag.
   * @property {string} [externalDocsUrl] Absolute URL of external resources
   * describing the tag.
   * @property {string} [externalDocsDescription] Description of the external
   * resources describing the tag.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TagDescriptionCreateParameters
   *
   * @returns {object} metadata of TagDescriptionCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TagDescriptionCreateParameters',
      type: {
        name: 'Composite',
        className: 'TagDescriptionCreateParameters',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          externalDocsUrl: {
            required: false,
            serializedName: 'properties.externalDocsUrl',
            constraints: {
              MaxLength: 2000
            },
            type: {
              name: 'String'
            }
          },
          externalDocsDescription: {
            required: false,
            serializedName: 'properties.externalDocsDescription',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TagDescriptionCreateParameters;
