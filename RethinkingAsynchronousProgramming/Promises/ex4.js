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

["file1", "file2", "file3"]
.map(getFile)
.reduce(function combine(chain, pr) {
	return chain.then(function() {
		return pr;
	}).then(output);
//}, new Promise(function(resolve) {resolve();}));
}, Promise.resolve()).
then(function() {
	output("complete");
});