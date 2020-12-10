import React from 'react';

import { Images } from '../../shared/images/images';

import * as S from './styled';

export const Main = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <S.LaptopIcon
          src={Images.LaptopImg}
          alt="Imagem de um laptop com uma engrenagem desenhada no meio"
        />

        <S.Title>OptSol</S.Title>
      </S.LogoContainer>

      <S.Description>
        Erat nullam malesuada faucibus nullam donec.
      </S.Description>

      <S.Banner src={Images.BannerImg} alt="Banner escrito OptSol" />
    </S.Wrapper>
  );
};
