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
 * Additional information on Azure IaaS VM specific backup item.
 *
 */
class AzureIaaSVMProtectedItemExtendedInfo {
  /**
   * Create a AzureIaaSVMProtectedItemExtendedInfo.
   * @member {date} [oldestRecoveryPoint] The oldest backup copy available for
   * this backup item.
   * @member {number} [recoveryPointCount] Number of backup copies available
   * for this backup item.
   * @member {boolean} [policyInconsistent] Specifies if backup policy
   * associated with the backup item is inconsistent.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureIaaSVMProtectedItemExtendedInfo
   *
   * @returns {object} metadata of AzureIaaSVMProtectedItemExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureIaaSVMProtectedItemExtendedInfo',
      type: {
        name: 'Composite',
        className: 'AzureIaaSVMProtectedItemExtendedInfo',
        modelProperties: {
          oldestRecoveryPoint: {
            required: false,
            serializedName: 'oldestRecoveryPoint',
            type: {
              name: 'DateTime'
            }
          },
          recoveryPointCount: {
            required: false,
            serializedName: 'recoveryPointCount',
            type: {
              name: 'Number'
            }
          },
          policyInconsistent: {
            required: false,
            serializedName: 'policyInconsistent',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSVMProtectedItemExtendedInfo;
