var buyWin = new Window("Buyer's Guide");

var urlBuy = 'http://buyersguide.macrumors.com';
var webViewBuy = Ti.UI.createWebView({
    url: urlBuy,
    top:0,left:0,
    width: '100%', height: '100%',
    scalePageToFit:true,
    enableZoomControls:true,
});
buyWin.add(webViewBuy);

//refresh button
var refreshBtnBuy = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
buyWin.setRightNavButton(refreshBtnBuy);
Ti.include('buyController.js');
