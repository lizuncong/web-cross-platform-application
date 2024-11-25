## 环境
- node：16

## 运行
- npm install
- npm run start
## 使用
- public/base.html。用简单的html验证浏览器原生支持window.open的特性
- public/改进.html。基于base.html的改进版，解决了关闭再打开子窗口时，点击事件失效的问题
- 如果需要体验window open的工程化应用，运行npm run start即可，同时需要结合[electron-app](https://github.com/lizuncong/electron-app/tree/share-demo)这个electron项目。记得需要确保两个项目都在share-demo分支