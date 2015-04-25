'use strict';
//$(function () {
        /* ChartJS
         * -------
         * Here we will create a few charts using ChartJS
         */

        // //--------------
        // //- AREA CHART -
        // //--------------

        // // Get context with jQuery - using jQuery's .get() method.
        // var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
        // // This will get the first returned node in the jQuery collection.
        // var areaChart = new Chart(areaChartCanvas);

        // var areaChartData = {
        //   labels: ["January", "February", "March", "April", "May", "June", "July"],
        //   datasets: [
        //     {
        //       label: "Electronics",
        //       fillColor: "rgba(210, 214, 222, 1)",
        //       strokeColor: "rgba(210, 214, 222, 1)",
        //       pointColor: "rgba(210, 214, 222, 1)",
        //       pointStrokeColor: "#c1c7d1",
        //       pointHighlightFill: "#fff",
        //       pointHighlightStroke: "rgba(220,220,220,1)",
        //       data: [65, 59, 80, 81, 56, 55, 40]
        //     },
        //     {
        //       label: "Digital Goods",
        //       fillColor: "rgba(60,141,188,0.9)",
        //       strokeColor: "rgba(60,141,188,0.8)",
        //       pointColor: "#3b8bba",
        //       pointStrokeColor: "rgba(60,141,188,1)",
        //       pointHighlightFill: "#fff",
        //       pointHighlightStroke: "rgba(60,141,188,1)",
        //       data: [28, 48, 40, 19, 86, 27, 90]
        //     }
        //   ]
        // };

        // var areaChartOptions = {
        //   //Boolean - If we should show the scale at all
        //   showScale: true,
        //   //Boolean - Whether grid lines are shown across the chart
        //   scaleShowGridLines: false,
        //   //String - Colour of the grid lines
        //   scaleGridLineColor: "rgba(0,0,0,.05)",
        //   //Number - Width of the grid lines
        //   scaleGridLineWidth: 1,
        //   //Boolean - Whether to show horizontal lines (except X axis)
        //   scaleShowHorizontalLines: true,
        //   //Boolean - Whether to show vertical lines (except Y axis)
        //   scaleShowVerticalLines: true,
        //   //Boolean - Whether the line is curved between points
        //   bezierCurve: true,
        //   //Number - Tension of the bezier curve between points
        //   bezierCurveTension: 0.3,
        //   //Boolean - Whether to show a dot for each point
        //   pointDot: false,
        //   //Number - Radius of each point dot in pixels
        //   pointDotRadius: 4,
        //   //Number - Pixel width of point dot stroke
        //   pointDotStrokeWidth: 1,
        //   //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        //   pointHitDetectionRadius: 20,
        //   //Boolean - Whether to show a stroke for datasets
        //   datasetStroke: true,
        //   //Number - Pixel width of dataset stroke
        //   datasetStrokeWidth: 2,
        //   //Boolean - Whether to fill the dataset with a color
        //   datasetFill: true,
        //   //String - A legend template
        //   legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        //   //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        //   maintainAspectRatio: false,
        //   //Boolean - whether to make the chart responsive to window resizing
        //   responsive: true
        // };

        // //Create the line chart
        // areaChart.Line(areaChartData, areaChartOptions);

        // //-------------
        // //- LINE CHART -
        // //--------------
        // var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
        // var lineChart = new Chart(lineChartCanvas);
        // var lineChartOptions = areaChartOptions;
        // lineChartOptions.datasetFill = false;
        // lineChart.Line(areaChartData, lineChartOptions);

        // //-------------
        // //- PIE CHART -
        // //-------------
        // // Get context with jQuery - using jQuery's .get() method.
        // var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
        // var pieChart = new Chart(pieChartCanvas);
        // var PieData = [
        //   {
        //     value: 700,
        //     color: "#f56954",
        //     highlight: "#f56954",
        //     label: "Chrome"
        //   },
        //   {
        //     value: 500,
        //     color: "#00a65a",
        //     highlight: "#00a65a",
        //     label: "IE"
        //   },
        //   {
        //     value: 400,
        //     color: "#f39c12",
        //     highlight: "#f39c12",
        //     label: "FireFox"
        //   },
        //   {
        //     value: 600,
        //     color: "#00c0ef",
        //     highlight: "#00c0ef",
        //     label: "Safari"
        //   },
        //   {
        //     value: 300,
        //     color: "#3c8dbc",
        //     highlight: "#3c8dbc",
        //     label: "Opera"
        //   },
        //   {
        //     value: 100,
        //     color: "#d2d6de",
        //     highlight: "#d2d6de",
        //     label: "Navigator"
        //   }
        // ];
        // var pieOptions = {
        //   //Boolean - Whether we should show a stroke on each segment
        //   segmentShowStroke: true,
        //   //String - The colour of each segment stroke
        //   segmentStrokeColor: "#fff",
        //   //Number - The width of each segment stroke
        //   segmentStrokeWidth: 2,
        //   //Number - The percentage of the chart that we cut out of the middle
        //   percentageInnerCutout: 50, // This is 0 for Pie charts
        //   //Number - Amount of animation steps
        //   animationSteps: 100,
        //   //String - Animation easing effect
        //   animationEasing: "easeOutBounce",
        //   //Boolean - Whether we animate the rotation of the Doughnut
        //   animateRotate: true,
        //   //Boolean - Whether we animate scaling the Doughnut from the centre
        //   animateScale: false,
        //   //Boolean - whether to make the chart responsive to window resizing
        //   responsive: true,
        //   // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        //   maintainAspectRatio: false,
        //   //String - A legend template
        //   legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        // };
        // //Create pie or douhnut chart
        // // You can switch between pie and douhnut using the method below.
        // pieChart.Doughnut(PieData, pieOptions);

        //-------------
        //- BAR CHART -
        //-------------
        
      // });
