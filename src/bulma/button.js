const basic = require('../basic');

function setOnclick(elem, onClick) {
    elem.onclick = onClick;
    return elem;
}

module.exports.okButton = function(contents, onClick) {
    return setOnclick(basic.element.newNode("button", contents, {class: "button is-link"}), onClick);
};

module.exports.cancelButton = function(contents, onClick) {
    return setOnclick(basic.element.newNode("button", contents, {class: "button"}, onClick));
};
