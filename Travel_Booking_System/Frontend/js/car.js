// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const carForm = document.getElementById("carForm");
    const pickupLocationInput = document.getElementById("pickupLocation");
    const dropoffLocationInput = document.getElementById("dropoffLocation");
    const pickupDateInput = document.getElementById("pickupDate");
    const carResults = document.getElementById("carResults");

    // Event listener for car search form submission
    carForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form inputs
        if (pickupLocationInput.value === "" || dropoffLocationInput.value === "" || pickupDateInput.value === "") {
            alert("Please fill in all fields."); // Display an alert if any field is empty
            return;
        }

        // Simulate car search (replace with actual API request)
        const pickupLocation = pickupLocationInput.value;
        const dropoffLocation = dropoffLocationInput.value;
        const pickupDate = pickupDateInput.value;

        // Replace this with an actual API request to fetch car results
        // Example: fetchCarResults(pickupLocation, dropoffLocation, pickupDate);

        // Display car search results (mock data)
        displayCarResults(pickupLocation, dropoffLocation, pickupDate);
    });

    // Function to display car search results (replace with actual results)
    function displayCarResults(pickupLocation, dropoffLocation, pickupDate) {
        // Clear previous results
        carResults.innerHTML = "";

        // Mock car rental data (replace with actual data from API)
        const mockCars = [
            { make: "Car Brand A", model: "Model X", capacity: "4 passengers", price: "$50/day" },
            { make: "Car Brand B", model: "Model Y", capacity: "5 passengers", price: "$60/day" },
            { make: "Car Brand C", model: "Model Z", capacity: "7 passengers", price: "$70/day" },
        ];

        if (mockCars.length === 0) {
            carResults.innerHTML = "No cars found for the selected criteria.";
        } else {
            // Create a table to display car results
            const table = document.createElement("table");
            table.classList.add("car-table");

            // Create table headers
            const tableHeaders = ["Make", "Model", "Capacity", "Price"];
            const headerRow = document.createElement("tr");

            tableHeaders.forEach((headerText) => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            table.appendChild(headerRow);

            // Populate the table with car data
            mockCars.forEach((car) => {
                const row = document.createElement("tr");
                for (const key in car) {
                    const cell = document.createElement("td");
                    cell.textContent = car[key];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            });

            carResults.appendChild(table);
        }
    }
});
