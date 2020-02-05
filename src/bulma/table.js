const basic = require('../basic');

module.exports.makeTable = function(names, values) {
    return basic.table(names, values, 'table is-fullwidth');
};
