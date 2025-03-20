import React from 'react';
import '../css/education.css';
import whatsapp from '../whatsappbg.png';

const WhatsAppChatButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/8124495001', '_blank');
  };

  return (
    <>
      <button
        className="whatsapp-chat-button"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            // Allow Enter and Space to trigger the click
            handleClick();
          }
        }}
        role="link" // Optionally, use role="link" to indicate it's a clickable element if you want to use <div> or <span>
        tabIndex={0}
        type="button" // Make the element focusable and part of the keyboard navigation
      >
        <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
      </button>
    </>
  );
};

export default WhatsAppChatButton;
