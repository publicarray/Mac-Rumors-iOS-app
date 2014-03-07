var volumeWin = new Window('Sound');
var volumeLabel = Ti.UI.createLabel({
	text: 'Volume:',
	width: '100%',
	height: 'auto',
	top: 50,
	minimumFontSize: 16,
	font: {
		fontSize: 16,
		fontFamily: 'HelveticaNeue-Light'
	},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var volumeSlider = Titanium.UI.createSlider({
	top: 120,
	min: 0,
	max: 1,
	width: '90%',
	value: Ti.App.Properties.getDouble('volume', 1),
});

var volumeLabelValue = Ti.UI.createLabel({
	text: volumeSlider.value,
	width: '100%',
	height: 'auto',
	top: 160,
	minimumFontSize: 16,
	font: {
		fontSize: 16,
		fontFamily: 'HelveticaNeue-Light'
	},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

volumeSlider.addEventListener('change', function(e) {
	var volume = e.value;
	// converts the double to a decimal with a 1 decimal point number
	volumeLabelValue.text = String.format("%3.1f", volume);
	Ti.App.Properties.setDouble('volume', volume);
	if (sound) {
		deleteSound.setVolume(volume);
		swosh.setVolume(volume);
	}
});

var muteLabel = Ti.UI.createLabel({
	text: 'Play Sound:',
	left: '20%',
	height: 'auto',
	top: 250,
	minimumFontSize: 16,
	font: {
		fontSize: 16,
		fontFamily: 'HelveticaNeue-Light'
	},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var muteSwitch = Ti.UI.createSwitch({
	value: Ti.App.Properties.getBool('mute', true),
	left: '55%',
	width: '50%',
	top: 250,
});

muteSwitch.addEventListener('change', function(e) {
	var sound = muteSwitch.value;
	Ti.App.Properties.setBool('mute', sound);
});

volumeWin.add(volumeLabel);
volumeWin.add(volumeSlider);
volumeWin.add(volumeLabelValue);
volumeWin.add(muteLabel);
volumeWin.add(muteSwitch);
