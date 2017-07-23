console.log('js is sourced');
var canvas = document.getElementById("myChart");
var ctx = canvas.getContext('2d');
var chartArr = [];
var nameArr =[];

for (let i = 0; i < DATA_4_CHART.length; i++) {
    name = DATA_4_CHART[i].name.first + ' ' + DATA_4_CHART[i].name.last;
    nameArr.push(name);
  chartArr.push(DATA_4_CHART[i].age);
}

//line
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
            labels: nameArr,
            datasets: [{
                label: 'age',
                data: chartArr,
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
            }]
        },
    options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
});


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
