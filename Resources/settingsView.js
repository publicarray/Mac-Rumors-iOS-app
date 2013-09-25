var settingsWin = new Window('Settings');
settingsWin.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};

var settingsAnimationView = Titanium.UI.createView();

var cacheLabel = Ti.UI.createLabel({
    text:'Network Cache:',
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    left: '10%',
    width:'auto',
    top: '10%',
});

var cacheNoticeLabel = Ti.UI.createLabel({
    text:'Setting it to off also deletes the offline rss files',
    color:'#777',
    font:{fontSize:11,fontFamily:'Helvetica Neue'},
    width:'90%',
    textAlign: 'center',
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
    text:'Set Theme Colour: ',
    width:'auto',
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    top: '40%',
    left: '10%'
});
var themeText = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    top: '40%',
    width: '30%',
    right: '10%',
    returnKeyType:Ti.UI.RETURNKEY_DONE,
    autocorrect:false
    
});

if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
    var themeBtn = Ti.UI.createButton({
    title:'Set Theme Colour',
    width: 200,
    height: 40,
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    top: '55%',
});
}
else{
var themeBtn = Ti.UI.createButton({
    title:'Load Dafault Theme',
    width: 200,
    height: 40,
    font:{fontSize:18,fontFamily:'Helvetica Neue'},
    top: '55%',
    style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
    //selectedColor:'#980012',
    borderRadius:10,
    backgroundGradient:{colors:['#c80050','#500000']}
    //borderWidth:1,
    //borderColor:'#666'
});

var themeNoticeLabel = Ti.UI.createLabel({
    text:'Please note that the colour change is only visable after a restart.\nPlease use colour names, hex values are currently not supported',
    color:'#777',
    font:{fontSize:11,fontFamily:'Helvetica Neue'},
    width:'90%',
    left:'5%',
    center: {
        x: '50%',
        y: '80%',
    },
});
settingsAnimationView.add(themeNoticeLabel);
}

settingsAnimationView.add(themeBtn);
settingsAnimationView.add(themeLabel);
settingsAnimationView.add(themeText);
settingsAnimationView.add(onCacheButton);
settingsAnimationView.add(cacheNoticeLabel);
settingsAnimationView.add(cacheLabel);
settingsWin.add(settingsAnimationView);

