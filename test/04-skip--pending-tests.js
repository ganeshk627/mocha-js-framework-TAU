var assert = require('assert');

describe('Mathematical Operations - Skip', function () {

    const a = 10;
    const b = 10;

    it('Addition of two numbers', function () {
        assert.equal(a + b, 20);
    });

    it.skip('Subtraction of two numbers', function () {
        assert.equal(a - b, 0);
    });

    it('Multiplication of two numbers', function () {
        assert.equal(a * b, 100);
    });

    it.skip('Division of two numbers', function () {
        assert.equal(a / b, 1);
    });

   
});