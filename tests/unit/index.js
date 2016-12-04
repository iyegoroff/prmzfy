define(function (require) {
    var bdd = require('intern!bdd');
    var expect = require('intern/chai!expect');
    var prmzfy = require('../../dist/prmzfy');

    var createDummy = function (options) {
        var fn = function (a, b, cb) {
            cb.apply({}, [options.error].concat(options.operations.map(function (op) { return op(a, b); })));
        };

        if (options.async) {
            return function (a, b, cb) { setTimeout(function () { fn(a, b, cb); }, 1); };
        } else {
            return fn;
        }
    };

    var suite = function (options) {
        return function () {
            bdd.describe('single arg mode', function () {
                bdd.it('should return sum', function () {
                    var sum = createDummy({
                        error: null,
                        async: options.async,
                        operations: [
                            function (a, b) { return a + b; }
                        ]
                    });

                    return prmzfy(sum)(10, 5)
                        .then(function (result) { expect(result).to.eql(15); });
                });

                bdd.it('should fail with error', function () {
                    var failingSum = createDummy({
                        error: 'error',
                        async: options.async,
                        operations: [
                            function (a, b) { return a + b; }
                        ]
                    });

                    return prmzfy(failingSum)(10, 5)
                        .catch(function (error) { expect(error).to.eql('error'); });
                });
            });

            bdd.describe('multi arg mode', function () {
                bdd.it('should return sum and prod', function () {
                    var sumAndProd = createDummy({
                        error: null,
                        async: options.async,
                        operations: [
                            function (a, b) { return a + b; },
                            function (a, b) { return a * b; }
                        ]
                    });

                    return prmzfy(sumAndProd, { multiArgs: true })(10, 5)
                        .then(function (result) { expect(result).to.eql([15, 50]); });
                });

                bdd.it('should fail with error', function () {
                    var failingSumAndProd = createDummy({
                        error: 'error',
                        async: options.async,
                        operations: [
                            function (a, b) { return a + b; },
                            function (a, b) { return a * b; }
                        ]
                    });

                    return prmzfy(failingSumAndProd, { multiArgs: true })(10, 5)
                        .catch(function (error) { expect(error).to.eql('error'); });
                });
            });
        };
    };

    bdd.describe('prmzfy async', suite({ async: true }));
    bdd.describe('prmzfy sync', suite({ async: false }));
});
