
var themeWin = Ti.UI.currentWindow;
// this window is animated when the user uses the keyboard
var settingsAnimationView = Titanium.UI.createView();

var cacheLabel = Ti.UI.createLabel({
    text:'Delete Offline Files:',
    font:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
    left: '10%',
    width:'auto',
    top: '10%',
    minimumFontSize:18,
});

var onCacheButton = Ti.UI.createSwitch({
   value: Ti.App.Properties.getBool('cache', true),
   right: '10%',
   width: 'auto',
   top: '10%',
   height: 40,
});

var themeLabel = Ti.UI.createLabel({
    text:'Set Theme Colour: ',
    width:'auto',
    font:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
    top: '40%',
    left: '10%',
    minimumFontSize:18,
});
var themeText = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '40%',
    width: '30%',
    right: '10%',
    returnKeyType:Ti.UI.RETURNKEY_DONE,
    autocorrect:false,
    value: Ti.App.Properties.getString('theme', '#980012'),
    
});

// if the device is running iOS 7 or grater don't use the button gradient - it doesn't match visually with the rest of the GUI
// also the button has a different functionality - in iOS 7 the button sets the given colour Theme while in iOS 7 it resets the colour theme to default
if (Ti.Platform.version >= 7 && (Ti.Platform.name === 'iPhone OS' || Ti.Platform.name === 'iPad OS' || Ti.Platform.name === 'iPod Touch OS')){
    var themeBtn = Ti.UI.createButton({
    title:'Load Dafault Theme',
    width: 200,
    height: 40,
    minimumFontSize:18,
    font:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
    top: '55%',
    });
    
 // display a notice that some changes requre a restart 
var themeNoticeLabel = Ti.UI.createLabel({
    text:'Please Note: Some changes are only visible after app restart.',
    color:'#777',
    minimumFontSize:11,
    font:{fontSize:11,fontFamily:'HelveticaNeue-Light'},
    width:'90%',
    top: '80%',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});
}
else{
var themeBtn = Ti.UI.createButton({
    title:'Load Dafault Theme',
    width: 200,
    height: 40,
    minimumFontSize:18,
    font:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
    top: '55%',
    // button gradient
    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
    borderRadius:10,
    backgroundGradient:{colors:['#c80050','#500000']}
 
});

// display a notice to lower than iOS 7 devices that hex values are not supported
var themeNoticeLabel = Ti.UI.createLabel({
    text:'Please Note: Some changes are only visible after app restart.\nPlease use colour names, hex values are currently not supported',
    color:'#777',
    minimumFontSize:11,
    font:{fontSize:11,fontFamily:'HelveticaNeue-Light'},
    width:'98%',
    top: '80%',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});
}
settingsAnimationView.add(themeNoticeLabel);
settingsAnimationView.add(themeBtn);
settingsAnimationView.add(themeLabel);
settingsAnimationView.add(themeText);
settingsAnimationView.add(onCacheButton);
settingsAnimationView.add(cacheLabel);
themeWin.add(settingsAnimationView);

Ti.include('setThemeController.js');