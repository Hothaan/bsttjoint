/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/bstt",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
