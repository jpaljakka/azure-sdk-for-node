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
 * Defines the RequestScheme condition for the delivery rule.
 *
 * @extends models['DeliveryRuleCondition']
 */
class DeliveryRuleRequestSchemeCondition extends models['DeliveryRuleCondition'] {
  /**
   * Create a DeliveryRuleRequestSchemeCondition.
   * @property {object} parameters Defines the parameters for the condition.
   * @property {boolean} [parameters.negateCondition] Describes if this is
   * negate condition or not
   * @property {array} [parameters.matchValues] The match value for the
   * condition of the delivery rule
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeliveryRuleRequestSchemeCondition
   *
   * @returns {object} metadata of DeliveryRuleRequestSchemeCondition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RequestScheme',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'name',
          clientName: 'name'
        },
        uberParent: 'DeliveryRuleCondition',
        className: 'DeliveryRuleRequestSchemeCondition',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: true,
            serializedName: 'parameters',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'RequestSchemeMatchConditionParameters'
            }
          }
        }
      }
    };
  }
}

module.exports = DeliveryRuleRequestSchemeCondition;