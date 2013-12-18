'use strict';

var app = angular.module('dailyFeelingTrackerApp.controller');

/*app.directive('yearlyCalendar', ['d3', function (d3) {
  return {
    restrict: 'E',
    replace: false,
    scope: {
      data: '='
     //label: '@',
     //onClick: '&'
    },
    link : function(scope, element, attrs) {
      console.log('HELLO I AM IN THE DIRECTIVE NOW!');
      console.log(scope);
      console.log(element);
      console.log(attrs);

      // TODO: d3 calendar config goes here
      var width = 960,
        height = 136,
        cellSize = 17; // cell size

      var day = d3.time.format('%w'),
          week = d3.time.format('%U'),
          percent = d3.format('.1%'),
          format = d3.time.format('%Y-%m-%d');

      var color = d3.scale.quantize()
          .domain([-0.05, 0.05])
          .range(d3.range(11).map(function(d) { return 'q' + d + '-11'; }));

      var svg = d3.select('body').selectAll('svg')
          .data(d3.range(1990, 2011))
        .enter().append('svg')
          .attr('width', width)
          .attr('height', height)
          .attr('class', 'RdYlGn')
        .append('g')
          .attr('transform', 'translate(' + ((width - cellSize * 53) / 2) + ',' + (height - cellSize * 7 - 1) + ')');

      svg.append('text')
          .attr('transform', 'translate(-6,' + cellSize * 3.5 + ')rotate(-90)')
          .style('text-anchor', 'middle')
          .text(function(d) { return d; });

      var rect = svg.selectAll('.day')
          .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append('rect')
          .attr('class', 'day')
          .attr('width', cellSize)
          .attr('height', cellSize)
          .attr('x', function(d) { return week(d) * cellSize; })
          .attr('y', function(d) { return day(d) * cellSize; })
          .datum(format);

      rect.append('title')
          .text(function(d) { return d; });

      function monthPath(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +day(t0), w0 = +week(t0),
            d1 = +day(t1), w1 = +week(t1);
        return 'M' + (w0 + 1) * cellSize + ',' + d0 * cellSize + 'H' + w0 * cellSize + 'V' + 7 * cellSize  + 'H' + w1 * cellSize + 'V' + (d1 + 1) * cellSize + 'H' + (w1 + 1) * cellSize + 'V' + 0  + 'H' + (w0 + 1) * cellSize + 'Z';
      }

      svg.selectAll('.month')
          .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append('path')
          .attr('class', 'month')
          .attr('d', monthPath);

      d3.csv('dji.csv', function(error, csv) {
        var data = d3.nest()
          .key(function(d) { return d.Date; })
          .rollup(function(d) { return (d[0].Close - d[0].Open) / d[0].Open; })
          .map(csv);

        rect.filter(function(d) { return d in data; })
            .attr('class', function(d) { return 'day ' + color(data[d]); })
          .select('title')
            .text(function(d) { return d + ': ' + percent(data[d]); });
      });

      return d3.select('#year').style('height', '2910px');
    }
  };
 }]);
*/

function MainCtrl ($scope, $localStorage, ThisWeek) {
  $localStorage.$reset();

  $scope.thisWeek = new ThisWeek($localStorage);
 
  $scope.thisWeekDays = $localStorage.$default({
    days: $scope.thisWeek.days
  });

  $scope.editTag = function (day, index, value) {
    if(value.replace(/^\s+|\s+$/g, '')) {
      day.tags[index] = value;
    }
  };

  $scope.thisYearTestData = [];

  $scope.myData = [10,20,30,40,60];
}


