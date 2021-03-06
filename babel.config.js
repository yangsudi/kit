/**
 * @description @babel/core配置文件
 * @author aodazhang 2021.01.25
 */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
}
