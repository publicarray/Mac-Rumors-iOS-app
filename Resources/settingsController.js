// settings CONTROLLER
Ti.include('setThemeView.js');
Ti.include('setVolumeView.js');
Ti.include('aboutView.js');

settingsList.addEventListener('click', function(e) {
	if (mute === false) {
		swosh.play();
	}
	if (e.index === 0) {
		// open the tab with a default slide animation
		tabGroup.activeTab.open(themeWin, {
			animation: true,
		});

	}
	if (e.index === 1) {
		// open the tab with a default slide animation
		tabGroup.activeTab.open(volumeWin, {
			animation: true,
		});
	}
	if (e.index === 2) {
		// open the tab with a default slide animation
		tabGroup.activeTab.open(aboutWin, {
			animation: true,
		});
	}
});
