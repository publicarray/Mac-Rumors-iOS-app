// apply changes in properties
Ti.App.Properties.addEventListener('change', function(e)
    {
       themeColor = Ti.App.Properties.getString('theme', '#980012');
       bassSound.setVolume(Ti.App.Properties.getDouble('volume', 1));
       deleteSound.setVolume(Ti.App.Properties.getDouble('volume', 1));
       startSound.setVolume(Ti.App.Properties.getDouble('volume', 1));
       tabGroup.setTintColor(themeColor);
       //searchBar.setTintColor(Ti.App.Properties.getString('theme', '#980012'));
       //tableView.setSelectedColor(Ti.App.Properties.getString('theme', '#980012'));
       if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS'))
       {
            tabGroup.setBarColor(Ti.App.Properties.getString('theme', '#980012'));
            tabGroup.setActiveTabBackgroundImage('/images/' + Ti.App.Properties.getString("theme", "#980012") +'.png');
            checkColour();
       }
    });

// Save Tab order when the user tabs on a tab.
tabGroup.addEventListener('focus', function(e){
    // play bass sound
    //bassSound.stop();
    //bassSound.play();
    
    var currentTabId = e.index; // get the current tab that is in focus. (excluding the more tab - i guess the OS doent see it as a tab)
    var k = [];
    for (i = 0; i < 8; i++)  // loop through the tabs
    {
        // save the tap's in order as an array
        if(tabGroup.tabs[i].id != undefined){  // check is the tap has an id
            var tabId = tabGroup.tabs[i].id;
            k.push(tabId);
        }
    }
    //Save the last opened tab as a number in 'lastTB' as a property
    Ti.App.Properties.setInt('lastTB', currentTabId);
    //Save the array of tab id's as a property in 'TB'
    Ti.App.Properties.setList('TB', k);
    //Ti.App.Properties.setList('TB', null); // reset tabs
});

// Load saved tabs in 'TB' back in Order
for (i = 0; i < 8; i++)
{
    // Try to get saved values for Tab Order
    var k = Ti.App.Properties.getList('TB');
    if (k === null)
    {
        // If 'TB' don't have any saved, populate tabs in Designer order  -- hence the tab Names
        var temp = eval('tab' + [i]);
        tabGroup.addTab(temp);
    }
    else
    {
        // if 'TB' has saved tab ID's use them to add them to the TabGroup
        var temp = eval('tab' + parseInt(k[i]));
        tabGroup.addTab(temp);
    }
}
//open last opened tab from property
tabGroup.setActiveTab(Ti.App.Properties.getInt('lastTB', 0));

// the theme colour could be entered as a hex number, 
// so if the user does the app should display the dafult image for the activeTabBackgroundImage property
// rather than the OS 6's dafult light overlay
function checkColour(){
    var pattern=/#/g;  // search for #
    var pattern2=/\d/g;  //search for any decimal number
    if (pattern.test(tabGroup.activeTabBackgroundImage) || pattern2.test(tabGroup.activeTabBackgroundImage))
     {
         tabGroup.activeTabBackgroundImage = '/images/#980012.png';  // display dafult image
     }
}
checkColour();

function internetCheck() {
    if(!Titanium.Network.online && !fileIos.exists() && !fileMac.exists() && !fileMain.exists()){
        alert('Your device is not connected to the internet.');
    }
    if(!Titanium.Network.online && fileIos.exists() && fileMac.exists() && fileMain.exists()){
        alert('Off-line Mode!');
    }
};

internetCheck();