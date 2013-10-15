var favouritesWin = new Window('Favourites');

var favouriteTableView = Ti.UI.createTableView({
    editable:true,
});

favouritesWin.add(favouriteTableView);
// Get the student data from the model
favouriteTableView.setData(getFavourites());

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