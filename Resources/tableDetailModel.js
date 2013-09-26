// current window changes for every article - gets the current window
var win = Ti.UI.currentWindow;

// get device OS and version
var version = Ti.Platform.version;
var device = Ti.Platform.name;

//get data from rssController, title, html for web view, the URL and author
var title = win.title;
var description = '<head><link rel="stylesheet" type="text/css" href="style.css" media="all"></head><body>'+ win.desc +'</body>';
var link = win.link;
var creator = win.creator;

// use the social plug-in: https://github.com/viezel/TiSocial.Framework
var Social = require('dk.napp.social');
