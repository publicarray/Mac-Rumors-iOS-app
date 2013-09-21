webViewR.addEventListener ('error', function(e){
    //alert(e.message);
    webViewR.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnR.addEventListener('click', function (e) {
    webViewR.setHtml(null);
    webViewR.setUrl = (urlR);
    webViewR.reload();
});