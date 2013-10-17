var favouritesWin = new Window('Favourites');

var tableHeader = Ti.UI.createView({
    backgroundColor: '#fff',
    width: '100%', 
    height: 35+43,
});

// sorting of the database
var sortbar = Titanium.UI.iOS.createTabbedBar({
    labels:['Time Added', 'Published Date', 'Article Title'],
    backgroundColor: themeColor,
    bottom:0,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:30,
    width:'98%',
});

tableHeader.add(sortbar);

// search bar
var favSearch = Titanium.UI.createSearchBar({
    tintColor: themeColor,
    hintText: 'Search',
    height:43,
    top:0,
});
tableHeader.add(favSearch);

var favouriteTableView = Ti.UI.createTableView({
    editable:true,
    data: getFavourites(), // Get the student data from the model
    headerView: tableHeader,
    separatorColor : '#d1d0d5',
});

favouritesWin.add(favouriteTableView);

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