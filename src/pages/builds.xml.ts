import type { APIRoute } from "astro";
import { buildEntries } from "../data/builds";

export const prerender = true;

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export const GET: APIRoute = () => {
  const items = buildEntries
    .map((entry) => {
      const pubDate = new Date(`${entry.date}T12:00:00Z`).toUTCString();
      return `<item><title>${escapeXml(`${entry.project}: ${entry.title}`)}</title><link>${escapeXml(entry.commitUrl)}</link><guid isPermaLink="true">${escapeXml(entry.commitUrl)}</guid><pubDate>${pubDate}</pubDate><description>${escapeXml(entry.summary)}</description><category>${escapeXml(entry.project)}</category></item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>A3S Labs build log</title><link>https://a3slabs.co.ke/builds</link><description>Repository-grounded product and engineering milestones from A3S Labs.</description><language>en</language>${items}</channel></rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
