import './TimerDisplay.css';

function TimerDisplay({ timeLeft, progress, color, isRunning }) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // SVG circle parameters
    const size = 280;
    const strokeWidth = 18;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <div className="timer-display" style={{ '--timer-color': color }}>
            <svg className="timer-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    {/* Gradient for progress ring */}
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="1" />
                        <stop offset="50%" stopColor={color} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.7" />
                    </linearGradient>
                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {/* Shadow filter for depth */}
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
                    </filter>
                </defs>
                {/* Background circle with subtle pattern */}
                <circle
                    className="timer-ring-bg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth + 4}
                />
                {/* Progress circle with gradient and glow */}
                <circle
                    className="timer-ring-progress"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        stroke: `url(#progressGradient)`,
                    }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                {/* Highlight overlay for glossy effect */}
                <circle
                    className="timer-ring-highlight"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth / 3}
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        stroke: 'rgba(255, 255, 255, 0.4)',
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
