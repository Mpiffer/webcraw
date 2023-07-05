import scrapy
from scrapy.http import Request
from web_scraper.items import RedditItem

class RedditSpider(scrapy.Spider):
    name = 'reddit_spider'
    allowed_domains = ['www.reddit.com']
    start_urls = ['http://www.reddit.com/']

    def parse(self, response):
        items = RedditItem()

        data = response.css('div.thing')

        for content in data:
            title = content.css('p.title a::text').get()
            url = content.css('p.title a::attr(href)').get()
            upvotes = content.css('div.score.unvoted::attr(title)').get()

            items['title'] = title
            items['url'] = url
            items['upvotes'] = upvotes

            yield items

        next_page = response.css('span.next-button a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)