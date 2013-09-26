// Save Tab order when the user tabs on a tab.
tabGroup.addEventListener('focus', function(e){
    var currentTabId = e.index; // get the current tab that is in focus. (excluding the more tab - i guess the OS doent see it as a tab)
    var k = [];
    for (i = 0; i < 7; i++)  // loop through the tabs
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
});

// Load saved tabs in 'TB' back in Order
for (i = 0; i < 7; i++)
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
    var pattern2=/\d/g;  //search for any decimal
    if (pattern.test(tabGroup.activeTabBackgroundImage) || pattern2.test(tabGroup.activeTabBackgroundImage))
     {
         tabGroup.activeTabBackgroundImage = '/images/#980012.png';  // display dafult image
     };
}
checkColour();