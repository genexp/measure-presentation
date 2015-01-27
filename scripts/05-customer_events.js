/*global require */


// Even MORE Super Amazing Test Script
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
  'database' :'customer_events'
});

influxdb.createDatabase('customer_events');

/////////////////////////////////////
// Step 2 - Create Customer Events //
/////////////////////////////////////

var backMilliseconds = 1 * 86000 * 1000;
var startTime = new Date() - backMilliseconds;
var timeInterval = 60 * 1000;
var eventTypes = ['click', 'view', 'post', 'comment'];
var i, j;

var customerEvents = [];
for (i = 0; i < backMilliseconds; i += timeInterval) {
  for (j = 0; j < Math.random() * 10; j += 1) {
    customerEvents.push({
      'name':'customer_events',
      'time':startTime + i,
      'customerId': Math.floor(Math.random() * 1000),
      'type': eventTypes[Math.floor(Math.random() * 1000 % 4)]
    });
  }
}
/////////////////////////////
// Step 3 - Write The Data //
/////////////////////////////

influxdb.writePoints('customer_events', customerEvents);
