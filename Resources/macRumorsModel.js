// The html used to display an error message to the user when the internet isn't available or some other error occurred.
var htmlErrorMessage = '<html><body style="font-family:sans-serif; text-align: center; font-size: 1em; color: #bbb;">Sorry,</br></br>The webpage is currently unavalable.</br></br>Please check your Internet connection</br></br>or try to refresh the page.</body></html>';

// get device OS and version
var version = Ti.Platform.version;
var device = Ti.Platform.name;

// URL's for web views
var urlBuy = 'http://buyersguide.macrumors.com';
var urlForum = 'http://forums.macrumors.com/';
var urlRoundup = 'http://www.macrumors.com/roundup/';

// the URL of the xml file (RSS feed)
var feedUrlIos = 'http://feeds.macrumors.com/MacRumors-iPhone.xml';
var feedUrlMac = 'http://feeds.macrumors.com/MacRumors-Mac.xml';
var feedUrlMain = 'http://feeds.macrumors.com/MacRumors-Front.xml';

// file paths for saving and accessing the xml file from the web. (useful for off-line access)
var fileIos = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'iPhone.txt');
var fileMac = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Mac.txt');
var fileMain = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Front.txt');