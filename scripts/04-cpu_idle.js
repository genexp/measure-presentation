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
  'database' :'cpu_idle'
});

influxdb.createDatabase('cpu_idle');

////////////////////////////////
// Step 2 - Create CPU Points //
////////////////////////////////

var backMilliseconds = 1 * 86000 * 1000;
var startTime = new Date() - backMilliseconds;
var timeInterval = 60 * 1000;
var i;

var cpuPoints = [];
for (i = 0; i < backMilliseconds; i += timeInterval) {
  cpuPoints.push({
    'name':    'cpu_idle',
    'time': startTime + i,
    'value' : Math.random() * 100,
    'hostName': 'server' + Math.floor(Math.random() * 100)
  });
}

/////////////////////////////
// Step 3 - Write the Data //
/////////////////////////////

influxdb.writePoints('cpu_idle', cpuPoints);
