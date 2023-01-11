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
      {
        source: '/discord',
        destination: 'https://discord.gg/ayuDv6JXbY',
        permanent: true,
      },
      {
        source: '/devapps',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdHZSnMQPn_1qQIzWj2csiTplmW7g3U7sttf_r8QPvrk0HfuQ/viewform?usp=sf_link',
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
