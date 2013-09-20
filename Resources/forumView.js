var win = Ti.UI.currentWindow;
var url = 'http://forums.macrumors.com/';

var webView = Ti.UI.createWebView({
    url: url,
    top:0,left:0,
    width: '100%', height: '100%',
    //scalePageToFit:false,
});

win.add(webView);

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
win.setRightNavButton(refreshBtn);
Ti.include('forumController.js');