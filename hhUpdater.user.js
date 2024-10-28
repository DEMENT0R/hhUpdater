// ==UserScript==
// @name         hhUpdater
// @namespace    hhUpdater
// @description  headhunter.ru
// @icon         https://i.hh.ru/logos/svg/hh.ru__min_.svg
// @version      0.1.8
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
    const timerId = setInterval(() => {
        upResume();
    }, 5000);
})();

function upResume(warn = false){
    var xpath = "//span[text()='Поднять в поиске']";
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (matchingElement) {
        matchingElement.click();
    } else {
        if (warn){
            alert('Buttons not found!');
        }
    }
}
