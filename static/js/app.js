// Starter Code
let tableData = data;

// Creating References
let $tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputFieldDate = d3.select("#datetime");
let inputFieldCity = d3.select("#city");


let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(columns);


// Inputing the data into the HTML
let addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}
addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {
    d3.event.preventDefault();
    
    let inputDate = inputDate.property("value").trim();
    let inputCity = inputCity.property("value").toUpperCase().trim();
    let inputState = inputState.property("value").toUpperCase().trim();
    let inputCountry = inputCountry.property("value").toUpperCase().trim();
    let inputShape = inputShape.property("value").toUpperCase().trim();
    
    let filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    let filterCity = tableData.filter(tableData => tableData.city === inputCity);
    let filterState = tableData.filter(tableData => tableData.state === inputState);
    let filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    let filterShape = tableData.filter(tableData => tableData.shape === inputShape);

    let filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity && tableData.state === inputState && tableData.country === inputCountry && tableData.shape === inputShape);
    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombinedData
    }

    // let response = {
    //     filterDate, filterCity, filterCombinedData, filterState, filterCountry, filterShape
    // }

    // if(response.filterDate.length !== 0) {
    //     addData(filterDate);
    // }

    // Top if only works for filtering the date
    // Need to accommodate for combining multiple filters, needed to create a new var for it
    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }

    // else if(response.filterCity.length !== 0){
    //     addData(filterCity);
    // }
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }

        // else if(response.filterCombinedDateState.length === 0 && ((response.filterDate.length !== 0 || response.filterState.length !== 0))) {
        //     addData(filterDate) || addData(filterState);
        // }

        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})