var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

if (!!window.Worker) {
	var myWorker = new Worker("worker.js");

	first.onchange = function() {
        var data = {
            first: first.value,
            second: second.value
        }
        data = JSON.stringify(data);
        myWorker.postMessage(data);
        console.log('Message posted to worker' + data);
	}

	second.onchange = function() {
        var data = {
            first: first.value,
            second: second.value
        }
        data = JSON.stringify(data);
        myWorker.postMessage(data);
        console.log('Message posted to worker' + data);
	}

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	}
}