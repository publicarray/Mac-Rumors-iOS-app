var favouritesWin = new Window('Favourites');

var tableHeader = Ti.UI.createView({
    height: 32,
    top: 0,
});

var pullView = Ti.UI.createView({
    backgroundColor: '#fff', 
    height: 43,
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
favouritesWin.add(tableHeader);
// search bar
var favSearch = Titanium.UI.createSearchBar({
    barColor:'#bbb',
    tintColor: themeColor,
    hintText: 'Search',
    height: 43,
    top: 0,
});
pullView.add(favSearch);

var favouriteTableView = Ti.UI.createTableView({
    editable:true,
    top: 32,
    data: getFavourites(), // Get the student data from the model
    //headerView: tableHeader,
    //headerPullView: pullView,
    search:favSearch,
    searchHidden: true,
    separatorColor : '#d1d0d5',
});
//favouriteTableView.setContentInsets( {top:43,bottom:0,right:0,left:0}, {animated:true} );

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