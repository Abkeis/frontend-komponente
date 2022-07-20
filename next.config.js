module.exports = {
  env: {
    WP_API_URL: process.env.WP_API_URL,
    FRONTEND_URL: process.env.WP_FRONTEND_URL,
    BUILD_ALL_POST: process.env.BUILD_ALL_POST,
  },
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: process.env.IMAGES_DOMAINS.split(","),
    deviceSizes: [375, 450, 640, 768, 850, 1024, 1200, 1400, 1920, 2048],
  },
  compress: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
