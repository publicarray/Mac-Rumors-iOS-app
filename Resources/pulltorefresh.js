var win = Ti.UI.currentWindow;
function getFormattedDate(){
    var date = new Date();
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
}
 
var tableHeader = Ti.UI.createView({
    backgroundColor:'#e2e7ed',
    width:320, height:60
});
 
var border = Ti.UI.createView({
    backgroundColor:'#576c89',
    bottom:0,
    height:2
});
tableHeader.add(border);
 
var imageArrow = Ti.UI.createImageView({
    image:'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/whiteArrow.png',
    left:20, bottom:10,
    width:23, height:60
});
tableHeader.add(imageArrow);
 
var labelStatus = Ti.UI.createLabel({
    color:'#576c89',
    font:{fontSize:13, fontWeight:'bold'},
    text:'Pull down to refresh...',
    textAlign:'center',
    left:55, bottom:30,
    width:200
});
tableHeader.add(labelStatus);
 
var labelLastUpdated = Ti.UI.createLabel({
    color:'#576c89',
    font:{fontSize:12},
    text:'Last Updated: ' + getFormattedDate(),
    textAlign:'center',
    left:55, bottom:15,
    width:200
});
tableHeader.add(labelLastUpdated);
 
var actInd = Ti.UI.createActivityIndicator({
    left:20, bottom:13,
    width:30, height:30
});
tableHeader.add(actInd);
 
var tableView = Ti.UI.createTableView({
    headerPullView:tableHeader
});
win.add(tableView);
 
var tableRowTotal = 0;
function loadTableData(table, count, callback){
    for (var i=tableRowTotal, ilen=tableRowTotal+count; i<ilen; i++){
        var rowID = i + 1;
        table.appendRow({title:'Row ' + rowID});
        tableRowTotal++;
    }
    if(callback && typeof callback === "function"){
        callback(table);
    }
}
 
loadTableData(tableView, 5);
 
var pulling = false;
var reloading = false;
var offset = 0;
 
tableView.addEventListener('scroll',function(e){
    offset = e.contentOffset.y;
    if (pulling && !reloading && offset > -80 && offset < 0){
        pulling = false;
        var unrotate = Ti.UI.create2DMatrix();
        imageArrow.animate({transform:unrotate, duration:180});
        labelStatus.text = 'Pull down to refresh...';
    } else if (!pulling && !reloading && offset < -80){
        pulling = true;
        var rotate = Ti.UI.create2DMatrix().rotate(180);
        imageArrow.animate({transform:rotate, duration:180});
        labelStatus.text = 'Release to refresh...';
    }
});
 
function resetPullHeader(table){
    reloading = false;
    labelLastUpdated.text = 'Last Updated: ' + getFormattedDate();
    actInd.hide();
    imageArrow.transform=Ti.UI.create2DMatrix();
    imageArrow.show();
    labelStatus.text = 'Pull down to refresh...';
    table.setContentInsets({top:0}, {animated:true});
}
 
tableView.addEventListener('dragEnd',function(e){
    if (pulling && !reloading && offset < -80){
        pulling = false;
        reloading = true;
        labelStatus.text = 'Updating...';
        imageArrow.hide();
        actInd.show();
        e.source.setContentInsets({top:80}, {animated:true});
        setTimeout(function(){
            loadTableData(e.source, 5, resetPullHeader(e.source));
        }, 2000);
    }
});
win.open();