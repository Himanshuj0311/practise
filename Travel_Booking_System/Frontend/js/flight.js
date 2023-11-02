// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const flightForm = document.getElementById("flightForm");
    const departureInput = document.getElementById("departure");
    const destinationInput = document.getElementById("destination");
    const dateInput = document.getElementById("date");
    const searchButton = document.getElementById("searchButton");
    const flightResults = document.getElementById("flightResults");

    // Event listener for form submission
    flightForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form inputs
        if (departureInput.value === "" || destinationInput.value === "" || dateInput.value === "") {
            alert("Please fill in all fields."); // Display an alert if any field is empty
            return;
        }

        // Simulate flight search (replace with actual API request)
        const departure = departureInput.value;
        const destination = destinationInput.value;
        const date = dateInput.value;

        // Replace this with an actual API request to fetch flight results
        // Example: fetchFlightResults(departure, destination, date);

        // Display flight results (mock data)
        displayFlightResults(departure, destination, date);
    });

    // Function to display flight results (replace with actual results)
    function displayFlightResults(departure, destination, date) {
        // Clear previous results
        flightResults.innerHTML = "";

        // Mock flight data (replace with actual data from API)
        const mockFlights = [
            { airline: "Airline A", departure: "City X", destination: "City Y", departureTime: "08:00 AM", price: "$200" },
            { airline: "Airline B", departure: "City X", destination: "City Y", departureTime: "09:30 AM", price: "$250" },
            { airline: "Airline C", departure: "City X", destination: "City Y", departureTime: "11:15 AM", price: "$180" },
        ];

        if (mockFlights.length === 0) {
            flightResults.innerHTML = "No flights found for the selected criteria.";
        } else {
            // Create a table to display flight results
            const table = document.createElement("table");
            table.classList.add("flight-table");

            // Create table headers
            const tableHeaders = ["Airline", "Departure", "Destination", "Departure Time", "Price"];
            const headerRow = document.createElement("tr");

            tableHeaders.forEach((headerText) => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            table.appendChild(headerRow);

            // Populate the table with flight data
            mockFlights.forEach((flight) => {
                const row = document.createElement("tr");
                for (const key in flight) {
                    const cell = document.createElement("td");
                    cell.textContent = flight[key];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            });

            flightResults.appendChild(table);
        }
    }
});
