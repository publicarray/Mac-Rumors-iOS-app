favouriteTableView.addEventListener('click', function(e) {

	var sound = Ti.App.Properties.getBool('mute', true);

	if (sound) {
		swosh.play();

		//sound
		var share = Ti.Media.createSound({
			url: "sound/swosh2.mp3",
			volume: Ti.App.Properties.getDouble('volume', 1),
		});
	}
	// variables
	var title = e.row.title;
	var desc = e.rowData.desc;
	var link = e.rowData.link;
	var pubDate = e.rowData.pubDate;
	var creator = e.rowData.creator;
	var rowid = e.rowData.rowid;

	//create window
	var detailWindow = new Window(title);
	detailWindow.setTabBarHidden(true);

	var detailView = Ti.UI.createView();
	// devices with lower ios than 7 display custom text style
	if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')) {
		var titleLabel = Titanium.UI.createLabel({
			color: '#000',
			height: 42,
			width: '70%',
			text: title,
			textAlign: 'center',
			font: {
				fontFamily: 'Helvetica Neue',
				fontSize: 14,
				fontWeight: 'normal'
			},
			shadowColor: '#fff',
			shadowOffset: {
				x: 0,
				y: 1
			}
		});

		// associate label to title
		detailWindow.setTitleControl(titleLabel);
	};

	//display description of the rss feed via a web view
	var webView = Ti.UI.createWebView({
		html: desc,
		scalesPageToFit : true,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: '100%',
		height: '100%',
	});

	//share button
	var shareBtn = Titanium.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.ACTION,
	});

	// back button for landscape mode
	var backBtn = Ti.UI.createButton({
		opacity: 60,
		left: 10,
		top: 10,
		width: 30,
		height: 30,
		visible: false,
		borderRadius: 5,
		style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
		font: {
			fontSize: 18,
			fontFamily: 'HelveticaNeue-Light'
		},
		backgroundImage: 'images/transparent30.png',
		color: '#fff',
		image: 'images/backarow.png',
		selectedColor: Ti.App.Properties.getString('theme', '#980012'),
		title: 'Back',
		zIndex: 5,
	});

	// add the elements to window
	detailView.add(webView);
	detailView.add(backBtn);
	detailWindow.setRightNavButton(shareBtn);
	detailWindow.add(detailView);

	// open the tab with a default slide animation
	tabGroup.activeTab.open(detailWindow, {
		animation: true
	});

	// function of back button - go back
	backBtn.addEventListener('click', function(e) {
		closeDetailWindow();
	});

	function closeDetailWindow() {

		// garbige/ memory collection
		detailView.remove(webView);
		detailWindow.remove(detailView);
		webView = null;
		shareBtn = null;
		detailWindow.remove(backBtn);
		detailWindow.close();
	}

	// show and hide the button on orientation change
	showHideBtnOrientation(Titanium.Gesture);
	Titanium.Gesture.addEventListener('orientationchange', function(e) {
		showHideBtnOrientation(Titanium.Gesture);
	});
	function showHideBtnOrientation(e) {
		if (e.orientation == '3' || e.orientation == '4') {//landscape
			backBtn.setVisible(true);
		}
		else
		if (e.orientation == '1' || e.orientation == '2') {//portrait
			backBtn.setVisible(false);
		}
	};

	detailWindow.addEventListener('swipe', function(e) {
		if (e.direction === 'left' || e.direction === 'right') {
			var matrix = Ti.UI.create2DMatrix();
			matrix = matrix.scale(2, 2);
			var a = Ti.UI.createAnimation({
				transform: matrix,
				opacity: 0,
				duration: 200,
			});
			detailView.animate(a);

			if (e.direction === 'left') {
				var e = getNextFavourite(rowid);
			}
			if (e.direction === 'right') {
				var e = getPreviousFavourite(rowid);
			}
			// update variables
			title = e.row.title;
			desc = e.rowData.desc;
			link = e.rowData.link;
			pubDate = e.rowData.pubDate;
			creator = e.rowData.creator;
			rowid = e.rowData.rowid;
			webView.setHtml('<head><link rel="stylesheet" type="text/css" href="style.css" media="all"></head><body>' + desc + '</body>');

			a.addEventListener('complete', function() {

				//set Variables
				detailWindow.setTitle(title);
				if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')) {
					titleLabel.setText(title);
				}

				Ti.API.info('rowid #2: ' + rowid);

				matrix = matrix.scale(0.5, 0.5);
				var b = Ti.UI.createAnimation({
					opacity: 1,
					duration: 500,
					transform: matrix,
				});
				//webView.addEventListener('load', function () {
				detailView.animate(b);
				//});

			});
		}
	});

	//share button - from: https://github.com/viezel/TiSocial.Framework
	shareBtn.addEventListener('click', function(e) {
		// use of the social module: https://github.com/viezel/TiSocial.Framework
		// -v1.7.0- place it in the ~/Library/Application
		// Support/Titanium/modules/iphone/dk.napp.social
		var Social = require('dk.napp.social');

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
						if (sound) {
							share.play();
						}
						break;
					// custom cases - add custom share functions
					case Social.ACTIVITY_CUSTOM:
						// send to Safari
						if (e.activityName == "open.safari") {
							if (sound) {
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
						// share as favourite
						if (e.activityName == "open.favourite") {
							if (sound) {
								share.play();
							}
							var currentFav = {
								title: title,
								description: desc,
								link: link,
								pubDate: pubDate,
								creator: creator
							};
							insertFavourite(currentFav);
							favouriteTableView.setData(getFavourites());
							e.activity = null;
							// stop activity
						};
						break;
				}
			}
		});
	});
});

favouriteTableView.addEventListener('delete', function(e) {
	deleteFavourite(e.rowData.rowid);
	// play a sound and stop it if it is already playing
	if (sound) {
		deleteSound.stop();
		deleteSound.play();
	}
	// Update the table view
	favouriteTableView.setData(getFavourites());
});

// switch buttons and edit mode
editBtn.addEventListener('click', function(e) {
	favouriteTableView.setEditing(true);
	favouritesWin.setRightNavButton(doneBtn);
});

doneBtn.addEventListener('click', function(e) {
	favouriteTableView.setEditing(false);
	favouritesWin.setRightNavButton(editBtn);
});

// sorting the database on button click
sortbar.addEventListener('click', function(e) {
	if (e.index === 0) {
		Ti.App.Properties.setString('sortby', 'rowid');
		favouriteTableView.setData(getFavourites());
	}
	else
	if (e.index === 1) {
		Ti.App.Properties.setString('sortby', 'pubDate DESC');
		favouriteTableView.setData(getFavourites());
	}
	else
	if (e.index === 2) {
		Ti.App.Properties.setString('sortby', 'title');
		favouriteTableView.setData(getFavourites());
	}
});

// search bar events
favSearch.addEventListener('return', function(e) {
	// replace the table data with the search query in the database
	favouriteTableView.setData(getFavourites(e.value));
	favSearch.blur();
});

favSearch.addEventListener('cancel', function(e) {
	favouriteTableView.setData(getFavourites());
	favSearch.blur();
});
favSearch.addEventListener('focus', function(e) {
	favSearch.setShowCancel(true, {
		animated: true
	});
});
favSearch.addEventListener('blur', function(e) {
	favSearch.setShowCancel(false);
});
