// Pings Bing/Yandex IndexNow with every URL from the live sitemap.
// Run after deploying: `npm run seo:ping`
// Docs: https://www.indexnow.org/documentation

const SITE_URL = "https://www.damangame.co.in";
const INDEXNOW_KEY = "c37418b543eb4ceebfe607e59f9460cf";

async function main() {
  const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(
      `Could not fetch sitemap at ${SITE_URL}/sitemap.xml (status ${sitemapRes.status}). Deploy the site first.`,
    );
  }
  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    throw new Error("No <loc> entries found in sitemap.xml");
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  console.log(`Submitted ${urlList.length} URLs — IndexNow responded ${res.status}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
