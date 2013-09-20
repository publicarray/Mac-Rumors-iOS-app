var win = Ti.UI.currentWindow;

// list
var tableView = Titanium.UI.createTableView({
    
});
//populate data into data array
var data = [];
    data.push ({title: "Roundups", url:'roundupView.js'});
    data.push ({title: "Forum", url:'forumView.js'});

//add data array to table and display it
tableView.data = data;
win.add(tableView);

//event listener
tableView.addEventListener ('click', function(e){
    Titanium.API.info(e.rowData.title);
    var win = Ti.UI.createWindow({
               title:e.rowData.title,
               barColor:'#000',
               url: e.rowData.url,
           });
    Ti.UI.currentTab.open(win,{animation:true});
});
