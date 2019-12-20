// ==UserScript==
// @name         hhUpdater
// @namespace    hhUpdater
// @description  headhunter.ru
// @icon         https://i.hh.ru/logos/svg/hh.ru__min_.svg
// @version      0.1
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @updateURL    https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @license      MIT
// @noframes
// @match        https://*.hh.ru/*
// @match        https://*.headhunter.ru/*
// @match        https://*.hh.ru/applicant/resumes/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;

    var widjet = "<div style='position: fixed; top: 10px; right: 10px; z-index: 9999;'>";
    widjet += "<button class='hh-updater-click-button'>Button</button>";
    widjet += "</div>";

    $("body").append(widjet);

    $( ".hh-updater-click-button" ).click(function() {
        $("button:contains('Поднять в поиске')").click();
    });

})();
