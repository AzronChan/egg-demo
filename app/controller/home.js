'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    this.ctx.body = '<p>Hello World</p>';
    this.ctx.body += `isIos : ${this.ctx.isIOS}`;
  }
}

module.exports = HomeController;
