var buyWin = new Window("Buyer's Guide");

var url = 'http://buyersguide.macrumors.com';
var webView = Ti.UI.createWebView({
    url: url,
    top:0,left:0,
    width: '100%', height: '100%',
    scalePageToFit:true,
    enableZoomControls:true,
});
buyWin.add(webView);

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
buyWin.setRightNavButton(refreshBtn);
Ti.include('buyController.js');
