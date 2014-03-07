var forumWin = new Window('Form');

// create web view with the url from appModel.js
var webViewForum = Ti.UI.createWebView({
	url: urlForum,
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
});
forumWin.add(webViewForum);

//refresh button
var refreshBtnForum = Titanium.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
});
forumWin.setRightNavButton(refreshBtnForum);

// add a Activity Indicator
var forumActivityIndicator = Ti.UI.createActivityIndicator({
	height: '100%',
	width: '100%',
	color: '#404347',
	font: {
		fontFamily: 'Helvetica Neue',
		fontSize: 14,
		fontWeight: 'normal'
	},
	message: 'Loading...',
	style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
});
forumWin.add(forumActivityIndicator);
forumActivityIndicator.show(); 