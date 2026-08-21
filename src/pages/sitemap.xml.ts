import type { APIRoute } from "astro";
import { products } from "../data/products";
import { caseStudies } from "../data/caseStudies";

export const prerender = true;

export const GET: APIRoute = () => {
  const paths = [
    "/",
    "/products",
    "/research",
    "/engineering",
    "/builds",
    "/about",
    "/contact",
    ...products.map((product) => `/products/${product.slug}`),
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  ];
  const urls = paths.map((path) => `<url><loc>${new URL(path, "https://a3slabs.co.ke").toString()}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
