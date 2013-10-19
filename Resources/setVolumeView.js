var volumeWin = Ti.UI.currentWindow;

var volumeLabel = Ti.UI.createLabel({
    text: 'FX Volume:',
    width: '100%',
    height: 'auto',
    top: 50,
    minimumFontSize:16,
    font:{fontSize:16,fontFamily:'HelveticaNeue-Light'},
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    
var volumeSlider = Titanium.UI.createSlider({
    top: 150,
    min: 0,
    max: 1,
    width: '90%',
    value: Ti.App.Properties.getDouble('volume', 1),
    });
    
var volumeLabelValue = Ti.UI.createLabel({
    text: volumeSlider.value,
    width: '100%',
    height: 'auto',
    top: 200,
    minimumFontSize:16,
    font:{fontSize:16,fontFamily:'HelveticaNeue-Light'},
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });

volumeSlider.addEventListener('change', function(e) {
    var volume = e.value;
    // converts the double to a decimal with a 1 decimal point number 
    volumeLabelValue.text = String.format("%3.1f", volume);
    Ti.App.Properties.setDouble('volume', volume);
});

volumeWin.add(volumeLabel);
volumeWin.add(volumeSlider);
volumeWin.add(volumeLabelValue);