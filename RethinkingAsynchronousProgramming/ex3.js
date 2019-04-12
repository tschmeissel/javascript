/**
 * Exercise 3
 * Get a response by an URL. The callback function
 * will then be called with the response as a
 * parameter.
 * @param url
 * @param callback function
 */
function fakeAjax(url, cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	}
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 10;
	
	console.log("Requesting: " + url);
	
	setTimeout(function() {
		cb(fake_responses[url]);
	}, randomDelay);
}

function output(text) {
	console.log(text);
}

/**
 * @param file name
 * @return a promise
 */
function getFile(file) {
	return new Promise(function executor(resolve) {
		fakeAjax(file, resolve);
	})
}

getFile("file1")
.then(output)
.then(function() {
	return getFile("file2")
})
.then(output)
.then(function() {
	return getFile("file3");
})
.then(output)
.then(function() {
	output("complete")
});
