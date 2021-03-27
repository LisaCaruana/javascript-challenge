// from data.js
var tbody = d3.select("tbody");


full_report = data.forEach((alienReport) => {
  var row = tbody.append("tr");
  Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
//  console.log(full_report); 
var button = d3.select("#btn btn-default");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  d3.event.preventDefault();

  var form_input = d3.select("datetime").property("value");
  // var input_d3=d3.select("date-form-input");
  // var form_input = d3.select_all("1/11/2011");

  // var input_value= inputElement.property("datetime");
  // var input_value= inputElement.property("value");
  var input_value= input_d3.property("value");
  // console.log(input_value);

  var filtered_report=full_report.filter(input_value => full_report.datetime==input_value);
  // console.log(filtered_report);
  // console.log(full_report)
};


//recreation of the table needs to be attached to the filter event 
//   d3.select('h1').text(input_value);
  
//   var filtered_data=data.filter(alienReport => alienReport.datetime==input_value)
//     filtered_report.forEach((filtered_data) => {
//       var row = tbody.append("tr");
//       Object.entries(filtered_data).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//   //     };






// var input_date=d3.select("#datetime").property("value")
// var button=d3.select("#filter=btn")
// button.on("click", function(){console.log("clicked")});



// alienReport.forEach(incident => functio)


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
// var input_date=d3.select('#datetime').property('value')
// var button=d3.select('#filter-btn')
//   button.on('click', function{console.log(input_date)})
//recreation of the table needs to be attached to the event

// tableData.filter(incident=>function(incident{}))


//most of the array methods return another array