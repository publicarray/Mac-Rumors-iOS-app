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
