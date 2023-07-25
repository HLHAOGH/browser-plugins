### 该扩展程序为一个简单版时钟浏览器插件
#### 程序目录结构描述如下：

- manifest.json: 插件配置文件；
- icon.png: 插件图标；
- popup.html: 背景页；
- popup.js: 背景页js

注意：
- 不支持内联JavaScript的执行
- 通过content_scripts注入的CSS优先级非常高，几乎仅次于浏览器默认样式