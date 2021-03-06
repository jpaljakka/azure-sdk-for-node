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
 * Specifies the storage settings for the HANA instance disks.
 *
 */
class StorageProfile {
  /**
   * Create a StorageProfile.
   * @property {string} [nfsIpAddress] IP Address to connect to storage.
   * @property {array} [osDisks] Specifies information about the operating
   * system disk used by the hana instance.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageProfile
   *
   * @returns {object} metadata of StorageProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageProfile',
      type: {
        name: 'Composite',
        className: 'StorageProfile',
        modelProperties: {
          nfsIpAddress: {
            required: false,
            readOnly: true,
            serializedName: 'nfsIpAddress',
            type: {
              name: 'String'
            }
          },
          osDisks: {
            required: false,
            serializedName: 'osDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'Disk'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StorageProfile;
