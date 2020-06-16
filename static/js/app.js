// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

//function to Loop Through `data` and append to table in html using 'Object.entries'
function createTable() {
    data.forEach((encounter) => {
        var row = tbody.append("tr");
        Object.entries(encounter).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

createTable(tableData)


// Select the button and user input
var button = d3.select("#filter-btn");
var userInput = d3.select("#datetime");

function handleClick() {

    button.on("click", function() {
        //prevent page from refreshing only table
        d3.event.preventDefault();

        // Get the value property of the input element
        let inputValue = userInput.property("value");

        console.log(inputValue);

        //filter data based on input value
        var filteredData = tableData.filter(encounter => encounter.datetime === inputValue);

        console.log(filteredData);

        // clear table info before appending filtered data
        tbody.html(``);

        //display new table
        // adding filtered data
        filteredData.forEach( item => {
            var tr = tbody.append('tr');
            tr.append('td').text(item.datetime);
            tr.append('td').text(item.city);
            tr.append('td').text(item.state);
            tr.append('td').text(item.country);
            tr.append('td').text(item.shape);
            tr.append('td').text(item.durationMinutes);
            tr.append('td').text(item.comments);
        });

    });
};
userInput.on("change", handleClick);