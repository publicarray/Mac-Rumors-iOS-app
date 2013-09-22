webViewBuy.addEventListener ('error', function(e){
    webViewBuy.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnBuy.addEventListener('click', function (e) {
    webViewBuy.setHtml(null);
    webViewBuy.setUrl = (urlBuy);
    webViewBuy.reload();
    webViewBuy.setScalesPageToFit(true);
});