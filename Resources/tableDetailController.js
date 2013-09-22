//refresh button
refreshBtn.addEventListener('click', function (e) {
    webView.setHtml(description);
    webView.reload();
});