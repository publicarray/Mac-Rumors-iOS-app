var settingsWin = new Window('Settings');
settingsWin.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};

var cacheLabel = Ti.UI.createLabel({
    text:'Network Cache:',
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    left: '10%',
    width:'auto',
    top: '10%',
});

var cacheLabel2 = Ti.UI.createLabel({
    text:'Setting it to off also deletes the offline rss files',
    color:'#777',
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    width:'90%',
    top: '20%',
});

var onCacheButton = Ti.UI.createSwitch({
   value:true,
   right: '10%',
   width: 'auto',
   top: '10%',
   height: 40,
});

var themeLabel = Ti.UI.createLabel({
    text:'Set Theme Colour :',
    width:'auto',
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    top: '40%',
    left: '10%'
});
var themeText = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '40%',
    width: 100,
    right: '10%',
});

var themeBtn = Ti.UI.createButton({
    title:'Reset Theme',
    width: 200,
    height: 40,
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    top: '50%',
});

settingsWin.add(themeBtn);
settingsWin.add(themeLabel);
settingsWin.add(themeText);
settingsWin.add(onCacheButton);
settingsWin.add(cacheLabel);
settingsWin.add(cacheLabel2);