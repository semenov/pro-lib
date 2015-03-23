var pro = require('../src/pro');
var assert = require('assert');

describe('Pro Lib', function() {
	describe('map function', function() {
		it('maps two items', function() {
			return pro.map([1, 2, 3], function(val, index) {
				return Promise.resolve(index * 10 + val);
			}).then(function(vals) {
				assert.deepEqual(vals, [1, 12, 23]);
			});
		});
	})
})