// await can only be put in async function
// await turns a promise into resolved data
async function doFetch() {
	const response = await fetch('http://optimal-systems.de');
	return response.text();
}

doFetch();

// code after await will be paused until await is ready to go on
async function doAsyncGet() {
	const response = await $.get("http://optimal-systems.de")
 	console.log(response);
}

doAsyncGet();