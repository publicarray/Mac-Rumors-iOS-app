// http://developer.appcelerator.com/question/122327/save-and-reload-state-from-edited-tab-view
Ti.include('model.js');
//Window class
var Window = require('windowClass');
if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS'))
{
    //create io7 tab bar
    var tabGroup = Ti.UI.createTabGroup(
    {
        backgroundColor: '#fff',// of View
        tintColor: '#980012',//ios7 only
    });
}
else
{
    //create tab bar for older iOS's'
    var tabGroup = Ti.UI.createTabGroup(
    {
        barColor: '#650000',//#980012, // for more tab
        tabsBackgroundColor: '#fff',// inactive icon tint
        tabsBackgroundImage: 'images/tabbar.png',// background for tab bar
        backgroundColor: '#fff',// of View
        activeTabIconTint: '#000',// active icon tint
        activeTabBackgroundImage: 'images/highlight.png',//active icon background image
    });
};

// create Views
Ti.include('mainView.js');
var tab0 = Ti.UI.createTab(
{
    title: L('Main'),
    id: 0,
    icon: '/images/apple_off.png',
    activeIcon: '/images/apple.png',
    window: mainWin,
});

Ti.include('macView.js');
var tab1 = Ti.UI.createTab(
{
    title: L('Mac'),
    id: 1,
    icon: '/images/mac_off.png',
    activeIcon: '/images/mac2.png',
    window: macWin
});

Ti.include('iosView.js');
var tab2 = Ti.UI.createTab(
{
    title: L('iOS'),
    id: 2,
    icon: '/images/ios.png',
    //activeIcon: '/images/ios_off.png',
    window: iOSWin
});

Ti.include('buyView.js');
var tab3 = Ti.UI.createTab(
{
    title: L("Buyer's Guide"),
    id: 3,
    icon: '/images/buy.png',
    //activeIcon: '/images/buy_off.png',
    window: buyWin
});

Ti.include('roundupView.js');
var tab4 = Ti.UI.createTab(
{
    title: L('Roundups'),
    id: 4,
    icon: '/images/roundup1.png',
    //activeIcon: '/images/roundup1_off.png',
    window: roundupWin
});

Ti.include('forumView.js');
var tab5 = Ti.UI.createTab(
{
    title: L('Forum'),
    id: 5,
    icon: '/images/forum.png',
    //activeIcon: '/images/forum_off.png',
    window: forumWin
});

Ti.include('settingsView.js');
var tab6 = Ti.UI.createTab(
{
    title: L('Settings'),
    id: 6,
    icon: '/images/settings.png',
    window: settingsWin
});


// Save Tab order on Pause/Exit
Ti.App.addEventListener('pause', function(e)
{
    var currentTabId = tabGroup.activeTab.id;
    var currentTab = null;
    var k = [];
    for (i = 0; i < 7; i++)
    {
        var tabId = tabGroup.tabs[i].id;
        k.push(tabId);
        //get the current Tab order number of the current Tab by checking it againts it's Id'
        if (tabId===currentTabId){
            currentTab = i;
        };
    }
    //set properties
    Ti.App.Properties.setInt('lastTB', currentTab);
    Ti.App.Properties.setList('TB', k);
    
    //debug
    Ti.API.info(Ti.App.Properties.getList('TB'));
    Ti.API.info(Ti.App.Properties.getInt('lastTB', 0));
});
// Load Tabs in Order
for (i = 0; i < 7; i++)
{
    // Try to get saved values for Tab Order
    var k = Ti.App.Properties.getList('TB');
    if (k === null)
    {
        // If don't have saved, populate in Designer order
        var temp = eval('tab' + [i]);
        tabGroup.addTab(temp);
    }
    else
    {
        var temp = eval('tab' + parseInt(k[i]));
        // if have saves, populate
        tabGroup.addTab(temp);
    }
}
//open last opened tab
tabGroup.setActiveTab(Ti.App.Properties.getInt('lastTB', 0));
// open tab Group
tabGroup.open();