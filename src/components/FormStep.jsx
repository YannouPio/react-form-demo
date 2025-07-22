import React from 'react';

export const FormStep = ({ title, stepNumber, isActive, isCompleted, onHeaderClick, children }) => (
  <div className="step">
    <div 
      className="step-header" 
      onClick={() => onHeaderClick(stepNumber)}
      style={{ 
        cursor: 'pointer',
        padding: '1rem',
        backgroundColor: isActive ? '#e3f2fd' : '#f5f5f5',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
      <span style={{ fontSize: '1.2rem' }}>
        {isCompleted ? '✔' : isActive ? '▼' : '▶'}
      </span>
    </div>
    {isActive && (
      <div 
        className="step-content"
        style={{ 
          padding: '1rem',
          border: '1px solid #ddd',
          borderTop: 'none',
          borderRadius: '0 0 4px 4px'
        }}
      >
        {children}
      </div>
    )}
  </div>
);