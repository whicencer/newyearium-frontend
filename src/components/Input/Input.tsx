import React, { TextareaHTMLAttributes } from 'react';
import './Input.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div className="textarea-container">
      {label && <label className="textarea-label">{label}</label>}
      <textarea className="textarea-field" {...props} />
    </div>
  );
};

export default Textarea;