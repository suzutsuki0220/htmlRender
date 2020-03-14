/* eslint-disable no-unused-vars */
/* global basicRender, htmlRender */

const bulmaRender = htmlRender("bulma");

window.addEventListener("load", function(event) {
    const elem = document.getElementById('bulmaArea');

    elem.appendChild(
        basicRender.element.newNode('div',
            bulmaRender.components.card([{content: "aaa"}])
        )
    );

    elem.appendChild(okButton());
});

function okButton() {
    const ok = basicRender.element.newNode('div',
        bulmaRender.button.okButton("OK", function() {window.alert('ok button clicked')})
    );
    ok.appendChild(
        bulmaRender.button.cancelButton("キャンセル", function() {window.alert('cancel button clicked')})
    );

    return ok;
}
