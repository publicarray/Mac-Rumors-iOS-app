var favouritesWin = new Window('Favourites');

var favouriteTableView = Ti.UI.createTableView({
    data:getFavourites(),
});

favouritesWin.add(favouriteTableView);
