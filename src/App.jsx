import { useTimer } from './hooks/useTimer';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import './App.css';

function App() {
  const timer = useTimer();

  return (
    <div className="app">
      <div className="app-container glass-card">
        <header className="app-header">
          <h1>Pomodoro Timer</h1>
          <div className="phase-indicator" style={{ '--phase-color': timer.currentPhase.color }}>
            {timer.currentPhase.name}
          </div>
        </header>

        <main className="app-main">
          <TimerDisplay
            timeLeft={timer.timeLeft}
            progress={timer.progress}
            color={timer.currentPhase.color}
            isRunning={timer.isRunning}
          />

          <Controls
            isRunning={timer.isRunning}
            onToggle={timer.toggle}
            onReset={timer.reset}
            onSkip={timer.skip}
            color={timer.currentPhase.color}
          />
        </main>

        <footer className="app-footer">
          <div className="pomodoro-count">
            <span className="count-label">完了したポモドーロ</span>
            <span className="count-value">{timer.completedPomodoros}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
