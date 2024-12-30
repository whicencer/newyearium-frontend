import { useState, useEffect } from 'react';
import './Switch.css';

interface SwitchProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switch = ({ label, value, onChange }: SwitchProps) => {
  const [isOn, setIsOn] = useState(value);

  useEffect(() => {
    setIsOn(value);
  }, [value]);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange(newValue);
  };

  return (
    <div className="switch-container">
      <label className="switch-label">{label}</label>
      <div className={`switch ${isOn ? 'switch--on' : 'switch--off'}`} onClick={toggleSwitch}>
        <div className={`switch__toggle ${isOn ? 'switch__toggle--on' : 'switch__toggle--off'}`} />
      </div>
    </div>
  );
};