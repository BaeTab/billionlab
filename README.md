# 💰 Billion Lab (빌리언랩)

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-Non--Commercial-red.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

> **당신의 첫 10억을 설계하는 곳**  
> 과학적이고 체계적인 금융 자산 설계/시뮬레이션 플랫폼

**Billion Lab**은 복리의 마법을 시각화하고, 구체적인 재무 목표를 달성하기 위한 로드맵을 제시하는 PWA(Progressive Web App) 기반의 웹 애플리케이션입니다.

👉 **Live Demo**: [https://billion-lab.web.app](https://billion-lab.web.app)

---

## 🛠 Tech Stack

### Core
- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)

### UI/UX
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Components**: Lucide React (Icons)
- **Visualization**: [Recharts](https://recharts.org/) (Data Visualization)
- **Effects**: Glassmorphism, CSS Animations

### Infrastructure & Scale
- **Hosting**: Firebase Hosting
- **Analytics**: Firebase Analytics
- **PWA**: vite-plugin-pwa (Installable Web App)
- **SEO**: Sitemap, Robots.txt, Meta Tags, OG(Open Graph)

---

## ✨ Key Features

### 1. 📊 Financial Calculators (금융 계산 도구)
- **복리 계산기 (Compound Interest)**: 월복리/연복리 계산 알고리즘 적용, Recharts를 활용한 실시간 자산 증식 차트 시각화
- **목표 달성 시뮬레이터 (Goal Achiever)**: 목표 금액 역산 알고리즘(Reverse Calculation)을 통해 월 필요 저축액 산출
- **72의 법칙 (Rule of 72)**: 자산 2배 달성 기간 즉시 계산

### 2. 📱 PWA & Mobile Experience
- **App-like Experience**: `manifest.json` 및 Service Worker 설정으로 네이티브 앱 같은 사용자 경험 제공
- **Installability**: 모바일/데스크톱 홈 화면 설치 지원 (`beforeinstallprompt` 이벤트 핸들링)
- **Responsive Design**: Mobile First 접근으로 모든 디바이스 최적화

### 3. 📝 Content System
- **Markdown Rendering**: `react-markdown`을 활용한 블로그 포스트 렌더링 시스템
- **Routing Architecture**: SPA(Single Page Application) 구조하에 `react-router-dom`을 이용한 클라이언트 사이드 라우팅 (`/`, `/home`, `/blog/:slug` 등)

### 4. 🔒 User Engagement & Monetization
- **Ad-Gated Results**: 계산 결과 확인 전 광고 시청을 유도하는 리워드형 UX 패턴 구현
- **Dark Mode**: 시스템 설정 감지 및 수동 토글 가능한 다크 모드(Tailwind `dark:` variant 활용)

---

## 📂 Project Structure

```bash
root
├── public/              # Static assets (Favicon, Robots.txt, Sitemap)
├── src/
│   ├── components/      # Reusable UI components (Calculators, Layouts)
│   ├── data/            # Static data needed for the app (Blog posts)
│   ├── lib/             # External service configurations (Firebase)
│   ├── pages/           # Page components (Routes)
│   ├── utils/           # Utility functions (Financial logic, Formatters)
│   ├── App.tsx          # Main application component with Routing
│   └── main.tsx         # Entry point
├── firebase.json        # Firebase Hosting configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration (PWA settings)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/baetab/billionlab.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build & Deploy

```bash
# Production build
npm run build

# Deploy to Firebase
npm run deploy
```

---

## 🛡 License

**Copyright © 2025 Billion Lab. All Rights Reserved.**

이 프로젝트의 소스 코드와 리소스는 **상업적 목적으로 사용할 수 없습니다.**
학습 및 개인적인 용도로만 참고할 수 있으며, 영리 목적의 복제, 배포, 수정 및 2차 저작물 생성을 엄격히 금지합니다.

자세한 내용은 `LICENSE` 파일을 참고하세요.

---

## 📮 Contact

- **Email**: b_h_woo@naver.com
- **Bug Report**: Issues 탭을 이용해주세요.
