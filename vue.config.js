const path = require("path");
const projectRoot = path.resolve(__dirname);
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
    config.resolve.alias.set(
      "@imgs",
      path.join(projectRoot, "src/assets/imgs")
    );
    config.resolve.alias.set(
      "@components",
      path.join(projectRoot, "src/components")
    );
  },
};
