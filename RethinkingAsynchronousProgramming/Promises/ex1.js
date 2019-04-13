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

function getFile(file) {
	fakeAjax(file, function(text) {
		handleResponse(file, text);
	});
}

function handleResponse(filename, contents) {
	if (!(filename in responses)) {
		responses[filename] = contents;
	}
	
	var filenames = ["file1", "file2", "file3"];
	for (var i=0; i < filenames.length; i++) {
		if (filenames[i] in responses) {
			if (typeof responses[filenames[i]] == "string") {
				output(responses[filenames[i]]);
				responses[filenames[i]] = false;
			}
		} else {
			return;
		}
	}
	
	output("complete!");
}

var responses = {};

// request all files at once in "parallel"
getFile("file1");
getFile("file3");
getFile("file2");
