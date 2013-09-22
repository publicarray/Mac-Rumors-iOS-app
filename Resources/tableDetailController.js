// style web layout after page has loaded  -- easier solution found: I am now doing this via Html inside the webview property.
//webView.addEventListener('load', function(e) {
    //load cutom css
   // ----> webView.evalJS('var head = document.getElementsByTagName("head")[0]; var s=document.createElement("link"); s.setAttribute("rel", "stylesheet"); s.setAttribute("type", "text/css"); s.setAttribute("href", "style.css"); head.appendChild(s);');
//Ti.API.info('html = ' + webView.html);
//});

//refresh button
refreshBtn.addEventListener('click', function (e) {
    webView.setHtml(description);
    webView.reload();
});