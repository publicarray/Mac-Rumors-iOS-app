webViewBuy.addEventListener ('error', function(e){
    //alert(e.message);
    webViewBuy.setHtml(htmlErrorMessage);
});

//refresh button
refreshBtnBuy.addEventListener('click', function (e) {
    webViewBuy.setHtml(null);
    webViewBuy.setUrl = (urlBuy);
    webViewBuy.reload();
});