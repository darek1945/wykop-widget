# Wykop Widget

This repository contains a Progressive Web App (PWA) for displaying the latest articles and microblog posts from Wykop.pl. It also includes a Docker and Nginx proxy setup to handle CORS issues when accessing the Wykop API.

## Features

- Displays the latest articles from Wykop.pl
- Displays the latest microblog posts from Wykop.pl
- Automatically refreshes the content every 5 minutes
- Uses a Docker and Nginx proxy to handle CORS issues

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setting Up the Proxy

1. **Clone the repository**:

    ```bash
    git clone https://github.com/darek1945/wykop-widget.git
    cd wykop-widget/wykop-proxy
    ```

2. **Build and start the Docker Compose setup**:

    ```bash
    docker-compose up --build -d
    ```

This command will build the Docker image and start the Nginx proxy server on port 8080 of your local machine.

### Updating the PWA

1. **Update `app.js` to use the proxy server**:

    Make sure the `app.js` file in your PWA project uses the proxy server:

    ```javascript
    const proxyUrl = 'http://localhost:8080';

    async function fetchArticles() {
        const response = await fetch(`${proxyUrl}/api/v3.0/articles/latest`);
        const articles = await response.json();
        articlesList.innerHTML = articles.map(article => `<li>${article.title}</li>`).join('');
    }

    async function fetchMicroblogPosts() {
        const response = await fetch(`${proxyUrl}/api/v3.0/microblog/latest`);
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
    ```

### Deploying the PWA

1. **Commit and push your changes**:

    ```bash
    git add .
    git commit -m "Set up proxy and update PWA"
    git push origin main
    ```

2. **Configure GitHub Pages**:

    - Go to your repository settings on GitHub.
    - Scroll down to the "GitHub Pages" section.
    - Under "Source", select the branch you want to deploy from (usually `main` or `master`).
    - Save the settings. GitHub Pages will now build and deploy your site.

3. **Access your PWA**:

    Visit `https://darek1945.github.io/wykop-widget/` to see your PWA in action.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.