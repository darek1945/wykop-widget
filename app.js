const articlesList = document.getElementById('articles-list');
const microblogList = document.getElementById('microblog-list');

async function fetchArticles() {
    const response = await fetch('https://api.wykop.pl/articles/latest'); // Replace with actual endpoint
    const articles = await response.json();
    articlesList.innerHTML = articles.map(article => `<li>${article.title}</li>`).join('');
}

async function fetchMicroblogPosts() {
    const response = await fetch('https://api.wykop.pl/microblog/latest'); // Replace with actual endpoint
    const posts = await response.json();
    microblogList.innerHTML = posts.map(post => `<li>${post.content}</li>`).join('');
}

fetchArticles();
fetchMicroblogPosts();
setInterval(fetchArticles, 300000); // Refresh every 5 minutes
setInterval(fetchMicroblogPosts, 300000); // Refresh every 5 minutes

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
        console.log('Service Worker registration failed:', error);
    });
}