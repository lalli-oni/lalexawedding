import React from 'react';

import "./Avatar.css";

export interface AvatarProps {
  avatar: 'lalli' | 'alexa';
}

const Avatar = (props: AvatarProps) => {
  return (
      <img
        className="avatar"
        src={props.avatar === 'lalli' ? "/lalli_profile_splines.svg" : "alexa_avatar.jpg"} alt="lalli avatar"
      />
  );
};

export default Avatar;