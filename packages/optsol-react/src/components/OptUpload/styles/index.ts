import color from 'color';
import styled from 'styled-components';

import { ColorPalette } from '../../../shared/styles/colors';

const getBorderColor = (
  primaryColor: string,
  hasFiles: boolean,
  props: any
) => {
  if (hasFiles) return primaryColor;
  if (props.isDragAccept) return ColorPalette.green2;
  if (props.isDragReject) return ColorPalette.ketchup;
  return ColorPalette.gray6;
};

const getTextColor = (primaryColor: string, hasFiles: boolean, props: any) => {
  if (hasFiles) return primaryColor;
  if (props.isDragAccept) return ColorPalette.green;
  if (props.isDragReject) return ColorPalette.ketchup;
  return ColorPalette.gray4;
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
  border-color: ${({ hasFiles, theme, ...props }) =>
    getBorderColor(theme.primary, hasFiles, props)};
  border-style: dashed;
  background-color: ${ColorPalette.white};
  color: ${({ hasFiles, theme, ...props }) =>
    getTextColor(theme.primary, hasFiles, props)};
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
  width?: string;
  height?: string;
  borderStyle?: 'dashed' | 'solid';
}

export const StyledMiniUploadContainer = styled.div<StyledMiniUploadContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width ?? '100px'};
  height: ${({ height }) => height ?? '100px'};

  padding: 20px;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${({ hasFiles, theme, ...props }) =>
    getBorderColor(theme.primary, hasFiles, props)};
  border-style: ${({ borderStyle }) => borderStyle ?? 'dashed'};
  background-color: ${ColorPalette.white};
  color: ${({ hasFiles, theme, ...props }) =>
    getTextColor(theme.primary, hasFiles, props)};
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
