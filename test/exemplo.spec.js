'use strict';

let should = require('should');

describe('Teste de exemplo', function() {
    it('1o teste exemplo', function(){
        (1).should.be.equals(1);
    });

    it('2o teste exemplo', function(){
        (1).should.exists;
    });
});
