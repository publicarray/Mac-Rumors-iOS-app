// if web view has an error display the html error message stored in the appModel.js
webViewBuy.addEventListener ('error', function(e){
    webViewBuy.setHtml(htmlErrorMessage);
    buyActivityIndicator.hide();
});
webViewBuy.addEventListener('load', function() {
    buyActivityIndicator.hide();  //Hide the Loading indicator after the webview loaded
});

//refresh button
refreshBtnBuy.addEventListener('click', function (e) {
    buyActivityIndicator.show();
    webViewBuy.setHtml(null);
    webViewBuy.setUrl(urlBuy);
    webViewBuy.reload();
    webViewBuy.setScalesPageToFit(true);
});