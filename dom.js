
const hotelButton = document.querySelector(".radioHotelBtn");
const restuarantButton = document.querySelector(".radioRestaurantBtn");
const transpotationButton = document.querySelector(".radioTrasnsportationBtn");


<<<<<<< HEAD
=======
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
>>>>>>> f1ecd612811ee79461170fd60f9e7c43dbf6f087
    // console.log(calculation(duringCov, currently));



 hotelButton.addEventListener('click',revenueDuring)


 localStorage.setItem("oldData", [5,2,3,4,6,8]);
 console.log(localStorage.getItem("oldData"));
 const firstData = localStorage.getItem("oldData");
 console.table(firstData.split(","));


 // setup 
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
     label: 'Weekly Sales',
    // data: [18, 12, 6, 9, 12, 3, 9],
   data: firstData.split(","),
    backgroundColor: [
       'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
 }]
 };
  
 // config 
const configFirstG = {
   type: 'bar',
    data,
    options: {
   scales: {
        y: {
        beginAtZero: true
        }
       }
     }
 };
  
  // render init block
 const myChart = new Chart(
 document.getElementById('myChart'),
 configFirstG
 );



    // console.log(calculation(duringCov, currently));



    restuarantButton.addEventListener('click',revenueDuring)


 localStorage.setItem("oldData", [5,2,3,4,6,8]);
 console.log(localStorage.getItem("oldData"));
 const firstData = localStorage.getItem("oldData");
 console.table(firstData.split(","));


 // setup 
const data = {
    labels: ['2017','2018', '2019', '2020', '2021', ],
    datasets: [{
     label: 'Weekly Sales',
    // data: [18, 12, 6, 9, 12, 3, 9],
   data: firstData.split(","),
    backgroundColor: [
       'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
 }]
 };
  
 // config 
const configFirstG = {
   type: 'bar',
    data,
    options: {
   scales: {
        y: {
        beginAtZero: true
        }
       }
     }
 };
  
  // render init block
 const myChart = new Chart(
 document.getElementById('myChart'),
 configFirstG
 );

 transpotationButton.addEventListener('click',revenueDuring)


 localStorage.setItem("oldData", [5,2,3,4,6,8]);
 console.log(localStorage.getItem("oldData"));
 const firstData = localStorage.getItem("oldData");
 console.table(firstData.split(","));


 // setup 
const data = {
    labels: ['2017','2018', '2019', '2020', '2021', ],
    datasets: [{
     label: 'Weekly Sales',
    // data: [18, 12, 6, 9, 12, 3, 9],
   data: firstData.split(","),
    backgroundColor: [
       'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
 }]
 };
  
 // config 
const configFirstG = {
   type: 'bar',
    data,
    options: {
   scales: {
        y: {
        beginAtZero: true
        }
       }
     }
 };
  
  // render init block
 const myChart = new Chart(
 document.getElementById('myChart'),
 configFirstG
 );