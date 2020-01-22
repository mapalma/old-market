module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/css/base.scss";
        @import "@/assets/css/main.scss";`,
      },
    }
  }
};