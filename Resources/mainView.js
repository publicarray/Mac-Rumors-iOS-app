var mainWin = new Window('Mac Rumours');

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
mainWin.setRightNavButton(refreshBtn);
Ti.include('mainController.js');