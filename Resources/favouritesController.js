
// to refresh the table view when a favorite is added
Ti.App.addEventListener('loadFav', function(eve) {
    favouriteTableView.setData(getFavourites());
});
/*
favouritesWin.addEventListener('focus', function (e){
     // Update the table view
     Ti.API.info('>>>>>>>>I AM IN FOCUS<<<<<<');
     favouriteTableView.setData(getFavourites());
});
*/

favouriteTableView.addEventListener('click', function (e) {
    
      var backBtn = Ti.UI.createButton({
            opacity: 60,
            left: 10,
            top: 10,
            width: 30,
            height: 30,
            visible: false,
            borderRadius: 5,
            style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
            font:{fontSize:18,fontFamily:'HelveticaNeue-Light'},
            backgroundImage:'images/transparent30.png',
            color: '#fff',
            image: 'images/backarow.png',
            selectedColor: Ti.App.Properties.getString('theme', '#980012'),
            title: 'Back',
            zIndex: 5,
        });
        
        // function of back button - go back
        backBtn.addEventListener('click', function (e) {
            detailWin.close();
            e.opacity = 1;
          
        });
        // show and hide the button on orientation change
        showHideBtnOrientation(Titanium.Gesture);
        Titanium.Gesture.addEventListener('orientationchange', function(e) {
            showHideBtnOrientation(Titanium.Gesture);
        });
        function showHideBtnOrientation (e) {
        if(e.orientation == '3' || e.orientation == '4'){  //landscape
            backBtn.setVisible(true);
        } 
        else if (e.orientation == '1' || e.orientation == '2'){ //portrait
            backBtn.setVisible(false);
        }
      };
        
        // the windows are created from the WindowClass and they open the tableDetailView.js passing the data through properties
        var detailWin = new Window (e.row.title);
        detailWin.setTabBarHidden(true);
        detailWin.fullscreen = true;
        detailWin.url = 'tableDetailView.js';
        detailWin.desc = e.rowData.desc;
        detailWin.link = e.rowData.link;
        detailWin.pubDate = e.rowData.pubDate;
        detailWin.creator = e.rowData.creator;
        detailWin.rowid = e.rowData.rowid;
        detailWin.add(backBtn);
        
        // open the tab with a default slide animation
        tabGroup.activeTab.open(detailWin, {
            animation: true
        });
});

favouriteTableView.addEventListener('delete', function (e) {
    deleteFavourite(e.rowData.rowid);
    // Update the table view
    favouriteTableView.setData(getFavourites());
});

// switch buttons and edit mode
editBtn.addEventListener('click', function (e) {
     favouriteTableView.setEditing(true);
     favouritesWin.setRightNavButton(doneBtn);
});

doneBtn.addEventListener('click', function (e) {
      favouriteTableView.setEditing(false);
      favouritesWin.setRightNavButton(editBtn);
});
