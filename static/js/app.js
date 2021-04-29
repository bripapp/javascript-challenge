// reference tbody, user input, search button, reset button
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#datetime");
let $searchBtn = document.querySelector("#search");
let $resetBtn = document.querySelector("#reset");

// call clickSearch when clicked
$searchBtn.addEventListener("click", clickSearch);

// call clickReset when clicked
$resetBtn.addEventListener("click", clickReset);

// Create a copy of the data
let tableData = data;

// function to build table with unfiltered data
function renderTable() {
  $tbody.innerHTML = "";

  for (var i = 0; i < tableData.length; i++) {

    // current address of object and fields
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);

    // create new row in tbody
    var $row = $tbody.insertRow(i);
      
    // For each field, create new cell and fill with current address value
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// filter data by date input when search button is clicked
function clickSearch() {
  var filterDate = $dateInput.value;

  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };
  renderTable();
}

// clear fields
function clickReset() {
  renderTable();
}

// render table on page load
renderTable();
