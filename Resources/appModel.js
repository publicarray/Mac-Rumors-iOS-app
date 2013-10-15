// The html used to display an error message to the user when the internet isn't available or some other error occurred.
var htmlErrorMessage = '<html><body style="font-family:sans-serif; text-align: center; font-size: 1em; color: #bbb;">Sorry,</br></br>The webpage is currently unavalable.</br></br>Please check your Internet connection</br></br>or try to refresh the page.</body></html>';

// get device OS and version
var version = Ti.Platform.version;
var device = Ti.Platform.name;

// URL's for web views
var urlBuy = 'http://buyersguide.macrumors.com';
var urlForum = 'http://forums.macrumors.com/';
var urlRoundup = 'http://www.macrumors.com/roundup/';

// the URL of the xml file (RSS feed)
var feedUrlIos = 'http://feeds.macrumors.com/MacRumors-iPhone.xml';
var feedUrlMac = 'http://feeds.macrumors.com/MacRumors-Mac.xml';
var feedUrlMain = 'http://feeds.macrumors.com/MacRumors-Front.xml';

// file paths for saving and accessing the xml file from the web. (useful for off-line access)
var fileIos = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'iPhone.txt');
var fileMac = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Mac.txt');
var fileMain = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'Front.txt');

// sound files
var bassSound = Ti.Media.createSound({
    url: "sound/bass.wav",
    volume: Ti.App.Properties.getDouble('volume', 1),
    });
var deleteSound = Ti.Media.createSound({
    url: "sound/zap.wav",
    volume: Ti.App.Properties.getDouble('volume', 1),
    });
var startSound = Ti.Media.createSound({
    url: "sound/windows95.wav",
    volume: Ti.App.Properties.getDouble('volume', 1),
    });

// Favourites Database
var db = Ti.Database.open('favourites');
createDatabase();

function createDatabase()
{
    db.execute('CREATE TABLE IF NOT EXISTS favourite(title TEXT, description TEXT, link TEXT, pubDate DATE, creator TEXT)');
    
    // If table is empty insert initial data
    var result = db.execute('SELECT * FROM favourite');
    
    if (result.rowCount == 0)
    {
        // Insert initial data
        db.execute('INSERT INTO favourite (title, description, link, pubDate, creator) values ("Create a list of your Favorites", "<h2>I am your first Favourite!</h2>", "www.google.com", "1/1/2000", "Sebastian Schmidt")');
    }
}

// Returns students in an array suitable for displaying in a table view
// Each object contains all columns plus a title field which can be used to display in a table view
function getFavourites()
{
    var favourite = [];
    
    var result = db.execute('SELECT rowid, * FROM favourite');

    var selectedBackgroundColor = Ti.App.Properties.getString('theme', '#980012');
    
    while (result.isValidRow())
    {
        var title = result.fieldByName('title');
        var desc = result.fieldByName('description');
        var link = result.fieldByName('link');
        var rowid = result.fieldByName('rowid');
        var pubDate = result.fieldByName('pubDate');
        var creator = result.fieldByName('creator');
        
        // Create a new favourite object and add to array
        favourite.push({
            title: title,
            desc: desc,
            link: link,
            rowid: rowid,
            pubDate: pubDate,
            creator: creator,
            selectedBackgroundColor: selectedBackgroundColor,
        });
        
        result.next();
    }
    
    return favourite;
}

function insertFavourite(favourite)
{
    db.execute("INSERT INTO favourite (title, description, link, pubDate, creator) VALUES (?, ?, ?, ?, ?)", favourite.title, favourite.description, favourite.link, favourite.pubDate, favourite.creator);
}

function deleteFavourite(rowid)
{
    
      db.execute('DELETE FROM favourite WHERE rowid=?', rowid);
}

/*
function sortdate()
{
    db.excecute('SELECT DISTINCT description, title, date FROM favourite');
}

*/
