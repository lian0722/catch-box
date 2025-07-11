// API配置文件
const API_CONFIG = {
    DEEPSEEK_API_KEY: "", // 密钥请放在.env文件，不要写在这里
    DEEPSEEK_API_ENDPOINT: "https://api.deepseek.com/v1/chat/completions",
    MODEL_NAME: "deepseek-chat", // deepseek官方模型名
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.7,
    TIMEOUT: 30000,
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
} 