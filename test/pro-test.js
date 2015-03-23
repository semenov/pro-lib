var pro = require('../src/pro');
var assert = require('assert');

describe('Pro Lib', function() {

	describe('all function', function() {
		it('resolves if all items are resolved', function() {
			var p1 = Promise.resolve(1);
			var p2 = Promise.resolve(2);
			return pro.all([p1, p2]).then(function(vals) {
				assert.deepEqual(vals, [1, 2]);
			});
		});

		it('rejects if any item is rejected', function() {
			var p1 = Promise.resolve(1);
			var p2 = Promise.reject('expected error');
			return pro.all([p1, p2]).then(function(vals) {
				throw 'should not resolve';
			}).catch(function(e) {
				assert.equal('expected error', e);
			});
		});
	});

	describe('map function', function() {
		it('maps two items', function() {
			return pro.map([1, 2, 3], function(val, index) {
				return Promise.resolve(index * 10 + val);
			}).then(function(vals) {
				assert.deepEqual(vals, [1, 12, 23]);
			});
		});
	});
})