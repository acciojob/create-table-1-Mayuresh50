function insert_Row() {
    // Get the table
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table (index 0)
    const newRow = table.insertRow(0);

    // Insert two new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set their text content
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
