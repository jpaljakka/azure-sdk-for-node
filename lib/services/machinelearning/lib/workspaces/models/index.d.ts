/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * The error response send when an operation fails.
 */
export interface ErrorResponse {
  /**
   * error code
   */
  code: string;
  /**
   * error message
   */
  message: string;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The resource ID.
   */
  readonly id?: string;
  /**
   * The name of the resource.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   */
  readonly type?: string;
  /**
   * The location of the resource. This cannot be changed after the resource is created.
   */
  location: string;
  /**
   * The tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * An object that represents a machine learning workspace.
 */
export interface Workspace extends Resource {
  /**
   * The fully qualified arm id of the storage account associated with this workspace.
   */
  userStorageAccountId: string;
  /**
   * The email id of the owner for this workspace.
   */
  ownerEmail?: string;
  /**
   * The type of this workspace. Possible values include: 'Production', 'Free', 'Anonymous',
   * 'PaidStandard', 'PaidPremium'
   */
  readonly workspaceType?: string;
  /**
   * The current state of workspace resource. Possible values include: 'Deleted', 'Enabled',
   * 'Disabled', 'Migrated', 'Updated', 'Registered', 'Unregistered'
   */
  readonly workspaceState?: string;
  /**
   * The immutable id associated with this workspace.
   */
  readonly workspaceId?: string;
  /**
   * The creation time for this workspace resource.
   */
  readonly creationTime?: string;
  /**
   * The regional endpoint for the machine learning studio service which hosts this workspace.
   */
  readonly studioEndpoint?: string;
  /**
   * The key vault identifier used for encrypted workspaces.
   */
  keyVaultIdentifierId?: string;
}

/**
 * The parameters for updating a machine learning workspace.
 */
export interface WorkspaceUpdateParameters {
  /**
   * The resource tags for the machine learning workspace.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The current state of workspace resource. Possible values include: 'Deleted', 'Enabled',
   * 'Disabled', 'Migrated', 'Updated', 'Registered', 'Unregistered'
   */
  workspaceState?: string;
  /**
   * The key vault identifier used for encrypted workspaces.
   */
  keyVaultIdentifierId?: string;
}

/**
 * Workspace authorization keys for a workspace.
 */
export interface WorkspaceKeysResponse {
  /**
   * Primary authorization key for this workspace.
   */
  primaryToken?: string;
  /**
   * Secondary authorization key for this workspace.
   */
  secondaryToken?: string;
}

/**
 * Display name of operation
 */
export interface OperationDisplay {
  /**
   * The resource provider name: Microsoft.MachineLearning
   */
  provider?: string;
  /**
   * The resource on which the operation is performed.
   */
  resource?: string;
  /**
   * The operation that users can perform.
   */
  operation?: string;
  /**
   * The description for the operation.
   */
  description?: string;
}

/**
 * Azure Machine Learning Studio REST API operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Display name of operation
   */
  display?: OperationDisplay;
}

/**
 * An array of operations supported by the resource provider.
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * The result of a request to list machine learning workspace keys.
 */
export interface WorkspaceListResult extends Array<Workspace> {
  /**
   * The URI that can be used to request the next list of machine learning workspaces.
   */
  nextLink?: string;
}
