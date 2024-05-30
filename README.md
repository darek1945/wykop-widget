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
   cd wykop-widget