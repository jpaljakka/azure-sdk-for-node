// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobschedules?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 21:04:05 GMT',
  etag: '0x8D65FAC2F4D7E17',
  location: 'https://test3.westcentralus.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a1e209e-5a9d-4328-8f6c-395854d964b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Tue, 11 Dec 2018 21:04:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobschedules?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 21:04:05 GMT',
  etag: '0x8D65FAC2F4D7E17',
  location: 'https://test3.westcentralus.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5a1e209e-5a9d-4328-8f6c-395854d964b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Tue, 11 Dec 2018 21:04:05 GMT',
  connection: 'close' });
 return result; }]];