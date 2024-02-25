var assert = require('assert');

describe('Mathematical Operations - Test Suite', function () {

    const a = 10;
    const b = 10;

    it('Addition of two numbers', function () {
        assert.equal(a + b, 20);
    });

    it('Subtraction of two numbers', function () {
        assert.equal(a - b, 0);
    });

    it('Multiplication of two numbers', function () {
        assert.equal(a * b, 100);
    });

    it('Division of two numbers', function () {
        assert.equal(a / b, 1);
    });

    it('Division of two numbers', function () {
        assert.equal(a / b, 10);
    });
});