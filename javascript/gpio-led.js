#!/usr/local/bin/node
var LED = 4;

var WPI = require('wiring-pi');

// Init wiring-pi
if (WPI.wiringPiSetup() == -1) {
    console.error('wiring-pi setup failure');
    return;
}

WPI.pinMode(LED, WPI.OUTPUT);

for (;;) {
    WPI.digitalWrite(LED, WPI.HIGH);
    console.log('on');
    WPI.delay(1000)
    WPI.digitalWrite(LED, WPI.LOW);
    console.log('off');
    WPI.delay(1000)
}
