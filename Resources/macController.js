// get rss feed and display it using rssController.js
Ti.include('rssController.js');
getData(feedUrlMac, fileMac, macWin);

//refresh button
refreshBtnMac.addEventListener('click', function(e) {
	if (!Titanium.Network.online) {
		//alert user about internet
		if (mute === false) {
			ohno.stop();
			ohno.play();
		}
		alert("You must be connected to the internet to retrieve the latest information");
	}
	else
	if (Titanium.Network.online) {
		getData(feedUrlMac, fileMac, macWin);
	}
});
