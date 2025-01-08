import React from 'react';

export interface AvatarProps {
  avatar: 'lalli' | 'alexa';
}

const Avatar = (props: AvatarProps) => {
  return (
      <img
        style={{ clipPath: 'circle(80px at 85px 80px)', alignSelf: 'flex-end', width: '180px' }}
        src={props.avatar === 'lalli' ? "/lalli_profile_splines.svg" : "alexa_avatar.jpg"} alt="lalli avatar"
      />
  );
};

export default Avatar;