// if web view has an error display the html error message stored in the appModel
webViewRoundup.addEventListener ('error', function(e){
    webViewRoundup.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnRoundup.addEventListener('click', function (e) {
    webViewRoundup.setHtml(null);
    webViewRoundup.setUrl = (urlRoundup);
    webViewRoundup.reload();
});