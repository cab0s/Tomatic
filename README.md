# 🥜 Tomatic

> ピーナッツ（スヌーピー）風デザインのポモドーロタイマー

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 特徴

- 🎨 **ピーナッツ風デザイン** - クラシックなコミックストリップの雰囲気
- ⏱️ **ポモドーロタイマー** - 25分集中 + 休憩のサイクル
- 📱 **レスポンシブ** - モバイル対応
- 🔔 **通知音** - フェーズ完了時にお知らせ
- 🚀 **GitHub Pages** - すぐに使える

## 🖼️ スクリーンショット

*クリーム色の背景、手描きフォント、コミックパネル風のデザイン*

## 🚀 デモ

**[▶ Tomaticを試す](https://cab0s.github.io/Tomatic/)**

## 📦 インストール

```bash
# リポジトリをクローン
git clone https://github.com/cab0s/Tomatic.git
cd Tomatic

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 🛠️ 使い方

1. **開始** - 中央の ▶ ボタンをクリック
2. **一時停止** - 同じボタンで ⏸ に切り替え
3. **リセット** - 左のボタンで時間をリセット
4. **スキップ** - 右のボタンで次のフェーズへ

## ⏰ フェーズ

| フェーズ | 時間 | 説明 |
|---------|------|------|
| 🔴 集中 | 25分 | 作業に集中 |
| 🔵 短い休憩 | 5分 | 短い休息 |
| 🟢 長い休憩 | 15分 | 4ポモドーロ後 |

## 📁 プロジェクト構造

```
Tomatic/
├── src/
│   ├── components/     # UIコンポーネント
│   ├── hooks/          # カスタムフック
│   ├── App.jsx         # メインアプリ
│   └── index.css       # グローバルスタイル
├── docs/               # 設計資料
└── .github/workflows/  # CI/CD
```

## 📚 ドキュメント

詳細な設計資料は [docs/](./docs/) フォルダにあります：

- [技術仕様](./docs/ARCHITECTURE.md)
- [コンポーネント設計](./docs/COMPONENTS.md)
- [デザインシステム](./docs/DESIGN_SYSTEM.md)
- [機能仕様](./docs/FEATURES.md)
- [API リファレンス](./docs/API.md)

## 🔧 技術スタック

- **React 19** - UIライブラリ
- **Vite 7** - ビルドツール
- **CSS3** - カスタムプロパティ & アニメーション
- **GitHub Actions** - 自動デプロイ

## 📄 ライセンス

MIT License

---

*Good grief!* 🐕
