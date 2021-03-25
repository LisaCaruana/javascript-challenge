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
  var button = d3.select("#button");
  button.on("click", runEnter);
  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#patient-form-input");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filteredData = people.filter(person => person.bloodType === inputValue);

    console.log(filteredData);  
  list.html("");
// YOUR CODE HERE!
