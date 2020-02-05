const basic = require('../basic');

module.exports.formField = function(label, control, help = null) {
    const field = document.createElement('div');
    field.classList.add('field');

    field.appendChild(basic.element.newNode('label', label, {class: 'label'}));
    field.appendChild(basic.element.newNode('div', control, {class: 'control'}));
    if (help) {
        field.appendChild(help);
    }

    return field;
};

module.exports.formHelp = function(type, message) {
    const help = basic.element.newNode('p', message, {class: 'help'});
    switch(type) {
    case "success":
        help.classList.add('is-success');
        break;
    case "failure":
        help.classList.add('is-danger');
        break;
    }

    return help;
};
