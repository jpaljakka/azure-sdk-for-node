// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/operationResults?api-version=2015-01-14-preview')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/operationResults/6f3bd37b-fc86-5544-d01f-dd1f0a4aa980\",\"name\":\"6f3bd37b-fc86-5544-d01f-dd1f0a4aa980\",\"type\":\"Microsoft.Intune/locations/operationResults\",\"properties\":{\"friendlyName\":\"Wipe\",\"category\":\"ApplicationManagement\",\"lastModifiedTime\":\"2015-12-04T22:36:23.3384598\",\"state\":\"pending\",\"operationMetadata\":[{\"name\":\"app\",\"value\":\"OneDrive\"},{\"name\":\"userId\",\"value\":\"d8aeb100-6e17-4cf7-bbda-169000d03c1e\"},{\"name\":\"userName\",\"value\":\"Joe Admin\"},{\"name\":\"deviceType\",\"value\":\"TestIpad\"}]}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/operationResults/b2a254ae-ca91-4086-b6cd-575e5dbc6698\",\"name\":\"b2a254ae-ca91-4086-b6cd-575e5dbc6698\",\"type\":\"Microsoft.Intune/locations/operationResults\",\"properties\":{\"friendlyName\":\"Wipe\",\"category\":\"ApplicationManagement\",\"lastModifiedTime\":\"2015-12-04T22:36:24.2134565\",\"state\":\"pending\",\"operationMetadata\":[{\"name\":\"app\",\"value\":\"Word\"},{\"name\":\"userId\",\"value\":\"d8aeb100-6e17-4cf7-bbda-169000d03c1e\"},{\"name\":\"userName\",\"value\":\"Joe Admin\"},{\"name\":\"deviceType\",\"value\":\"iPad\"}]}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1107',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14997',
  'elapsed-time-milliseconds': '202',
  'service-name': 'AdminExperienceService',
  'client-request-id': '80bdd21d-6a9e-4eba-9765-09e9b14ff04d',
  'unique-request-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'x-ms-request-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'related-activity-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'af0accb5-9542-4bb6-ad13-490a74f6093d',
  'x-ms-routing-request-id': 'WESTUS:20151204T223625Z:af0accb5-9542-4bb6-ad13-490a74f6093d',
  date: 'Fri, 04 Dec 2015 22:36:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/operationResults?api-version=2015-01-14-preview')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/operationResults/6f3bd37b-fc86-5544-d01f-dd1f0a4aa980\",\"name\":\"6f3bd37b-fc86-5544-d01f-dd1f0a4aa980\",\"type\":\"Microsoft.Intune/locations/operationResults\",\"properties\":{\"friendlyName\":\"Wipe\",\"category\":\"ApplicationManagement\",\"lastModifiedTime\":\"2015-12-04T22:36:23.3384598\",\"state\":\"pending\",\"operationMetadata\":[{\"name\":\"app\",\"value\":\"OneDrive\"},{\"name\":\"userId\",\"value\":\"d8aeb100-6e17-4cf7-bbda-169000d03c1e\"},{\"name\":\"userName\",\"value\":\"Joe Admin\"},{\"name\":\"deviceType\",\"value\":\"TestIpad\"}]}},{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/operationResults/b2a254ae-ca91-4086-b6cd-575e5dbc6698\",\"name\":\"b2a254ae-ca91-4086-b6cd-575e5dbc6698\",\"type\":\"Microsoft.Intune/locations/operationResults\",\"properties\":{\"friendlyName\":\"Wipe\",\"category\":\"ApplicationManagement\",\"lastModifiedTime\":\"2015-12-04T22:36:24.2134565\",\"state\":\"pending\",\"operationMetadata\":[{\"name\":\"app\",\"value\":\"Word\"},{\"name\":\"userId\",\"value\":\"d8aeb100-6e17-4cf7-bbda-169000d03c1e\"},{\"name\":\"userName\",\"value\":\"Joe Admin\"},{\"name\":\"deviceType\",\"value\":\"iPad\"}]}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1107',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14997',
  'elapsed-time-milliseconds': '202',
  'service-name': 'AdminExperienceService',
  'client-request-id': '80bdd21d-6a9e-4eba-9765-09e9b14ff04d',
  'unique-request-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'x-ms-request-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'related-activity-id': '9e4be788-24dc-4590-86c9-fc401670f5d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'af0accb5-9542-4bb6-ad13-490a74f6093d',
  'x-ms-routing-request-id': 'WESTUS:20151204T223625Z:af0accb5-9542-4bb6-ad13-490a74f6093d',
  date: 'Fri, 04 Dec 2015 22:36:24 GMT',
  connection: 'close' });
 return result; }]];