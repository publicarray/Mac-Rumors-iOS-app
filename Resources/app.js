/* 
 * © Sebastian Schmidt and Paris Moletti 2013
 * 
 * source used to save tab state:
 * http://developer.appcelerator.com/question/122327/save-and-reload-state-from-edited-tab-view
 */

Ti.include('appModel.js');

//load in Window class
var Window = require('windowFunction');

// create the tab bar and open it
if (version >= 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS'))
{
    //create io7 tab bar
    var tabGroup = Ti.UI.createTabGroup(
    {
        backgroundColor: '#fff',// of View
        tintColor: Ti.App.Properties.getString('theme', '#980012'),//ios7 only
    });
}
else
{
    //create tab bar for older iOS's'
    var tabGroup = Ti.UI.createTabGroup(
    {
        barColor: themeColor,//#650000, // for more tab
        tabsBackgroundColor: '#000',// inactive icon tint
        tabsBackgroundImage: '/images/tapbar.png',// background for tab bar
        backgroundColor: '#fff',// of View
        activeTabIconTint: '#fff',// active icon tint
        //activeTabBackgroundImage: '/images/' + Ti.App.Properties.getString("theme", "#980012") +'.png',//active icon background image
    });
};

// Create Tabs - the names are important to save the state of the tabs
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
//Ti.include('settingsController.js');
var tab6 = Ti.UI.createTab(
{
    title: L('Settings'),
    id: 6,
    icon: '/images/settings.png',
    activeIcon: '/images/settings_off.png',
    window: settingsWin
});

// - create Favourites tab
Ti.include('favouritesView.js');
Ti.include('favouritesController.js');
var tab7 = Ti.UI.createTab(
{
    title: L('Favourites'),
    id: 7,
    icon: '/images/fav.png',
    activeIcon: '/images/fav_off.png',
    window: favouritesWin
});

// do stuff with the tab group - save the state and load it back up
Ti.include('appController.js');

// open tab Group
tabGroup.open();