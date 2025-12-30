# Tomatic - 技術仕様書

## 概要
Tomaticは、ピーナッツ（スヌーピー）風デザインを採用したポモドーロタイマーWebアプリケーションです。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | React 19 |
| ビルドツール | Vite 7 |
| 言語 | JavaScript (ES6+) |
| スタイリング | CSS3 (カスタムプロパティ) |
| フォント | Google Fonts (Patrick Hand, Permanent Marker) |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions |

## プロジェクト構造

```
Tomatic/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages自動デプロイ
├── docs/
│   ├── README.md               # ドキュメント目次
│   ├── ARCHITECTURE.md         # 技術仕様（本ファイル）
│   ├── COMPONENTS.md           # コンポーネント設計
│   ├── DESIGN_SYSTEM.md        # デザインシステム
│   ├── FEATURES.md             # 機能仕様
│   └── API.md                  # APIリファレンス
├── src/
│   ├── components/
│   │   ├── Controls.jsx        # 操作ボタン
│   │   ├── Controls.css
│   │   ├── TimerDisplay.jsx    # タイマー表示
│   │   └── TimerDisplay.css
│   ├── hooks/
│   │   └── useTimer.js         # タイマーロジック
│   ├── App.jsx                 # メインアプリ
│   ├── App.css
│   ├── index.css               # グローバルスタイル
│   └── main.jsx                # エントリーポイント
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── README.md                   # プロジェクト説明
└── vite.config.js
```

## 主要コンポーネント

### 1. useTimer (カスタムフック)
タイマーの状態管理とロジックを担当。

**状態:**
- `timeLeft` - 残り時間（秒）
- `isRunning` - タイマー実行状態
- `phaseIndex` - 現在のフェーズインデックス
- `completedPomodoros` - 完了したポモドーロ数

**メソッド:**
- `toggle()` - 開始/一時停止
- `reset()` - リセット
- `skip()` - 次のフェーズへスキップ

### 2. TimerDisplay
円形プログレスリング付きタイマー表示。

### 3. Controls
操作ボタン群（リセット、開始/停止、スキップ）。

## フェーズ設定

| フェーズ | 時間 | カラー |
|---------|------|--------|
| 集中 | 25分 | #e74c3c |
| 短い休憩 | 5分 | #5dade2 |
| 長い休憩 | 15分 | #58d68d |

## フェーズサイクル
```
集中 → 短休 → 集中 → 短休 → 集中 → 短休 → 集中 → 長休 → (繰り返し)
```

## デザインテーマ
ピーナッツ（スヌーピー）風
- クリーム色の紙の背景
- 手描きフォント
- コミックパネル風枠線
- オフセットドロップシャドウ

## ビルド・デプロイ

### ローカル開発
```bash
npm install
npm run dev
```

### 本番ビルド
```bash
npm run build
```

### GitHub Pages デプロイ
`main`ブランチへのプッシュで自動デプロイ。
