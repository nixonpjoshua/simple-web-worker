onmessage = function(e) {
  var data = JSON.parse(e.data);
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (data.first * data.second);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}