function parallel(array) {
	return Promise.all(array);
}

function map(array, fn) {
	return parallel(array.map(fn));
}

function delay(ms, value) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			Promise.resolve(value);
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


function each(array, fn) {
	array.forEach(function(val, i) {

	});
}

function whilst(test, fn) {
	if (test()) {
		return fn().then(function() {
			return whilst(test, fn);
		});
	}
}

function series(fns) {
	var i = 0;
	var res = [];
	var fn;
	return whilst(function() {
		return i < fns.length;
	}, function() {
		fn = fns[i];
		return fn().then(function(val) {
			res[i] = val;
			i++;
		})
	}).then(function() {
		return res;
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