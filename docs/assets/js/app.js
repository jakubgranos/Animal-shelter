!function u(i,s,c){function f(r,e){if(!s[r]){if(!i[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(l)return l(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var t=s[r]={exports:{}};i[r][0].call(t.exports,function(e){return f(i[r][1][e]||e)},t,t.exports,u,i,s,c)}return s[r].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)f(c[e]);return f}({1:[function(e,r,n){"use strict";e("./modules/menuToggle.js"),e("./modules/carousel.js")},{"./modules/carousel.js":2,"./modules/menuToggle.js":3}],2:[function(e,r,n){"use strict";$(".carousel").flickity({groupCells:3,pageDots:!1,arrowShape:{x0:20,x1:50,y1:25,x2:40,y2:5,x3:85,x4:100,y4:50}})},{}],3:[function(e,r,n){"use strict";var o=function(){$(".sidenav").width("100%")},t=function(){$(".sidenav").width(0)};$(".openbtn").click(o),$(".closebtn").click(t)},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
