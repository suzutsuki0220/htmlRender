module.exports.newNode = function(tagName, value, option = {}) {
    var elem = document.createElement(tagName);

    if (typeof value === 'string') {
        elem.innerHTML = value;  // enable HTML tags
    } else {
        elem.appendChild(value);  // expects object HTML element
    }

    for (var property in option) {
        elem.setAttribute(property, option[property]);
    }

    return elem;
};
