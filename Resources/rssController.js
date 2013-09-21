// http://developer.appcelerator.com/question/124014/saving-xml-file-offline-for-read-later
function getData(url, f, win){

if(Ti.Platform.name === 'iPhone OS') {
    var activityStyle = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
    var activityStyle = Ti.UI.ActivityIndicatorStyle.DARK;
}

//innitialise the array
var data = [];
//if internet connection is on - continue
if(Titanium.Network.online) {
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
    xhr.onerror = function (e) {
    //check response status and act aaccordingly.
    if(xhr.status != 200) {
        activityIndicator.hide();
        xhr.abort();
        alert("The service is currently unavailable. Please Try Again Later.");
        return;
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
    tintColor :'#980012',
    height:43,
    top:0,
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
        /*
        var detailWin = Ti.UI.createWindow({
            //title of the label that the user selected
            title: e.row.children[0].text,
            barColor: '#650000',
            url: 'tableDetail.js',
       });
       */
           //alternative method:
           // var Window = require('windowClass');
        var detailWin = new Window (e.row.children[0].text, 'tableDetail.js');
        detailWin.desc = e.row.desc;
        tabGroup.activeTab.open(detailWin, {
            animation: true
        });
        //Hide the activity indicator when the funtion has completed
        activityIndicator.hide();
    });
    searchBar.addEventListener('change', function (e) {
        Ti.App.Properties.setString('search', searchBar.value);
    });
    win.addEventListener('focus', function(e) {
        if(searchBar.value){
        searchBar.value=Ti.App.Properties.getString('search','');
        tableView.searchHidden=false; 
        }
    });
};

function getXMLdata(file) {
    if(file.exists()) {
        //read file
        var contents = f.read().text;
// Ti.API.info('contents = ' + contents);
        var doc = Ti.XML.parseString(contents); 
        //var doc = this.responseXML.documentElement;
        var items = doc.getElementsByTagName('item');
        var x = 0;
        for(var i = 0; i < items.length; i++) {
            var item = items.item(i);
            var title = item.getElementsByTagName('title').item(0).text;
            var description = item.getElementsByTagName('description').item(0).text;
            var pubDate = item.getElementsByTagName('pubDate').item(0).text;
            var link = item.getElementsByTagName('link').item(0).text;
            //display content and create objects
            var row = Ti.UI.createTableViewRow({
                height: 80,
                layout: 'vertical',
                selectedBackgroundColor: '#650000',
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
            data[x++] = row;
        }
    }
}}
