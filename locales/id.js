// numeral.js locale configuration
// locale : Bahasa Indonesia (id)
// author : Achmad Musyaffa Taufiqi : https://github.com/amusfq

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'ribu',
            million: 'juta',
            billion: 'miliar',
            trillion: 'triliun'
        },
        ordinal: function (number) {
            return number === 1 ? 'se' : 'se';
        },
        currency: {
            symbol: 'Rp'
        }
    });
}));
