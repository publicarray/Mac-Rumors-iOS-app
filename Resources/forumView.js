var forumWin = new Window('Form');

var webViewForum = Ti.UI.createWebView({
    url: urlForum,
    top:0,left:0,
    width: '100%', height: '100%',
    //scalePageToFit:false,
});

forumWin.add(webViewForum);

//refresh button
var refreshBtnForum = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
forumWin.setRightNavButton(refreshBtnForum);