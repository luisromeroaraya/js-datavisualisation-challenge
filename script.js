// REMOTE DATA CHART //
var remoteCanvas = document.createElement("canvas");
remoteCanvas.id = "remoteChart";
var remoteTarget = document.getElementsByTagName("h1");
remoteTarget[0].appendChild(remoteCanvas);
var remoteContainer = document.getElementById("remoteChart");
var remoteChart = new Chart(remoteContainer, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// GET FUNCTIONS //

getColumn = (table, x, y) => {
    var array = [];
    for (var i=y; i < table.rows.length; i++) {
        if (x == 1) {
            array.push(table.rows.item(i).cells.item(x).innerHTML);
        }
        else {
            array.push(parseFloat(table.rows.item(i).cells.item(x).innerHTML));
        }
    }
    return array;
}

getLine = (table, x, y) => {
    var array = [];
    for (var i=y; i < table.rows.item(1).cells.length; i++) {
        array.push(parseFloat(table.rows.item(x).cells.item(i).innerHTML));
    }
    return array;
}

// RANDOM COLOR ARRAY //

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// INLINE DATA CHARTS //

// INSERT FIRST INLINE CANVAS //
var firstCanvas = document.createElement("canvas");
firstCanvas.id = "firstChart";
var firstTarget = document.getElementsByTagName("h3");
firstTarget[0].appendChild(firstCanvas);

// GET FIRST TABLE DATA //
var firstTable = document.getElementById("table1");
var firstYears = [];
for (var i=2; i < firstTable.rows.item(1).cells.length; i++) {
    firstYears.push(firstTable.rows.item(1).cells.item(i).innerHTML);
}
var firstCountries = getColumn(table1, 1, 2);
var firstData = [];
for (var i=2; i<firstYears.length+2; i++) {
    firstData.push(getColumn(table1, i, 2));
}
var firstDataSet = [];
for (var i=0; i<firstYears.length; i++) {
    firstDataSet.push({label: firstYears[i], data: firstData[i], borderColor: colorArray[i], backgroundColor: colorArray[i], fill: false})
}

// CREATE FIRST INLINE CHART //
var firstContainer = document.getElementById("firstChart");
var firstChart = new Chart(firstContainer, {
    type: 'bar',
    data: {
        labels: firstCountries,
        datasets: firstDataSet
    },
    options: {
        legend: {
           position: 'right' // place legend on the right side of chart
        }
    }
});

// INSERT SECOND INLINE CANVAS //
var secondCanvas = document.createElement("canvas");
secondCanvas.id = "secondChart";
var secondTarget = document.getElementsByTagName("h4");
secondTarget[2].appendChild(secondCanvas);

// GET SECOND TABLE DATA //
var secondTable = document.getElementById("table2");
var secondYears = [];
for (var i=2; i < secondTable.rows.item(0).cells.length; i++) {
    secondYears.push(secondTable.rows.item(0).cells.item(i).innerHTML);
}
var secondCountries = getColumn(table2, 1, 1);
var secondData = [];
for (var i=2; i<secondYears.length+2; i++) {
    secondData.push(getColumn(table2, i, 1));
}
var secondDataSet = [];
for (var i=0; i<secondYears.length; i++) {
    secondDataSet.push({label: secondYears[i], data: secondData[i], borderColor: colorArray[i], backgroundColor: colorArray[i], fill: false})
}

// CREATE SECOND INLINE CHART //
var secondContainer = document.getElementById("secondChart");
var secondChart = new Chart(secondContainer, {
    type: 'bar',
    data: {
        labels: secondCountries,
        datasets: secondDataSet
    },
    options: {
        legend: {
           position: 'right' // place legend on the right side of chart
        }
    }
});
