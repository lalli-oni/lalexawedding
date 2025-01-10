import React from 'react';

export interface AvatarProps {
  avatar: 'lalli' | 'alexa';
}

const Avatar = (props: AvatarProps) => {
  return (
      <img
        style={{ clipPath: 'circle(65px at 70px 65px)', alignSelf: 'flex-end', width: '180px', position: 'relative', top: '1.9rem' }}
        src={props.avatar === 'lalli' ? "/lalli_profile_splines.svg" : "alexa_avatar.jpg"} alt="lalli avatar"
      />
  );
};

export default Avatar;