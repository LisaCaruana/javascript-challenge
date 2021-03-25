// from data.js
var tbody = d3.select("tbody");

// Console.log the weather data from data.js

data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
//   var button = d3.select("#button");
//   button.on("click", runEnter);
//   function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#patient-form-input");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     var filteredData = people.filter(person => person.bloodType === inputValue);

//     console.log(filteredData);  
//   list.html("");
// YOUR CODE HERE!
// Need to put something on filter button to filter out results that don't match input
// Not a deletion of rows, but a creation of a new table that matches the input
// 
var input_date=d3.select('#datetime').property('value')
var button=d3.select('#filter-btn')
button.on('click', function(){console.log(input_date)})
//recreation of the table needs to be attached to the event

// tableData.filter()


//most of the array methods return another array