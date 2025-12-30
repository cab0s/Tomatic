import './TimerDisplay.css';

function TimerDisplay({ timeLeft, progress, color, isRunning }) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // SVG circle parameters
    const size = 280;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <div className="timer-display" style={{ '--timer-color': color }}>
            <svg className="timer-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background circle */}
                <circle
                    className="timer-ring-bg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />
                {/* Progress circle */}
                <circle
                    className="timer-ring-progress"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        stroke: color,
                    }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>

            <div className="timer-content">
                <div className={`timer-time ${isRunning ? 'is-running' : ''}`}>
                    {formattedTime}
                </div>
            </div>
        </div>
    );
}

export default TimerDisplay;
