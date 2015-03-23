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

var pro = {
	all: all,
	map: map,
	delay: delay
};

module.exports = pro;