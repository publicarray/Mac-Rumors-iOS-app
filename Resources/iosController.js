// initialise vareables
var feedUrlIos = 'http://feeds.macrumors.com/MacRumors-iPhone.xml';
var fileIos = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'iPhone.txt');
// get rss feed and display it
Ti.include('rssController.js');
getData(feedUrlIos, fileIos, iOSWin);

//refresh button
refreshBtnIos.addEventListener('click', function (e) {
    if(!Titanium.Network.online) {
    //alert user about internet
    alert("You must be connected to the internet to retrieve the latest information");
    }
    else if(Titanium.Network.online){
    getData(feedUrlIos, fileIos, iOSWin);
    }
});