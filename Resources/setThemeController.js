
// sets the cache for the xhr Ti.Network.HTTPClient
onCacheButton.addEventListener('change', function (e) {
    if(e.value){
    Ti.App.Properties.setBool('cache', true);
}
    else if(!e.value){
    Ti.App.Properties.setBool('cache', false);
    // deletes the off-line txt files in the app directory 
//Ti.API.info('Directory list to start: ' + Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory).getDirectoryListing());
if (fileMain.exists() && fileMain.writable) { fileMain.deleteFile(); }
if (fileMac.exists() && fileMac.writable) { fileMac.deleteFile(); }
if (fileIos.exists() && fileIos.writable) { fileIos.deleteFile(); }
}
});

// the view is animated to go up when the text field is selected
themeText.addEventListener('focus', function (e){
    var animation = Titanium.UI.createAnimation();
    animation.top = "-35%";
});

themeText.addEventListener('return', function (e){
    var animation = Titanium.UI.createAnimation();
    animation.top = 0;
    settingsAnimationView.animate(animation);
});

// save changes
themeText.addEventListener('return', function (e){
    setProperty(themeText.value);
});

// gradient on the custom button only looks good in iOS 6
if (Ti.Platform.version < 7 && (Ti.Platform.name === 'iPhone OS' || Ti.Platform.name === 'iPad OS' || Ti.Platform.name === 'iPod Touch OS')){
// change gradient of button on press
themeBtn.addEventListener('touchstart', function (e) {
  themeBtn.backgroundGradient={colors:['#500000','#c80050']};
});
// change gradient of button when finger is released
themeBtn.addEventListener('touchend', function (e) {
  themeBtn.backgroundGradient={colors:['#c80050','#500000']};
});

};
//animate button on click
themeBtn.addEventListener('click', function(e){
    // Create the transform to scale the button
    var transform = Titanium.UI.create2DMatrix({scale: 1.1});
    // Create the animation with the transform, and auto reverse
    var animation = Titanium.UI.createAnimation({transform: transform, autoreverse: true});
    // Start animation
    themeBtn.animate(animation);
    // set property
     setProperty('#980012');
     themeText.value = '#980012';
});

function setProperty (aString) {
    // check if the user has entered something and is valid
    if (aString!=="" && aString!==" " && aString!==undefined){
    Ti.App.Properties.setString('theme', aString.toLowerCase());// lower-case file names - (png files)
    }
}
