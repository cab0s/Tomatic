import { useState, useEffect, useCallback } from 'react';

const PHASES = {
  FOCUS: { name: '集中', duration: 25 * 60, color: '#ff6b6b' },
  SHORT_BREAK: { name: '短い休憩', duration: 5 * 60, color: '#4ecdc4' },
  LONG_BREAK: { name: '長い休憩', duration: 15 * 60, color: '#45b7d1' },
};

const PHASE_ORDER = ['FOCUS', 'SHORT_BREAK', 'FOCUS', 'SHORT_BREAK', 'FOCUS', 'SHORT_BREAK', 'FOCUS', 'LONG_BREAK'];

export function useTimer() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(PHASES.FOCUS.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const currentPhaseKey = PHASE_ORDER[phaseIndex % PHASE_ORDER.length];
  const currentPhase = PHASES[currentPhaseKey];

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Phase complete
      if (currentPhaseKey === 'FOCUS') {
        setCompletedPomodoros((prev) => prev + 1);
      }
      // Move to next phase
      const nextIndex = (phaseIndex + 1) % PHASE_ORDER.length;
      const nextPhaseKey = PHASE_ORDER[nextIndex];
      setPhaseIndex(nextIndex);
      setTimeLeft(PHASES[nextPhaseKey].duration);
      setIsRunning(false);
      
      // Play notification sound
      playNotification();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, phaseIndex, currentPhaseKey]);

  const playNotification = () => {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const toggle = useCallback(() => setIsRunning((prev) => !prev), []);
  
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(currentPhase.duration);
  }, [currentPhase.duration]);

  const skip = useCallback(() => {
    const nextIndex = (phaseIndex + 1) % PHASE_ORDER.length;
    const nextPhaseKey = PHASE_ORDER[nextIndex];
    setPhaseIndex(nextIndex);
    setTimeLeft(PHASES[nextPhaseKey].duration);
    setIsRunning(false);
  }, [phaseIndex]);

  const progress = 1 - timeLeft / currentPhase.duration;

  return {
    timeLeft,
    isRunning,
    currentPhase,
    currentPhaseKey,
    completedPomodoros,
    progress,
    start,
    pause,
    toggle,
    reset,
    skip,
  };
}
