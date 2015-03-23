function map(array, fn) {
	return Promise.all(array.map(fn));
}

var pro = {
	map: map
};

module.exports = pro;