// ==UserScript==
// @name         hhUpdater
// @namespace    hhUpdater
// @description  headhunter.ru
// @icon         https://i.hh.ru/logos/svg/hh.ru__min_.svg
// @version      0.1.6
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @updateURL    https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @license      MIT
// @noframes
// @match        https://*.hh.ru/applicant/resumes*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.innerText = 'Upp All';
    button.id = 'upp-all-button';
    button.addEventListener('click', () => {
        var xpath = "//span[text()='Поднять в поиске']";
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (matchingElement) {
            matchingElement.click();
        } else {
            alert('Oops!');
        }
    })
    document.body.prepend(button);
})();
