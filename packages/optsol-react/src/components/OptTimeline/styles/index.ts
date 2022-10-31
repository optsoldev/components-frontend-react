import styled from 'styled-components';
import { ColorPalette } from '../../../shared/styles/colors';

export const Secao = styled.section`
  border-radius: 8px;
  border: 1px solid ${ColorPalette.gray6};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TableContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${ColorPalette.gray5};
  margin-top: 24px;

  & tr:last-child > td {
    border-bottom: 0;
  }
`;

export const Link = styled.a`
  font-size: 16px;
`;
