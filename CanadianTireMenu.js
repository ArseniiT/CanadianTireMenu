// ==UserScript==
// @name         CanadianTireMenu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  pull-down menu for CanadianTire.ca
// @author       https://github.com/ArseniiT
// @match        http://www.canadiantire.ca/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  var hdr = document.getElementsByClassName("global-header--sticky");

  hdr[0].style.transition = 'all 2s ease';
  hdr[0].style.marginTop = '-161px';


  hdr[0].onmouseover = function() {
      this.style.transition = 'all 0.4s ease';
      this.style.marginTop = '0px';
  };

  hdr[0].onmouseout = function() {
      this.style.transition = 'all 2s ease';
      this.style.marginTop = '-161px';
  };
})();