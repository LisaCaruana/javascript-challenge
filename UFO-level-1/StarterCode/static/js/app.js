// from data.js
var tbody = d3.select("tbody");


function build_table(tableData) {
  tbody.html("");
  tableData.forEach((report_entry) => {
    var row = tbody.append("tr");
    Object.values(report_entry).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
};

var button = d3.select("#btn btn-default");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  var filtered_data = data;
  d3.event.preventDefault();

  var form_input = d3.select("#datetime").property("value");

  if (form_input) {
    filtered_data=filtered_data.filter(item => item.datetime===form_input)
  };
  
  build_table(filtered_data);
};

d3.select("#filter-btn").on("click", runEnter)
build_table(data);


// Extra code 
// Need to build full table 
//recreation of the table needs to be attached to the filter event 
//   d3.select('h1').text(input_value);
  
//   var filtered_data=data.filter(alienReport => alienReport.datetime==input_value)
//     filtered_report.forEach((filtered_data) => {
//       var row = tbody.append("tr");
//       Object.entries(filtered_data).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//   //     };


//  console.log(full_report); 
// console.log(filtered_report);
  // console.log(full_report)


// var input_date=d3.select("#datetime").property("value")
// var button=d3.select("#filter=btn")
// button.on("click", function(){console.log("clicked")});

  // var input_d3=d3.select("date-form-input");
  // var form_input = d3.select_all("1/11/2011");

  // var input_value= inputElement.property("datetime");
  // var input_value= inputElement.property("value");
  // var input_value= input_d3.property("value");
  // console.log(input_value);

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

// tableData.filter(incident=>function(incident{})