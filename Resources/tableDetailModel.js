// current window changes for every article - gets the current window
var win = Ti.UI.currentWindow;

// get device OS and version
var version = parseInt(Ti.Platform.version[0], 10);
var device = Ti.Platform.name;

//get data from rssController, title, html for web view, the URL and author
var title = win.title;
var description = win.desc;
var link = win.link;
var pubDate = win.pubDate;
var creator = win.creator;

// use the social plug-in: https://github.com/viezel/TiSocial.Framework
var Social = require('dk.napp.social');

function insertFavourite(favourite) {
	// returns the number of milliseconds between the favourite.pubDate string and
	// midnight of January 1, 1970. usefull for sorting
	var thisDate = new Date(Date.parse(favourite.pubDate));
	
	// database
	var db = Ti.Database.open('database');
	db.execute("INSERT INTO favourite (title, description, link, pubDate, creator) VALUES (?, ?, ?, ?, ?)", favourite.title, favourite.description, favourite.link, thisDate, favourite.creator);
	db.close();
}