$(function () {
    
    // var areaChartData = {
    //       labels: ["Anak-anak(<12)","Remaja(12-17)","Dewasa Muda(18-29)","Dewasa(>30)"],
    //       datasets: [
    //         {
    //           label: "Blibli.com",
    //           fillColor: "#00c0ef",
    //           strokeColor: "rgba(210, 214, 222, 1)",
    //           pointColor: "rgba(210, 214, 222, 1)",
    //           pointStrokeColor: "#c1c7d1",
    //           pointHighlightFill: "#fff",
    //           pointHighlightStroke: "rgba(220,220,220,1)",
    //           data: [75, 40, 22, 34]
    //         },
    //         {
    //           label: "Rakuten.com",
    //           fillColor: "#dd4b39",
    //           strokeColor: "rgba(210, 214, 222, 1)",
    //           pointColor: "#3b8bba",
    //           pointStrokeColor: "rgba(60,141,188,1)",
    //           pointHighlightFill: "#fff",
    //           pointHighlightStroke: "rgba(60,141,188,1)",
    //           data: [28, 58, 22, 35]
    //         },
    //         {
    //           label: "Tokopedia.com",
    //           fillColor: "#00a65a",
    //           strokeColor: "rgba(210, 214, 222, 1)",
    //           pointColor: "#3b8bba",
    //           pointStrokeColor: "rgba(60,141,188,1)",
    //           pointHighlightFill: "#fff",
    //           pointHighlightStroke: "rgba(60,141,188,1)",
    //           data: [60, 28, 76, 45]
    //         },
    //         {
    //           label: "Lazada.com",
    //           fillColor: "#f39c12",
    //           strokeColor: "rgba(210, 214, 222, 1)",
    //           pointColor: "#3b8bba",
    //           pointStrokeColor: "rgba(60,141,188,1)",
    //           pointHighlightFill: "#fff",
    //           pointHighlightStroke: "rgba(60,141,188,1)",
    //           data: [50, 54, 99, 10]
    //         }
    //       ]
    //     };
    //     var barChartCanvas = $("#barChart").get(0).getContext("2d");
    //     var barChart = new Chart(barChartCanvas);
    //     var barChartData = areaChartData;
    //     // barChartData.datasets[1].fillColor = "#00a65a";
    //     // barChartData.datasets[1].strokeColor = "#00a65a";
    //     // barChartData.datasets[1].pointColor = "#00a65a";
    //     var barChartOptions = {
    //       //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    //       scaleBeginAtZero: true,
    //       //Boolean - Whether grid lines are shown across the chart
    //       scaleShowGridLines: true,
    //       //String - Colour of the grid lines
    //       scaleGridLineColor: "rgba(0,0,0,.05)",
    //       //Number - Width of the grid lines
    //       scaleGridLineWidth: 1,
    //       //Boolean - Whether to show horizontal lines (except X axis)
    //       scaleShowHorizontalLines: true,
    //       //Boolean - Whether to show vertical lines (except Y axis)
    //       scaleShowVerticalLines: true,
    //       //Boolean - If there is a stroke on each bar
    //       barShowStroke: true,
    //       //Number - Pixel width of the bar stroke
    //       barStrokeWidth: 2,
    //       //Number - Spacing between each of the X value sets
    //       barValueSpacing: 5,
    //       //Number - Spacing between data sets within X values
    //       barDatasetSpacing: 1,
    //       //String - A legend template
    //       legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    //       //Boolean - whether to make the chart responsive
    //       responsive: true,
    //       maintainAspectRatio: false
    //     };

    //     barChartOptions.datasetFill = false;
    //     barChart.Bar(barChartData, barChartOptions);

    var categories = [  'Lazada',  'Tokopedia','Rakuten','Blibli'  ];
    $(document).ready(function () {
        $('#distribusipengguna').highcharts({
            chart: {
                type: 'bar'
            },
            colors: [
            'blue','pink'
            ],
            title: {
                text: 'E-Commerce User Distribution in Indonesia'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -4000000,
                max: 4000000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', E-Commerce : ' + this.point.category + '</b><br/>' +
                        'Jumlah Pengguna: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + ' orang.';
                }
            },

            series: [{
                name: 'Male',
                data: [-1746181, -1884428, -2089758, -2222362]
            }, {
                name: 'Female',
                data: [656154, 1787564, 1981671, 2108575]
            }]
        });
    });


    $('.toggleBtn3').click(function() {
      var self = $(this);
      var id = self.data('id');

      self.data('status', !self.data('status'));
      $('#toggleBtnSmall'+id).data('status', self.data('status'));
      $('#toggleBtn'+id).data('status', self.data('status'));

      if (self.data('status')) {
        self.find('.info-box').removeClass().addClass('info-box').addClass('active');
        $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('active');
        $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('active');
      } else {
        self.find('.info-box').removeClass().addClass('info-box').addClass('inactive');
        $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('inactive');
        $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('inactive');
      }
      // var chartList = [
      //   '#chartEngangement',
      //   '#chart-kpi',
      //   '#chart-fans',
      //   '#chartLikes',
      //   '#chartComments',
      //   '#chartShares',    
      // ];
      // $.each(chartList, function (i, item) {
      //   console.log(i+"-"+item);
      //   var series = $(item).highcharts().series[id];

      //   if (self.data('status')) {
      //     series.show();
      //   } else {
      //     series.hide();
      //   }  
      // });
        // $('#distribusipengguna').highcharts().series[0].data[0].remove();
        // $('#distribusipengguna').highcharts().series[1].data[0].remove();
        if (self.data('status')) {
          console.log($('#barChart').highcharts());
          console.log($('#distribusipengguna'));
          $('#barChart').highcharts().series[id].show();
        } else {
          console.log($('#barChart').highcharts());
          console.log($('#distribusipengguna')); 
          $('#barChart').highcharts().series[id].hide();
        }
      
      
    })
    $('#barChart').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: [
              "Anak-anak(<12)","Remaja(12-17)","Dewasa Muda(18-29)","Dewasa(>30)"
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: "#00c0ef",
          data: [49.9,20,21,22]

      }, {
          name: "Rakuten",
          color: "#dd4b39",
          data: [83.6,21,22,12]

      }, {
          name: "Tokopedia",
          color: "#00a65a",
          data: [48.9,23,43,21]

      }, {
          name: "Lazada",
          color: "#f39c12",
          data: [42.4,23,14,56]

      }]
        // labels: ["Anak-anak(<12)","Remaja(12-17)","Dewasa Muda(18-29)","Dewasa(>30)"]
    });

    $('.toggleBtn').click(function() {
    var self = $(this);
    var id = self.data('id');

    self.data('status', !self.data('status'));
    $('#toggleBtnSmall'+id).data('status', self.data('status'));
    $('#toggleBtn'+id).data('status', self.data('status'));

    if (self.data('status')) {
      self.find('.info-box').removeClass().addClass('info-box').addClass('active');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('active');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('active');
    } else {
      self.find('.info-box').removeClass().addClass('info-box').addClass('inactive');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('inactive');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('inactive');
    }
      var series = $('#barChart').highcharts().series[id];

      if (self.data('status')) {
        series.show();
      } else {
        series.hide();
      }  
    });
});