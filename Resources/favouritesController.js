favouriteTableView.addEventListener('click', function (e) {
        // the windows are created from the WindowClass and they open the tableDetailView.js passing the data through properties
        var detailWin = new Window (e.row.title);
        detailWin.url = 'tableDetailView.js';
        detailWin.desc = e.rowData.desc;
        detailWin.link = e.rowData.link;
        detailWin.pubDate = e.rowData.pubDate;
        detailWin.creator = e.rowData.creator;
        detailWin.rowid = e.rowData.rowid;
        
        // open the tab with a default slide animation
        tabGroup.activeTab.open(detailWin, {
            animation: true
        });
});
favouriteTableView.addEventListener('focus', function (e) {
  // Update the table view
    favouriteTableView.data = getStudents();
});