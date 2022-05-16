## 开发问题
 1. css单个文件引入报错Global CSS cannot be imported from files other than your Custom <App>. Due to the Global nature of stylesheets, and to avoid conflicts, Please move all first-party global CSS imports to pages/_app.js. Or convert the import to Component-Level CSS (CSS Modules).

 解决：在next.config.js配置(但是是会冒出webpack的问题暂未解决) 使用css module进行解决
 const withSass = require('@zeit/next-sass')
  module.exports = withSass({
    cssModules: true
  })

  2. 头部导航点击问题