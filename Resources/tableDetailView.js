Ti.include('tableDetailModel.js');
//display description of the rss feed via a web view
var webView = Ti.UI.createWebView({
    html:description,
    scalePageToFit:true,
    top:0,left:0,bottom:0,right:0,
    width: '100%', height: '100%',
});

win.add(webView);

// devices with lower ios than 7 display text as white
if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
var titleLabel = Titanium.UI.createLabel({
    color:'#fff',
    height:42,
    width:'100%',
    text:win.title,
    textAlign:'center',
    font:{fontFamily:'Helvetica Neue',fontSize:14,fontWeight:'bold'},
    shadowColor:'#000',shadowOffset:{x:0,y:-1}
});

// associate label to title
win.setTitleControl(titleLabel);
};

//refresh button
var refreshBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.REFRESH,
    backgroundImage :'images/topbar.png',
});
win.setRightNavButton(refreshBtn);

Ti.include('tableDetailController.js');