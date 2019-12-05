'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    // 需要翻墙
    console.log(`${serverUrl}`);
    const { data: { newslist } } = await this.ctx.curl(`${serverUrl}`, {
      dataType: 'json',
    });
    console.log(newslist);
    return newslist;
  }
}

module.exports = NewsService;
