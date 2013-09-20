var win = Ti.UI.currentWindow;

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});
win.setRightNavButton(refreshBtn);
Ti.include('iosController.js');
