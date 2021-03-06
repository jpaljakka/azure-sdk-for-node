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
 * DNS configuration for the container group.
 *
 */
class DnsConfiguration {
  /**
   * Create a DnsConfiguration.
   * @member {array} nameServers The DNS servers for the container group.
   * @member {string} [searchDomains] The DNS search domains for hostname
   * lookup in the container group.
   * @member {string} [options] The DNS options for the container group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DnsConfiguration
   *
   * @returns {object} metadata of DnsConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DnsConfiguration',
      type: {
        name: 'Composite',
        className: 'DnsConfiguration',
        modelProperties: {
          nameServers: {
            required: true,
            serializedName: 'nameServers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          searchDomains: {
            required: false,
            serializedName: 'searchDomains',
            type: {
              name: 'String'
            }
          },
          options: {
            required: false,
            serializedName: 'options',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DnsConfiguration;
