import React, { useState } from 'react';

export const WhatsAppIcon = ({ size = 28, color = '#ffffff' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path d="M17.507 14.307l-.009.075c-.301-.15-1.78-.879-2.056-.98-.277-.1-.478-.15-.679.15-.202.301-.78 1-.956 1.203-.176.202-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.175.201-.301.302-.502.1-.201.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.679-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.144 4.549.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.201-.577-.351z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.054 21.61a.75.75 0 00.936.936l4.442-1.384A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1114.618 5.892.75.75 0 00-.18.572l.857 2.744-2.744-.856a.75.75 0 00-.572.18A8.47 8.47 0 0112 20.5 8.5 8.5 0 013.5 12z"/>
  </svg>
);

const FloatingActions = () => {
  const [hoverWa, setHoverWa] = useState(false);
  const whatsappUrl = `https://wa.me/919483920190?text=${encodeURIComponent('Hi WMWave, I am interested in your biometric attendance and access control solutions.')}`;

  return (
    /* 🟢 Bottom-Right Corner - WhatsApp Only */
    <div 
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '22px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {hoverWa && (
        <div 
          style={{
            position: 'absolute',
            right: '66px',
            backgroundColor: '#071A35',
            color: '#ffffff',
            padding: '7px 14px',
            borderRadius: '6px',
            fontSize: '0.8125rem',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            border: '1px solid #1e3a5f',
            pointerEvents: 'none'
          }}
        >
          Chat on WhatsApp
        </div>
      )}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WMWave on WhatsApp"
        onMouseEnter={() => setHoverWa(true)}
        onMouseLeave={() => setHoverWa(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          border: '2px solid #ffffff',
          cursor: 'pointer',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease'
        }}
      >
        <WhatsAppIcon size={30} color="#ffffff" />
      </a>
    </div>
  );
};

export default FloatingActions;
