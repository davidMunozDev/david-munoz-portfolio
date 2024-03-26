/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  compiler: {},
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles/")],
  },
};
