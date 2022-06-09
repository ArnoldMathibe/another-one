
const fisrtChoice = document.querySelector(".button-17");
const secondChoice = document.querySelector(".button-18");
const thirdChoice = document.querySelector(".button-19");

let firstChart;
let secondChart;
let thirdChart;
fisrtChoice.addEventListener("click", function(){
    localStorage.setItem("oldData", [300,400,266,800,680])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));
    const currentData = [];


    // setup 
    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
        label: 'Revenue Over Time',
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
    if(secondChart){
        secondChart.stop();
        secondChart.destroy();
    }
    if(thirdChart){
        thirdChart.stop();
        thirdChart.destroy();
    }
    firstChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );


    });


secondChoice.addEventListener("click", function(){
    localStorage.setItem("oldData", [200,800,966,600,380])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));


    // setup 
    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
        label: 'Revenue Over Time',
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
    if(firstChart){
        firstChart.stop();
        firstChart.destroy();
    }
    if(thirdChart){
        thirdChart.stop();
        thirdChart.destroy();
    }
    secondChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );

    // var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    // if (checkedRadioBtn){
    //     var revType = checkedRadioBtn.value;
        
    //     if(revType === "hotels"){
    //         localStorage.setItem("oldData", [50,50,80,60,]);
    //     }
    //     else if(revType === "resturants"){
    //         localStorage.setItem("oldData", [100,500,180,160,]);
                
    //     }
    //     else if(revType === "logistics"){
    //         localStorage.setItem("oldData", [250,350,280,160,]);
                
    //     }
    // }

});

thirdChoice.addEventListener("click", function(){
    localStorage.setItem("oldData", [900,700,566,800,880])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));


    // setup 
    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
        label: 'Revenue Over Time',
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
    if(secondChart){
        firstChart.stop();
        firstChart.destroy();
    }
    if(firstChart){
        secondChart.stop();
        secondChart.destroy();
    }
    thirdChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );

});


// console.log(datase);