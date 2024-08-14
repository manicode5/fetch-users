const apiUrl = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries';

async function fetchCountries() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayCountries(data.data);
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}
function displayCountries(countries) {
    const container = document.getElementById('countriesContainer');
    container.innerHTML = ''; // Clear any existing content
    
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        
        card.innerHTML = `
            <h2>${country.country}</h2>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        `;
        
        container.appendChild(card);
    });
}

fetchCountries();
document.getElementById('sortPopulation').addEventListener('click', () => {
    fetchCountriesSorted();
});

async function fetchCountriesSorted() {
    try {
        const response = await fetch(`${apiUrl}?sort=population&order=desc`);
        const data = await response.json();
        displayCountries(data.data);
    } catch (error) {
        console.error('Error fetching sorted countries:', error);
    }
}
