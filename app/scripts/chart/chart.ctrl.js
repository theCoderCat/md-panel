(function() {
  'use strict';
  var app = angular.module('app.chart.ctrls', []);

  app.controller('chartCtrl', [
    '$scope', function($scope) {
      $scope.easypiechartsm1 = {
        percent: 54,
        options: {
          animate: {
            duration: 2000,
            enabled: true
          },
          barColor: $scope.color.success,
          lineCap: 'round',
          size: 120,
          lineWidth: 5
        }
      };
      $scope.easypiechartsm2 = {
        percent: 12,
        options: {
          animate: {
            duration: 1400,
            enabled: true
          },
          barColor: $scope.color.danger,
          lineCap: 'round',
          size: 120,
          lineWidth: 5
        }
      };
      $scope.easypiechartsm3 = {
        percent: 34,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: $scope.color.primary,
          lineCap: 'round',
          size: 120,
          lineWidth: 5
        }
      };
      $scope.easypiechartsm4 = {
        percent: 87,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: $scope.color.warning,
          lineCap: 'round',
          size: 120,
          lineWidth: 5
        }
      };
      $scope.easypiechart = {
        percent: 67,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: $scope.color.primary,
          lineCap: 'round',
          size: 180,
          lineWidth: 5
        }
      };
      $scope.easypiechart2 = {
        percent: 76,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: $scope.color.success,
          lineCap: 'round',
          size: 180,
          lineWidth: 10
        }
      };
      $scope.easypiechart3 = {
        percent: 12,
        options: {
          animate: {
            duration: 1000,
            enabled: true
          },
          barColor: $scope.color.info,
          lineCap: 'square',
          size: 180,
          lineWidth: 20,
          scaleLength: 0
        }
      };
      $scope.gaugeChart1 = {
        data: {
          maxValue: 3000,
          animationSpeed: 40,
          val: 2575
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#000000'
          },
          limitMax: 'false',
          strokeColor: '#E0E0E0',
          generateGradient: true,
          percentColors: [[0.0, $scope.color.success], [1.0, $scope.color.success]]
        }
      };
      $scope.gaugeChart2 = {
        data: {
          maxValue: 3000,
          animationSpeed: 45,
          val: 1755
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#7ACBEE',
          colorStop: '#7ACBEE',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, $scope.color.info], [1.0, $scope.color.info]]
        }
      };
      $scope.gaugeChart3 = {
        data: {
          maxValue: 3000,
          animationSpeed: 50,
          val: 1550
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#FF7857',
          colorStop: '#FF7857',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, $scope.color.danger], [1.0, $scope.color.danger]]
        }
      };
      $scope.gaugeChart4 = {
        data: {
          maxValue: 3000,
          animationSpeed: 50,
          val: 2700
        },
        options: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: '#464646'
          },
          limitMax: 'true',
          colorStart: '#874CDD',
          colorStop: '#874CDD',
          strokeColor: '#F1F1F1',
          generateGradient: true,
          percentColors: [[0.0, $scope.color.infoAlt], [1.0, $scope.color.infoAlt]]
        }
      };
    }
  ]);

  app.controller('morrisChartCtrl', [
    '$scope', function($scope) {
      var barColor, barData, comboColor, comboData, donutColor, donutData, mainColor, mainData, simpleColor, simpleData;
      mainData = [
        {
          month: '2014-01',
          Microsoft: 342344,
          Nintendo: 767645,
          Sony: 324324
        }, {
          month: '2014-02',
          Microsoft: 342468,
          Nintendo: 342354,
          Sony: 423467
        }, {
          month: '2014-03',
          Microsoft: 123556,
          Nintendo: 123189,
          Sony: 315754
        }, {
          month: '2014-04',
          Microsoft: 132165,
          Nintendo: 321321,
          Sony: 654564
        }, {
          month: '2014-05',
          Microsoft: 213543,
          Nintendo: 324324,
          Sony: 187987
        }, {
          month: '2014-06',
          Microsoft: 321321,
          Nintendo: 534534,
          Sony: 219344
        }, {
          month: '2014-07',
          Microsoft: 321356,
          Nintendo: 312321,
          Sony: 786575
        }, {
          month: '2014-08',
          Microsoft: 123243,
          Nintendo: 545344,
          Sony: 235734
        }, {
          month: '2014-09',
          Microsoft: 527243,
          Nintendo: 301321,
          Sony: 119564
        }
        , {
          month: '2014-10',
          Microsoft: 271213,
          Nintendo: 658432,
          Sony: 157213
        }
        , {
          month: '2014-11',
          Microsoft: 365321,
          Nintendo: 251656,
          Sony: 353213
        }
        , {
          month: '2014-12',
          Microsoft: 153089,
          Nintendo: 451007,
          Sony: 327767
        }
      ];
      mainColor = [$scope.color.danger, $scope.color.info, $scope.color.success];
      $scope.main = {
        data: mainData,
        type: 'line',
        options: {
          xkey: "month",
          ykeys: ["Microsoft", "Nintendo", "Sony"],
          labels: ["Microsoft", "Nintendo", "Sony"],
          lineColors: mainColor,
          lineWidth: 2,
          behaveLikeLine: false,
          pointSize: 4
        }
      };
      simpleData = [
        {
          year: '2008',
          value: 20
        }, {
          year: '2009',
          value: 10
        }, {
          year: '2010',
          value: 25
        }, {
          year: '2011',
          value: 55
        }, {
          year: '2012',
          value: 20
        }, {
          year: '2013',
          value: 19
        }
      ];
      simpleColor = [$scope.color.primary];
      $scope.simple1 = {
        data: simpleData,
        type: "line",
        options: {
          xkey: "year",
          ykeys: ["value"],
          labels: ["Value"],
          lineWidth: "2",
          lineColors: simpleColor
        }
      };
      $scope.simple2 = {
        data: simpleData,
        type: "area",
        options: {
          xkey: "year",
          ykeys: ["value"],
          labels: ["Value"],
          lineWidth: "2",
          lineColors: simpleColor
        }
      };
      comboData = [
        {
          month: '1',
          a: 20,
          b: 30
        }, {
          month: '2',
          a: 30,
          b: 20
        }, {
          month: '3',
          a: 20,
          b: 10
        }, {
          month: '4',
          a: 10,
          b: 20
        }, {
          month: '5',
          a: 20,
          b: 30
        }, {
          month: '6',
          a: 30,
          b: 20
        }, {
          month: '7',
          a: 20,
          b: 10
        }, {
          month: '8',
          a: 10,
          b: 20
        }, {
          month: '9',
          a: 20,
          b: 30
        }, {
          month: '10',
          a: 30,
          b: 20
        }, {
          month: '11',
          a: 20,
          b: 10
        }, {
          month: '12',
          a: 10,
          b: 20
        }
      ];
      comboColor = [$scope.color.success, $scope.color.danger, $scope.color.infoAlt];
      $scope.combo1 = {
        data: comboData,
        type: "line",
        options: {
          xkey: "month",
          ykeys: ["a", "b"],
          labels: ["Value A", "Value B"],
          lineWidth: "2",
          lineColors: comboColor
        }
      };
      $scope.combo2 = {
        data: comboData,
        type: "area",
        options: {
          xkey: "month",
          ykeys: ["a", "b"],
          labels: ["Value A", "Value B"],
          lineWidth: "2",
          lineColors: comboColor
        }
      };
      barData = [
        {
          year: '2008',
          a: 20,
          b: 16,
          c: 12
        }, {
          year: '2009',
          a: 10,
          b: 22,
          c: 30
        }, {
          year: '2010',
          a: 5,
          b: 14,
          c: 20
        }, {
          year: '2011',
          a: 5,
          b: 12,
          c: 19
        }, {
          year: '2012',
          a: 20,
          b: 19,
          c: 13
        }, {
          year: '2013',
          a: 28,
          b: 22,
          c: 20
        }
      ];
      barColor = [$scope.color.infoAlt, $scope.color.success, $scope.color.warning];
      $scope.bar1 = {
        data: barData,
        type: "bar",
        options: {
          xkey: "year",
          ykeys: ["a", "b", "c"],
          labels: ["Value A", "Value B", "Value C"],
          barColors: barColor
        }
      };
      $scope.bar2 = {
        data: barData,
        type: "bar",
        options: {
          xkey: "year",
          ykeys: ["a", "b", "c"],
          labels: ["Value A", "Value B", "Value C"],
          barColors: barColor,
          stacked: true
        }
      };
      donutColor = [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger];
      donutData = {
        sale: [
          {
            label: "Download Sales",
            value: 12
          }, {
            label: "In-Store Sales",
            value: 30
          }, {
            label: "Mail-Order Sales",
            value: 20
          }, {
            label: "Online Sales",
            value: 19
          }
        ],

        browser: [
          {
            label: "IE",
            value: 65754
          }, {
            label: "Chrome",
            value: 232432
          }, {
            label: "Firefox",
            value: 123213
          }, {
            label: "Opera",
            value: 12133
          }, {
            label: "Safari",
            value: 64656
          }
        ]
      };
      $scope.donut1 = {
        data: donutData.sale,
        type: 'donut',
        options: {
          xkey: "year"
        }
      };
      $scope.donut2 = {
        data: donutData.sale,
        type: 'donut',
        options: {
          xkey: "year",
          colors: donutColor
        }
      };
      $scope.donut3 = {
        data: donutData.sale,
        type: 'donut',
        options: {
          xkey: "year",
          formatter: "return '$' + y;"
        }
      };
      $scope.donutBrowser = {
        data: donutData.browser,
        type: 'donut',
        options: {
          xkey: "year",
          colors: donutColor
        }
      };
    }
  ]);

  app.controller('flotChartCtrl', [
    '$scope', function($scope) {
      var areaChart, barChart, barChartH, lineChart1;
      lineChart1 = {};
      lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22]];
      $scope.line1 = {};
      $scope.line1.data = [
        {
          data: lineChart1.data1,
          label: 'Trend'
        }
      ];
      $scope.line1.options = {
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0
                }, {
                  opacity: 0.3
                }
              ]
            }
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          }
        },
        colors: [$scope.color.primary, $scope.color.infoAlt],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        xaxis: {
          ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
        }
      };
      areaChart = {};
      areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      $scope.area = {};
      $scope.area.data = [
        {
          data: areaChart.data1,
          label: "Value A",
          lines: {
            fill: true
          }
        }, {
          data: areaChart.data2,
          label: "Value B",
          points: {
            show: true
          },
          yaxis: 2
        }
      ];
      $scope.area.options = {
        series: {
          lines: {
            show: true,
            fill: false
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          },
          shadowSize: 0
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        colors: [$scope.color.danger, $scope.color.success],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        xaxis: {
          mode: "time"
        },
        yaxes: [
          {}, {
            position: "right"
          }
        ]
      };
      barChart = {};
      barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
      barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
      barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
      $scope.barChart = {};
      $scope.barChart.data = [
        {
          label: "Value A",
          data: barChart.data1
        }, {
          label: "Value B",
          data: barChart.data2
        }, {
          label: "Value C",
          data: barChart.data3
        }
      ];
      $scope.barChart.options = {
        series: {
          stack: true,
          bars: {
            show: true,
            fill: 1,
            barWidth: 0.3,
            align: "center",
            horizontal: false,
            order: 1
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
      };
      $scope.barChart1 = {};
      $scope.barChart1.data = [
        {
          label: "Value A",
          data: barChart.data1,
          bars: {
            order: 0
          }
        }, {
          label: "Value B",
          data: barChart.data2,
          bars: {
            order: 1
          }
        }, {
          label: "Value C",
          data: barChart.data3,
          bars: {
            order: 2
          }
        }
      ];
      $scope.barChart1.options = {
        series: {
          stack: true,
          bars: {
            show: true,
            fill: 1,
            barWidth: 0.2,
            align: "center",
            horizontal: false
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
      };
      barChartH = {};
      barChartH.data1 = [[85, 10], [50, 20], [55, 30]];
      barChartH.data2 = [[77, 10], [60, 20], [70, 30]];
      barChartH.data3 = [[100, 10], [70, 20], [55, 30]];
      $scope.barChart2 = {};
      $scope.barChart2.data = [
        {
          label: "Value A",
          data: barChartH.data1,
          bars: {
            order: 1
          }
        }, {
          label: "Value B",
          data: barChartH.data2,
          bars: {
            order: 2
          }
        }, {
          label: "Value C",
          data: barChartH.data3,
          bars: {
            order: 3
          }
        }
      ];
      $scope.barChart2.options = {
        series: {
          stack: true,
          bars: {
            show: true,
            fill: 1,
            barWidth: 1,
            align: "center",
            horizontal: true
          }
        },
        grid: {
          hoverable: true,
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        colors: [$scope.color.success, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]
      };
      $scope.pieChart = {};
      $scope.pieChart.data = [
        {
          label: "Download Sales",
          data: 132
        }, {
          label: "In-Store Sales",
          data: 435
        }, {
          label: "Mail-Order Sales",
          data: 123
        }, {
          label: "Online Sales",
          data: 234
        }
      ];
      $scope.pieChart.options = {
        series: {
          pie: {
            show: true
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: [$scope.color.primary, $scope.color.success, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart = {};
      $scope.donutChart.data = [
        {
          label: "Download Sales",
          data: 323
        }, {
          label: "In-Store Sales",
          data: 43
        }, {
          label: "Mail-Order Sales",
          data: 220
        }, {
          label: "Online Sales",
          data: 165
        }
      ];
      $scope.donutChart.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        },
        legend: {
          show: true
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: [$scope.color.primary, $scope.color.success, $scope.color.danger, $scope.color.infoAlt, $scope.color.warning],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };
      $scope.donutChart2 = {};
      $scope.donutChart2.data = [
        {
          label: "Download Sales",
          data: 12
        }, {
          label: "In-Store Sales",
          data: 30
        }, {
          label: "Mail-Order Sales",
          data: 20
        }, {
          label: "Online Sales",
          data: 19
        }, {
          label: "Direct Sales",
          data: 15
        }
      ];
      return $scope.donutChart2.options = {
        series: {
          pie: {
            show: true,
            innerRadius: 0.45
          }
        },
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        colors: ["#A9C41D", "#D6D142", "#D14049", "#39B9B9", "#8239B9"],
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s",
          defaultTheme: false
        }
      };A9C41D
    }
  ]);

  app.controller('sparklineCtrl', [
    '$scope', function($scope) {
      $scope.demoData1 = {
        data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
        options: {
          type: 'line',
          lineColor: '#fff',
          highlightLineColor: '#fff',
          fillColor: $scope.color.success,
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.simpleChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: $scope.color.primary,
          fillColor: '#fafafa',
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false
        }
      };
      $scope.simpleChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: $scope.color.primary
        }
      };
      $scope.simpleChart3 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'pie',
          sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]
        }
      };
      $scope.tristateChart1 = {
        data: [1, 2, -3, -5, 3, 1, -4, 2],
        options: {
          type: 'tristate',
          posBarColor: $scope.color.success,
          negBarColor: $scope.color.danger
        }
      };
      $scope.largeChart1 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'line',
          lineColor: $scope.color.info,
          highlightLineColor: '#fff',
          fillColor: $scope.color.info,
          spotColor: false,
          minSpotColor: false,
          maxSpotColor: false,
          width: '100%',
          height: '150px'
        }
      };
      $scope.largeChart2 = {
        data: [3, 1, 2, 3, 5, 3, 4, 2],
        options: {
          type: 'bar',
          barColor: $scope.color.success,
          barWidth: 10,
          width: '100%',
          height: '150px'
        }
      };
      return $scope.largeChart3 = {
        data: [3, 1, 2, 3, 5],
        options: {
          type: 'pie',
          sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger],
          width: '150px',
          height: '150px'
        }
      };
    }
  ]);

}).call(this);
