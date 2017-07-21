overwolf.games.events.onNewEvents.addListener(function(info) {
    console.log("EVENT FIRED: " + JSON.stringify(info));
});

var bridge = jsHue().bridge('10.0.0.14');

var user = bridge.user('JB6dmV5MUwBrP4jQqddZLhKOxRigDcfDtN6ADB0p');

function light() {
    user.setLightState(1, { bri: 124 });
    user.setLightState(2, { bri: 124 });
}

function dark() {
    user.setLightState(1, { bri: 12 });
    user.setLightState(2, { bri: 12 });
}

function flash() {
    dark();
    setTimeout(light, 600);
    setTimeout(dark, 1200);
    setTimeout(light, 1800);
}
