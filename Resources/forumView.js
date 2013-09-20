var forumWin = new Window('Form');

var url = 'http://forums.macrumors.com/';
var webView = Ti.UI.createWebView({
    url: url,
    top:0,left:0,
    width: '100%', height: '100%',
    //scalePageToFit:false,
});

forumWin.add(webView);

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
forumWin.setRightNavButton(refreshBtn);
Ti.include('forumController.js');