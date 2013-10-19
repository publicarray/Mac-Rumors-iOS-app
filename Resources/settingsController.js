// settings CONTROLLER
settingsList.addEventListener('click', function (e) {
    swosh.play();
    if (e.index===0){
    var detailWindow = new Window ('Theme');
    detailWindow.setUrl('setThemeView.js');
    }
    if (e.index===1){
    var detailWindow = new Window ('Volume');
    detailWindow.setUrl('setVolumeView.js');
    }
    if (e.index===2){
    var detailWindow = new Window ('About');
    detailWindow.setUrl('aboutView.js');
    }

        //set background gradient
        detailWindow.backgroundGradient = {colors: ["#C7D6E9", "#fff"]};
        // open the tab with a default slide animation
        tabGroup.activeTab.open(detailWindow, {
            animation: true,
            });

});
