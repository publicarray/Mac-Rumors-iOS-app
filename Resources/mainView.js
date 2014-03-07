var mainWin = new Window('Mac Rumours');

//refresh button
var refreshBtnMain = Titanium.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
mainWin.setRightNavButton(refreshBtnMain); 