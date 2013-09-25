/* 
 * Information I used to get the rss feed and display it:
 * https://www.youtube.com/watch?v=fZzn6Wp_dGQ
 * https://www.youtube.com/watch?v=UNAeuPcdF5k
 * http://developer.appcelerator.com/question/124014/saving-xml-file-offline-for-read-later
 * 
 */
function getData(url, f, win){
    
if(Ti.Platform.name === 'iPhone OS') {
    var activityStyle = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
    var activityStyle = Ti.UI.ActivityIndicatorStyle.DARK;
}

//innitialise the array
var data = [];
//Show the activity indicator
var activityIndicator = Ti.UI.createActivityIndicator({
    height: '100%',
    width: '100%',
    color: '#404347',
    backgroundColor: '#d8d8d8',
    font: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontWeight: 'normal'
    },
    message: 'Loading...',
    style: activityStyle,
});
win.add(activityIndicator);
activityIndicator.show();


//if internet connection is on - continue
if(Titanium.Network.online) {

    //open network connection
    var xhr = Ti.Network.createHTTPClient({
        cache: Ti.App.Properties.getBool('cache', true),
        timeout:5000,
    });
    xhr.open('GET', url);
    xhr.onload = function () {
        //Writing data to a file
        f.write(this.responseData);
        getXMLdata(f);
        showTable();
    };
    
    xhr.onerror = function() {
        Ti.API.info('XHR Error: ' + xhr.status + ' - ' + xhr.statusText);
     //check response status and act aaccordingly.
     if(xhr.status != 200) {
        if(f.exists()) {
        getXMLdata(f);
        showTable();
        alert('Offline Mode');
       } 
        else if(!f.exists()) {
        activityIndicator.hide();
        alert('The service is currently unavailable. Please Try Again Later.');
        }
    }};
    try {
        xhr.send();
    } catch(e) {
        Ti.API.info('error with xhr.send(): '+e);
        xhr.abort();
        activityIndicator.hide();
    }
}
else if(f.exists()) {
        getXMLdata(f);
        showTable();
    } 
else if(!f.exists()) {
        activityIndicator.hide();
        alert('Your device is not connected to the internet.');
}

function showTable() {
    var searchBar = Titanium.UI.createSearchBar({
    barColor:'#bbb',
    tintColor :Ti.App.Properties.getString('theme', '#980012'),
    height:43,
    top:0,
    showCancel:true,
    });
    // create table
    var tableView = Ti.UI.createTableView({
        data: data,
        search:searchBar,
        filterAttribute:'filter',
        searchHidden:true,
        hideSearchOnSelection: true,
    });
    win.add(tableView);
    // add event handeler
    tableView.addEventListener('click', function (e) {
        
        // - create windows
        /*
        var detailWin = Ti.UI.createWindow({
            //title of the label that the user selected
            title: e.row.children[0].text,
            barColor: '#650000',
            url: 'tableDetail.js',
       });
       */
           // - alternative method using the window function:
           // var Window = require('windowClass');
        var detailWin = new Window (e.row.children[0].text);
        detailWin.url = 'tableDetailView.js';
        detailWin.desc = e.row.desc;
        detailWin.link = e.row.link;
        detailWin.creator = e.row.creator;
        
        tabGroup.activeTab.open(detailWin, {
            animation: true
        });
        //Hide the activity indicator when the funtion has completed
        activityIndicator.hide();
    });
    //save search when user types
    searchBar.addEventListener('change', function (e) {
        Ti.App.Properties.setString('search', e.value);
    });
    //delete saved value on cancel
    searchBar.addEventListener('cancel', function (e) {
        Ti.App.Properties.setString('search', null);
    });
    // realoads entered search value & updates table <-- IT'S BUGGY!!!
    // http://developer.appcelerator.com/apidoc/mobile/1.8.2/Titanium.UI.SearchBar-object
    win.addEventListener('focus', function(e) {;
        searchBar.value=Ti.App.Properties.getString('search','');
        //searchBar.fireEvent('focus');
        if(searchBar.value){
            //searchBar.focus();
            searchBar.blur();
            tableView.searchHidden=false;
        } 
    });
    /* debuging - bugs sitll presists
     
     
    searchBar.addEventListener('focus', function (e) {
        Ti.API.info('search is in focus with value:' + e.value);
    });
    searchBar.addEventListener('change', function (e) {
        Ti.API.info('search has changed with value:' + e.value);
    });
    searchBar.addEventListener('return', function (e) {
        Ti.API.info('search is return with value of:' + e.value);
    });
    // redisplay the value saved when user returns to the tab - issue is that the table isn't uptated correctly in ios 7
    win.addEventListener('focus', function(e) {
       // searchBar.focus();
        //searchBar.show();
        //searchBar.hide();
        searchBar.value=Ti.App.Properties.getString('search','');
        //searchBar.fireEvent('change');
        //searchBar.setValue(Ti.App.Properties.getString('search',''));
        //searchBar.blur();
        //searchBar.show();
        //searchBar.hide();
       // searchBar.blur();
        //searchBar.hide();
        //searchBar.fireEvent('change', {e:"Ti.App.Properties.getString('search','')"});
        searchBar.fireEvent('focus');
        //searchBar.fireEvent('change');
        //searchBar.fireEvent('return');
        if(searchBar.value){
            searchBar.focus();
            searchBar.blur();
            //tableView.fireEvent('click');
            tableView.searchHidden=false;
            //searchBar.show();
            //searchBar.fireEvent('return');
        }
        
    });
    */
};

function getXMLdata(file) {
    if(file.exists()) {
        //read file
        var contents = f.read().text;
// Ti.API.info('contents = ' + contents);
        var doc = Ti.XML.parseString(contents); 
        var items = doc.getElementsByTagName('item');
        var x = 0;
        for(var i = 0; i < items.length; i++) {
            var item = items.item(i);
            var title = item.getElementsByTagName('title').item(0).text;
            var description = item.getElementsByTagName('description').item(0).text;
            //var pubDate = item.getElementsByTagName('pubDate').item(0).text;
            var link = item.getElementsByTagName('link').item(0).text;
            var creator = item.getElementsByTagName('dc:creator').item(0).text;
            
            // display content and create objects
            var row = Ti.UI.createTableViewRow({
                height: 80,
                layout: 'vertical',
                selectedBackgroundColor: Ti.App.Properties.getString('theme', '#980012'),
            });
            row.filter = title; //data for search
            var labelText = title;
            var label = Ti.UI.createLabel({
                text: labelText,
                highlightedColor: '#fff',
                left: 5,
                top: 5,
                bottom: 5,
                right: 5,
            });
            //add objects
            row.add(label);
            row.desc = description;
            row.link = link;
            row.creator=creator,
            data[x++] = row;
        }
    }
}}
