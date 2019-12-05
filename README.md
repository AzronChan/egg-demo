# egg-demo


# 目录结构

约定俗成的目录结构

```
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js (用于配置 URL 路由规则)
│   ├── controller (用于解析用户的输入，处理后返回相应的结果)
│   |   └── home.js
│   ├── service (可选，用于编写业务逻辑层，可选，建议使用)
│   |   └── user.js
│   ├── middleware (可选，用于编写中间件)
│   |   └── response_time.js
│   ├── schedule (可选，用于定时任务)
│   |   └── my_task.js
│   ├── public (可选，用于放置静态资源)
│   |   └── reset.css
│   ├── view (可选，用于放置模板文件)
│   |   └── home.tpl
│   └── extend (可选，用于框架的扩展)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config (用于编写配置文件)
|   ├── plugin.js (用于配置需要加载的插件)
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```


# 内置对象


## Controller

框架提供了一个 Controller 基类，并推荐所有的 Controller 都继承于该基类实现。这个 Controller 基类有下列属性：

- ctx - 当前请求的 Context 实例。
- app - 应用的 Application 实例。
- config - 应用的配置。
- service - 应用所有的 service。
- logger - 为当前 controller 封装的 logger 对象。

```
const Controller = require('egg').Controller;

class HomeController extends Controller {
  index() {
    //this.ctx
    //this.app
    //this.config
    //this.service
    //this.logger
  }
}

module.exports = HomeController;
```

## Request & Response

可以在 Context 的实例上获取到当前请求的 Request(ctx.request) 和 Response(ctx.response) 实例。

```
class HomeController extends Controller {
  index() {
    //this.ctx.request
  }
}
```

## Helper

可以在 Context 的实例上获取到当前请求的 Helper(ctx.helper) 实例。


```
class HomeController extends Controller {
  index() {
    //this.ctx.helper
  }
}
```


# config

我们可以通过 `app.config` 从 `Application` 实例上获取到 `config` 对象，也可以在 Controller, Service, Helper 的实例上通过 `this.config` 获取到 config 对象。


```
class HomeController extends Controller {
  index() {
    //this.config
  }
}
```
