/* 
 * Information I used to get the rss feed and display it:
 * https://www.youtube.com/watch?v=fZzn6Wp_dGQ
 * https://www.youtube.com/watch?v=UNAeuPcdF5k
 * http://developer.appcelerator.com/question/124014/saving-xml-file-offline-for-read-later
 * 
 */
function getData(url, f, win){
 /*
 * ok, this function displays an activity indicator to show that the app is working.
 * than the app checks for an internet connection -- continue below
 */

//initialise the array for the table
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
    style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
});
win.add(activityIndicator);
activityIndicator.show();


 /*
 * if an internet connection is available, than create a network request, get the xml file and save it as a txt file
 * than grab the data using loops and store them in the data array and pass it on to the WindowClass
 */
if(Titanium.Network.online) {

    //open network connection
    var xhr = Ti.Network.createHTTPClient({
        cache: Ti.App.Properties.getBool('cache', true),
        timeout:5000,
    });
    xhr.open('GET', url);
    // if the request was successful go and get the data and show the table
    xhr.onload = function () {
        //Writing data to a file
        f.write(this.responseData);
        getXMLdata(f);
        showTable();
        activityIndicator.hide();
    };
    
    xhr.onerror = function() {
        Ti.API.info('XHR Error: ' + xhr.status + ' - ' + xhr.statusText);
     //check response status and act accordingly.
     if(xhr.status != 200) {
        // if an error occurred we can still display the stored file, but we should still inform the user that the data isn't current
        if(f.exists()) {
        getXMLdata(f);
        showTable();
        activityIndicator.hide();
        alert('Off-line Mode');
       } 
       // if the file doesn't exist and an error occurred just display a message letting the user know about it
        else if(!f.exists()) {
        activityIndicator.hide();
        alert('The service is currently unavailable. Please Try Again Later.');
        }
    }};

    // everything above doesn't actually do anything yet, we have to send the request first.
    // the try catch block catches any errors -- useful for debugging and it prevents the app from crashing.
    try {
        xhr.send();
    } catch(e) {
        Ti.API.info('error with xhr.send(): '+e);
        xhr.abort();
    }
}
/*
 * if a file exists but there is no internet connection than use the file to display the table
*/
else if(f.exists()) {
        getXMLdata(f);
        showTable();
        activityIndicator.hide();
    } 
/*
 * if the file does not exists and there is no internet connection than display a message to the user
*/
else if(!f.exists()) {
        activityIndicator.hide();
        alert('Your device is not connected to the internet.');
}


function getXMLdata(file) {
    if(file.exists()) {
        //read file
        var contents = f.read().text;
        var doc = Ti.XML.parseString(contents); 
        var items = doc.getElementsByTagName('item');
        var x = 0;
        for(var i = 0; i < items.length; i++) {
            var item = items.item(i);
            var title = item.getElementsByTagName('title').item(0).text;
            var description = item.getElementsByTagName('description').item(0).text;
            var pubDate = item.getElementsByTagName('pubDate').item(0).text;
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
                font:{fontFamily: 'HelveticaNeue-Light',fontSize:16, fontWeight:'normal'},
                highlightedColor: '#fff',
                left: 20,
                top: 5,
                bottom: 5,
                right: 20,
            });
            //add objects
            row.add(label);
            row.desc = description;
            row.link = link;
            row.pubDate = pubDate;
            row.creator = creator;
            data[x++] = row;
        }
    }
};

function showTable() {
    /*
     * this method/function creates the table from the data array declared at top of getData()
     */
    var searchBar = Titanium.UI.createSearchBar({
    barColor:'#bbb',
    tintColor :Ti.App.Properties.getString('theme', '#980012'),
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
    // add event handler
    tableView.addEventListener('click', function (e) {
        // create a back button
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
        var detailWin = new Window (e.row.children[0].text);
        detailWin.setTabBarHidden(true);
        detailWin.url = 'tableDetailView.js';
        detailWin.desc = e.rowData.desc;
        detailWin.link = e.rowData.link;
        detailWin.pubDate = e.rowData.pubDate;
        detailWin.creator = e.rowData.creator;
        detailWin.add(backBtn);
        
        // open the tab with a default slide animation
        tabGroup.activeTab.open(detailWin, {
            animation: true
        });
    });
/*
* my attempt to save the search value, redisplay it and update the table
* http://developer.appcelerator.com/apidoc/mobile/1.8.2/Titanium.UI.SearchBar-object
*/
    //save search when user types
    searchBar.addEventListener('change', function (e) {
        Ti.App.Properties.setString('search', searchBar.value);
    });
    
// attempt to reload the entered search value & update the table
// - this is tested and works for iOS 6.1, but it does not seem to work in the iOS 7 simulator
    win.addEventListener('focus', function(e) {
        if(searchBar.value){
        searchBar.value=Ti.App.Properties.getString('search','');
        searchBar.blur();
        tableView.searchHidden=false; 
        }
    });

    //delete saved value on cancel
    searchBar.addEventListener('cancel', function (e) {
        Ti.App.Properties.setString('search', null);
    });
};

}
