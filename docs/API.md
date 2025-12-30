# Tomatic - API リファレンス

## useTimer フック

ポモドーロタイマーの状態管理とロジックを提供するカスタムフック。

### インポート
```javascript
import { useTimer } from './hooks/useTimer';
```

### 使用方法
```javascript
function App() {
  const timer = useTimer();
  
  return (
    <div>
      <p>残り時間: {timer.timeLeft}秒</p>
      <button onClick={timer.toggle}>
        {timer.isRunning ? '停止' : '開始'}
      </button>
    </div>
  );
}
```

---

## 戻り値

### 状態

| プロパティ | 型 | 説明 |
|-----------|------|------|
| `timeLeft` | `number` | 残り時間（秒） |
| `isRunning` | `boolean` | タイマー実行中かどうか |
| `currentPhase` | `object` | 現在のフェーズ情報 |
| `currentPhaseKey` | `string` | フェーズキー（FOCUS, SHORT_BREAK, LONG_BREAK） |
| `completedPomodoros` | `number` | 完了したポモドーロ数 |
| `progress` | `number` | 進捗率（0〜1） |

### currentPhase オブジェクト

| プロパティ | 型 | 説明 |
|-----------|------|------|
| `name` | `string` | フェーズ名（日本語） |
| `duration` | `number` | 時間（秒） |
| `color` | `string` | テーマカラー（HEXコード） |

---

### メソッド

#### start()
タイマーを開始する。

```javascript
timer.start();
```

#### pause()
タイマーを一時停止する。

```javascript
timer.pause();
```

#### toggle()
タイマーの開始/停止をトグルする。

```javascript
timer.toggle();
```

#### reset()
現在のフェーズの残り時間を初期値に戻す。タイマーは停止状態になる。

```javascript
timer.reset();
```

#### skip()
次のフェーズへスキップする。タイマーは停止状態になる。

```javascript
timer.skip();
```

---

## 定数

### PHASES
フェーズ定義オブジェクト。

```javascript
const PHASES = {
  FOCUS: { 
    name: '集中', 
    duration: 25 * 60, 
    color: '#ff6b6b' 
  },
  SHORT_BREAK: { 
    name: '短い休憩', 
    duration: 5 * 60, 
    color: '#4ecdc4' 
  },
  LONG_BREAK: { 
    name: '長い休憩', 
    duration: 15 * 60, 
    color: '#45b7d1' 
  },
};
```

### PHASE_ORDER
フェーズの順序配列。

```javascript
const PHASE_ORDER = [
  'FOCUS', 
  'SHORT_BREAK', 
  'FOCUS', 
  'SHORT_BREAK', 
  'FOCUS', 
  'SHORT_BREAK', 
  'FOCUS', 
  'LONG_BREAK'
];
```

---

## 内部関数

### playNotification()
Web Audio API を使用して通知音を再生する内部関数。

- 周波数: 800Hz
- 波形: サイン波
- 長さ: 0.5秒
- 初期音量: 0.3（フェードアウト）

---

## 使用例

### 基本的な使用

```jsx
import { useTimer } from './hooks/useTimer';

function PomodoroTimer() {
  const timer = useTimer();
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{timer.currentPhase.name}</h2>
      <p style={{ color: timer.currentPhase.color }}>
        {formatTime(timer.timeLeft)}
      </p>
      <div>
        <button onClick={timer.toggle}>
          {timer.isRunning ? '⏸' : '▶'}
        </button>
        <button onClick={timer.reset}>⟲</button>
        <button onClick={timer.skip}>⏭</button>
      </div>
      <p>完了: {timer.completedPomodoros} ポモドーロ</p>
    </div>
  );
}
```
