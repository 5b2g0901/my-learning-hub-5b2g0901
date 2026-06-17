import React from 'react';

// 1. 宣告網頁作業清單（已將 Weather App 移至最後，並修正所有實體網址連結）
const myProjects = [
  {
    id: 1,
    title: "1. 英文單字學習應用 - WordPulse",
    description: "功能完備的單字卡學習系統，支援字庫管理、收藏單字、核心測驗與拼字輸入練習。",
    tags: ["React", "CSS Grid", "Local Storage"],
    imageUrl: "./English.jpg", 
    projectUrl: "https://5b2g0901.github.io/WordPulse-5b2g0901/", 
    codeUrl: "https://github.com/5b2g0901/WordPulse-5b2g0901"
  },
  {
    id: 2,
    title: "2. 經典踩地雷遊戲 - MineSweeper",
    description: "網頁版經典踩地雷，包含完善的邏輯演算法、旗幟標記功能與勝負判定機制。",
    tags: ["Algorithm", "Game Logic", "JavaScript"],
    imageUrl: "./MineSweeper.jpg",
    projectUrl: "https://5b2g0901.github.io/2026_WATERPUZZLE-1/mine.html", 
    codeUrl: "https://github.com/5b2g0901/2026_WATERPUZZLE-1/blob/main/mine.html" 
  },
  {
    id: 3,
    title: "3. 倒水益智遊戲 - WATER PUZZLE",
    description: "趣味十足的益智倒水解謎遊戲，挑戰杯子之間的液體分配邏輯與關卡設計。",
    tags: ["Logic Puzzle", "UI/UX", "JavaScript"],
    imageUrl: "./WaterPuzzle.jpg",
    projectUrl: "https://5b2g0901.github.io/2026_WATERPUZZLE-1/WaterPuzzle.html", 
    codeUrl: "https://github.com/5b2g0901/2026_WATERPUZZLE-1/blob/main/WaterPuzzle.html" 
  },
  {
    id: 4,
    title: "4. 即時天氣查詢應用 - Weather App", // 👈 Đã chuyển Weather App xuống vị trí cuối cùng
    description: "串接天氣 API 獲取即時氣象資訊，具備簡潔直覺的介面與流暢的數據動態展示。",
    tags: ["Fetch API", "JavaScript", "CSS"],
    imageUrl: "./Weather.jpg", 
    projectUrl: "https://5b2g0901.github.io/WeatherApp/", // 👈 Link chạy bằng gh-pages chuẩn không bị trắng
    codeUrl: "https://github.com/5b2g0901/WeatherApp/tree/week03"
  }
];

function App() {
  return (
    <div style={{
      fontFamily: "'PingFang TC', 'Microsoft JhengHei', sans-serif",
      backgroundColor: "#fef08a", // 主色調：陽光黃
      minHeight: "100vh",
      padding: "40px 20px",
      boxSizing: "border-box",
      color: "#1e293b"
    }}>
      
      {/* 學生個人資訊欄 */}
      <div style={{
        backgroundColor: "#ffffff",
        maxWidth: "600px",
        margin: "0 auto 40px auto",
        padding: "18px 30px",
        borderRadius: "20px",
        border: "3.5px solid #1e293b",
        boxShadow: "5px 5px 0px #1e293b",
        textAlign: "center"
      }}>
        <p style={{ margin: "5px 0", fontWeight: "800", fontSize: "17px", letterSpacing: "1px" }}>
          姓名：<span style={{ color: "#2563eb" }}>黃詩玥</span>
        </p>
        <p style={{ margin: "5px 0", fontWeight: "800", fontSize: "17px", letterSpacing: "1px" }}>
          學號：<span style={{ color: "#2563eb" }}>5b2g0901</span>
        </p>
        <p style={{ margin: "5px 0", fontWeight: "800", fontSize: "14px", color: "#475569" }}>
          課程名稱：JavaScript 程式設計
        </p>
      </div>

      {/* 網頁大標題 */}
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ 
          fontSize: "36px", 
          fontWeight: "900", 
          margin: "0 0 12px 0",
          textShadow: "3px 3px 0px #ffffff",
          letterSpacing: "2px"
        }}>
          📚 本學期網頁設計作業成果報告
        </h1>
        <p style={{ fontSize: "18px", color: "#475569", fontWeight: "700" }}>
          網頁應用程式作品集總覽 (Portfolio)
        </p>
      </header>

      {/* 卡片網格佈局 */}
      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {myProjects.map((project) => (
          <div 
            key={project.id}
            style={{
              backgroundColor: "#ffffff", 
              borderRadius: "24px",
              border: "3.5px solid #1e293b", 
              boxShadow: "0 10px 0 #1e293b", 
              overflow: "hidden",
              transition: "all 0.2s ease"
            }}
          >
            {/* 作業預覽圖片 */}
            <div style={{ width: "100%", height: "180px", overflow: "hidden", borderBottom: "3.5px solid #1e293b" }}>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>

            {/* 卡片文字內容 */}
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "19px", fontWeight: "900", color: "#1e293b", margin: "0 0 10px 0" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", fontWeight: "600", lineHeight: "1.6", margin: "0 0 15px 0", minHeight: "68px" }}>
                {project.description}
              </p>
              
              {/* 技術標籤區塊 */}
              <div style={{ marginBottom: "20px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {project.tags.map((tag, index) => (
                  <span key={index} style={{
                    backgroundColor: "#f1f5f9",
                    color: "#475569",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "700",
                    border: "1.5px solid #1e293b"
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* 雙按鈕設計 */}
              <div style={{ display: "flex", gap: "10px" }}>
                {/* 鮮黃色主按鈕：看作品 */}
                <button 
                  onClick={() => window.open(project.projectUrl, "_blank")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    backgroundColor: "#facc15", 
                    color: "#1e293b",
                    borderRadius: "14px",
                    fontWeight: "900",
                    fontSize: "13px",
                    border: "2.5px solid #1e293b",
                    boxShadow: "0 4px 0 #1e293b",
                    cursor: "pointer"
                  }}
                >
                  瀏覽作品 🚀
                </button>

                {/* 白色次按鈕：看 Code */}
                <button 
                  onClick={() => window.open(project.codeUrl, "_blank")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    backgroundColor: "#ffffff", 
                    color: "#475569",
                    borderRadius: "14px",
                    fontWeight: "800",
                    fontSize: "13px",
                    border: "2.5px solid #cbd5e1",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#1e293b";
                    e.currentTarget.style.color = "#1e293b";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#cbd5e1";
                    e.currentTarget.style.color = "#475569";
                  }}
                >
                  查看程式碼 💻
                </button>
              </div>

            </div>
          </div>
        ))}
      </main>

      {/* 頁尾 */}
      <footer style={{ textAlign: "center", marginTop: "60px", color: "#64748b", fontWeight: "700", fontSize: "14px" }}>
        <p>© 2026 Created by 5b2g0901. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;