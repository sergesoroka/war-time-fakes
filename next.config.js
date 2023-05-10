/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ua", "ru"],
    defaultLocale: "ua",
    localeDetection: false,
  },
}

module.exports = nextConfig
