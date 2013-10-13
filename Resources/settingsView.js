// - create settings window with blue to white gradient
var settingsWin = new Window('Settings');
settingsWin.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};

var data1 = [
        {
        properties: {
            title: 'Theme',
            itemId: 1,
            //selectedBackgroundColor: Ti.App.Properties.getString('theme', '#980012'),
            //subtitle: 'Subtitle',
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
        },
        //template: Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS
    },
    {
        properties: {
            title: 'Sound',
            itemId: 2,
            //selectedBackgroundColor: Ti.App.Properties.getString('theme', '#980012'),
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
        },
    },
];

var listSection1 = Ti.UI.createListSection({
    items: data1
});
var listSection2 = Ti.UI.createListSection({
    items: 
    [
    {
        properties: {
            title: 'About',
            itemId: 3,
            //selectedBackgroundColor: Ti.App.Properties.getString('theme', '#980012'),
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
        },
    },
    ],
});
var settingsList = Titanium.UI.createListView({
    sections: [listSection1, listSection2],
    backgroundColor:'#efeff4',
    style:Titanium.UI.iPhone.ListViewStyle.GROUPED,
});
settingsList.addEventListener('itemclick', function (e) {
    
    if (e.itemId===1){
    var detailWindow = new Window ('Theme');
    detailWindow.setUrl('setThemeView.js');
    }
    if (e.itemId===2){
    var detailWindow = new Window ('Volume');
    detailWindow.setUrl('setVolumeView.js');
    }
    if (e.itemId===3){
    var detailWindow = new Window ('About');
    detailWindow.setUrl('aboutView.js');
    }
    
    // ceck if selected window exists -- FOR DEBUG
        if (detailWindow!==undefined){
            //set background gradient
        detailWindow.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};
        // open the tab with a default slide animation
        tabGroup.activeTab.open(detailWindow, {
            animation: true,
            });
        }
});

settingsWin.add(settingsList);
