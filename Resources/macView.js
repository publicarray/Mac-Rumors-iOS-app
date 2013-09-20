var win = Ti.UI.currentWindow;

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
    backgroundImage :'images/topbar.png',
});
win.setRightNavButton(refreshBtn);
Ti.include('macController.js');