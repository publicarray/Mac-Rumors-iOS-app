onCacheButton.addEventListener('change', function (e) {
    if(e.value){
    Ti.App.Properties.setBool('cache', true);
}
    else if(!e.value){
    Ti.App.Properties.setBool('cache', false);
    
//Ti.API.info('Directory list to start: ' + Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory).getDirectoryListing());
if (fileMain.exists() && fileMain.writable) { fileMain.deleteFile(); }
if (fileMac.exists() && fileMac.writable) { fileMac.deleteFile(); }
if (fileIos.exists() && fileIos.writable) { fileIos.deleteFile(); }
}
});


// this is to save and display the centered colour:
// the view is animated to go up when the text field is selected
// the button has a different function in ios7 / i am able to update some of the changes withought restarting
themeText.addEventListener('focus', function (e){
    var animation = Titanium.UI.createAnimation();
    animation.top = "-35%";
    settingsAnimationView.animate(animation);
});

themeText.addEventListener('return', function (e){
    var animation = Titanium.UI.createAnimation();
    animation.top = 0;
    settingsAnimationView.animate(animation);
});
// save value of textfield into properties
themeText.addEventListener('change', function (e){
    Ti.App.Properties.setString('theme', e.value);
});

// in iOS 6.1 and lower a restart is needed to change the value in the properties & actions on the custom button only looks good in iOS 6
if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
themeText.addEventListener('return', function (e){
    alert('Please restart the app for the changes to take effect.');  //for the changes to take effect
});

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
    // Create the animation with the transform, and autoreverse
    var animation = Titanium.UI.createAnimation({transform: transform, autoreverse: true});
    // Start animation
    themeBtn.animate(animation);
    //check for OS and version
  if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
    //ios 7 stuff- set the y=tint colour of the tabgroup
     var colour = themeText.value;
     //tabGroup.barColor = colour;
     tabGroup.tintColor = colour;
     //save to properties
     Ti.App.Properties.setString('theme', colour);
 }
 //other OS's resets the theme dafult values to the property and displays it in the text box
   else{
     Ti.App.Properties.setString('theme', '#980012');
     themeText.value = '#980012';
}
});
