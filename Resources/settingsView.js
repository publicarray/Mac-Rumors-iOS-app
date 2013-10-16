// - create settings window with blue to white gradient
var settingsWin = new Window('Settings');
settingsWin.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};

var selectedBackgroundColor = Ti.App.Properties.getString('theme', '#980012');

var listData = [
        {title: 'Theme', selectedBackgroundColor: selectedBackgroundColor, hasChild:true, font:{fontFamily: 'HelveticaNeue-Light', fontSize:18,}, header: ''},
        {title: 'Sound', selectedBackgroundColor: selectedBackgroundColor, hasChild:true, font:{fontFamily: 'HelveticaNeue-Light', fontSize:18,}, },
        {title: 'About', selectedBackgroundColor: selectedBackgroundColor, hasChild:true, font:{fontFamily: 'HelveticaNeue-Light', fontSize:18,}, header: ''},        
];

var settingsList = Titanium.UI.createTableView({
    data:listData,
    backgroundColor: '#fff',
    separatorColor : '#d1d0d5',
    //separatorStyle : Titanium.UI.iPhone.TableViewStyle.GROUPED,
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

// CONTROLLER
settingsList.addEventListener('click', function (e) {
    if (e.index===0){
    var detailWindow = new Window ('Theme');
    detailWindow.setUrl('setThemeView.js');
    }
    if (e.index===1){
    var detailWindow = new Window ('Volume');
    detailWindow.setUrl('setVolumeView.js');
    }
    if (e.index===2){
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
