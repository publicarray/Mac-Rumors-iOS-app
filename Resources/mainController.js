// get rss feed and display it using rssController.js
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