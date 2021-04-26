// from data.js
let tableData = data;

// get reference table body
let tbody = d3.select('tbody');

// print table data to console
console.log(data);

// create array with data's column names
let columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

// loop through data table and add each row to table on webpage
function loadData(){
    tableData.forEach(aliens => {
        let row = tbody.append('tr')
        columns.forEach(column => {
            if(column == 'city' || column == 'state' || column == 'country'){
                row.append('td').text(aliens[column].toUpperCase())
            }
            else row.append('td').text(aliens[column])
        })
    })
}

// call the function to load data 
loadData()

// get reference to input elements using id property
let inputDate = d3.select('#datetime');
let inputCity = d3.select('#city');
let inputState = d3.select('#state');
let inputCountry = d3.select('#country');
let inputShape = d3.select('#shape');

// get reference to filter button using id property
