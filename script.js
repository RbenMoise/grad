console.log("JavaScript file is working!");
/*
function validate() {
  var username = document.getElementsByClassName("username");
  var pass = document.getElementsByClassName("pass");

  if (username.value == "" || pass.value == "") {
    alert("Please fill all fields");
    return false;
  } else {
    true;
  }
}

//js for the date input field
document.getElementById("dateinput").addEventListener("click", function () {
  this.setAttribute("placeholder", "");
});

// JavaScript function to add placeholders to table cells
function addPlaceholders() {
  var table = document.getElementById("coursetable");
  var cells = table.getElementsByTagName("td");

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    var placeholderText = cell.getAttribute("data-placeholder");
    cell.textContent = placeholderText;
  }
}

// Get the current year
var currentYear = new Date().getFullYear();

// Set the range of years you want to display (e.g., 2000 to 2030)
var startYear = 2000;
var endYear = 2030;

// Get the select element
var yearSelect = document.getElementById("yearSelect");

// Populate the select element with options for the range of years
for (var year = startYear; year <= endYear; year++) {
  var option = document.createElement("option");
  option.value = year;
  option.text = year;
  yearSelect.appendChild(option);
}

// Set a default selected year (optional)
var defaultYear = currentYear;
yearSelect.value = defaultYear;

// Get elements by their IDs
var userIcon = document.getElementById("userIcon");
var userDetails = document.getElementById("userDetails");
var updateButton = document.getElementById("updateButton");

// Function to toggle the visibility of user details
function toggleUserDetails() {
  if (userDetails.style.display === "none") {
    userDetails.style.display = "block";
  } else {
    userDetails.style.display = "none";
  }
}

// Add a click event handler to the user icon
userIcon.addEventListener("click", toggleUserDetails);

// Add an event listener to the "Update" button
updateButton.addEventListener("click", function () {
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;

  // You can perform actions like updating the user's details here
  // For example, sending the data to a server or updating the UI

  // For now, let's display the updated details in an alert
  alert("Updated User Details:\nName: " + userName + "\nEmail: " + userEmail);
});*/

//for the form
const form = document.querySelector("form"),
  nextbtn = form.querySelector(".nextbtn"),
  backbtn = form.querySelector(".backbtn"),
  allinput = form.querySelectorAll(".first input");

nextbtn.addEventListener("click", () => {
  allinput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
      alert("input is empty");
    }
  });
});
backbtn.addEventListener("click", () => form.classList.remove("secActive"));
