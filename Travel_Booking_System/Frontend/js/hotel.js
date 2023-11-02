// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const hotelForm = document.getElementById("hotelForm");
    const destinationInput = document.getElementById("destination");
    const checkInDateInput = document.getElementById("checkInDate");
    const checkOutDateInput = document.getElementById("checkOutDate");
    const hotelResults = document.getElementById("hotelResults");
  
    // Event listener for hotel search form submission
    hotelForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validate form inputs
      if (destinationInput.value === "" || checkInDateInput.value === "" || checkOutDateInput.value === "") {
        alert("Please fill in all fields."); // Display an alert if any field is empty
        return;
      }
  
      // Fetch hotel results from the API
      fetchHotelResults(destinationInput.value, checkInDateInput.value, checkOutDateInput.value)
        .then(hotels => {
          // Display hotel search results
          displayHotelResults(hotels);
        })
        .catch(error => {
          // Handle the error here.
        });
    });
  
    // Function to display hotel search results
    function displayHotelResults(hotels) {
      // Clear previous results
      hotelResults.innerHTML = "";
  
      // If there are no hotels, display a message.
      if (hotels.length === 0) {
        hotelResults.innerHTML = "No hotels found for the selected criteria.";
        return;
      }
  
      // Create a table to display hotel results
      const table = document.createElement("table");
      table.classList.add("table");
  
      // Create the table header
      const tableHeader = document.createElement("thead");
      const tableHeaderRow = document.createElement("tr");
  
      const hotelNameHeaderCell = document.createElement("th");
      hotelNameHeaderCell.textContent = "Hotel Name";
      tableHeaderRow.appendChild(hotelNameHeaderCell);
  
      const locationHeaderCell = document.createElement("th");
      locationHeaderCell.textContent = "Location";
      tableHeaderRow.appendChild(locationHeaderCell);
  
      const priceHeaderCell = document.createElement("th");
      priceHeaderCell.textContent = "Price";
      tableHeaderRow.appendChild(priceHeaderCell);
  
      tableHeader.appendChild(tableHeaderRow);
      table.appendChild(tableHeader);
  
      // Create the table body
      const tableBody = document.createElement("tbody");
  
      // Populate the table body with hotel data
      hotels.forEach((hotel) => {
        const tableRow = document.createElement("tr");
  
        const hotelNameCell = document.createElement("td");
        hotelNameCell.textContent = hotel.name;
        tableRow.appendChild(hotelNameCell);
  
        const locationCell = document.createElement("td");
        locationCell.textContent = hotel.location;
        tableRow.appendChild(locationCell);
  
        const priceCell = document.createElement("td");
        priceCell.textContent = hotel.price;
        tableRow.appendChild(priceCell);
  
        tableBody.appendChild(tableRow);
      });
  
      table.appendChild(tableBody);
  
      // Append the table to the DOM
      hotelResults.appendChild(table);
    }
  
    // Function to fetch hotel results from the API
    async function fetchHotelResults(destination, checkInDate, checkOutDate) {
      const response = await axios.get("http://localhost:3000/api/hotels", {
        params: {
          destination,
          checkInDate,
          checkOutDate,
        },
      });
  
      return response.data;
    }
  });
  