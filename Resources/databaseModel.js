var currentFavourite;
var db = Ti.Database.open('favourites');
deleteFavourite('favourite');
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
    var x = 0;
    var data = [];
    var row = Ti.UI.createTableViewRow({
        
    });
    
    var result = db.execute('SELECT rowid, * FROM favourite');
    while (result.isValidRow())
    {
        row.rowid = result.fieldByName('rowid');
        row.title = result.fieldByName('title');
        row.desc = result.fieldByName('description');
        row.link = result.fieldByName('link');
        row.pubDate = result.fieldByName('pubDate');
        row.creator = result.fieldByName('creator');
        data[x++] = row;
        result.next();
    }
    return data;
}

function insertFavourite(favourite)
{
    db.execute("INSERT INTO favourite (title, description, link, pubDate, creator) VALUES (?, ?, ?, ?, ?)", favourite.title, favourite.description, favourite.link, favourite.pubDate, favourite.creator);
}

function deleteFavourite(table)  // incomplete
{
    
      db.execute('DELETE FROM '+table); // would empty the table!
    //db.execute("UPDATE favourite SET title = ?, description = ?, link = ?, pubDate = ?, creator = ? WHERE rowid = ?", favourite.title, favourite.description, favourite.link, favourite.pubDate, favourite.creator, favourite.rowid);
}
