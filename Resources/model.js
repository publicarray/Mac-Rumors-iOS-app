var htmlErrorMessage = '<html><body style="font-family:sans-serif; text-align: center; font-size: 1em; color: #bbb;">Sorry,</br></br>The webpage is currently unavalable.</br></br>Please check your Internet connection</br></br>or try to refresh the page.</body></html>';

var version = Ti.Platform.version;
var device = Ti.Platform.name;

var urlBuy = 'http://buyersguide.macrumors.com';
var urlForum = 'http://forums.macrumors.com/';
var urlRoundup = 'http://www.macrumors.com/roundup/';

var feedUrlIos = 'http://feeds.macrumors.com/MacRumors-iPhone.xml';
var fileIos = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'iPhone.txt');
var feedUrlMac = 'http://feeds.macrumors.com/MacRumors-Mac.xml';
var fileMac = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Mac.txt');
var feedUrlMain = 'http://feeds.macrumors.com/MacRumors-Front.xml';
var fileMain = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Front.txt');