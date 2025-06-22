# GIPHY Search Web App

這是一個使用 GIPHY API 製作的 GIF 搜尋網站，具備即時建議、自訂 API Key、圖片載入更多、滑動回頂等功能，介面簡潔並支援使用者體驗優化。

## 🖼️ 專案特色

- 🔍 即時關鍵字建議（Autocomplete）
- 💡 預設或自訂 GIPHY API Key
- 📷 顯示搜尋結果 GIF 圖片（每次載入 50 筆，可持續載入更多）
- 🆙 回到頂部按鈕
- 📱 RWD 支援 Bootstrap 美化介面
- 🖱️ 滑鼠懸停放大動畫效果

## 📁 專案結構

```
API_sideproject/
├── GIPHY_search.html # 主頁面 HTML
├── js/
│ └── script.js # 所有互動與 API 控制
├── css/
│ └── style.css # 網站樣式
└──README.md
```
## ⬇️ 專案下載與執行

你可以透過 Git 指令將專案複製到本地端：

```bash
git clone https://github.com/Jasper900807/API_sideproject.git
```

## 🚀 使用說明

### 1️⃣ 開啟網頁

使用瀏覽器開啟 `GIPHY_search.html` 即可使用。網頁將預設使用內建 API Key。

### 2️⃣ 搜尋 GIF

輸入至少兩個字元後，即會出現關鍵字建議（Autocomplete），點擊或按下 Enter 搜尋。

### 3️⃣ 載入更多

點擊「載入更多圖片」按鈕可以繼續載入下一批 GIF（每批 50 筆）。

### 4️⃣ 自訂 API Key（可選）

1. 點選「點此自訂你的 GIPHY API Key」
2. 輸入你從 [GIPHY Developers](https://developers.giphy.com/) 申請的 API Key
3. 所有請求將改用你的 API Key 發送

## 🧪 開發技術

- HTML5 / CSS3 / JavaScript
- jQuery
- Bootstrap 5
- GIPHY API

## 🔑 API Key 設定

預設使用的 API Key：  
PabCvzKeBsSEEedxWJbGgzRDA64ytqho


建議申請自己的 Key 以避免流量限制：  
[GIPHY Developer Portal](https://developers.giphy.com/)

## 📸 預覽畫面

![{4A0556A1-8B35-4D20-8E5A-E3FB6F858EBD}](https://github.com/user-attachments/assets/61213597-2962-45b0-8999-a620a6f3ed40)

![{1FC99E75-FEDD-41D8-ADDA-26128FE3DF35}](https://github.com/user-attachments/assets/782c3983-85fa-4efa-8f0d-29ac833d755a)

## 📜 版權

本專案僅供學術或個人學習用途。GIF 圖片版權皆歸 GIPHY 及上傳者所有。

---

📌 GitHub 專案連結：[Jasper900807/API_sideproject](https://github.com/Jasper900807/API_sideproject)
