console.log('js is sourced');
var canvas = document.getElementById("myChart");
var ctx = canvas.getContext('2d');
var trueCount = 0;
var falseCount = 0;

for (var i = 0; i < DATA_4_CHART.length; i++) {
  if (DATA_4_CHART[i].isActive == true) {
    trueCount++;
    console.log('true');
  } else {
    console.log('false');
    falseCount++;
  }
}

var donutData = [trueCount, falseCount];
console.log(donutData);

data = {
  labels: [
    'True',
    'False'
  ],
  pointLabelFontSize: 100,
  scaleFontSize: 100,
  datasets: [{
    data: donutData,
    backgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      '#bad455'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      '#bad455'
    ],
    hoverBorderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      '#bad455'
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs

};

options = {};

Chart.defaults.global.defaultFontSize = 48;
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});



// for (let i = 0; i < DATA_4_CHART.length; i++) {
//     name = DATA_4_CHART[i].name.first + ' ' + DATA_4_CHART[i].name.last;
//     nameArr.push(name);

//   var dollars = Number(DATA_4_CHART[i].balance.replace(/[^0-9\.]+/g,""));
//   console.log('dollars', dollars, 'type: ', typeof(dollars));
// chartArr.push(dollars);
//     chartArr.push(DATA_4_CHART[i].age);
//   console.log(chartArr);
// }





//radar
// var myRadarChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//                 labels: nameArr,
//                 datasets: [{
//                     label: 'age',
//                     data: chartArr,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)',
//                         'rgba(186, 212, 85, 0.2)'
//
//                     ],
//                     borderColor: [
//                         'rgba(255,99,132,1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         '#bad455'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//     options: {
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
// });
//


//line
// var myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//             labels: nameArr,
//             datasets: [{
//                 label: 'balance',
//                 data: chartArr,
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(186, 212, 85, 0.2)'
//
//         ],
//         borderColor: [
//             'rgba(255,99,132,1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)',
//             '#bad455'
//         ],
//         borderWidth: 1
//             }]
//         },
//     options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero:true
//                     }
//                 }]
//             }
//         }
// });


//bar graph
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "badass"],
//         datasets: [{
//             label: '# of Votes',
//             data: chartArr,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(186, 212, 85, 0.2)'
//
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 '#bad455'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
