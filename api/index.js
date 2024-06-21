const newsApiKey = '80b62bc3c180481884cb5914fb558b7e';
const newsApiBaseUrl = 'https://newsapi.org/v2';

// Fetch top headlines
function fetchNewsHeadlines(country = 'us', category = 'general') {
    const url = `${newsApiBaseUrl}/top-headlines?country=${country}&category=${category}&apiKey=${newsApiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news: ', error));
}

function searchNews(keyword) {
    const url = `${newsApiBaseUrl}/everything?q=${keyword}&apiKey=${newsApiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error searching news: ', error));
}

function fetchNewsBySource(sourceId) {
    const url = `${newsApiBaseUrl}/top-headlines?sources=${sourceId}&apiKey=${newsApiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news from source: ', error));
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = articles.map(article => `
        <div class="news-article">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage || 'placeholder.jpg'}" alt="${article.title}">
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join('');
}

fetchNewsHeadlines();
