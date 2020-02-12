const basic = require('../basic');
const active = require('./active.js');

module.exports.card = function(elem, cards) {
    const columns = document.createElement('div');
    columns.classList.add('columns');

    for (let i=0; i<cards.length; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.classList.add('is-one-fifth');

        const card = document.createElement('div');
        card.classList.add('card');

        const c = cards[i];
        if (c.image) {
            card.appendChild(basic.element.newNode('div', c.image, {class: 'card-image'}));
        }
        if (c.content) {
            card.appendChild(basic.element.newNode('div', c.content, {class: 'card-content'}));
        }

        column.appendChild(card);
        columns.appendChild(column);
    }

    elem.appendChild(columns);
};

module.exports.modal = function(content, showCloseButton=true) {
    const modal = basic.element.newNode('div', '', {class: 'modal'});
    modal.appendChild(basic.element.newNode('div', '', {class: 'modal-background'}));
    modal.appendChild(basic.element.newNode('div', content, {class: 'modal-content'}));

    if (showCloseButton === true) {
        const button = basic.element.newNode('button', '', {class: 'modal-close is-large'});
        button.onclick = function() {
            active.switch(modal, false);
        };
        modal.appendChild(button);
    }

    return modal;
};

module.exports.modalCard = function(title, content, footer = "", showCloseButton=true) {
    const modal = basic.element.newNode('div', '', {class: 'modal'});
    modal.appendChild(basic.element.newNode('div', '', {class: 'modal-background'}));

    const cardBody = basic.element.newNode('div', '', {class: 'modal-card'});
    const header = basic.element.newNode('header', '<p class="modal-card-title">' + title + '</p>', {class: 'modal-card-head'});
    if (showCloseButton === true) {
        const button = basic.element.newNode('button', '', {class: 'delete'});
        button.onclick = function() {
            active.switch(modal, false);
        }
        header.appendChild(button);
    }
    cardBody.appendChild(header);
    cardBody.appendChild(basic.element.newNode('section', content, {class: 'modal-card-body'}))+
    cardBody.appendChild(basic.element.newNode('footer', footer, {class: 'modal-card-foot'}));

    modal.appendChild(cardBody);

    return modal;
};
