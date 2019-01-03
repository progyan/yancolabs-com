var ctx = document.getElementById('skills').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["JavaScript", "C++", "Java", "Python", "CSS3", "HTML5"],
        datasets: [{
            label: "% of my projects",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [39, 1, 13, 6, 40, 41],
        }]
    },

    // Configuration options go here
    options: {}
});