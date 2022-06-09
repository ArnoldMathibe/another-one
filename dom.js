
const covidInput = document.querySelector(".covidRe");
const currentInput = document.querySelector(".currentRe");
const checkingButton = document.querySelector(".difference");

const revenueDuring = (covidRevenue) =>{
    var covidRevenue = covidInput.value;
    var arr1 = covidRevenue.split(",");
    console.log(arr1);
}

const  revenueCurrent = (currentRevenue) =>{
    var currentRevenue = currentInput.value;
    var arr2 = currentRevenue.split(",");
    console.log(arr2);
}


const calculation = (duringCov, currently) => {
    var duringCov = revenueDuring();
    var currently = revenueCurrent();
    const diff = [];
    
    for( var i = 0; i < duringCov.length; i++){
        const calc = Math.abs((duringCov[i] || 0) - (currently[i] || 0));
        diff[i] = calc;
    };
    return diff;
    }
    // console.log(calculation(duringCov, currently));



checkingButton.addEventListener('click',revenueDuring)


// localStorage.setItem("oldData", [5,2,3,4,6,8]);
// console.log(localStorage.getItem("oldData"));
// const firstData = localStorage.getItem("oldData");
// console.table(firstData.split(","));


// // setup 
// const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//     label: 'Weekly Sales',
//     // data: [18, 12, 6, 9, 12, 3, 9],
//     data: firstData.split(","),
//     backgroundColor: [
//       'rgba(255, 26, 104, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(0, 0, 0, 0.2)'
//     ],
//     borderColor: [
//         'rgba(255, 26, 104, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//         'rgba(0, 0, 0, 1)'
//     ],
//     borderWidth: 1
// }]
// };
  
//  // config 
// const configFirstG = {
//     type: 'bar',
//     data,
//     options: {
//     scales: {
//         y: {
//         beginAtZero: true
//         }
//        }
//     }
// };
  
//  // render init block
// const myChart = new Chart(
//  document.getElementById('myChart'),
//  configFirstG
// );


      