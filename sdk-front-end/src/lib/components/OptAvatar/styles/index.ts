import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

interface AvatarProps {
  alternativecolor?: string;
  size: number;
}

export const CustomAvatar = styled(Avatar)<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  ${(props) =>
    props.alternativecolor
      ? `background-color: ${props.alternativecolor}`
      : `background-color: ${props.theme.appBar.avatar.background}`};
  ${(props) => (props.color ? `color: ${props.color}` : `color: ${props.theme.appBar.avatar.color}`)};
  font-size: ${(props) => props.size / 2}px;

  &:hover {
    opacity: 0.8;
  }
`;
