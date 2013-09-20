var macWin = new Window('Mac Blog');

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
    backgroundImage :'images/topbar.png',
});
macWin.setRightNavButton(refreshBtn);
Ti.include('macController.js');