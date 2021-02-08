// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
  },
};
