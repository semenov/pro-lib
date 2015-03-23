function all(array) {
	return Promise.all(array);
}

function map(array, fn) {
	return all(array.map(fn));
}


var pro = {
	all: all,
	map: map
};

module.exports = pro;