webViewForum.addEventListener ('error', function(e){
    //alert(e.message);
    webViewForum.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnForum.addEventListener('click', function (e) {
    webViewForum.setHtml(null);
    webViewForum.setUrl = (urlForum);
    webViewForum.reload();
});