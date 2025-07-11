// 不安全：前端直写密钥（仅测试用，生产环境请勿使用！）
const API_CONFIG = {
    DEEPSEEK_API_KEY: "sk-602223a5462a419aa3ef51ce5a45eef8", // 直接写在前端，任何人都能看到
    DEEPSEEK_API_ENDPOINT: "https://api.deepseek.com/v1/chat/completions",
    MODEL_NAME: "deepseek-chat",
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.7,
    TIMEOUT: 30000,
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
} 