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
      {
        source: `/member/v1.0/login`,
        destination: `http://oedev-env.eba-v7zmmcrc.ap-northeast-2.elasticbeanstalk.com/api/member/v1.0/login`,
      },
      {
        source: `/store/v1.0/register`,
        destination: `http://oedev-env.eba-v7zmmcrc.ap-northeast-2.elasticbeanstalk.com/api/store/v1.0/register`,
      },
      {
        source: "/addresApi/:path",
        destination: `http://www.juso.go.kr/:path*`,
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
