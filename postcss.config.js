// postcss.config.js
// 375尺寸设计稿
module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  };
// 750尺寸设计稿
// module.exports = {
//   plugins: {
//     // postcss-pxtorem 插件的版本需要 >= 5.0.0
//     'postcss-pxtorem': {
//       rootValue({ file }) {
//         return file.indexOf('vant') !== -1 ? 37.5 : 75;
//       },
//       propList: ['*'],
//     },
//   },
// };

