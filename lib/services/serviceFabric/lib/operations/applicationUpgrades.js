/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * ApplicationUpgrades
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ServiceFabricClient.
 * Initializes a new instance of the ApplicationUpgrades class.
 * @constructor
 *
 * @param {ServiceFabricClient} client Reference to the service client.
 */
function ApplicationUpgrades(client) {
  this.client = client;
}

/**
 * Get application upgrades
 *
 * @param {string} applicationName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link ApplicationUpgrade} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
ApplicationUpgrades.prototype.get = function (applicationName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//Applications/{applicationName}/$/GetUpgradeProgress';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  var queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ApplicationUpgrade']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Start application upgrades
 *
 * @param {string} applicationName The name of the application
 * 
 * @param {object} startApplicationUpgradeDescription The description of the
 * start application upgrade
 * 
 * @param {string} [startApplicationUpgradeDescription.name]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.targetApplicationTypeVersion]
 * 
 * @param {array} [startApplicationUpgradeDescription.parameters]
 * 
 * @param {string} [startApplicationUpgradeDescription.upgradeKind] Possible
 * values include: 'Invalid', 'Rolling'
 * 
 * @param {string} [startApplicationUpgradeDescription.rollingUpgradeMode]
 * Possible values include: 'Invalid', 'UnmonitoredAuto',
 * 'UnmonitoredManual', 'Monitored'
 * 
 * @param {number}
 * [startApplicationUpgradeDescription.upgradeReplicaSetCheckTimeoutInSeconds]
 * 
 * @param {boolean} [startApplicationUpgradeDescription.forceRestart]
 * 
 * @param {object} [startApplicationUpgradeDescription.monitoringPolicy]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.failureAction]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.healthCheckWaitDurationInMilliseconds]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.healthCheckStableDurationInMilliseconds]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.healthCheckRetryTimeoutInMilliseconds]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.upgradeTimeoutInMilliseconds]
 * 
 * @param {string}
 * [startApplicationUpgradeDescription.monitoringPolicy.upgradeDomainTimeoutInMilliseconds]
 * 
 * @param {object}
 * [startApplicationUpgradeDescription.applicationHealthPolicy]
 * 
 * @param {boolean}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.considerWarningAsError]
 * 
 * @param {number}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.maxPercentUnhealthyDeployedApplications]
 * 
 * @param {object}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy]
 * The policy of the default service type health
 * 
 * @param {number}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyServices]
 * 
 * @param {number}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyPartitionsPerService]
 * 
 * @param {number}
 * [startApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyReplicasPerPartition]
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
ApplicationUpgrades.prototype.start = function (applicationName, startApplicationUpgradeDescription, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (startApplicationUpgradeDescription === null || startApplicationUpgradeDescription === undefined) {
      throw new Error('startApplicationUpgradeDescription cannot be null or undefined.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//Applications/{applicationName}/$/Upgrade';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  var queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (startApplicationUpgradeDescription !== null && startApplicationUpgradeDescription !== undefined) {
      var requestModelMapper = new client.models['StartApplicationUpgradeDescription']().mapper();
      requestModel = client.serialize(requestModelMapper, startApplicationUpgradeDescription, 'startApplicationUpgradeDescription');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(startApplicationUpgradeDescription, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Update application upgrades
 *
 * @param {string} applicationName The name of the application
 * 
 * @param {object} updateApplicationUpgradeDescription The description of the
 * application upgrade
 * 
 * @param {string} [updateApplicationUpgradeDescription.name]
 * 
 * @param {number} [updateApplicationUpgradeDescription.upgradeKind]
 * 
 * @param {object} [updateApplicationUpgradeDescription.updateDescription] The
 * description of the update
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.rollingUpgradeMode]
 * Possible values include: 'Invalid', 'UnmonitoredAuto',
 * 'UnmonitoredManual', 'Monitored'
 * 
 * @param {boolean}
 * [updateApplicationUpgradeDescription.updateDescription.forceRestart]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.failureAction]
 * 
 * @param {number}
 * [updateApplicationUpgradeDescription.updateDescription.upgradeReplicaSetCheckTimeoutInSeconds]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.healthCheckWaitDurationInMilliseconds]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.healthCheckStableDurationInMilliseconds]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.healthCheckRetryTimeoutInMilliseconds]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.upgradeTimeoutInMilliseconds]
 * 
 * @param {string}
 * [updateApplicationUpgradeDescription.updateDescription.upgradeDomainTimeoutInMilliseconds]
 * 
 * @param {object}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy]
 * 
 * @param {boolean}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.considerWarningAsError]
 * 
 * @param {number}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.maxPercentUnhealthyDeployedApplications]
 * 
 * @param {object}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy]
 * The policy of the default service type health
 * 
 * @param {number}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyServices]
 * 
 * @param {number}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyPartitionsPerService]
 * 
 * @param {number}
 * [updateApplicationUpgradeDescription.applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyReplicasPerPartition]
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
ApplicationUpgrades.prototype.update = function (applicationName, updateApplicationUpgradeDescription, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (updateApplicationUpgradeDescription === null || updateApplicationUpgradeDescription === undefined) {
      throw new Error('updateApplicationUpgradeDescription cannot be null or undefined.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//Applications/{applicationName}/$/UpdateUpgrade';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  var queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (updateApplicationUpgradeDescription !== null && updateApplicationUpgradeDescription !== undefined) {
      var requestModelMapper = new client.models['UpdateApplicationUpgradeDescription']().mapper();
      requestModel = client.serialize(requestModelMapper, updateApplicationUpgradeDescription, 'updateApplicationUpgradeDescription');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(updateApplicationUpgradeDescription, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Resume application upgrades
 *
 * @param {string} applicationName The name of the application
 * 
 * @param {object} resumeApplicationUpgrade The upgrade of the resume
 * application
 * 
 * @param {string} [resumeApplicationUpgrade.upgradeDomainName]
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
ApplicationUpgrades.prototype.resume = function (applicationName, resumeApplicationUpgrade, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (applicationName === null || applicationName === undefined || typeof applicationName.valueOf() !== 'string') {
      throw new Error('applicationName cannot be null or undefined and it must be of type string.');
    }
    if (resumeApplicationUpgrade === null || resumeApplicationUpgrade === undefined) {
      throw new Error('resumeApplicationUpgrade cannot be null or undefined.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//Applications/{applicationName}/$/MoveNextUpgradeDomain';
  requestUrl = requestUrl.replace('{applicationName}', applicationName);
  var queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (resumeApplicationUpgrade !== null && resumeApplicationUpgrade !== undefined) {
      var requestModelMapper = new client.models['ResumeApplicationUpgrade']().mapper();
      requestModel = client.serialize(requestModelMapper, resumeApplicationUpgrade, 'resumeApplicationUpgrade');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(resumeApplicationUpgrade, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = ApplicationUpgrades;