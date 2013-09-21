var roundupWin = new Window('Roundups');

var urlR = 'http://www.macrumors.com/roundup/';
var webViewR = Ti.UI.createWebView({
    url: urlR,
    top:0,left:0,
    width: '100%', height: '100%',
    scalePageToFit:true,
});

roundupWin.add(webViewR);

//refresh button
var refreshBtnR = Titanium.UI.createButton({
    systemButtonR: Ti.UI.iPhone.SystemButton.REFRESH
});
roundupWin.setRightNavButton(refreshBtnR);
Ti.include('roundupController.js');
