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
    color:'#000',
    height:42,
    width:'100%',
    text:title,
    textAlign:'center',
    font:{fontFamily:'Helvetica Neue',fontSize:14,fontWeight:'normal'},
    minimumFontSize:12,
    shadowColor:'#fff',shadowOffset:{x:0,y:1}
});

// associate label to title
win.setTitleControl(titleLabel);
};

//share button
var shareBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.ACTION,
    //backgroundImage :'images/topbar.png',
});
win.setRightNavButton(shareBtn);

Ti.include('tableDetailController.js');
