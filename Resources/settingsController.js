// settings CONTROLLER
settingsList.addEventListener('click', function(e) {
	if (sound) {
		swosh.play();
	}
	if (e.index === 0) {
		Ti.include('setThemeView.js');
		//set background gradient
		themeWin.backgroundGradient = {
			colors: ["#C7D6E9", "#fff"]
		};
		// open the tab with a default slide animation
		tabGroup.activeTab.open(themeWin, {
			animation: true,
		});

	}
	if (e.index === 1) {
		Ti.include('setVolumeView.js');
		//set background gradient
		volumeWin.backgroundGradient = {
			colors: ["#C7D6E9", "#fff"]
		};
		// open the tab with a default slide animation
		tabGroup.activeTab.open(volumeWin, {
			animation: true,
		});
	}
	if (e.index === 2) {
		Ti.include('aboutView.js');
		//set background gradient
		aboutWin.backgroundGradient = {
			colors: ["#C7D6E9", "#fff"]
		};
		// open the tab with a default slide animation
		tabGroup.activeTab.open(aboutWin, {
			animation: true,
		});
	}
});
