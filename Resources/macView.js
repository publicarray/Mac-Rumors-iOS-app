var macWin = new Window('Mac Blog');

//refresh button
var refreshBtnMac = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
    backgroundImage :'images/topbar.png',
});
macWin.setRightNavButton(refreshBtnMac);
Ti.include('macController.js');