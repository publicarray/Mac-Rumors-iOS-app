Ti.include('model.js');
//Window class
var Window = require('windowClass');

// Change status bar to translucent
//Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
 
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
        barColor :'#980012', // for 'more' tab
        tabsBackgroundColor: '#000', // inactive icon tint
        tabsBackgroundImage:'images/tapbar.png', // background for tab bar
        backgroundColor: '#fff', // of View
        activeTabIconTint : '#fff', // active icon tint
        activeTabBackgroundImage : 'images/tabbar2.png', //active icon background image
    });
};   
    //create app windows
    var mainWin = new Window('Mac Rumours', 'mainView.js'),
        macWin = new Window('Mac Blog', 'macView.js'),
        iOSWin = new Window('iOS Blog', 'iosView.js'),
        buyWin = new Window("Buyer's Guide", "buyView.js"),
        //MoreWin = new Window('More', 'moreView.js');
        roundupWin = new Window('Roundups', 'roundupView.js');
        forumWin = new Window('Form', 'forumView.js');
        settingsWin = new Window('Settings', 'settingsView.js');
    
    // add windows to tab
tabGroup.addTab(MainTab = Ti.UI.createTab({
        title: L('Main'),
        icon: '/images/apple.png', // apple 2
        activeIcon: '/images/apple_off.png',
        window: mainWin,
    }));
    mainWin.containingTab = MainTab;
    
tabGroup.addTab(MacTab = Ti.UI.createTab({
        title: L('Mac'),
        icon: '/images/mac.png',
        activeIcon: '/images/mac_off.png',
        window: macWin
    }));
    macWin.containingTab = MacTab;
    
tabGroup.addTab(iOSTab = Ti.UI.createTab({
        title: L('iOS'),
        icon: '/images/ios.png',
        window: iOSWin
    }));
    iOSWin.containingTab = iOSTab;
    
tabGroup.addTab(BuyTab = Ti.UI.createTab({
        title: L("Buyer's Guide"),
        icon: '/images/buy.png',
        window: buyWin
    }));
    buyWin.containingTab = BuyTab;
    
/*tabGroup.addTab(MoreTab = Ti.UI.createTab({
        title: L('More'),
        icon: Ti.UI.iPhone.SystemIcon.MORE,
        //backgroundImage:'/images/more.png',
        window: MoreWin
    }));

   MoreWin.containingTab = MoreTab;
   forumWin.containingTab = forumTab;
*/
    
tabGroup.addTab(roundupTab = Ti.UI.createTab({
        title: L('Roundups'),
        icon: '/images/roundup1.png',
        window: roundupWin
    }));

    roundupWin.containingTab = roundupTab;
    
tabGroup.addTab(forumTab = Ti.UI.createTab({
        title: L('Forum'),
        icon: '/images/forum.png',
        window: forumWin
    }));
    
tabGroup.addTab(settingsTab = Ti.UI.createTab({
        title: L('Settings'),
        //icon: '/images/forum.png',
        window: settingsWin
    }));
// open tab Group
tabGroup.open();

//Ti.App.Properties.setString('currentTab' tabGroup.getActiveTab().title);
//Ti.API.info(tabGroup.getActiveTab().title);