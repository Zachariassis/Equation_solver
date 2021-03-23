
//Run code on button press or enter
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit", runEnter);
button.on("click", runEnter);

// function runEnter2() {
//     d3.event.preventDefault();
//     var User_input = d3.select('#equation').property('value')
//     console.log(User_input)
// }

function runEnter() {
    d3.event.preventDefault();
    var User_input = d3.select('#equation').property('value')
    $.post("/eq",{
        data: JSON.stringify(User_input)
    }, writeData)
    
}

function writeData(d) {
    console.log(d)
}