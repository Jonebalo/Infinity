    document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const products = [
        { name: 'Producto 1', price: 19.99 },
        { name: 'Producto 2', price: 29.99 },
        { name: 'Producto 3', price: 39.99 },
        // Agrega más productos a tu base de datos
    ];

    const results = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No se encontraron resultados.';
    } else {
        results.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `<p>${product.name} - $${product.price}</p>`;
            resultsContainer.appendChild(productElement);
        });
    }
}
