

    
const fisrtChoice = document.querySelector(".button-17");
const secondChoice = document.querySelector(".button-18");
const thirdChoice = document.querySelector(".button-19");

// filter buttons must listen
const fiveYears = document.querySelector(".button-85");
const fourYears = document.querySelector(".button-86");
const pandemic = document.querySelector(".button-87");

let firstChart;
let secondChart;
let thirdChart;

// filter variables
let fiveYearsChart;
let fourYearsChart;
let pandemicChart;

fisrtChoice.addEventListener("click", function(){
    localStorage.setItem("oldData", [690,700,600,600,490,120,310,370])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));
    const currentData = [];


    // setup 
    const data = {
        labels: ['2015','2016', '2017', '2018', '2019', '2020', '2021', '2022'],
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
    
    // destroy filtered chart
    // destroy filter chart
    if(pandemicChart){
        pandemicChart.stop();
        pandemicChart.destroy();
    }
    if(fiveYearsChart){
        fiveYearsChart.stop();
        fiveYearsChart.destroy();
    }
    if(fourYearsChart){
        fourYearsChart.stop();
        fourYearsChart.destroy();
    }

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
    localStorage.setItem("oldData", [900,870,900,880,700,200,450,460])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));


    // setup 
    const data = {
        labels: ['2015','2016', '2017', '2018', '2019', '2020', '2021', '2022'],
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
    
    // destroy filter chart
    if(pandemicChart){
        pandemicChart.stop();
        pandemicChart.destroy();
    }
    if(fiveYearsChart){
        fiveYearsChart.stop();
        fiveYearsChart.destroy();
    }
    if(fourYearsChart){
        fourYearsChart.stop();
        fourYearsChart.destroy();
    }
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
    localStorage.setItem("oldData", [860,880,900,700,566,100,200,300])
    console.log(localStorage.getItem("oldData"));
    const firstData = localStorage.getItem("oldData");
    console.table(firstData.split(","));


    // setup 
    const data = {
        labels: ['2015','2016','2017', '2018', '2019', '2020', '2021', '2022'],
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
    
    // destroy filter chart
    if(pandemicChart){
        pandemicChart.stop();
        pandemicChart.destroy();
    }
    if(fiveYearsChart){
        fiveYearsChart.stop();
        fiveYearsChart.destroy();
    }
    if(fourYearsChart){
        fourYearsChart.stop();
        fourYearsChart.destroy();
    }
    // render init block
    if(secondChart){
        secondChart.stop();
        secondChart.destroy();
    }
    if(firstChart){
        firstChart.stop();
        firstChart.destroy();
    }
    thirdChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );

});


// console.log(datase);

// filter using five years
fiveYears.addEventListener("click", function(){
    console.log(localStorage.getItem("oldData"));
    const fiveYears = localStorage.getItem("oldData");

    // setup 
    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
        label: 'Revenue Over Time',
        // data: [18, 12, 6, 9, 12, 3, 9],
        data: fiveYears.split(","),
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
    // detroy current chart
    if(firstChart){
        firstChart.stop();
        firstChart.destroy();
    }
    if(secondChart){
        secondChart.stop();
        secondChart.destroy();
    }
    if(thirdChart){
        thirdChart.stop();
        thirdChart.destroy();
    }

    // destroy filter chart
    if(fourYearsChart){
        fourYearsChart.stop();
        fourYearsChart.destroy();
    }
    if(pandemicChart){
        pandemicChart.stop();
        pandemicChart.destroy();
    }
    
    // display filtered chart
    fiveYearsChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );
});

// filter using four years
fourYears.addEventListener("click", function(){
    console.log(localStorage.getItem("oldData").split(",").slice(1));
    const fourYears = localStorage.getItem("oldData");

    // setup 
    const data = {
        labels: ['2017', '2018', '2019', '2020', '2021'].slice(1),
        datasets: [{
        label: 'Revenue Over Time',
        // data: [18, 12, 6, 9, 12, 3, 9],
        data: fourYears.split(",").slice(1),
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
    // detroy current chart
    if(firstChart){
        firstChart.stop();
        firstChart.destroy();
    }
    if(secondChart){
        secondChart.stop();
        secondChart.destroy();
    }
    if(thirdChart){
        thirdChart.stop();
        thirdChart.destroy();
    }

    // destroy filter chart
    if(fiveYearsChart){
        fiveYearsChart.stop();
        fiveYearsChart.destroy();
    }
    if(pandemicChart){
        pandemicChart.stop();
        pandemicChart.destroy();
    }
    
    // display filtered chart
    fourYearsChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );
});


// filter using pandemic years
pandemic.addEventListener("click", function(){
    console.log(localStorage.getItem("oldData").split(",").slice(5));
    const pandemic = localStorage.getItem("oldData");

    // setup 
    const data = {
        labels: ['2015','2016','2017', '2018', '2019', '2020', '2021', '2022'].slice(5),
        datasets: [{
        label: 'Revenue Over Time',
        // data: [18, 12, 6, 9, 12, 3, 9],
        data: pandemic.split(",").slice(5),
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
    // detroy current chart
    if(firstChart){
        firstChart.stop();
        firstChart.destroy();
    }
    if(secondChart){
        secondChart.stop();
        secondChart.destroy();
    }
    if(thirdChart){
        thirdChart.stop();
        thirdChart.destroy();
    }

    // destroy filter chart
    if(fiveYearsChart){
        fiveYearsChart.stop();
        fiveYearsChart.destroy();
    }
    if(fourYearsChart){
        fourYearsChart.stop();
        fourYearsChart.destroy();
    }
    
    // display filtered chart
    pandemicChart = new Chart(
    document.getElementById('myChart'),
    configFirstG
    );
});