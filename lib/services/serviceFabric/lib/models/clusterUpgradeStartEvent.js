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
 * Cluster Upgrade Start event.
 *
 * @extends models['ClusterEvent']
 */
class ClusterUpgradeStartEvent extends models['ClusterEvent'] {
  /**
   * Create a ClusterUpgradeStartEvent.
   * @property {string} currentClusterVersion Current Cluster version.
   * @property {string} targetClusterVersion Target Cluster version.
   * @property {string} upgradeType Type of upgrade.
   * @property {string} rollingUpgradeMode Mode of upgrade.
   * @property {string} failureAction Action if failed.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ClusterUpgradeStartEvent
   *
   * @returns {object} metadata of ClusterUpgradeStartEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterUpgradeStart',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'ClusterUpgradeStartEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          currentClusterVersion: {
            required: true,
            serializedName: 'CurrentClusterVersion',
            type: {
              name: 'String'
            }
          },
          targetClusterVersion: {
            required: true,
            serializedName: 'TargetClusterVersion',
            type: {
              name: 'String'
            }
          },
          upgradeType: {
            required: true,
            serializedName: 'UpgradeType',
            type: {
              name: 'String'
            }
          },
          rollingUpgradeMode: {
            required: true,
            serializedName: 'RollingUpgradeMode',
            type: {
              name: 'String'
            }
          },
          failureAction: {
            required: true,
            serializedName: 'FailureAction',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterUpgradeStartEvent;
