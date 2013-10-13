var aboutWin = Ti.UI.currentWindow;

var view = Ti.UI.createView({
    width: '100%',
    height: 'auto',
});

var version = Ti.UI.createLabel({
    top: 300,
    width: '100%',
    height: 'auto',
    color: '#333',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    text: 'Version 1.2.1',
    minimumFontSize:12,
    font:{fontSize:16,fontFamily:'HelveticaNeue-Light'},
});

var about = Ti.UI.createLabel({
    top: '10%',
    width: '100%',
    height: 'auto',
    color: '#000',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    text: 'This app is Mantained and Created by \nSebastian Schmidt and Paris Moletti \n \n If you have any Feedback or you like to report a bug please email us at: \nsebstian.schmidt2@griffithuni.edu.au \n \n Fork it on guithub.com: \nhttp://github.com/publicarray/Mac-Rumors-iOS-app',
    ont:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
    autoLink: Ti.UI.AUTOLINK_ALL,
});

view.add(version);
view.add(about);

var scrollView = Ti.UI.createScrollView({
  contentWidth: '100%',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '100%',
  width: '100%'
});

scrollView.add(view);
aboutWin.add(scrollView);