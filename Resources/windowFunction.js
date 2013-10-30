/* 
 * sorce used to change the title  text //http://www.clearlyinnovative.com/blog/post/1484840648/titanium-appcelerator-quickie-change-text-style-in-window-title
 * 
 * The Window Class makes sure all windows look identical, have the same properties and functons.
 * It also checks if the device is running ios7 and will display the windows sightly differently.
 */
function windowClass(title) {
    var version = parseInt(Ti.Platform.version[0], 10);
    var device = Ti.Platform.name;

// ios 7  create windows withought barImage and barColor
if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
        var self = Ti.UI.createWindow({
        title:title,
    });
    }
// ios 6 and lower
else{
    var self = Ti.UI.createWindow({
        statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,  // for a black status bar
        title:title,
        barColor: Ti.App.Properties.getString('theme', '#980012'),  // sets user selected colour,
        barImage: 'images/navbar.png',
        backButtonTitle:'Back',
    });
    
// create a title label for ios 6 and lower
var titleLabel = Titanium.UI.createLabel({
    color:'#000',  // set the text colour to black to contrast the white background
    height:42,
    width:'70%',
    text:title,
    textAlign:'center',
    font:{fontFamily:'Helvetica Neue',fontSize:24,fontWeight:'normal'},
    shadowColor:'#fff',shadowOffset:{x:0,y:1}
});
// associate label to title
self.setTitleControl(titleLabel);
}

// landscape orientation will hide the navBar
function changeOrientation (e) {
    if(e.orientation == '3' || e.orientation == '4'){  //landscape
        self.hideNavBar();
    } 
    else if (e.orientation == '1' || e.orientation == '2'){ //portrait
        self.showNavBar();
    }
};
// execute 'changeOrientation' when window first opens and than on every orientation change
changeOrientation(Titanium.Gesture);
Titanium.Gesture.addEventListener('orientationchange', function(e) {
    changeOrientation(Titanium.Gesture);
});

// export windowClass and return window object
    return self;
};
module.exports = windowClass;