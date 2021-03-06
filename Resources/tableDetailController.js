//share button - from: https://github.com/viezel/TiSocial.Framework
shareBtn.addEventListener('click', function(e) {
	var mute = Ti.App.Properties.getBool('mute', true);

	if (mute === false) {
		var share = Ti.Media.createSound({
			url: "sound/swosh2.mp3",
			volume: Ti.App.Properties.getDouble('volume', 1),
		});
	}

	if (Social.isActivityViewSupported()) {//min iOS6 required
		Social.activityView({
			text: title + "\n \n" + link + "\n \n Article By: " + creator, // the text that
			// is passed on to social services and email
			//image:"pin.png",
			removeIcons: "print,contact,camera", // remove searing buttons that don't make
			// sense
			//url:link,
		}, [{// custom function Safari
			title: "Open in Safari",
			type: "open.safari",
			image: "/images/safari.png"
		}, {// custom function Save as Favouits
			title: "Save as Favourite",
			type: "open.favourite",
			image: "/images/fav.png"
		}]);
	}
	// Twitter
	if (Social.isRequestTwitterSupported()) {//min iOS6 required
		var accounts = [];
		Social.addEventListener("accountList", function(e) {
			accounts = e.accounts;
			//accounts
		});
		Social.twitterAccountList();
	}
	// sharing
	Social.addEventListener("complete", function(e) {
		if (e.platform == "activityView" || e.platform == "activityPopover") {
			switch (e.activity)
			{
				case Social.ACTIVITY_TWITTER:
					if (mute === false) {
						share.play();
					}
					break;
				// custom cases - add custom share functions
				case Social.ACTIVITY_CUSTOM:
					// Safari
					if (e.activityName == "open.safari") {
						if (mute === false) {
							share.play();
						}
						var currLink = webView.getUrl();
						if(currLink.indexOf("http") == 0 || currLink.indexOf("https") == 0){
							Titanium.Platform.openURL(currLink);
						}
						else{
							Titanium.Platform.openURL(link);
						}
					};
					// favourite
					if (e.activityName == "open.favourite") {
						if (mute === false) {
							share.play();
						}

						var currentFav = {
							title: title,
							description: win.desc,
							link: link,
							pubDate: pubDate,
							creator: creator
						};
						insertFavourite(currentFav);
						currentFav = null;
						Ti.App.fireEvent('loadFav');
						e.activity = null;
						// stop activity

					};
					break;
			}
		}
	});
});
