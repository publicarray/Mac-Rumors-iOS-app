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
    style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

settingsWin.add(settingsList);
