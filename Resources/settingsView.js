var win = Ti.UI.currentWindow;
var resetCacheButton = Titanium.UI.createButton({
   title: 'Cache off & delete xml fliles',
   width: 200,
   top: '20%',
   height: 40,
});

var onCacheButton = Titanium.UI.createButton({
   title: 'Cache on',
   width: 200,
   top: '40%',
   height: 40,
});

resetCacheButton.addEventListener('click', function (e) {
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

});

onCacheButton.addEventListener('click', function (e) {
    Ti.App.Properties.setBool('cache', true);
});
win.add(resetCacheButton);
win.add(onCacheButton);




var someButton = Titanium.UI.createButton({
   title: 'load refresh.js',
   width: 200,
   top: '60%',
   height: 40,
});
someButton.addEventListener('click', function (e) {
  /*  
    refresh = Ti.UI.createWindow({
        title:'refresh',
        barColor: '#650000',
        url:'refresh.js',
    });
    refresh.open();
  */
});

win.add(someButton);