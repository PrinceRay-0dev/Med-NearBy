// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends


//  Sign-In Button Function Starts


function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

function switchTab(tab) {
    if (tab === 'admin') {
        document.getElementById('adminPanel').classList.add('active');
        document.getElementById('userPanel').classList.remove('active');
        document.getElementById('adminTab').classList.add('active');
        document.getElementById('userTab').classList.remove('active');
    } else {
        document.getElementById('userPanel').classList.add('active');
        document.getElementById('adminPanel').classList.remove('active');
        document.getElementById('userTab').classList.add('active');
        document.getElementById('adminTab').classList.remove('active');
    }
}

function checkForm(panel) {
    let isValid = true;
    const fields = panel === 'admin' ? ['adminName', 'adminEmail', 'adminPassword', 'shopName', 'licenseNumber', 'adminContact'] : ['userName', 'userGender', 'userAge', 'userContact', 'userEmail', 'userPassword'];

    for (let field of fields) {
        const value = document.getElementById(field).value.trim();
        if (!value) {
            isValid = false;
            break;
        }
    }

    document.getElementById(panel + 'Submit').disabled = !isValid;
}

function submitForm(panel) {
    const fields = panel === 'admin' ? ['adminName', 'adminEmail', 'adminPassword', 'shopName', 'licenseNumber', 'adminContact'] : ['userName', 'userGender', 'userAge', 'userContact', 'userEmail', 'userPassword'];

    fields.forEach(field => {
        document.getElementById(field).value = '';
    });

    alert(panel === 'admin' ? 'Admin Panel form submitted!' : 'User Panel form submitted!');
    checkForm(panel);
}

// Sign-In Button Function Ends


