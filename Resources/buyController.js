webView.addEventListener ('error', function(e){
    //alert(e.message);
    webView.setHtml(Ti.App.Properties.getString('htmlErrorMessage'),
        {baseURL:url});
});

//refresh button
refreshBtn.addEventListener('click', function (e) {
    webView.setHtml(null);
    webView.setUrl = (url);
    webView.reload();
});