// initialise vareables
var feedUrlMain = 'http://feeds.macrumors.com/MacRumors-Front.xml';
var fileMain = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Front.txt');
// get rss feed and display it
Ti.include('rssController.js');
getData(feedUrlMain, fileMain, mainWin);

//refresh button
refreshBtnMain.addEventListener('click', function (e) {
    if(!Titanium.Network.online) {
    //alert user about internet
    alert("You must be connected to the internet to retrieve the latest information");
    }
    else if(Titanium.Network.online){
    getData(feedUrlMain, fileMain, mainWin);
    }
});