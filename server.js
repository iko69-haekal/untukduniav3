const sitemap = require("nextjs-sitemap-generator"); // Import the package

const { createServer } = require("http");

const { parse } = require("url");

const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

/*

Here you is you have to use the sitemap function.

Using it here you are allowing to generate the sitemap file

only once, just when the server starts.

*/

sitemap({
  baseUrl: "https://untukdunia.com",
  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
  pagesDirectory: __dirname + "/.next/server/pages",
  targetDirectory: "public/",
  sitemapFilename: "sitemap.xml",
  // Exclude everything that isn't static page
});

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(1234, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:1234");
  });
});
