/* 
 * Sebastian Schmidt and Paris Moletti
 * 
 * sorce used to save tab state:
 * http://developer.appcelerator.com/question/122327/save-and-reload-state-from-edited-tab-view
 */

Ti.include('macRumorsModel.js');
//load in Window class
var Window = require('windowFunction');

// create the tab bar and open it
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
        tabsBackgroundColor: '#000',// inactive icon tint
        tabsBackgroundImage: 'images/tabbar3.png',// background for tab bar
        backgroundColor: '#fff',// of View
        activeTabIconTint: '#fff',// active icon tint
        activeTabBackgroundImage: 'images/highlight.png',//active icon background image
    });
};

// Create Tabs
// - create Main tab
Ti.include('mainView.js');
Ti.include('mainController.js');
var tab0 = Ti.UI.createTab(
{
    title: L('Main'),
    id: 0,
    icon: '/images/apple.png',
    activeIcon: '/images/apple_off.png',
    window: mainWin,
});

// - create Mac tab
Ti.include('macView.js');
Ti.include('macController.js');
var tab1 = Ti.UI.createTab(
{
    title: L('Mac'),
    id: 1,
    icon: '/images/mac2.png',
    activeIcon: '/images/mac_off.png',
    window: macWin
});

// - create iOS tab
Ti.include('iosView.js');
Ti.include('iosController.js');
var tab2 = Ti.UI.createTab(
{
    title: L('iOS'),
    id: 2,
    icon: '/images/ios.png',
    activeIcon: '/images/ios_off.png',
    window: iOSWin
});

// - create Buyer's Guide tab
Ti.include('buyView.js');
Ti.include('buyController.js');
var tab3 = Ti.UI.createTab(
{
    title: L("Buyer's Guide"),
    id: 3,
    icon: '/images/buy.png',
    activeIcon: '/images/buy_off.png',
    window: buyWin
});

// - create Roundups tab
Ti.include('roundupView.js');
Ti.include('roundupController.js');
var tab4 = Ti.UI.createTab(
{
    title: L('Roundups'),
    id: 4,
    icon: '/images/roundup.png',
    activeIcon: '/images/roundup_off.png',
    window: roundupWin
});

// - create Forum tab
Ti.include('forumView.js');
Ti.include('forumController.js');
var tab5 = Ti.UI.createTab(
{
    title: L('Forum'),
    id: 5,
    icon: '/images/forum.png',
    activeIcon: '/images/forum_off.png',
    window: forumWin
});

// - create Settings tab
Ti.include('settingsView.js');
Ti.include('settingsController.js');
var tab6 = Ti.UI.createTab(
{
    title: L('Settings'),
    id: 6,
    icon: '/images/settings.png',
    activeIcon: '/images/settings_off.png',
    window: settingsWin
});

// Save Tab order on Pause/Exit --> when running in the background
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
    //Save properties -> the last tab opened and the tab order list.
    Ti.App.Properties.setInt('lastTB', currentTab);
    Ti.App.Properties.setList('TB', k);
    
    // for debuging
    //Ti.API.info(Ti.App.Properties.getList('TB'));
    //Ti.API.info(Ti.App.Properties.getInt('lastTB', 0));
});
// Load Tabs back in Order
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
//open last opened tab from property
tabGroup.setActiveTab(Ti.App.Properties.getInt('lastTB', 0));
// open tab Group
tabGroup.open();