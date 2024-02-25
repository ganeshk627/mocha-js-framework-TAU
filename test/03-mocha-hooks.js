var assert = require('assert');

before('Im outside Hook!!!', function () {
    console.log('Im outside hook!!!');
});

describe('Mathematical Operations - Hooks', function () {

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



    // Hooks

    before('Execute Before All Tests', function () {
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function () {
        console.log('Execute Before Each Test');
    });
    
    after('Execute After All Tests', function () {
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function () {
        console.log('Execute Before Each Test');
    });
});