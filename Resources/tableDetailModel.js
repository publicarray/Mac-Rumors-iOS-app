
var win = Ti.UI.currentWindow;
var version = Ti.Platform.version;
var device = Ti.Platform.name;

//get data from rssController
var title = win.title;
var description = '<head><link rel="stylesheet" type="text/css" href="style.css" media="all"></head><body>'+ win.desc +'</body>';
var link = win.link;
var creator = win.creator;

var Social = require('dk.napp.social');
