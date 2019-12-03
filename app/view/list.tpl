<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
    <style>
        ul {
            width : 60%;
            margin : 0 auto;
        }
        li {
            list-style : none;
        }
        li img {
            display : block;
            max-width : 100%;
        }
        li p {
            line-height : 32px;
        }
    </style>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
            <img src="{{ item.imgurl}}" />
            <p>{{ item.imgauthor}}</p>
            <p>{{ item.word }}</p>
            <P>{{ item.date }}</P>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>