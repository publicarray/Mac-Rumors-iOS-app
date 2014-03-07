var iOSWin = new Window('iOS Blog');

//refresh button
var refreshBtnIos = Titanium.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});
iOSWin.setRightNavButton(refreshBtnIos);
