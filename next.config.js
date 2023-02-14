/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: `/member/v1.0/join`,
        destination: `http://oedev-env.eba-v7zmmcrc.ap-northeast-2.elasticbeanstalk.com/api/member/v1.0/join`,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
//http://oedev-env.eba-v7zmmcrc.ap-northeast-2.elasticbeanstalk.com/api/member/v1.0/join
module.exports = nextConfig;
