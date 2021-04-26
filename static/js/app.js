// from data.js
let tableData = data;

// reference table body
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

// call the function to load the data 
loadData()