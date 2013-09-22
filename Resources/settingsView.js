var settingsWin = new Window('Settings');
//settingsWin.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};

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