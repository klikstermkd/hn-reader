# Hacker News Reader

This is a Hacker News Reader which displays the latest
[Hacker News](https://news.ycombinator.com) stories. It uses the
[Hacker News API](https://github.com/HackerNews/API) to fetch the data.

It supports infinite scrolling to fetch older stories, and all stories are
cached in IndexedDB for faster access.

The reader also works offline where it displays the cached stories.

## Setup

To run the project first you have to install its dependencies by running the
command:

```
yarn
```

After that, to run it just type:

```
yarn start
```

This will run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you want to build the app for production and ready for deployment type:

```
yarn build
```

This will create a `build` directory.

## Offline

The reader works offline using a Service Worker for caching static files, and
IndexedDB for caching the stories.

To test the reader offline, first you have to build the app for production
using `yarn build` which will create a `build` directory. After that serve the
static files using some HTTP server, for example https://www.npmjs.com/package/serve.

Then, go to Chrome Dev Tools, Network tab, and check the Offline option.
