module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com','gitlab.com'],
  },
}

const { withKeystone } = require("@keystone-6/core/next");
  module.exports = withKeystone({
    reactStrictMode: true,
});
