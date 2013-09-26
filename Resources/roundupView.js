var roundupWin = new Window('Roundups');

// create web view with the url from appModel.js
var webViewRoundup = Ti.UI.createWebView({
    url: urlRoundup,
    top:0,left:0,
    width: '100%', height: '100%',
    scalePageToFit:true,
});

roundupWin.add(webViewRoundup);

//refresh button
var refreshBtnRoundup = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH
});
roundupWin.setRightNavButton(refreshBtnRoundup);
