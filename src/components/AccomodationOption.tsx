import React from 'react';

import "./AccomodationOption.css";

export interface AccomodationOptionProps {
  id: string;
  label: string;
  iconSvgPath: string;
  onSelect: (selectedId: string) => void;
  scale?: string;
}

const AccomodationOption = (props: AccomodationOptionProps) => {
  const { id, label, iconSvgPath, onSelect, scale } = props;

  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <input
        type="radio" id={id} name="accomodation" style={{ opacity: 0 }}
        onChange={(e) => {
          if (e.target.value === 'on') onSelect(id);
        }}
      />
      <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          transform={scale === undefined ? undefined : `scale(${scale})`}
          d={iconSvgPath}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </label>
  )
};

export default AccomodationOption;