// ==UserScript==
// @name         hhUpdater
// @namespace    hhUpdater
// @description  headhunter.ru
// @icon         https://i.hh.ru/logos/svg/hh.ru__min_.svg
// @version      0.1
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @updateURL    https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @license      GNU v3
// @noframes
// @match        https://*.hh.ru/applicant/resumes/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    $("button:contains('Поднять в поиске')").click();

    setTimeout(fullCicle, 2000);

    function fullCicle(){
        //start
        // if(document.querySelector('#refresh_queue_btn')){
        //     document.querySelector('#refresh_queue_btn').click();
        // }

        //error code skip
        // if(document.querySelector('.error-code')){
        //     window.location.reload();
        // }
    }
})();
