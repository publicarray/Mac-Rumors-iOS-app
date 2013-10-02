// if web view has an error display the html error message stored in the appModel
webViewForum.addEventListener ('error', function(e){
    webViewForum.setHtml(htmlErrorMessage);
    forumActivityIndicator.hide();
});

webViewForum.addEventListener('load', function() {
    forumActivityIndicator.hide();  //Hide the Loading indicator after the webview loaded
});

//refresh button
refreshBtnForum.addEventListener('click', function (e) {
    forumActivityIndicator.show();
    webViewForum.setHtml(null);
    webViewForum.setUrl(urlForum);
    webViewForum.reload();
});
