var favouritesWin = new Window('Favourites');

var favouriteTableView = Ti.UI.createTableView();

favouritesWin.add(favouriteTableView);
// Get the student data from the model
favouriteTableView.data = getFavourites();