# 玄学盲盒抽取大师

一个基于AI的玄学盲盒预测网页应用。

## 🚀 快速部署

### 1. 配置API
编辑 `config.js` 文件，将你的DeepSeek API Key填入：

```javascript
const API_CONFIG = {
    DEEPSEEK_API_KEY: "你的实际API Key",  // 替换这里
    DEEPSEEK_API_ENDPOINT: "https://api.deepseek.com/v1/chat/completions",
    // ... 其他配置
};
```

### 2. 部署方式

#### 方式一：直接部署
- 将 `index.html`、`config.js` 上传到任何静态网站托管服务
- 如：GitHub Pages、Vercel、Netlify等

#### 方式二：本地测试
- 直接在浏览器中打开 `index.html` 文件

### 3. 文件说明

- `index.html` - 主页面文件
- `config.js` - API配置文件（包含你的API Key）
- `agent_api_example.js` - Agent API调用示例（可选）

## 🔧 配置说明

### API配置
在 `config.js` 中可以修改：
- `DEEPSEEK_API_KEY` - 你的DeepSeek API Key
- `MODEL_NAME` - 使用的模型名称
- `MAX_TOKENS` - 最大token数
- `TEMPERATURE` - 生成温度

### 安全提醒
⚠️ **重要**：`config.js` 文件包含你的API Key，请确保：
- 不要将API Key提交到公开的代码仓库
- 在生产环境中使用环境变量
- 定期更换API Key

## 📱 功能特性

- 🎯 玄学盲盒预测
- 🔮 AI智能分析
- 📤 一键分享
- 📱 响应式设计
- 🔒 后台API配置

## 🎨 自定义

你可以修改以下部分来自定义应用：

1. **UI样式** - 修改 `index.html` 中的CSS
2. **AI提示词** - 修改JavaScript中的prompt构建部分
3. **API配置** - 修改 `config.js` 文件

## 📞 支持

如有问题，请检查：
1. API Key是否正确配置
2. 网络连接是否正常
3. API配额是否充足 