// Sample medicine data
const medicines = [
    { name: "Aspirin", composition: "Acetylsalicylic Acid", stock: 50, pharmacies: [
        { name: "Pharmacy 1", location: "Downtown", distance: "1.2 km" },
        { name: "Pharmacy 2", location: "Uptown", distance: "3.5 km" }
    ] },
    { name: "Paracetamol", composition: "Acetaminophen", stock: 100, pharmacies: [
        { name: "Pharmacy 3", location: "City Center", distance: "2 km" },
        { name: "Pharmacy 4", location: "East Side", distance: "5 km" }
    ] },
    { name: "Ibuprofen", composition: "Ibuprofen", stock: 75, pharmacies: [
        { name: "Pharmacy 5", location: "West End", distance: "1.8 km" },
        { name: "Pharmacy 6", location: "North Area", distance: "4.2 km" }
    ] },
    { name: "Amoxicillin", composition: "Amoxicillin", stock: 30, pharmacies: [
        { name: "Pharmacy 7", location: "South Park", distance: "2.5 km" },
        { name: "Pharmacy 8", location: "Market Street", distance: "3 km" }
    ] },
    { name: "Ciprofloxacin", composition: "Ciprofloxacin", stock: 40, pharmacies: [
        { name: "Pharmacy 9", location: "Riverbend", distance: "1.3 km" },
        { name: "Pharmacy 10", location: "Greenwich", distance: "2.8 km" }
    ] },
    { name: "Diphenhydramine", composition: "Diphenhydramine", stock: 60, pharmacies: [
        { name: "Pharmacy 11", location: "Broadway", distance: "1.9 km" },
        { name: "Pharmacy 12", location: "Sunset Blvd", distance: "4 km" }
    ] },
    { name: "Omeprazole", composition: "Omeprazole", stock: 25, pharmacies: [
        { name: "Pharmacy 13", location: "Lakeside", distance: "1.1 km" },
        { name: "Pharmacy 14", location: "City Park", distance: "3.3 km" }
    ] },
    { name: "Lisinopril", composition: "Lisinopril", stock: 80, pharmacies: [
        { name: "Pharmacy 15", location: "Maple Street", distance: "2.2 km" },
        { name: "Pharmacy 16", location: "North Hills", distance: "5 km" }
    ] },
    { name: "Metformin", composition: "Metformin", stock: 90, pharmacies: [
        { name: "Pharmacy 17", location: "Park Avenue", distance: "2.7 km" },
        { name: "Pharmacy 18", location: "Main Road", distance: "3.9 km" }
    ] },
    { name: "Furosemide", composition: "Furosemide", stock: 35, pharmacies: [
        { name: "Pharmacy 19", location: "Old Town", distance: "1.6 km" },
        { name: "Pharmacy 20", location: "Westfield", distance: "2.5 km" }
    ] },
    { name: "Alprazolam", composition: "Alprazolam", stock: 50, pharmacies: [
        { name: "Pharmacy 21", location: "Riverfront", distance: "1.8 km" },
        { name: "Pharmacy 22", location: "East Hill", distance: "4.5 km" }
    ] },
    { name: "Atorvastatin", composition: "Atorvastatin", stock: 70, pharmacies: [
        { name: "Pharmacy 23", location: "Ocean Drive", distance: "3.2 km" },
        { name: "Pharmacy 24", location: "Downtown East", distance: "2.8 km" }
    ] },
    { name: "Clonazepam", composition: "Clonazepam", stock: 85, pharmacies: [
        { name: "Pharmacy 25", location: "Hilltop", distance: "4.0 km" },
        { name: "Pharmacy 26", location: "Green Park", distance: "1.9 km" }
    ] },
    { name: "Fluoxetine", composition: "Fluoxetine", stock: 65, pharmacies: [
        { name: "Pharmacy 27", location: "Town Square", distance: "1.4 km" },
        { name: "Pharmacy 28", location: "Broad Street", distance: "3.6 km" }
    ] },
    { name: "Hydrochlorothiazide", composition: "Hydrochlorothiazide", stock: 55, pharmacies: [
        { name: "Pharmacy 29", location: "Beachfront", distance: "2.1 km" },
        { name: "Pharmacy 30", location: "Parkview", distance: "4.3 km" }
    ] },
    { name: "Gabapentin", composition: "Gabapentin", stock: 40, pharmacies: [
        { name: "Pharmacy 31", location: "Market Square", distance: "1.7 km" },
        { name: "Pharmacy 32", location: "South Hill", distance: "3.1 km" }
    ] },
    { name: "Carvedilol", composition: "Carvedilol", stock: 45, pharmacies: [
        { name: "Pharmacy 33", location: "Springfield", distance: "2.3 km" },
        { name: "Pharmacy 34", location: "Woodland", distance: "3.2 km" }
    ] },
    { name: "Prednisone", composition: "Prednisone", stock: 50, pharmacies: [
        { name: "Pharmacy 35", location: "Lakeshore", distance: "1.4 km" },
        { name: "Pharmacy 36", location: "Crescent City", distance: "2.9 km" }
    ] },
    { name: "Zolpidem", composition: "Zolpidem", stock: 60, pharmacies: [
        { name: "Pharmacy 37", location: "Sunshine Bay", distance: "1.6 km" },
        { name: "Pharmacy 38", location: "Valley Street", distance: "3.5 km" }
    ] },
    { name: "Cetirizine", composition: "Cetirizine", stock: 95, pharmacies: [
        { name: "Pharmacy 39", location: "King Street", distance: "2.4 km" },
        { name: "Pharmacy 40", location: "Riverwood", distance: "4.0 km" }
    ] },
    { name: "Levothyroxine", composition: "Levothyroxine", stock: 100, pharmacies: [
        { name: "Pharmacy 41", location: "Highland Park", distance: "1.8 km" },
        { name: "Pharmacy 42", location: "Parkview Hills", distance: "4.7 km" }
    ] },
    { name: "Doxycycline", composition: "Doxycycline", stock: 120, pharmacies: [
        { name: "Pharmacy 43", location: "Oceanview", distance: "3.2 km" },
        { name: "Pharmacy 44", location: "Maple Ridge", distance: "2.1 km" }
    ] },
    { name: "Sildenafil", composition: "Sildenafil", stock: 85, pharmacies: [
        { name: "Pharmacy 45", location: "Hillcrest", distance: "2.7 km" },
        { name: "Pharmacy 46", location: "Seaside", distance: "3.4 km" }
    ] },
    { name: "Lorazepam", composition: "Lorazepam", stock: 50, pharmacies: [
        { name: "Pharmacy 47", location: "Golden Gate", distance: "2.3 km" },
        { name: "Pharmacy 48", location: "Cherry Street", distance: "3.0 km" }
    ] },
    { name: "Tamsulosin", composition: "Tamsulosin", stock: 75, pharmacies: [
        { name: "Pharmacy 49", location: "Maple Grove", distance: "3.0 km" },
        { name: "Pharmacy 50", location: "Sunny Park", distance: "2.0 km" }
    ] },
    { name: "Rosuvastatin", composition: "Rosuvastatin", stock: 90, pharmacies: [
        { name: "Pharmacy 51", location: "Greenwood", distance: "1.9 km" },
        { name: "Pharmacy 52", location: "West River", distance: "3.6 km" }
    ] },
    { name: "Candesartan", composition: "Candesartan", stock: 65, pharmacies: [
        { name: "Pharmacy 53", location: "Eastwood", distance: "2.5 km" },
        { name: "Pharmacy 54", location: "Oakfield", distance: "4.1 km" }
    ] },
    { name: "Etoricoxib", composition: "Etoricoxib", stock: 40, pharmacies: [
        { name: "Pharmacy 55", location: "Riverstone", distance: "1.8 km" },
        { name: "Pharmacy 56", location: "Hillcrest", distance: "2.7 km" }
    ] },
    { name: "Clarithromycin", composition: "Clarithromycin", stock: 60, pharmacies: [
        { name: "Pharmacy 57", location: "Redwood", distance: "1.3 km" },
        { name: "Pharmacy 58", location: "Green Ridge", distance: "4.4 km" }
    ] },
    { name: "Mometasone", composition: "Mometasone", stock: 45, pharmacies: [
        { name: "Pharmacy 59", location: "Parkside", distance: "3.3 km" },
        { name: "Pharmacy 60", location: "Township", distance: "2.8 km" }
    ] }
];


