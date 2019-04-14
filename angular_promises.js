// promises in AngularJS
//
// http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
//
function provideData() {
	var deferred = $q.defer();
	
	var asyncFn = function() {
		return {};
	}
	
	deferred.resolve(asyncFn());
	
	return deferred.promise;
}

provideData.then(function(data) {
	// process data
}	

