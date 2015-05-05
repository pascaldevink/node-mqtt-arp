var ArpMonitor  = require('arp-monitor'),
    config      = require('./config'),
    debug       = require('debug')('mqtt-arp'),
    mqtt        = require('mqtt');

var mqttUri  = 'mqtt://' + config.mqtt.hostname + ':' + config.mqtt.port;
var client  = mqtt.connect(mqttUri);

client.on("connect", function() {
    debug('Connected to ' + mqttUri);

    var monitor = new ArpMonitor();

    monitor.on("in", function(node) {
        debug("New node addition message received! " + JSON.stringify(node));
        client.publish("mqtt-arp:in", JSON.stringify(node));
    });

    monitor.on("out", function(node) {
        debug("Old node removal message received! " + JSON.stringify(node));
        client.publish("mqtt-arp:out", JSON.stringify(node));
    });
});
