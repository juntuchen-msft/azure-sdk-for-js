let nock = require('nock');

module.exports.hash = "d300192dece021e981c215110cfc8130";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/documentModels/prebuilt-layout:analyze', {"urlSource":"https://storageaccount/testingdata/Invoice_1.pdf?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/documentModels/prebuilt-layout/analyzeResults/b16e87eb-a0e5-41f6-b6ed-b07ccf963893?api-version=2021-09-30-preview',
  'x-envoy-upstream-service-time',
  '117',
  'apim-request-id',
  'b16e87eb-a0e5-41f6-b6ed-b07ccf963893',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:22:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/b16e87eb-a0e5-41f6-b6ed-b07ccf963893')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:22:12Z","lastUpdatedDateTime":"2021-10-04T18:22:12Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '13',
  'apim-request-id',
  '7bf6e6a9-866d-4fac-9940-651f00d8ef51',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:22:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/b16e87eb-a0e5-41f6-b6ed-b07ccf963893')
  .query(true)
  .reply(200, {"status":"running","createdDateTime":"2021-10-04T18:22:12Z","lastUpdatedDateTime":"2021-10-04T18:22:12Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  'c146dd9e-7fbf-46b3-87ce-2dc07b8abd6c',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:22:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/documentModels/prebuilt-layout/analyzeResults/b16e87eb-a0e5-41f6-b6ed-b07ccf963893')
  .query(true)
  .reply(200, {"status":"succeeded","createdDateTime":"2021-10-04T18:22:12Z","lastUpdatedDateTime":"2021-10-04T18:22:14Z","analyzeResult":{"apiVersion":"2021-09-30-preview","modelId":"prebuilt-layout","stringIndexType":"textElements","content":"Contoso\nAddress:\n1 Redmond way Suite\n6000 Redmond, WA\n99243\nInvoice For: Microsoft\n1020 Enterprise Way\nSunnayvale, CA 87659\nInvoice Number\nInvoice Date\nInvoice Due Date\nCharges\nVAT ID\n34278587\n6/18/2017\n6/24/2017\n$56,651.49\nPT","pages":[{"pageNumber":1,"angle":0,"width":8.5,"height":11,"unit":"inch","words":[{"content":"Contoso","boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"confidence":1,"span":{"offset":0,"length":7}},{"content":"Address:","boundingBox":[0.7994,1.5143,1.3836,1.5143,1.3836,1.6154,0.7994,1.6154],"confidence":1,"span":{"offset":8,"length":8}},{"content":"1","boundingBox":[0.8106,1.708,0.8463,1.708,0.8463,1.8053,0.8106,1.8053],"confidence":1,"span":{"offset":17,"length":1}},{"content":"Redmond","boundingBox":[0.923,1.7047,1.5018,1.7047,1.5018,1.8068,0.923,1.8068],"confidence":1,"span":{"offset":19,"length":7}},{"content":"way","boundingBox":[1.5506,1.7309,1.7949,1.7309,1.7949,1.8342,1.5506,1.8342],"confidence":1,"span":{"offset":27,"length":3}},{"content":"Suite","boundingBox":[1.8415,1.7033,2.1445,1.7033,2.1445,1.8078,1.8415,1.8078],"confidence":1,"span":{"offset":31,"length":5}},{"content":"6000","boundingBox":[0.8019,1.896,1.0991,1.896,1.0991,1.9994,0.8019,1.9994],"confidence":1,"span":{"offset":37,"length":4}},{"content":"Redmond,","boundingBox":[1.1537,1.8964,1.7689,1.8964,1.7689,2.0171,1.1537,2.0171],"confidence":1,"span":{"offset":42,"length":8}},{"content":"WA","boundingBox":[1.8196,1.8976,2.0384,1.8976,2.0384,1.9969,1.8196,1.9969],"confidence":1,"span":{"offset":51,"length":2}},{"content":"99243","boundingBox":[0.8025,2.0876,1.175,2.0876,1.175,2.1911,0.8025,2.1911],"confidence":1,"span":{"offset":54,"length":5}},{"content":"Invoice","boundingBox":[4.4033,1.5143,4.8234,1.5143,4.8234,1.6155,4.4033,1.6155],"confidence":1,"span":{"offset":60,"length":7}},{"content":"For:","boundingBox":[4.8793,1.5143,5.1013,1.5143,5.1013,1.6154,4.8793,1.6154],"confidence":1,"span":{"offset":68,"length":4}},{"content":"Microsoft","boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"confidence":1,"span":{"offset":73,"length":9}},{"content":"1020","boundingBox":[5.2036,1.716,5.4935,1.716,5.4935,1.8185,5.2036,1.8185],"confidence":1,"span":{"offset":83,"length":4}},{"content":"Enterprise","boundingBox":[5.5488,1.7164,6.2178,1.7164,6.2178,1.8441,5.5488,1.8441],"confidence":1,"span":{"offset":88,"length":10}},{"content":"Way","boundingBox":[6.2618,1.7164,6.5436,1.7164,6.5436,1.8459,6.2618,1.8459],"confidence":1,"span":{"offset":99,"length":3}},{"content":"Sunnayvale,","boundingBox":[5.196,1.9047,5.9894,1.9047,5.9894,2.0359,5.196,2.0359],"confidence":1,"span":{"offset":103,"length":11}},{"content":"CA","boundingBox":[6.0427,1.9047,6.2354,1.9047,6.2354,2.0085,6.0427,2.0085],"confidence":1,"span":{"offset":115,"length":2}},{"content":"87659","boundingBox":[6.2801,1.906,6.6526,1.906,6.6526,2.0086,6.2801,2.0086],"confidence":1,"span":{"offset":118,"length":5}},{"content":"Invoice","boundingBox":[0.5439,2.8733,1.0098,2.8733,1.0098,2.9754,0.5439,2.9754],"confidence":1,"span":{"offset":124,"length":7}},{"content":"Number","boundingBox":[1.0611,2.8743,1.5729,2.8743,1.5729,2.9754,1.0611,2.9754],"confidence":1,"span":{"offset":132,"length":6}},{"content":"Invoice","boundingBox":[1.9491,2.8733,2.415,2.8733,2.415,2.9754,1.9491,2.9754],"confidence":1,"span":{"offset":139,"length":7}},{"content":"Date","boundingBox":[2.4673,2.8743,2.7527,2.8743,2.7527,2.9754,2.4673,2.9754],"confidence":1,"span":{"offset":147,"length":4}},{"content":"Invoice","boundingBox":[3.3495,2.8733,3.8155,2.8733,3.8155,2.9754,3.3495,2.9754],"confidence":1,"span":{"offset":152,"length":7}},{"content":"Due","boundingBox":[3.8677,2.8743,4.1149,2.8743,4.1149,2.9754,3.8677,2.9754],"confidence":1,"span":{"offset":160,"length":3}},{"content":"Date","boundingBox":[4.1678,2.8743,4.4547,2.8743,4.4547,2.9754,4.1678,2.9754],"confidence":1,"span":{"offset":164,"length":4}},{"content":"Charges","boundingBox":[4.7468,2.8717,5.289,2.8717,5.289,3.0035,4.7468,3.0035],"confidence":1,"span":{"offset":169,"length":7}},{"content":"VAT","boundingBox":[6.141,2.873,6.4147,2.873,6.4147,2.9736,6.141,2.9736],"confidence":1,"span":{"offset":177,"length":3}},{"content":"ID","boundingBox":[6.4655,2.873,6.5875,2.873,6.5875,2.9736,6.4655,2.9736],"confidence":1,"span":{"offset":181,"length":2}},{"content":"34278587","boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"confidence":1,"span":{"offset":184,"length":8}},{"content":"6/18/2017","boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"confidence":1,"span":{"offset":193,"length":9}},{"content":"6/24/2017","boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"confidence":1,"span":{"offset":203,"length":9}},{"content":"$56,651.49","boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"confidence":1,"span":{"offset":213,"length":10}},{"content":"PT","boundingBox":[6.2285,3.4114,6.3919,3.4114,6.3919,3.5119,6.2285,3.5119],"confidence":1,"span":{"offset":224,"length":2}}],"selectionMarks":[],"lines":[{"content":"Contoso","boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"spans":[{"offset":0,"length":7}]},{"content":"Address:","boundingBox":[0.7994,1.5143,1.3836,1.5143,1.3836,1.6154,0.7994,1.6154],"spans":[{"offset":8,"length":8}]},{"content":"1 Redmond way Suite","boundingBox":[0.8106,1.7033,2.1445,1.7033,2.1445,1.8342,0.8106,1.8342],"spans":[{"offset":17,"length":19}]},{"content":"6000 Redmond, WA","boundingBox":[0.8019,1.896,2.0384,1.896,2.0384,2.0171,0.8019,2.0171],"spans":[{"offset":37,"length":16}]},{"content":"99243","boundingBox":[0.8025,2.0876,1.175,2.0876,1.175,2.1911,0.8025,2.1911],"spans":[{"offset":54,"length":5}]},{"content":"Invoice For: Microsoft","boundingBox":[4.4033,1.5114,5.8155,1.5114,5.8155,1.6155,4.4033,1.6155],"spans":[{"offset":60,"length":22}]},{"content":"1020 Enterprise Way","boundingBox":[5.2036,1.716,6.5436,1.716,6.5436,1.8459,5.2036,1.8459],"spans":[{"offset":83,"length":19}]},{"content":"Sunnayvale, CA 87659","boundingBox":[5.196,1.9047,6.6526,1.9047,6.6526,2.0359,5.196,2.0359],"spans":[{"offset":103,"length":20}]},{"content":"Invoice Number","boundingBox":[0.5439,2.8733,1.5729,2.8733,1.5729,2.9754,0.5439,2.9754],"spans":[{"offset":124,"length":14}]},{"content":"Invoice Date","boundingBox":[1.9491,2.8733,2.7527,2.8733,2.7527,2.9754,1.9491,2.9754],"spans":[{"offset":139,"length":12}]},{"content":"Invoice Due Date","boundingBox":[3.3495,2.8733,4.4547,2.8733,4.4547,2.9754,3.3495,2.9754],"spans":[{"offset":152,"length":16}]},{"content":"Charges","boundingBox":[4.7468,2.8717,5.289,2.8717,5.289,3.0035,4.7468,3.0035],"spans":[{"offset":169,"length":7}]},{"content":"VAT ID","boundingBox":[6.141,2.873,6.5875,2.873,6.5875,2.9736,6.141,2.9736],"spans":[{"offset":177,"length":6}]},{"content":"34278587","boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"spans":[{"offset":184,"length":8}]},{"content":"6/18/2017","boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"spans":[{"offset":193,"length":9}]},{"content":"6/24/2017","boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"spans":[{"offset":203,"length":9}]},{"content":"$56,651.49","boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"spans":[{"offset":213,"length":10}]},{"content":"PT","boundingBox":[6.2285,3.4114,6.3919,3.4114,6.3919,3.5119,6.2285,3.5119],"spans":[{"offset":224,"length":2}]}],"spans":[{"offset":0,"length":226}]}],"tables":[{"rowCount":3,"columnCount":5,"cells":[{"kind":"columnHeader","rowIndex":0,"columnIndex":0,"rowSpan":1,"columnSpan":1,"content":"Invoice Number","boundingRegions":[{"pageNumber":1,"boundingBox":[0.497,2.7887,1.9036,2.7887,1.8965,3.3133,0.5041,3.3133]}],"spans":[{"offset":124,"length":14}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":1,"rowSpan":1,"columnSpan":1,"content":"Invoice Date","boundingRegions":[{"pageNumber":1,"boundingBox":[1.9036,2.7887,3.296,2.7887,3.3031,3.3205,1.8965,3.3133]}],"spans":[{"offset":139,"length":12}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":2,"rowSpan":1,"columnSpan":1,"content":"Invoice Due Date","boundingRegions":[{"pageNumber":1,"boundingBox":[3.296,2.7887,4.7026,2.7887,4.7026,3.3205,3.3031,3.3205]}],"spans":[{"offset":152,"length":16}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":3,"rowSpan":1,"columnSpan":1,"content":"Charges","boundingRegions":[{"pageNumber":1,"boundingBox":[4.7026,2.7887,6.1021,2.7887,6.1021,3.3133,4.7026,3.3205]}],"spans":[{"offset":169,"length":7}]},{"kind":"columnHeader","rowIndex":0,"columnIndex":4,"rowSpan":1,"columnSpan":1,"content":"VAT ID","boundingRegions":[{"pageNumber":1,"boundingBox":[6.1021,2.7887,7.4945,2.7887,7.4945,3.3133,6.1021,3.3133]}],"spans":[{"offset":177,"length":6}]},{"rowIndex":1,"columnIndex":0,"rowSpan":2,"columnSpan":1,"content":"34278587","boundingRegions":[{"pageNumber":1,"boundingBox":[0.5041,3.3133,1.8965,3.3133,1.8965,3.8523,0.5113,3.8523]}],"spans":[{"offset":184,"length":8}]},{"rowIndex":1,"columnIndex":1,"rowSpan":2,"columnSpan":1,"content":"6/18/2017","boundingRegions":[{"pageNumber":1,"boundingBox":[1.8965,3.3133,3.3031,3.3205,3.3031,3.8523,1.8965,3.8523]}],"spans":[{"offset":193,"length":9}]},{"rowIndex":1,"columnIndex":2,"rowSpan":2,"columnSpan":1,"content":"6/24/2017","boundingRegions":[{"pageNumber":1,"boundingBox":[3.3031,3.3205,4.7026,3.3205,4.7026,3.8523,3.3031,3.8523]}],"spans":[{"offset":203,"length":9}]},{"rowIndex":1,"columnIndex":3,"rowSpan":2,"columnSpan":1,"content":"$56,651.49","boundingRegions":[{"pageNumber":1,"boundingBox":[4.7026,3.3205,6.1021,3.3133,6.1021,3.8523,4.7026,3.8523]}],"spans":[{"offset":213,"length":10}]},{"rowIndex":1,"columnIndex":4,"rowSpan":2,"columnSpan":1,"content":"PT","boundingRegions":[{"pageNumber":1,"boundingBox":[6.1021,3.3133,7.4945,3.3133,7.4945,3.8523,6.1021,3.8523]}],"spans":[{"offset":224,"length":2}]}],"boundingRegions":[{"pageNumber":1,"boundingBox":[0.5052,2.7836,7.4995,2.7844,7.4985,3.8596,0.5038,3.859]}],"spans":[{"offset":124,"length":102}]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '35',
  'apim-request-id',
  '7e55e99f-7a4b-45d6-925b-53b89596675e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 04 Oct 2021 18:22:17 GMT'
]);
