var settingsWin = new Window('Settings');
settingsWin.backgroundGradient = {colors: ["white", "#C7D6E9"]};

var cacheLabel = Ti.UI.createLabel({
    text:'Network Cache:',
    width:'auto',
    top: '10%',
});

var cacheLabel2 = Ti.UI.createLabel({
    text:'Setting it to off also deletes the offline rss files',
    width:'90%',
    top: '70%',
});

var onCacheButton = Titanium.UI.createSwitch({
   value:true,
   width: 'auto',
   top: '40%',
   height: 40,
});

settingsWin.add(onCacheButton);
settingsWin.add(cacheLabel);
settingsWin.add(cacheLabel2);

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
