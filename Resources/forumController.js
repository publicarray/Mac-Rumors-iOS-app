// if web view has an error display the html error message stored in the appModel
webViewForum.addEventListener ('error', function(e){
    webViewForum.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnForum.addEventListener('click', function (e) {
    webViewForum.setHtml(null);
    webViewForum.setUrl(urlForum);
    webViewForum.reload();
});