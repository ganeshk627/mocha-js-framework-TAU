var assert = require('assert');

describe('Mathematical Operations - Only', function () {

    const a = 10;
    const b = 10;

    it.only('Addition of two numbers', function () {
        assert.equal(a + b, 20);
    });

    it('Subtraction of two numbers', function () {
        assert.equal(a - b, 0);
    });

    it.only('Multiplication of two numbers', function () {
        assert.equal(a * b, 100);
    });

    it('Division of two numbers', function () {
        assert.equal(a / b, 1);
    });

});
