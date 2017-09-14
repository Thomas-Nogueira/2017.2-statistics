'use strict';

const should = require('should');

const statistics = require('../app/statistics.js');

describe('Testes de statistics.js', function() {
    it('1o caso de teste - Classes 1, 2, 3, 4', function() {
        let wait = {
            'min': -2,
            'max': 92,
            'count': 6,
            'avg': 21.83333333 };

        let result = statistics('6, 9, 15, -2, 92, 11');

        result.should.have.property('min', wait.min);
        result.should.have.property('max', wait.max);
        result.should.have.property('count', wait.count);
        result.should.have.property('avg', wait.avg);
    });

});
