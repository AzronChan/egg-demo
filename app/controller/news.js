'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    console.log(ctx.service.news);
    const newsList = await ctx.service.news.list(page);
    await ctx.render('list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
