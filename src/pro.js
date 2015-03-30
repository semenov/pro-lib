function parallel(array) {
	return Promise.all(array);
}

function series(arr) {
    return arr.reduce(function(previous, current) {
        return previous.then(current);
    });
}

function map(array, fn) {
	return parallel(array.map(fn));
}

function delay(ms, value) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(value);
		}, ms);
	});
}

function call(fn) {
	try {
		return Promise.resolve(fn());
	} catch (e) {
		return Promise.reject(e);
	}
}

function callAsync(fn) {
    return new Promise(function(resolve, reject) {
        fn(function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

function callback(promise, cb) {
    promise.then(function(result) {
        cb(null, result);
    }).catch(function(err) {
        cb(err);
    });
}



/*
	try
	reject
	resolve
	race
	any
	series
	parallelLimit?
	whilst/until
	nextTick?
	each?
	reduce?
	nodeify? promise to callback
*/

var pro = {
	parallel: parallel,
    series: series,
	map: map,
	delay: delay,
    call: call,
    callAsync: callAsync
};

module.exports = pro;