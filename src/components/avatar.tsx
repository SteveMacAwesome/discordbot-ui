import React from 'react';
import styled from 'styled-components';

type AvatarWrapperProps = {
  speaking?: boolean;
}

interface AvatarProps {
  avatarUrl: string;
  speaking?: boolean;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: 36px;
  height: 36px;
  background: ${props => props.speaking ? '#ff0070' : 'none'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div<AvatarProps>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: url(${props => props.avatarUrl}) #ff0070;
  background-size: 32px;
  background-position: center;
`;

export const Avatar = (props: AvatarProps) => {
  const {
    avatarUrl,
    speaking
  } = props;

  return (
    <div style={{ width: 40, marginRight: 16 }}>
      <AvatarWrapper speaking={speaking} >
        <Image avatarUrl={avatarUrl} />
      </AvatarWrapper>
    </div>
  );
};