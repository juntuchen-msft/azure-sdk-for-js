let nock = require('nock');

module.exports.hash = "85be222d7e7fb0850e3f0eef01fa3d9b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get(`/synonymmaps('my-azure-synonymmap-1')`)
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147bf6735cbda6c3cad966dfeaefde8d147f3b65d358feede6df3a66df2ac9ecea759933763f97d7c552c67d555335ee6eddddf6d91b7195efff1e67a592daf178b6cd5dcfdddf2655bb4d71f8d0c6c6a7441807fdf8f76de1d3c7df874efde83e3870f9e3c7978bcfbfb7e44ad96d922a7af17d7dbd90fd675beed606defd2d7e755bdc88058539535fdad5f37f4c957cba2cd67e9eb3623644769f0675a9da7c78bbc2ea659fad951fad5ebe3df77f9ddac9917cb8bb65a8e52fc3ec637df3d26a0f9725a5fafdaa25afe5ef9f5478f96ebb2fc25ff0f0af03d131c010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; odata.metadata=minimal',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'ETag',
  'W/"0x8D9D237A97BB9A1"',
  'Vary',
  'Accept-Encoding',
  'request-id',
  '459df00f-ff9c-4d49-94cf-3238a37e225a',
  'elapsed-time',
  '9',
  'OData-Version',
  '4.0',
  'Preference-Applied',
  'odata.include-annotations="*"',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'Date',
  'Fri, 07 Jan 2022 23:44:40 GMT',
  'Content-Length',
  '334'
]);
