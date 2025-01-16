import React from 'react';

import "./Avatar.css";

export interface AvatarProps {
  avatar: 'lalli' | 'alexa';
}

const Avatar = (props: AvatarProps) => {
  return (
      <img
        className="avatar"
        src={`${props.avatar}_avatar.jpg`} alt={`${props.avatar} avatar`}
      />
  );
};

export default Avatar;