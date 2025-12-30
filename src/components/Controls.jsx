import './Controls.css';

function Controls({ isRunning, onToggle, onReset, onSkip, color }) {
    return (
        <div className="controls">
            <button
                className="control-btn control-btn-secondary"
                onClick={onReset}
                title="リセット"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                </svg>
            </button>

            <button
                className="control-btn control-btn-primary"
                onClick={onToggle}
                style={{ '--btn-color': color }}
                title={isRunning ? '一時停止' : '開始'}
            >
                {isRunning ? (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,4 20,12 6,20" />
                    </svg>
                )}
            </button>

            <button
                className="control-btn control-btn-secondary"
                onClick={onSkip}
                title="スキップ"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5,4 15,12 5,20" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                </svg>
            </button>
        </div>
    );
}

export default Controls;
