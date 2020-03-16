/* eslint-disable no-unused-vars */
/* global htmlRender */

const basicRender = htmlRender("basic");

window.addEventListener("load", function(event) {
    const elem = document.getElementById('basicArea');

    elem.appendChild(basicRender.element.newNode('button', 'button normal'));

    const buttonDisable = basicRender.element.newNode('button', 'disable');
    basicRender.event.setOnClick(buttonDisable, function() {
        window.alert("disable button clicked");
        basicRender.event.disableOnClick(buttonDisable, true);
    });
    elem.appendChild(buttonDisable);

    const buttonEnable = basicRender.element.newNode('button', 'enable');
    basicRender.event.setOnClick(buttonEnable, function() {
        window.alert("enable button clicked");
        basicRender.event.disableOnClick(buttonDisable, false);
    });
    elem.appendChild(buttonEnable);
});
