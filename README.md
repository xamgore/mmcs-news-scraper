## mmcs news scraper

<img align="right" width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png">

This project is needed to automatically take news from the faculty's website and send them to Telegram's chat room [#mmcsfamily](https://t.me/mmcs_family).

### How it works

The algorithm is simple:
- send a request and pick up the html code from the [mmcs site](https://mmcs.sfedu.ru)
- select the desired information using css-selectors
- remove html-tags, convert text to readable form
- skip news that were previously sent
- send the remaining ones to the chat #mmcsfamily

This sequence is reflected in the `src/app.js` file:

```js
run(scraper)
  .then(prepareText)
  .then(skipExisting)
  .then(ps => console.log(`New posts: ${ps.length}`) || ps)
  .then(sendToChat)
  .then(savePosts)
```

### How to build

There is the `.env.example` file in the project root. Rename it to `.env`, change variables inside, then download all dependencies by `npm i`, and run the app with `npm start` command. Yarn is also supported.
