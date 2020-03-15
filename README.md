## mmcs news scraper

<img align="right" width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png">

This project is used to automatically take news from the faculty's website and send them to Telegram's chat room [#mmcsfamily](https://t.me/mmcs_family).

### How it works

The algorithm is simple:
- grab rss feed from the [mmcs site](https://mmcs.sfedu.ru)
- skip news that were previously sent
- write messages with a special _[instant view](https://instantview.telegram.org/)_ link
- send them to the chat [#mmcsfamily](https://t.me/mmcs_family)

This sequence is reflected in the `src/app.js` file:

```js
grabRSS(FEED_URL)
  .then(extractPosts)
  .then(skipExisting)
  .then(ps => console.log(`New posts: ${ps.length}`) || ps)
  .then(sendToChat)
  .then(savePosts)
```

### How to build

There is the `.env.example` file in the project root. Rename it to `.env`, change variables inside, then download all dependencies by `npm i`, and run the app with `npm start` command.

To add a task to cron run `crontab -e`, then add the line:

```
*/30 * * * *   cd /home/xamgore/mmcs-news-scraper/ && /usr/local/bin/node -r ./register.js ./src/index.js
```
