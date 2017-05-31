/**
 * Created by zivlevy on 27/05/2017.
 */

// graph data
let data = [50, 82, 30, 70, 5, 90, 12];

// create simple lables
let labels = [];
for (let i = 0; i < data.length; i++) {
    labels.push(i + 1);
}

// create random colors - this is in a separate for loop just for readability
let colors = [];
for (let i = 0; i < data.length; i++) {
    colors.push(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`);
}

// get the canvas
let ctx = document.getElementById("myChart");

// create the graph
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors,
            borderWidth: 2
        }]
    },
    options: {
        legend: {display: false},
        // responsive:false, //<====  play with this to see what happens
        layout: {padding: {left: 50, right: 50, top: 30, bottom: 0}}
    }

});