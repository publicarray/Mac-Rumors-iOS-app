// Save Tab order when the user tabs on a tab.
// sorces: https://developer.appcelerator.com/question/122327/save-and-reload-state-from-edited-tab-view
// http://developer.appcelerator.com/question/18541/is-there-a-way-to-manage-tab-order-in-a-tab-group
tabGroup.addEventListener('focus', function(e) {

	var currentTabId = e.index;
	console.log(e.index);
	// get the current tab that is in focus. (excluding the more tab)
	var k = [];
	for ( i = 0; i < 8; i++)// loop through the tabs
	{
		// save the tap's in order as an array
		if (tabGroup.tabs[i].id !== undefined) {// check is the tap has an id
			var tabId = tabGroup.tabs[i].id;
			k.push(tabId);
		}
	}
	//Save the last opened tab as a number in 'lastTB' as a property
	Ti.App.Properties.setInt('lastTB', currentTabId);
	//Save the array of tab id's as a property in 'TB'
	Ti.App.Properties.setList('TB', k);
	//Ti.App.Properties.setList('TB', null); // reset tabs - don't delete
});

var k = Ti.App.Properties.getList('TB');

// Load saved tabs in 'TB' back in Order
for ( i = 0; i < 8; i++) {
	// Try to get saved values for Tab Order
	// var k = Ti.App.Properties.getList('TB');
	if (k === null) {
		// If 'TB' don't have any saved, populate tabs in Designed order  -- hence the
		// tab Names
		tabGroup.addTab(tabs[i]);
	}
	else {
		// if 'TB' has saved tab ID's use them to add them to the TabGroup
		tabGroup.addTab(tabs[k[i]]);
	}
}
//open last opened tab from property
tabGroup.setActiveTab(Ti.App.Properties.getInt('lastTB', 0));

// the theme colour could be entered as a hex number,
// so if the user does the app should display the dafult image for the
// activeTabBackgroundImage property
// rather than the OS 6's dafult light overlay
function checkColour() {
	var pattern = /#/g;
	// search for #
	var pattern2 = /\d/g;
	//search for any decimal number
	if (pattern.test(tabGroup.activeTabBackgroundImage) || pattern2.test(tabGroup.activeTabBackgroundImage)) {
		tabGroup.activeTabBackgroundImage = '/images/#980012.png';
		// display dafult image
	}
}

checkColour();

function internetCheck() {
	if (Titanium.Network.online && mute === false) {
		// play start up sound - dialup
		var dialup = Ti.Media.createSound({
			url: "sound/dialup.mp3",
			volume: volume,
		});
		dialup.play();
		// to stop the sound
		Ti.App.addEventListener('stopDialup', function(e) {
			dialup.stop();
		});
	}
	else if (!Titanium.Network.online && !fileIos.exists() && !fileMac.exists() && !fileMain.exists()) {
		// play start up sound :o
		if (mute === false) {
			var ohno = Ti.Media.createSound({
				url: "sound/ohno.mp3",
				volume: volume,
			});
			ohno.play();
		}
		alert('Your device is not connected to the internet.');
	}
	else if (!Titanium.Network.online && fileIos.exists() && fileMac.exists() && fileMain.exists()) {
		// play start up sound :)
		if (mute === false) {
			var startSound = Ti.Media.createSound({
				url: "sound/windows95.mp3",
				volume: volume,
			});
			startSound.play();
		}
		alert('Off-line Mode!');
	}
};

internetCheck();
