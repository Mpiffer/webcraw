# Personal Website and Web Scraper

This project consists of a simple personal website and a web scraping tool to extract data from Reddit.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- Scrapy
- A modern web browser

### Installing

1. Clone the repository
```
git clone https://github.com/yourusername/your-repo-name.git
```

2. Install Python dependencies
```
pip install -r requirements.txt
```

3. Open the `personal_website/index.html` file in your web browser to view the website.

### Running the Web Scraper

1. Navigate to the `web_scraper` directory
```
cd web_scraper
```

2. Run the scraper
```
scrapy runspider reddit_spider.py
```

The scraped data will be stored in a JSON file in the `web_scraper` directory.

## Built With

- [Python](https://www.python.org/) - The language used to build the web scraper
- [Scrapy](https://scrapy.org/) - The web scraping framework used
- [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used to build the personal website
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework used for styling the website

## Authors

- Your Name

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to Reddit for providing a platform to scrape data from.