// if web view has an error display the html error message stored in the appModel
webViewRoundup.addEventListener('error', function(e) {
	webViewRoundup.setHtml(htmlErrorMessage);
	roundupActivityIndicator.hide();
});

webViewRoundup.addEventListener('load', function() {
	roundupActivityIndicator.hide();
	//Hide the Loading indicator after the webview loaded
});

//refresh button
refreshBtnRoundup.addEventListener('click', function(e) {
	roundupActivityIndicator.show();
	webViewRoundup.setHtml(null);
	webViewRoundup.setUrl(urlRoundup);
	webViewRoundup.reload();
}); 