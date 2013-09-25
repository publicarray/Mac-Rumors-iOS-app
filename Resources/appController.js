// Save Tab order on Pause/Exit --> when running in the background
tabGroup.addEventListener('focus', function(e){
    var currentTabId = e.index;
    var k = [];
    for (i = 0; i < 7; i++)
    {
        if(tabGroup.tabs[i].id != undefined){
            var tabId = tabGroup.tabs[i].id;
            k.push(tabId);
        }
    }
    //Save properties -> the last tab opened and the tab order list.
    Ti.App.Properties.setInt('lastTB', currentTabId);
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