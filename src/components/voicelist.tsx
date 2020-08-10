import React from 'react';
import styled from 'styled-components';

import { User, UserProps } from './user';

export const VoiceListWrapper = styled.div`
  background-color: #2F3136;
  box-sizing: border-box;
  height: 480px;
  width: 320px;
  padding: 16px;
`;

const users: UserProps[] = [{
  id: '1',
  avatarUrl: 'https://cdn.discordapp.com/avatars/179233155973120001/e68cf0fa7eaefe08190d5fa633422126.webp?size=32',
  displayName: 'Steve macAwesome',
  speaking: Math.random() > 0.5,
  muted: false,
  deafened: false,
}, {
  id: '2',
  avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
  displayName: 'karafso',
  speaking: Math.random() > 0.5,
  muted: false,
  deafened: false,
}, {
  id: '3',
  avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
  displayName: 'nheisterkamp',
  speaking: Math.random() > 0.5,
  muted: false,
  deafened: false,
}];

interface VoiceListProps {

}

export const VoiceList = (props: VoiceListProps) => (
  <VoiceListWrapper>
    {users.map(user => <User key={user.id} {...user} />)}
  </VoiceListWrapper>
);
