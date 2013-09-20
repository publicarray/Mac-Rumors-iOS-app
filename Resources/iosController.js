// initialise vareables
var feedUrl = 'http://feeds.macrumors.com/MacRumors-iPhone.xml';
var file = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'iPhone.txt');
// get rss feed and display it
Ti.include('rssController.js');
getData(feedUrl, file, iOSWin);

//refresh button
refreshBtn.addEventListener('click', function (e) {
    if(!Titanium.Network.online) {
    //alert user about internet
    alert("You must be connected to the internet to retrieve the latest information");
    }
    else if(Titanium.Network.online){
    getData(feedUrl, file);
    }
});