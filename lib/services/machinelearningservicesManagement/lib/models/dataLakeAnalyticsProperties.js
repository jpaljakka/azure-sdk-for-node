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
 * Class representing a DataLakeAnalyticsProperties.
 */
class DataLakeAnalyticsProperties {
  /**
   * Create a DataLakeAnalyticsProperties.
   * @property {string} [dataLakeStoreAccountName] DataLake Store Account Name
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataLakeAnalyticsProperties
   *
   * @returns {object} metadata of DataLakeAnalyticsProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataLakeAnalytics_properties',
      type: {
        name: 'Composite',
        className: 'DataLakeAnalyticsProperties',
        modelProperties: {
          dataLakeStoreAccountName: {
            required: false,
            serializedName: 'dataLakeStoreAccountName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataLakeAnalyticsProperties;