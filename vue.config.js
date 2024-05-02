module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~mdb-vue-ui-kit/css/mdb.min.css";`
      }
    }
  }
}
