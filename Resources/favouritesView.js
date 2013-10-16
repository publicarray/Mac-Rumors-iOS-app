var favouritesWin = new Window('Favourites');


var tableSortHeader = Ti.UI.createView({
    backgroundColor: '#fff',
    width: '100%', height: 30
});

var sortbar = Titanium.UI.iOS.createTabbedBar({
    labels:['Time Added', 'Date', 'Title'],
    backgroundColor: themeColor,
    top:5,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:'98%',
});

tableSortHeader.add(sortbar);

sortbar.addEventListener('click', function(e){
    if(e.index===0)
    {
        sortDB('rowid');
    }
    if(e.index===1)
    {
        sortDB('pubDate');
    }
    if(e.index===2)
    {
        sortDB('title');
    }
});



var favouriteTableView = Ti.UI.createTableView({
    editable:true,
    headerView: tableSortHeader,
    separatorColor : '#d1d0d5',
});

favouritesWin.add(favouriteTableView);
// Get the student data from the model
favouriteTableView.setData(getFavourites());
//favouriteTableView.add(getFavourites());

//edit button
var editBtn = Titanium.UI.createButton({
    systemButton: Ti.UI.iPhone.SystemButton.EDIT,
});
 
var doneBtn = Titanium.UI.createButton({
     systemButton: Ti.UI.iPhone.SystemButton.DONE    
});
favouritesWin.setRightNavButton(editBtn);

//_____________________________________________________ planned to be removed______________________________

// to refresh the table view when a favorite is added
Ti.App.addEventListener('loadFav', function(e) {
    favouriteTableView.setData(getFavourites());
});