favouriteTableView.addEventListener('click', function (e) {
    swosh.play();
    
    //sound
    var share = Ti.Media.createSound({
        url: "sound/swosh2.wav",
        volume: Ti.App.Properties.getDouble('volume', 1),
    });
    
    // variables
    var title = e.row.title;
    var desc = e.rowData.desc;
    var link = e.rowData.link;
    var pubDate = e.rowData.pubDate;
    var creator = e.rowData.creator;
    var rowid = e.rowData.rowid;
        
    //create window
    var detailWindow = new Window(title);
    detailWindow.setTabBarHidden(true);
    
    // devices with lower ios than 7 display custom text style
    if (version < 7 && (device === 'iPhone OS' || device === 'iPad OS' || device === 'iPod Touch OS')){
        var titleLabel = Titanium.UI.createLabel({
            color:'#000',
            height:42,
            width:'70%',
            text: title,
            textAlign:'center',
            font:{fontFamily:'Helvetica Neue',fontSize:14,fontWeight:'normal'},
            shadowColor:'#fff',shadowOffset:{x:0,y:1}
        });
        
        // associate label to title
        detailWindow.setTitleControl(titleLabel);
    };

    //display description of the rss feed via a web view
    var webView = Ti.UI.createWebView({
        html:'<head><link rel="stylesheet" type="text/css" href="style.css" media="all"></head><body>'+ desc +'</body>',
        scalePageToFit:true,
        top:0,left:0,bottom:0,right:0,
        width: '100%', height: '100%',
    });
    
    //share button
    var shareBtn = Titanium.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.ACTION,
    });
    
    // back button for landscape mode
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
        
    // add the elements to window
    detailWindow.add(webView);
    detailWindow.add(backBtn);
    detailWindow.setRightNavButton(shareBtn);
    
    // open the tab with a default slide animation
    tabGroup.activeTab.open(detailWindow, {
        animation: true
    });
        // function of back button - go back
        backBtn.addEventListener('click', function (e) {
            closeDetailWindow ();
        });
        
        function closeDetailWindow () {
          // garbige/ memory collection
            detailWindow.remove(webView);
            webView = null;
            //detailWindow.remove(shareBtn); // apparently it is already removed - conditions: potrait mode and title bar is hidden.
            shareBtn = null;
            detailWindow.remove(backBtn);
            //backBtn = null; // not shure but it caurses some errors
            detailWindow.close();
        }
        
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
      
     //share button - from: https://github.com/viezel/TiSocial.Framework
    shareBtn.addEventListener('click', function(e){
            // use the social plug-in: https://github.com/viezel/TiSocial.Framework
            var Social = require('dk.napp.social');
            
            if(Social.isActivityViewSupported()){ //min iOS6 required
                Social.activityView({
                    text: title +"\n \n"+link+"\n \n Article By: "+creator, // the text that is passed on to social services and email
                    //image:"pin.png",
                    removeIcons:"print,contact,camera", // remove searing buttons that don't make sense
                    //url:link,
                },[
                    {  // custom function Safari
                        title:"Open in Safari",
                        type:"open.safari",
                        image:"/images/safari.png"
                    },
                    {  // custom function Save as Favouits
                        title:"Save as Favourite",
                        type:"open.favourite",
                        image:"/images/fav.png"
                    }
                ]);
            }
        // Twitter
        if(Social.isRequestTwitterSupported()){ //min iOS6 required
            var accounts = []; 
            Social.addEventListener("accountList", function(e){
                accounts = e.accounts; //accounts
            });
            Social.twitterAccountList();
        }
        // sharing    
        Social.addEventListener("complete", function(e){
            if (e.platform == "activityView" || e.platform == "activityPopover") {
                switch (e.activity) {
                    case Social.ACTIVITY_TWITTER:
                         share.play();
                        break;
                    // custom cases - add custom share functions
                    case Social.ACTIVITY_CUSTOM:
                        // send to Safari
                        if(e.activityName == "open.safari"){
                            share.play();
                            Titanium.Platform.openURL(link);
                        };
                        // share as favourite
                        if(e.activityName == "open.favourite"){
                            share.play();
                            var currentFav = {
                            title: title,
                            description: desc,
                            link: link,
                            pubDate: pubDate,
                            creator: creator
                            };
                            insertFavourite(currentFav);
                            favouriteTableView.setData(getFavourites());
                            e.activity = null; // stop activity
                        };
                        break;
                }
            }
        });  
    });
});

favouriteTableView.addEventListener('delete', function (e) {
    deleteFavourite(e.rowData.rowid);
    // play a sound and stop it if it is already playing
    deleteSound.stop();
    deleteSound.play();
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

// sorting the database on button click
sortbar.addEventListener('click', function(e){
    if(e.index===0)
    {
        sortDB('rowid');
    }
    else if(e.index===1)
    {
        sortDB('pubDate');
    }
    else if(e.index===2)
    {
        sortDB('title');
    }
});

// search bar events
favSearch.addEventListener('return', function (e) {
    // replace the table data with the search query in the database
    favouriteTableView.setData(getFavourites(search(e.value)));
    favSearch.blur();
});

favSearch.addEventListener('cancel', function (e) {
    favouriteTableView.setData(getFavourites());
    favSearch.blur();
});
favSearch.addEventListener('focus', function (e) {
    favSearch.setShowCancel(true, { animated: true });
});
favSearch.addEventListener('blur', function (e) {
    favSearch.setShowCancel(false);
});
