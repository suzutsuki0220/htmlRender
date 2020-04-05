/* eslint-disable no-unused-vars */
/* global basicRender, htmlRender */

let bulmaRender;

window.addEventListener("load", function(event) {
    bulmaRender = htmlRender("bulma");
    const elem = document.getElementById('bulmaArea');

    elem.appendChild(
        basicRender.element.newNode('div',
            bulmaRender.components.card([{content: "aaa"}])
        )
    );

    elem.appendChild(okButton());
    elem.appendChild(fileButton());
});

function okButton() {
    const buttons = basicRender.element.newNode('div', '');
    buttons.appendChild(
        bulmaRender.button.okButton("OK", function() {
            bulmaRender.button.loading(document.querySelector('button.button'), true);
            window.alert('ok button clicked');
        })
    );
    buttons.appendChild(
        bulmaRender.button.cancelButton("キャンセル", function() {
            bulmaRender.button.loading(document.querySelector('button.button'), false);
            window.alert('cancel button clicked');
        })
    );

    return buttons;
}

function fileButton() {
    return bulmaRender.form.file('<i class="fas fa-upload"></i>', 'Choose a file...', 'uploadfile');
}
