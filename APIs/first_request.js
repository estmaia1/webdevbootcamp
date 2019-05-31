const request = require('request');
request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parsedData = JSON.parse(body); // Parsing the data to be manageable
  console.log('title:', parsedData["title"]); // Print the HTML for the Google homepage.
});