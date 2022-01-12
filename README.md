# nodeApiAssignment
A node.js api assignment

How to run the code locally?

Run:
git clone https://github.com/MichelMeijer/nodeApiAssignment.git

then do:
cd nodeApiAssignment

run:
npm install

And start node:
node index.js

To test the API with Postmen make a POST request to:
http://localhost:5000/records

With the body:
{
"startDate": "2016-01-01",
"endDate": "2017-02-02",
"minCount": 2910,
"maxCount": 3000
} 
