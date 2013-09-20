// http://developer.appcelerator.com/question/122327/save-and-reload-state-from-edited-tab-view

Ti.include('model.js');
//Window class
var Window = require('windowClass');
 
    var version = Ti.Platform.version;
    var device = Ti.Platform.name;
    if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){

//create io7 tab bar
    var tabGroup = Ti.UI.createTabGroup({
        backgroundColor: '#fff', // of View
        //tabsTintColor :'red',  //io7 only
        tintColor :'#980012', //ios7 only
    });
}
else{
    //create tab bar
    var tabGroup = Ti.UI.createTabGroup({
        barColor: '#650000',//barColor :'#980012', // for more tab
        tabsBackgroundColor: '#fff', // inactive icon tint
        //tabsBackgroundColor:'#650000', // or bar colour
        tabsBackgroundImage:'images/tabbar.png', // background for tab bar
        backgroundColor: '#fff', // of View
        activeTabIconTint : '#000', // active icon tint
        activeTabBackgroundImage : 'images/highlight.png', //active icon background image
    });
};   
    //create app windows
    var mainWin = new Window('Mac Rumours', 'mainView.js'),
        macWin = new Window('Mac Blog', 'macView.js'),
        iOSWin = new Window('iOS Blog', 'iosView.js'),
        buyWin = new Window("Buyer's Guide", "buyView.js"),
        roundupWin = new Window('Roundups', 'roundupView.js');
        forumWin = new Window('Form', 'forumView.js');
        settingsWin = new Window('Settings', 'settingsView.js');
    
    // create tabs
var tab0 = Ti.UI.createTab({
        title: L('Main'),
        id:0,
        icon: '/images/apple_off.png',
        activeIcon: '/images/apple.png',
        window: mainWin,
    });
    
var tab1 = Ti.UI.createTab({
        title: L('Mac'),
        id:1,
        icon: '/images/mac_off.png',
        activeIcon: '/images/mac2.png',
        window: macWin
    });
    
var tab2 = Ti.UI.createTab({
        title: L('iOS'),
        id:2,
        icon: '/images/ios.png',
        //activeIcon: '/images/ios_off.png',
        window: iOSWin
    });
    
var tab3 = Ti.UI.createTab({
        title: L("Buyer's Guide"),
        id:3,
        icon: '/images/buy.png',
        //activeIcon: '/images/buy_off.png',
        window: buyWin
    });
    
var tab4 = Ti.UI.createTab({
        title: L('Roundups'),
        id:4,
        icon: '/images/roundup1.png',
        //activeIcon: '/images/roundup1_off.png',
        window: roundupWin
    });
    
var tab5 = Ti.UI.createTab({
        title: L('Forum'),
        id:5,
        icon: '/images/forum.png',
        //activeIcon: '/images/forum_off.png',
        window: forumWin
    });
    
var tab6 = Ti.UI.createTab({
        title: L('Settings'),
        id:6,
        icon: '/images/settings.png',
        window: settingsWin
    });

// Save Tab order on Pause/Exit
Ti.App.addEventListener('pause', function(e){
        var k = [];
        for(i=0;i<7;i++){
          k.push(tabGroup.tabs[i].id);
        }
        Ti.App.Properties.setList('TB', k);
        Ti.API.info(Ti.App.Properties.getList('TB'));
        Ti.App.Properties.remove('Tabs');
});

// Load Tabs in Order
for(i=0;i<7;i++){
    // Try to get saved values for Tab Order
    var k = Ti.App.Properties.getList('TB');
    if(k==null){
        // If don't have saved, populate in Designer order
        var temp = eval('tab'+[i]);
        tabGroup.addTab(temp);
    }else{
        var temp = eval('tab'+parseInt(k[i]));
        // if have saves, populate
        tabGroup.addTab(temp);
    }
}
// Set First Tab Active
tabGroup.setActiveTab(0); 

// open tab Group
tabGroup.open();

//Ti.App.Properties.setString('currentTab' tabGroup.getActiveTab().title);
//Ti.API.info(tabGroup.getActiveTab().title);