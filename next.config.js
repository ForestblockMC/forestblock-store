/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/category',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["crafthead.net", "mc-heads.net"]
  },
  env: {
      CurrencyConvertAPI: process.env.NEXT_PUBLIC_CURRENCY_CONVERT_API,
  }
}

module.exports = nextConfig
