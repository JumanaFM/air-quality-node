module.exports = function(RED) {
    "use strict";
    // Create spawn to run the python script.
    var spawn = require('child_process').spawn;

    function AirQualityNode(config) {
        // Defualt RED configs.
        RED.nodes.createNode(this,config);
        var node = this;

        // Regester input envent.
        node.on('input', function(msg) {

            // // call the python script and pass the path for the csv file from the msg.payload.
            //var child = spawn('python',["/Users/jumana/code/air-quality/python.py", msg.payload]);
            //
            // // listen to the output form the python script.
            // child.stdout.on('data', function (data){
            //     // Add the return from the python to the msg payload, then send it back to RED.
            //     msg.payload = data.toString();
            //     node.send(msg);
            // });
            //
            // // listen to the output form the python script.
            // child.stderr.on('data', function (data){
            //     // Add the return from the python to the msg payload, then send it back to RED.
            //     msg.payload = data;
            //     node.send(msg);
            // });

            msg.payload = [
  {
    "ID": 1,
    "CO": "NaN",
    "lng": 46.52509694,
    "lat": 24.991677
  },
  {
    "ID": 2,
    "CO": "NaN",
    "lng": 46.86895561,
    "lat": 24.751133
  },
  {
    "ID": 3,
    "CO": "NaN",
    "lng": 46.8973684,
    "lat": 24.383645
  },
  {
    "ID": 4,
    "CO": "NaN",
    "lng": 46.52977292,
    "lat": 24.774485
  },
  {
    "ID": 5,
    "CO": 0.540063,
    "lng": 46.78124785,
    "lat": 24.592577
  },
  {
    "ID": 6,
    "CO": 0.545832,
    "lng": 46.69993581,
    "lat": 24.568516
  },
  {
    "ID": 7,
    "CO": "NaN",
    "lng": 46.75168406,
    "lat": 24.676744
  },
  {
    "ID": 8,
    "CO": 0.677936,
    "lng": 46.72154097,
    "lat": 24.649445
  },
  {
    "ID": 9,
    "CO": "NaN",
    "lng": 46.6546968,
    "lat": 24.579192
  },
  {
    "ID": 10,
    "CO": 0.466214,
    "lng": 46.67172574,
    "lat": 24.757516
  },
  {
    "ID": 11,
    "CO": "NaN",
    "lng": 46.77346541,
    "lat": 24.762383
  },
  {
    "ID": 12,
    "CO": 1.768642,
    "lng": 46.75706742,
    "lat": 24.72364
  },
  {
    "ID": 13,
    "CO": 1.082063,
    "lng": 46.67924518,
    "lat": 24.699848
  },
  {
    "ID": 14,
    "CO": 1.493479,
    "lng": 46.70332914,
    "lat": 24.685063
  },
  {
    "ID": 15,
    "CO": 1.238802,
    "lng": 46.64502545,
    "lat": 24.760223
  },
  {
    "ID": 16,
    "CO": 2.239242,
    "lng": 46.74502415,
    "lat": 24.598403
  },
  {
    "ID": 17,
    "CO": 0.363903,
    "lng": 46.81790693,
    "lat": 24.58304
  }

  // [46.52509694, 24.991677, 0],
  // [46.86895561, 24.751133, 0],
  // [46.8973684, 24.383645, 0],
  // [46.52977292, 24.77448, 0],
  // [46.78124785, 24.592577, 0.540063],
  // [46.69993581, 24.568516, 0.545832],
  // [46.75168406, 24.676744, 0],
  // [46.72154097, 24.649445, 0.677936],
  // [46.6546968, 24.579192, 0],
  // [46.67172574, 24.757516, 0.466214],
  // [46.77346541, 24.762383, 0],
  // [46.75706742, 24.72364, 1.768642],
  // [46.67924518, 24.699848, 1.082063],
  // [46.70332914, 24.685063, 1.493479],
  // [46.64502545, 24.760223, 1.238802],
  // [46.74502415, 24.598403, 2.239242],
  // [46.81790693, 24.58304, 0.363903]
];
            node.send(msg);

        });
    }
    // Regester the Node with RED (This is a stander thing ;-) )
    RED.nodes.registerType("air quality model",AirQualityNode);
}
