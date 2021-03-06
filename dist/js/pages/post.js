'use strict';
$(function () {

    var color_blibli = "#00c0ef";
    var color_rakuten = "#dd4b39";
    var color_lazada = "#f39c12";
    var color_tokopedia = "#00a65a";

  $('.filterdate').daterangepicker();

 	//line chart

	var color_blibli = "#00c0ef";
	var color_rakuten = "#dd4b39";
	var color_lazada = "#f39c12";
	var color_tokopedia = "#00a65a";

	$('#chart-line-like').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            title: {
                text: 'Jan 2015'
            },
            categories: ['1','2','3','4','5','6','7','8','9','10','11','12' ]
        },
        yAxis: {
            title: {
                text: 'Total'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'post'
        },
        series: [{
            name: 'BliBli',
            color: color_blibli,
            data: [7.0, 6.9, 12, 13, 18, 40, 20, 42, 6, 12, 42 ,21]
        }, {
            name: 'Rakuten',
            color: color_rakuten,
            data: [-0.2, 0.8, 8, 18, 50, 70, 40, 54, 78, 11, 12 ,24]
        }, {
            name: 'Tokopedia',
            color: color_tokopedia,
            data: [51, 30, 18, 13, 2, 1, 15, 30, 11, 12 ,24, 10]
        }, {
            name: 'Lazada',
	          color: color_lazada,
            data: [21, 10, 13, 2, 1, 18, 4, 40, 90 ,24, 40, 8 ]
        }]
    });

	$('#chart-line-comment').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            title: {
                text: 'Jan 2015'
            },
            categories: ['1','2','3','4','5','6','7','8','9','10','11','12' ]
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'post'
        },
        series: [{
            name: 'BliBli',
            color: color_blibli,
 						data: [-0.2, 0.8, 8, 18, 50, 70, 40, 54, 78, 11, 12 ,24]
        }, {
            name: 'Rakuten',
            color: color_rakuten,
	          data: [7.0, 6.9, 12, 13, 18, 40, 20, 42, 6, 12, 42 ,21]            
        }, {
            name: 'Tokopedia',
            color: color_tokopedia,
            data: [21, 10, 13, 2, 1, 18, 4, 40, 90 ,24, 40, 8 ]
        }, {
            name: 'Lazada',
	          color: color_lazada,
            data: [51, 30, 18, 13, 2, 1, 15, 30, 11, 12 ,24, 10]

        }]
    });

    $('#chart-line-share').highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            title: {
                text: 'Jan 2015'
            },
            categories: ['1','2','3','4','5','6','7','8','9','10','11','12' ]
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'post'
        },
        series: [{
            name: 'BliBli',
            color: color_blibli,
                        data: [-0.2, 0.8, 8, 18, 50, 70, 40, 54, 78, 11, 12 ,24]
        }, {
            name: 'Rakuten',
            color: color_rakuten,
              data: [7.0, 6.9, 12, 13, 18, 40, 20, 42, 6, 12, 42 ,21]            
        }, {
            name: 'Tokopedia',
            color: color_tokopedia,
            data: [21, 10, 13, 2, 1, 18, 4, 40, 90 ,24, 40, 8 ]
        }, {
            name: 'Lazada',
              color: color_lazada,
            data: [51, 30, 18, 13, 2, 1, 15, 30, 11, 12 ,24, 10]

        }]
    });

	$('#chart-bubble').highcharts({
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80
        },


        title: {
            text: ''
        },

        xAxis: {
            categories: [
                '00:00',
                '01:00',
                '02:00',
                '03:00',
                '04:00',
                '05:00',
                '06:00',
                '07:00',
                '08:00',
                '09:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00'
            ],
            title: null
        },

        yAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            title: null
        },


        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        series: [{
            borderWidth: 1,
            data: [
                [0, 0, 19],   [0, 1, 15],   [0, 2, 19],   [0, 3, 13],   [0, 4, 19],    [0, 5, 19],   [0, 6, 20],
                [1, 0, 15],   [1, 1, 14],   [1, 2, 11],   [1, 3, 11],   [1, 4, 21],    [1, 5, 15],   [1, 6, 17],
                [2, 0, 8],    [2, 1, 10],   [2, 2, 9],    [2, 3, 11],   [2, 4, 19],    [2, 5, 8],    [2, 6, 12],
                [3, 0, 6],    [3, 1, 7],    [3, 2, 4],    [3, 3, 9],    [3, 4, 11],    [3, 5, 6],    [3, 6, 11],
                [4, 0, 5],    [4, 1, 5],    [4, 2, 7],    [4, 3, 7],    [4, 4, 16],    [4, 5, 5],    [4, 6, 16],
                [5, 0, 9],    [5, 1, 12],   [5, 2, 4],    [5, 3, 4],    [5, 4, 12],    [5, 5, 9],    [5, 6, 11],
                [6, 0, 15],   [6, 1, 13],   [6, 2, 19],   [6, 3, 12],   [6, 4, 27],   [6, 5, 15],   [6, 6, 10],
                [7, 0, 17],   [7, 1, 13],   [7, 2, 11],   [7, 3, 11],   [7, 4, 21],   [7, 5, 17],   [7, 6, 10],
                [8, 0, 16],   [8, 1, 13],   [8, 2, 15],   [8, 3, 21],   [8, 4, 29],   [8, 5, 16],   [8, 6, 13],
                [9, 0, 21],   [9, 1, 18],   [9, 2, 24],   [9, 3, 29],   [9, 4, 37],   [9, 5, 21],   [9, 6, 11],
                [10, 0, 27],  [10, 1, 31],  [10, 2, 28],  [10, 3, 21],  [10, 4, 38],  [10, 5, 27],  [10, 6, 17],
                [11, 0, 36],  [11, 1, 39],  [11, 2, 33],  [11, 3, 30],  [11, 4, 42],  [11, 5, 36],  [11, 6, 16],
                [12, 0, 32],  [12, 1, 41],  [12, 2, 39],  [12, 3, 38],  [12, 4, 48],  [12, 5, 32],  [12, 6, 30],
                [13, 0, 36],  [13, 1, 35],  [13, 2, 33],  [13, 3, 30],  [13, 4, 49],  [13, 5, 36],  [13, 6, 46],
                [14, 0, 42],  [14, 1, 45],  [14, 2, 49],  [14, 3, 48],  [14, 4, 58],  [14, 5, 42],  [14, 6, 41],
                [15, 0, 45],  [15, 1, 40],  [15, 2, 40],  [15, 3, 40],  [15, 4, 51],  [15, 5, 45],  [15, 6, 40],
                [16, 0, 25],  [16, 1, 23],  [16, 2, 24],  [16, 3, 29],  [16, 4, 34],  [16, 5, 25],  [16, 6, 29],
                [17, 0, 21],  [17, 1, 28],  [17, 2, 29],  [17, 3, 29],  [17, 4, 31],  [17, 5, 21],  [17, 6, 22],
                [18, 0, 26],  [18, 1, 25],  [18, 2, 29],  [18, 3, 21],  [18, 4, 36],  [18, 5, 26],  [18, 6, 27],
                [19, 0, 46],  [19, 1, 42],  [19, 2, 41],  [19, 3, 49],  [19, 4, 56],  [19, 5, 46],  [19, 6, 56],
                [20, 0, 52],  [20, 1, 59],  [20, 2, 59],  [20, 3, 58],  [20, 4, 62],  [20, 5, 52],  [20, 6, 63],
                [21, 0, 42],  [21, 1, 36],  [21, 2, 49],  [21, 3, 47],  [21, 4, 52],  [21, 5, 42],  [21, 6, 52],
                [22, 0, 32],  [22, 1, 48],  [22, 2, 36],  [22, 3, 39],  [22, 4, 42],  [22, 5, 32],  [22, 6, 42],
                [23, 0, 21],  [23, 1, 38],  [23, 2, 28],  [23, 3, 29],  [23, 4, 31],  [23, 5, 21],  [23, 6, 20]

            ],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]
    });
});
