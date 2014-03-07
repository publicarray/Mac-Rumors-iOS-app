// the view is animated to go up when the text field is selected
themeText.addEventListener('focus', function(e) {
	var animation = Titanium.UI.createAnimation();
	animation.top = "-35%";
});

themeText.addEventListener('return', function(e) {
	var animation = Titanium.UI.createAnimation();
	animation.top = 0;
	settingsAnimationView.animate(animation);
});

// save changes
themeText.addEventListener('return', function(e) {
	setProperty(themeText.value);
});

// gradient on the custom button only looks good in iOS 6
if (Ti.Platform.version < 7 && (Ti.Platform.name === 'iPhone OS' || Ti.Platform.name === 'iPad OS' || Ti.Platform.name === 'iPod Touch OS')) {
	// change gradient of button on press
	themeBtn.addEventListener('touchstart', function(e) {
		themeBtn.backgroundGradient = {
			colors: ['#500000', '#c80050']
		};
	});
	// change gradient of button when finger is released
	themeBtn.addEventListener('touchend', function(e) {
		themeBtn.backgroundGradient = {
			colors: ['#c80050', '#500000']
		};
	});

};
//animate button on click
themeBtn.addEventListener('click', function(e) {
	// Create the transform to scale the button
	var transform = Titanium.UI.create2DMatrix({
		scale: 1.1
	});
	// Create the animation with the transform, and auto reverse
	var animation = Titanium.UI.createAnimation({
		transform: transform,
		autoreverse: true
	});
	// Start animation
	themeBtn.animate(animation);
	// set property
	setProperty('#980012');
	themeText.value = '#980012';
});

function setProperty(aString) {
	// check if the user has entered something and is valid
	if (aString !== "" && aString !== " " && aString !== undefined) {
		// lower-case file names - (png files)
		themeColor = aString.toLowerCase();
		Ti.App.Properties.setString('theme', themeColor);
		tabGroup.setTintColor(themeColor);
		if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')) {
			tabGroup.setBarColor(themeColor);
			tabGroup.setActiveTabBackgroundImage('/images/' + themeColor + '.png');
			checkColour();
			settingsWin.setBarColor(themeColor);
			iOSWin.setBarColor(themeColor);
			macWin.setBarColor(themeColor);
			mainWin.setBarColor(themeColor);
			forumWin.setBarColor(themeColor);
			buyWin.setBarColor(themeColor);
			roundupWin.setBarColor(themeColor);
			favouritesWin.setBarColor(themeColor);
		}
		setSettingsListData(themeColor);
		sortbar.setBackgroundColor(themeColor);
		favouriteTableView.setData(getFavourites());
		favSearch.setTintColor(themeColor);

	}
}
