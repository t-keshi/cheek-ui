'use strict';

var jsxRuntime = require('react/jsx-runtime');

var Typography = function () { return jsxRuntime.jsx("div", { children: "Typography" }); };

var returnLibrary = function () { return ({
    Typography: Typography,
}); };
var index = returnLibrary();

module.exports = index;
