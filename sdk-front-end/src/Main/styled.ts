import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const LaptopIcon = styled.img`
  width: 16rem;
  height: 16rem;
  color: ${({ theme }) => theme.primary};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  margin-left: 2rem;
  font-size: 3rem;
`;

export const Description = styled.h2`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
  margin-top: 9rem;
  margin-bottom: 9rem;
  font-size: 3rem;
`;

export const Banner = styled.img`
  width: min(120rem, 100%);
`;
