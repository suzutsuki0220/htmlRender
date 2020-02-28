const basic = require('../basic');

function button(content, opt) {
    return basic.element.newNode("button", content, opt);
}

module.exports.okButton = function(text, onClick) {
    return basic.event.setOnClick(button(text, {class: "button is-link"}), onClick);
};

module.exports.cancelButton = function(text, onClick) {
    return basic.event.setOnClick(button(text, {class: "button"}), onClick);
};
