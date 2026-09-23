/** @type {import('next').NextConfig} */
const repoName = "about-me"; // must match the GitHub repo name (Pages project site)

const nextConfig = {
  output: "export", // static export -> ./out, needed for GitHub Pages
  basePath: `/${repoName}`,
  images: {
    unoptimized: true, // next/image optimization needs a server, GH Pages is static
  },
};

export default nextConfig;
