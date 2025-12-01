import { useState } from 'react';
import { CheckCircle } from 'phosphor-react';
import './HeroDashboard.css';

const HeroDashboard = () => {
    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 2000);
    };

    return (
        <div className="hero-dashboard-container">
            <img
                src="/hero-dashboard.png"
                alt="Navis Dashboard Interface"
                className="dashboard-image"
            />

            {/* Interactive Hotspots */}
            <div
                className="interactive-overlay overlay-call-controls"
                onClick={() => showToast('Call controls active')}
                title="Call Controls"
            />

            <div
                className="interactive-overlay overlay-create-ticket"
                onClick={() => showToast('Ticket creation started')}
                title="Create Ticket"
            />

            <div
                className="interactive-overlay overlay-generate"
                onClick={() => showToast('Generating new suggestion...')}
                title="Generate Response"
            />

            <div
                className="interactive-overlay overlay-suggestion"
                onClick={() => showToast('Suggestion applied to chat')}
                title="Apply Suggestion"
            />

            <div
                className="interactive-overlay overlay-chat-input"
                onClick={() => showToast('Chat input focused')}
                title="Type a message..."
            />

            <div
                className="interactive-overlay overlay-note-input"
                onClick={() => showToast('Notes section focused')}
                title="Add a note"
            />

            <div
                className="interactive-overlay overlay-transcript"
                onClick={() => showToast('Transcript copied to clipboard')}
                title="Copy Transcript"
            />

            <div
                className="interactive-overlay overlay-chat-bubble bubble-1"
                onClick={() => showToast('Response selected')}
                title="Select Response"
            />

            <div
                className="interactive-overlay overlay-chat-bubble bubble-2"
                onClick={() => showToast('Response selected')}
                title="Select Response"
            />

            {/* Toast Notification */}
            <div className={`dashboard-toast ${toast.show ? 'visible' : ''}`}>
                <CheckCircle size={20} weight="fill" className="toast-icon" />
                <span>{toast.message}</span>
            </div>
        </div>
    );
};

export default HeroDashboard;
