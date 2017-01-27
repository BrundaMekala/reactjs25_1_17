import React from 'react';
//import Request                  from 'superagent';
//import _                        from 'lodash';
import ReactDOM from 'react-dom';


var $ = require ('jquery')
 var details;

var data;
var Client = require('ibmiotf').IotfApplication;

var iotAppConfig = {
  "org" : "orjnj6",
    "id" : "miracle",
    "domain": "internetofthings.ibmcloud.com",
    "auth-key" : "a-orjnj6-4sca7h9z5g",
    "auth-token" : "tdha8n*-IuC(1(Ep7l",
   "type" : "shared"
} 
var appClient = new Client(iotAppConfig);
appClient.connect();


var appClient = new Client(iotAppConfig);
appClient.connect();
console.log("Successfully connected to our IoT service!");
appClient.on("connect", function () {
console.log("subscribe to input events");
appClient.subscribeToDeviceEvents(); //subscribing to device commands

});
appClient.on("deviceEvent", function(deviceType, deviceId, eventType, format, payload){
//console.log(payload.toString());
 var sekhar= payload.toString();
  details = JSON.parse(sekhar);
 console.log(details); 
data=details;

})


class App1 extends React.Component {
   render() {
      return (
         <div>
            
			
	$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        Highcharts.chart('inFlow1', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                //y = Math.random();
								y=data.InFlow_1;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Water In-Flow'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 60 
            },
            yAxis: {
                title: {
                    text: 'Litres'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Litres',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            //y: Math.random()
							y:data.InFlow_1
                        });
                    }
                    return data;
                }())
            }]
        });
    })
			
});



	$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        Highcharts.chart('inFlow2', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                //y = Math.random();
								y=data.InFlow_2;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Water In-Flow'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 60 
            },
            yAxis: {
                title: {
                    text: 'Litres'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Litres',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            //y: Math.random()
							y:data.InFlow_2
                        });
                    }
                    return data;
                }())
            }]
        });
    })
			
});





	$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        Highcharts.chart('outFlow1', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                //y = Math.random();
								y=data.OutFlow_1;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Water Out-Flow'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 60 
            },
            yAxis: {
                title: {
                    text: 'Litres'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Litres',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            //y: Math.random()
							y:data.OutFlow_1
                        });
                    }
                    return data;
                }())
            }]
        });
    })
			
});



	$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        Highcharts.chart('outFlow2', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                //y = Math.random();
								y=data.OutFlow_2;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Water Out-Flow'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 60 
            },
            yAxis: {
                title: {
                    text: 'Litres'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Litres',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            //y: Math.random()
							y:data.OutFlow_2
                        });
                    }
                    return data;
                }())
            }]
        });
    })
			
});


			
			
         </div>
      );
   }
}

export default App1;
