const postCssCustomMedia = require("postcss-custom-media")

module.exports = {
    plugins: {
      autoprefixer: {},
    },
    build: {
        postcss: {
          plugins: {
            "postcss-nested": {},
            "postcss-custom-media": {}
          }
        }
      }
  }