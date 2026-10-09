/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes the whole site to `out/`, ready for Cloudflare Pages.
  // Security headers live in public/_headers (Cloudflare Pages format).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
