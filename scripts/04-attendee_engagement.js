/*global require */


// Super Amazing Test Script
// Rockets will fire! troops will deploy! Things might happen!
// (Or not?)

//////////////////////////////
// STEP 1 - Create Database //
//////////////////////////////
var InfluxDB = require ('influx');
var influxdb = new InfluxDB({
  'host' :'localhost',
  'port' :'8086',
  'username' :'root',
  'password' :'root',
  'database' :'attendee_engagement'
});

influxdb.createDatabase('attendee_engagement');

////////////////////////////////
// Step 2 - Create CPU Points //
////////////////////////////////

var backMilliseconds = 1 * 86000 * 1000;
var startTime = new Date() - backMilliseconds;
var timeInterval = 60 * 1000;
var i;

var attendeeEngagement = [];
for (i = 0; i < backMilliseconds; i += timeInterval) {
  attendeeEngagement.push({
    'name':    'attendee_engagement',
    'time': startTime + i,
    'value' : Math.random() * 100,
    'attendeeName': 'attendee' + Math.floor(Math.random() * 100)
  });
}

for (i = 0; i < backMilliseconds; i += timeInterval) {
  attendeeEngagement.push({
    'name':    'attendee_engagement',
    'time': startTime + i,
    'value' : Math.random() * 5 + 95,
    'attendeeName': 'richard'
  });
}

/////////////////////////////
// Step 3 - Write the Data //
/////////////////////////////

influxdb.writePoints('attendee_engagement', attendeeEngagement);
