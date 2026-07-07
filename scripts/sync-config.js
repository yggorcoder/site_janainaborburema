import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "../business.config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const siteUrl = (process.env.VITE_SITE_URL ?? config.siteUrl).replace(/\/$/, "");

// robots.txt + sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

// vercel.json — redirect apex → www
const vercelConfig = {
  redirects: [
    {
      source: "/:path*",
      has: [{ type: "host", value: config.domainApex }],
      destination: `${siteUrl}/:path*`,
      permanent: true,
    },
  ],
};

fs.writeFileSync(
  path.join(root, "vercel.json"),
  JSON.stringify(vercelConfig, null, 2) + "\n"
);

// index.html — gerado a partir de index.template.html (não edite manualmente)
const templatePath = path.join(root, "index.template.html");
let indexHtml = fs.readFileSync(templatePath, "utf8");

const replacements = {
  "%SITE_TITLE%": config.seo.title,
  "%SITE_DESCRIPTION%": config.seo.description,
  "%SITE_URL%": siteUrl,
  "%OG_TITLE%": config.seo.ogTitle,
  "%OG_DESCRIPTION%": config.seo.ogDescription,
  "%TWITTER_DESCRIPTION%": config.seo.twitterDescription,
  "%SITE_NAME%": config.name,
};

for (const [key, value] of Object.entries(replacements)) {
  indexHtml = indexHtml.split(key).join(value);
}

fs.writeFileSync(path.join(root, "index.html"), indexHtml);

console.log(`✓ Config sincronizada para ${siteUrl}`);
