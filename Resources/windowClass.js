//http://www.clearlyinnovative.com/blog/post/1484840648/titanium-appcelerator-quickie-change-text-style-in-window-title
function windowClass(title, url) {
    var version = Ti.Platform.version;
    var device = Ti.Platform.name;
    // ios 7 windows withought bar image
    if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
        var self = Ti.UI.createWindow({
        backgroundColor:'#fff',
        title:title,
        translucent:true,
        url:url,
    });
    }
// ios 6 and lower
else{
    //Titanium.UI.iPhone.SystemButtonStyle = 'PLAIN';
    var self = Ti.UI.createWindow({
        title:title,
        //fullscreen : true,
        barColor:'#980012',
        backButtonTitle:'Back',
        backgroundColor:'#fff',
        url:url,
    });

    
    // create the label
var titleLabel = Titanium.UI.createLabel({
    color:'#fff',
    //backgroundColor:'#f6f5f1',
    height:42,
    width:'100%',
    text:title,
    textAlign:'center',
    font:{fontFamily:'Helvetica Neue',fontSize:16,fontWeight:'bold'},
    shadowColor:'#eee',shadowOffset:{x:0,y:1}
});
}
// landscape orientation will hide navBar and statusBar
function changeOrientation (e) {
    if(e.orientation == '3' || e.orientation == '4'){  //landscape
        Titanium.UI.iPhone.hideStatusBar();
        self.hideNavBar();
    } else if (e.orientation == '1' || e.orientation == '2'){ //portrait
        Titanium.UI.iPhone.showStatusBar();
        self.showNavBar();
    }
  
};
// execute 'changeOrientation' when window first opens and than on every orientation change
changeOrientation(Titanium.Gesture);
Titanium.Gesture.addEventListener('orientationchange', function(e) {
    changeOrientation(Titanium.Gesture);
});

// associate label to title
self.setTitleControl(titleLabel);

    return self;
};

module.exports = windowClass;