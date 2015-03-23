function all(array) {
	return Promise.all(array);
}

function map(array, fn) {
	return all(array.map(fn));
}

function delay(ms, value) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(value);
		}, ms);
	});
}

function resolve(val) {
	return Promise.resolve(val);
}

function reject(val) {
	return Promise.reject(val);
}

function race(array) {
	return Promise.race(array);
}

function try(fn) {
	try {
		return resolve(fn());
	} catch (e) {
		return reject(e);
	}
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
	resolve: resolve,
	reject: reject,
	all: all,
	parallel: all,
	map: map,
	delay: delay,
	try: try
};

module.exports = pro;