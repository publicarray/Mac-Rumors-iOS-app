//refresh button
shareBtn.addEventListener('click', function (e) {
         if(Social.isActivityViewSupported()){ //min iOS6 required
            Social.activityView({
                text: title +"\n \n"+link+"\n \n Article By: "+creator,
                //image:"pin.png",
                removeIcons:"print,contact,camera",
                //url:"http://www.google.com",
            },[
                {
                    title:"Open in Safari",
                    type:"open.safari",
                    image:"/images/safari.png"
                }
              ]
           );
        }
});

    if(Social.isRequestTwitterSupported()){ //min iOS6 required
        var accounts = []; 
        Social.addEventListener("accountList", function(e){
            Ti.API.info("Accounts:");
            accounts = e.accounts; //accounts
            Ti.API.info(accounts);
        });
        
        Social.twitterAccountList();
    }
    Social.addEventListener("twitterRequest", function(e){ //default callback
        Ti.API.info("twitterRequest: "+e.success);  
        Ti.API.info(e.response); //json
        Ti.API.info(e.rawResponse); //raw data - this is a string
    });
    
    
    
    Social.addEventListener("facebookRequest", function(e){ //default callback
        Ti.API.info("facebookRequest: "+e.success); 
        Ti.API.info(e); 
    });
    
    Social.addEventListener("facebookProfile", function(e){
        Ti.API.info("facebook profile: "+e.success);    
        Ti.API.info(e.response); //json
    });
    
    Social.addEventListener("complete", function(e){
        Ti.API.info("complete: " + e.success);
        console.log(e); //debug

        if (e.platform == "activityView" || e.platform == "activityPopover") {
            switch (e.activity) {
                case Social.ACTIVITY_TWITTER:
                    Ti.API.info("User is shared on Twitter");
                    break;

                case Social.ACTIVITY_CUSTOM:
                    Ti.API.info("This is a customActivity: " + e.activityName);
                    
                    //MAKE YOUR OWN CUSTOM ACTIVITY !
                    if(e.activityName == "open.safari"){
                        Titanium.Platform.openURL(link);
                    };
                    break;
            }
        }
    });
    
    Social.addEventListener("error", function(e){
        Ti.API.info("error:");  
        Ti.API.info(e); 
    });
    
    Social.addEventListener("cancelled", function(e){
        Ti.API.info("cancelled:");
        Ti.API.info(e);     
    });
