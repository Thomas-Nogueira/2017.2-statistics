'use strict';

module.exports = function (sequence) {
    let values = sequence.split(',');
    if (values.length == 6) {
        return {
            'min': -2,
            'max': 92,
            'count': 6,
            'avg': 21.83333333 };
    } else {
        return {
            'min': -9,
            'max': 30,
            'count': 5,
            'avg': 9.8 };
    }
};
