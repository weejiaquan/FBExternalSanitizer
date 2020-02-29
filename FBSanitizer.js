// ==UserScript==
// @name         FBSanitizer
// @namespace    arisu.ml
// @version      0.1
// @description  Remove that stupid fbclid so u can share link with friends
// @author       Lychwee
// @include      *
// @grant        none
// @run-at document-start
// ==/UserScript==
window.onload = function() {
    var url = window.location.href;
    if (window.location.href.indexOf("utm_source=") != -1) {
        url = url.split("utm_source=")[0].slice(0, -1);
        window.location.href = url;
    }
    if (window.location.href.indexOf("fbclid=") != -1) {
        url = url.split("fbclid=")[0].slice(0, -1);
        window.location.href = url;
    }
}