// DOM Elements
const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const resultPanel = document.getElementById('result-panel');
const closeResultBtn = document.getElementById('close-result-btn');
const medicineDetailsElement = document.getElementById('medicine-details');
const medicineSuggestionsElement = document.getElementById('medicine-suggestions');
const medicineListElement = document.getElementById('medicine-list');

// Function to display medicine details in the result panel
function showMedicineDetails(medicine) {
    const pharmacyList = medicine.pharmacies.map(pharmacy => {
        return `<li>${pharmacy.name} - ${pharmacy.location} (${pharmacy.distance})</li>`;
    }).join("");

    medicineDetailsElement.innerHTML = `
        <p><strong>Name:</strong> ${medicine.name}</p>
        <p><strong>Composition:</strong> ${medicine.composition}</p>
        <p><strong>Available Stock:</strong> ${medicine.stock}</p>
        <p><strong>Nearby Pharmacies:</strong></p>
        <ul>${pharmacyList}</ul>
    `;
    resultPanel.style.display = "block"; // Show result panel
}

// Function to hide result panel
function hideResultPanel() {
    resultPanel.style.display = "none";
    searchBar.value = ''; // Clear search field after closing result panel
    medicineSuggestionsElement.innerHTML = ''; // Clear suggestions list
}

// Event listener to close the result panel
closeResultBtn.addEventListener('click', hideResultPanel);

// Function to filter medicines based on the search query
function filterMedicines(query) {
    const filteredMedicines = medicines.filter(medicine => medicine.name.toLowerCase().includes(query.toLowerCase()));

    // Show suggestions
    medicineSuggestionsElement.innerHTML = '';
    if (query.length > 0) {
        filteredMedicines.forEach(medicine => {
            const listItem = document.createElement('li');
            listItem.textContent = medicine.name;
            listItem.addEventListener('click', () => {
                searchBar.value = medicine.name; // Set search field to selected medicine
                showMedicineDetails(medicine); // Show selected medicine details
                medicineSuggestionsElement.innerHTML = ''; // Clear suggestions after selection
                medicineListElement.style.display = 'none'; // Hide suggestions list
            });
            medicineSuggestionsElement.appendChild(listItem);
        });

        if (filteredMedicines.length === 0) {
            medicineSuggestionsElement.innerHTML = '<li>No results found</li>';
        }

        // Show suggestions dropdown
        medicineListElement.style.display = "block";
    } else {
        medicineListElement.style.display = "none"; // Hide suggestions if query is empty
    }
}

// Event listener for the search bar input
searchBar.addEventListener('input', (e) => {
    const query = e.target.value;
    filterMedicines(query);
});

// Event listener for the search button to clear the field after search
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchBar.value.trim();
    const matchedMedicine = medicines.find(medicine => medicine.name.toLowerCase() === query.toLowerCase());

    if (matchedMedicine) {
        showMedicineDetails(matchedMedicine);
        searchBar.value = ''; // Clear search field after search
        medicineSuggestionsElement.innerHTML = ''; // Clear suggestions after search
        medicineListElement.style.display = 'none'; // Hide suggestions dropdown
    } else {
        alert('Medicine not found');
    }
});

// Search-bar Function Ends

// Existing code...
