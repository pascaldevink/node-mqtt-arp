mqtt-arp
========

This node.js server listens listens for changes on the ARP table and publishes as MQTT messages.

Example
=======

Clone the repository
```bash
$ git clone https://github.com/pascaldevink/mqtt-arp.git
$ cd mqtt-arp
$ npm install
```

Start up the server by editing the config.js first to suit your needs
```bash
$ $EDITOR config.js
$ node server.js
```

Or by using environment variables
```bash
$ MQTT_HOSTNAME="192.168.0.1" node server.js
```

Subscribe to the MQTT topic to see if it works (I use mosquitto server for this, but whatever MQTT server should work)
```bash
$ mosquitto_sub -t "#" -v | grep mqtt-arp
```

