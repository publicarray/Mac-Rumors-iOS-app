var buyWin = new Window("Buyer's Guide");

// create web view with the url from appModel.js
var webViewBuy = Ti.UI.createWebView({
    url: urlBuy,
    top:0,left:0,
    width: '100%', height: '100%',
});
buyWin.add(webViewBuy);

//refresh button
var refreshBtnBuy = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
buyWin.setRightNavButton(refreshBtnBuy);

// add a Activity Indicator
var buyActivityIndicator = Ti.UI.createActivityIndicator({
    height: '100%',
    width: '100%',
    color: '#404347',
    //backgroundColor: '#d8d8d8',
    font: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontWeight: 'normal'
    },
    message: 'Loading...',
    style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
});
buyWin.add(buyActivityIndicator);
buyActivityIndicator.show();