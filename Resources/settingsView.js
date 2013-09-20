var win = Ti.UI.currentWindow;
win.backgroundGradient = {colors: ["white", "#C7D6E9"]};

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

win.add(onCacheButton);
win.add(cacheLabel);
win.add(cacheLabel2);

onCacheButton.addEventListener('change', function (e) {
    if(e.value){
    Ti.App.Properties.setBool('cache', true);
}
    else if(!e.value){
    Ti.App.Properties.setBool('cache', false);
    
var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);
Ti.API.info('Directory list to start: ' + dir.getDirectoryListing());

var    file = 'Front.txt';
var deleteFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, file);
if (deleteFile.exists() && deleteFile.writable) { deleteFile.deleteFile(); }

    file = 'Mac.txt';
    deleteFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, file);
if (deleteFile.exists() && deleteFile.writable) { deleteFile.deleteFile(); }

    file = 'iPhone.txt';
    deleteFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, file);
if (deleteFile.exists() && deleteFile.writable) { deleteFile.deleteFile(); }
}
});
