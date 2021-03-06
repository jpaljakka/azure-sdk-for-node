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
 * Details needed to monitor a Hana Instance
 *
 */
class MonitoringDetails {
  /**
   * Create a MonitoringDetails.
   * @property {string} [hanaVnet] ARM ID of an Azure Vnet with access to the
   * HANA instance.
   * @property {string} [hanaHostname] Hostname of the HANA Instance blade.
   * @property {string} [hanaInstanceNum] A number between 00 and 99, stored as
   * a string to maintain leading zero.
   * @property {string} [dbContainer] Either single or multiple depending on
   * the use of MDC(Multiple Database Containers). Possible values include:
   * 'single', 'multiple'. Default value: 'single' .
   * @property {string} [hanaDatabase] Name of the database itself.  It only
   * needs to be specified if using MDC
   * @property {string} [hanaDbUsername] Username for the HANA database to
   * login to for monitoring
   * @property {string} [hanaDbPassword] Password for the HANA database to
   * login for monitoring
   */
  constructor() {
  }

  /**
   * Defines the metadata of MonitoringDetails
   *
   * @returns {object} metadata of MonitoringDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MonitoringDetails',
      type: {
        name: 'Composite',
        className: 'MonitoringDetails',
        modelProperties: {
          hanaVnet: {
            required: false,
            serializedName: 'hanaVnet',
            type: {
              name: 'String'
            }
          },
          hanaHostname: {
            required: false,
            serializedName: 'hanaHostname',
            type: {
              name: 'String'
            }
          },
          hanaInstanceNum: {
            required: false,
            serializedName: 'hanaInstanceNum',
            type: {
              name: 'String'
            }
          },
          dbContainer: {
            required: false,
            serializedName: 'dbContainer',
            defaultValue: 'single',
            type: {
              name: 'String'
            }
          },
          hanaDatabase: {
            required: false,
            serializedName: 'hanaDatabase',
            type: {
              name: 'String'
            }
          },
          hanaDbUsername: {
            required: false,
            serializedName: 'hanaDbUsername',
            type: {
              name: 'String'
            }
          },
          hanaDbPassword: {
            required: false,
            serializedName: 'hanaDbPassword',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MonitoringDetails;
