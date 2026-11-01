/*!
 * Cấu hình trợ lý AI Klyro.
 *
 * Mặc định trợ lý chạy hoàn toàn trong trình duyệt bằng kho kiến thức của
 * website (không gửi dữ liệu ra ngoài). Để dùng mô hình ngôn ngữ thật, hãy
 * trỏ `endpoint` tới một proxy/Apps Script giữ khóa API ở phía máy chủ.
 *
 * KHÔNG đặt khóa API bí mật trong tệp này: mọi mã chạy trong trình duyệt đều
 * có thể bị người dùng đọc được.
 *
 * Ví dụ dùng Google Apps Script đã có của Klyro (xem apps-script/ai-chat.gs):
 *   role: 'apps-script',
 *   endpoint: 'https://script.google.com/macros/s/.../exec',
 *   model: '' (máy chủ tự chọn)
 *
 * Ví dụ dùng proxy tương thích OpenAI:
 *   role: 'openai',
 *   endpoint: 'https://your-proxy.example.com/v1/chat/completions',
 *   model: 'gpt-4o-mini'
 */
window.KLYRO_AI_CONFIG = Object.freeze({
  enabled: true,

  /* 'local' = chỉ dùng kho kiến thức trên máy; 'auto' = dùng endpoint nếu có. */
  mode: 'auto',

  /* 'auto' | 'apps-script' | 'openai' */
  role: 'auto',
  endpoint: '',
  model: '',

  /* Chỉ dùng cho môi trường thử nghiệm. Ưu tiên proxy giữ khóa phía máy chủ. */
  apiKey: '',

  requestTimeoutMs: 20000,
  maxInputChars: 800,
  maxHistory: 8,
  persistHistory: true
});
