Ti.include('tableDetailModel.js');
//display description of the rss feed via a web view
var webView = Ti.UI.createWebView({
	html: description,
	scalesPageToFit : true,
});

win.add(webView);

// devices with lower ios than 7 display custom text style
if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')) {
	var titleLabel = Titanium.UI.createLabel({
		color: '#000',
		height: 42,
		width: '70%',
		text: title,
		textAlign: 'center',
		font: {
			fontFamily: 'Helvetica Neue',
			fontSize: 14,
			fontWeight: 'normal'
		},
		shadowColor: '#fff',
		shadowOffset: {
			x: 0,
			y: 1
		}
	});

	// associate label to title
	win.setTitleControl(titleLabel);
};

//share button
var shareBtn = Titanium.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.ACTION,
});

win.setRightNavButton(shareBtn);

Ti.include('tableDetailController.js');
