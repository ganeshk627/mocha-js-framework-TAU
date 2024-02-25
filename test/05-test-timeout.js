
describe('Test Timout - default 3000', function () {

    this.timeout(3000);

    // needs to use done as parameter to function() and setTimeout()
    it('My Timeout 1000', function () {
        setTimeout(1000);
    });

    it('My Timeout 1000', function (done) {
        setTimeout(done, 1000);
    });

    it('My Timeout 2000', function (done) {
        this.timeout(500);
        setTimeout(done, 2000);
    });

    it('My Timeout 2000', function (done) {
        setTimeout(done, 2000);
    });

    it('My Timeout 3000', function (done) {
        setTimeout(done, 3000);
    });

    it('My Timeout 5000', function (done) {
        setTimeout(done, 5000);
    });

    it('My Timeout 5000', function (done) {
        setTimeout(done, 2000);
    });

});