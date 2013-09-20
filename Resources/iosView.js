var iOSWin = new Window('iOS Blog');

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});
iOSWin.setRightNavButton(refreshBtn);
Ti.include('iosController.js');
