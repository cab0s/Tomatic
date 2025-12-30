# Tomatic - デザインシステム仕様書

## デザインコンセプト

**ピーナッツ（スヌーピー）風デザイン**
- クラシックなコミックストリップの温かみ
- 手描き感のあるアナログな雰囲気
- シンプルで親しみやすいデザイン

---

## カラーパレット

### 背景色
| 名前 | コード | 用途 |
|------|--------|------|
| Cream | `#fef9e7` | メイン背景 |
| Paper | `#fdf6e3` | カード内背景 |
| Warm | `#fff8dc` | グラデーション |

### インク色
| 名前 | コード | 用途 |
|------|--------|------|
| Ink | `#2c2c2c` | メインテキスト・枠線 |
| Pencil | `#4a4a4a` | サブテキスト |

### ピーナッツカラー
| 名前 | コード | 用途 |
|------|--------|------|
| Red | `#e74c3c` | 集中フェーズ |
| Yellow | `#f1c40f` | アクセント |
| Blue | `#5dade2` | 短い休憩 |
| Green | `#58d68d` | 長い休憩 |
| Orange | `#f39c12` | ホバー効果 |
| Brown | `#a0522d` | 装飾 |

---

## タイポグラフィ

### フォント
```css
/* 見出し用 - 手書きマーカー風 */
--font-display: 'Permanent Marker', cursive;

/* 本文用 - 手書きペン風 */
--font-body: 'Patrick Hand', cursive;
```

### サイズ・ウェイト

| 要素 | フォント | サイズ | ウェイト |
|------|----------|--------|----------|
| タイトル | Permanent Marker | 2.5rem | 400 |
| タイマー | Permanent Marker | 4rem | 400 |
| フェーズ表示 | Patrick Hand | 1.1rem | 400 |
| ラベル | Patrick Hand | 1rem | 400 |

---

## スペーシング

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

---

## ボーダーラディウス

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-full: 50%;
```

---

## コミックパネル風カード

```css
.glass-card {
  background: #ffffff;
  border: 3px solid #2c2c2c;
  border-radius: 20px;
  box-shadow: 
    6px 6px 0 #2c2c2c,           /* オフセットシャドウ */
    0 8px 20px rgba(0,0,0,0.15); /* ソフトシャドウ */
}
```

### 特徴
- 太めの黒枠線（3px）
- オフセットドロップシャドウ
- 紙のようなクリーム色背景

---

## アニメーション

### トランジション
```css
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-bounce: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 主要アニメーション

| 名前 | 効果 | 用途 |
|------|------|------|
| wobbleIn | ゆらゆら登場 | 初期表示 |
| wiggle | 左右に揺れる | タイマー実行中 |
| bounce | バウンス | 音符マーク |
| twinkle | きらめき | 星・ハート装飾 |
| happyDance | スヌーピー風ダンス | ボタンホバー |

---

## ボタンスタイル

### プライマリボタン
```css
.control-btn-primary {
  width: 80px;
  height: 80px;
  background: var(--peanuts-red);
  border: 3px solid #2c2c2c;
  border-radius: 50%;
  box-shadow: 4px 4px 0 #2c2c2c;
  color: white;
}
```

### セカンダリボタン
```css
.control-btn-secondary {
  width: 56px;
  height: 56px;
  background: var(--peanuts-yellow);
  border: 3px solid #2c2c2c;
  border-radius: 50%;
  box-shadow: 4px 4px 0 #2c2c2c;
}
```

---

## 装飾要素

### 落書き風装飾
- ⭐ 星マーク - タイマー右上
- ♥ ハートマーク - タイマー左下
- ♪ 音符マーク - フェーズインジケーター

### 紙の質感
- ノートの罫線風の背景パターン
- SVGノイズテクスチャ（opacity: 0.03）

---

## レスポンシブ対応

```css
.app {
  width: 100%;
  max-width: 400px;
  padding: 1.5rem;
}
```

モバイルファースト設計で、最大幅400pxのコンパクトなカード型レイアウト。
