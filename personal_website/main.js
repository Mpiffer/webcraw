// This file is responsible for handling the interactivity of the website

document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run after the DOM has fully loaded
    console.log("DOM fully loaded and parsed");
});

// Function to fetch data from the web scraper
async function fetchData() {
    const response = await fetch('/web_scraper/main.py');
    const data = await response.json();
    return data;
}

// Function to display the scraped data on the website
function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    data.forEach(item => {
        const dataElement = document.createElement('div');
        dataElement.textContent = JSON.stringify(item);
        dataContainer.appendChild(dataElement);
    });
}

// Fetch and display data when the page loads
window.onload = async () => {
    const data = await fetchData();
    displayData(data);
};