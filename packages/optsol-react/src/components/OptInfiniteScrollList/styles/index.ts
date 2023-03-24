import styled from 'styled-components';

import { ColorPalette } from '../../../shared/styles/colors';

export const Container = styled.div`
  background-color: ${ColorPalette.gray6};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 65%;
  align-items: stretch;

  @media (max-width: 745px) {
    width: 95%;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-height: 475px) {
    padding: 10px;
  }
`;

export const TextoContainer = styled.div`
  margin-top: 30px;
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const DataDivider = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: rgb(130, 130, 130);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const MensagemFooter = styled.p`
  text-align: center;
  font-size: 16px;
  padding: 10px 0 20px 0;
`;
