const element = require('./element.js');

function tableHeader(names) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    var fragment = document.createDocumentFragment();
    for (var i=0; i<names.length; i++) {
        fragment.appendChild(element.newNode('th', names[i]));
    }

    tr.appendChild(fragment);
    thead.appendChild(tr);

    return thead;
}

function tableBody(values) {
    const tbody = document.createElement('tbody');

    var fragment = document.createDocumentFragment();
    for (var i=0; i<values.length; i++) {
        const v = values[i];
        var tr = document.createElement('tr');
        if (Array.isArray(v)) {
            for (var j=0; j<v.length; j++) {
                tr.appendChild(element.newNode('td', v[j]));
            }
        } else {
            tr.appendChild(element.newNode('td', v));
        }
        fragment.appendChild(tr);
    }

    tbody.appendChild(fragment);

    return tbody;
}

module.exports = function(names, values, className = "") {
    const table = document.createElement('table');

    table.className = className;
    table.appendChild(tableHeader(names));
    table.appendChild(tableBody(values));

    return table;
}
