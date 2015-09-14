var aboutWin = new Window('About');
aboutWin.backgroundGradient = {
	colors: ["#C7D6E9", "#fff"]
};
var aboutView = Ti.UI.createView({
	// width: '100%',
	// height: 'auto',
	top: 10,
	left: 0,
});

var version = Ti.UI.createLabel({
	top: 300,
	width: '100%',
	height: 'auto',
	color: '#333',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	text: Ti.App.getVersion(),
	minimumFontSize: 16,
	font: {
		fontSize: 16,
		fontFamily: 'HelveticaNeue-Light'
	},
});

var copyright = Ti.UI.createLabel({
	top: 330,
	width: '100%',
	height: 'auto',
	color: '#333',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	text: Ti.App.getCopyright(),
	minimumFontSize: 12,
	font: {
		fontSize: 12,
		fontFamily: 'HelveticaNeue-Light'
	},
});

var about = Ti.UI.createLabel({
	top: '10%',
	width: '100%',
	height: 'auto',
	color: '#000',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	text: 'If you have any feedback or you like to report a bug please open issue at: \nhttp://github.com/publicarray/Mac-Rumors-iOS-app \n \n The app uses the TiSocial.Framework found at: \nhttps://github.com/viezel/TiSocial.Framework',
	font: {
		fontSize: 15,
		fontFamily: 'HelveticaNeue-Light'
	},
	autoLink: Ti.UI.AUTOLINK_ALL,
});

aboutView.add(version);
aboutView.add(copyright);
aboutView.add(about);

//add content to a scroll view (the content grows in landscape, also good if more
// information is added later)
var scrollView = Ti.UI.createScrollView({
	// contentWidth: '100%',
	// contentHeight: 'auto',
	showVerticalScrollIndicator: true,
	showHorizontalScrollIndicator: false,
	// height: '100%',
	// width: '100%'
});

scrollView.add(aboutView);
aboutWin.add(scrollView);
