import styled from 'styled-components';
import color from 'color';
import { ColorPalette } from '../../../shared/styles/colors';

const getBorderColor = (primaryColor: string, hasFiles: boolean, props: any) => {
  let color: string = ColorPalette.gray6;

  if (hasFiles) {
    color = primaryColor;
  }
  if (props.isDragAccept) {
    color = ColorPalette.green2;
  }
  if (props.isDragReject) {
    color = ColorPalette.ketchup;
  }

  return color;
};

const getTextColor = (primaryColor: string, hasFiles: boolean, props: any) => {
  let color: string = ColorPalette.gray4;

  if (hasFiles) {
    color = primaryColor;
  }
  if (props.isDragAccept) {
    color = ColorPalette.green;
  }
  if (props.isDragReject) {
    color = ColorPalette.ketchup;
  }

  return color;
};

export const StyledUploadContainer = styled.div<{ hasFiles: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${({ hasFiles, theme, ...props }) => getBorderColor(theme.primary, hasFiles, props)};
  border-style: dashed;
  background-color: ${ColorPalette.white};
  color: ${({ hasFiles, theme, ...props }) => getTextColor(theme.primary, hasFiles, props)};
  outline: none;
  transition: all 0.24s ease-in-out;
  cursor: pointer;
  min-height: 150px;
  margin-bottom: 12px;

  &:hover {
    border-color: ${({ theme }) => color(theme.primary).lighten(0.5).hex()};
    color: ${({ theme }) => color(theme.primary).lighten(0.5).hex()};
  }

  & p {
    margin-top: 6px;
    font-size: 16px;
  }

  & p:last-child {
    font-size: 14px;
  }
`;

interface StyledMiniUploadContainerProps {
  hasFiles: boolean;
  size?: number;
  borderStyle?: 'dashed' | 'solid';
}

export const StyledMiniUploadContainer = styled.div<StyledMiniUploadContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size ?? 100}px;
  height: ${({ size }) => size ?? 100}px;

  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${({ hasFiles, theme, ...props }) => getBorderColor(theme.primary, hasFiles, props)};
  border-style: ${({ borderStyle }) => borderStyle ?? 'dashed'};
  background-color: ${ColorPalette.white};
  color: ${({ hasFiles, theme, ...props }) => getTextColor(theme.primary, hasFiles, props)};
  outline: none;
  transition: all 0.24s ease-in-out;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    border-color: ${({ theme }) => color(theme.primary).lighten(0.5).hex()};
    color: ${({ theme }) => color(theme.primary).lighten(0.5).hex()};
  }

  & p {
    margin-top: 6px;
    font-size: 16px;
  }

  & p:last-child {
    font-size: 14px;
  }
`;

export const Arquivo = styled.p`
  font-size: 14px;
  text-align: center;

  & span {
    font-weight: 500;
  }
`;
