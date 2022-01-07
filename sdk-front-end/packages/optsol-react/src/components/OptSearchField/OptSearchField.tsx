import { mdiMagnify } from "@mdi/js";
import { Icon } from "@mdi/react";
import { ButtonBase, InputAdornment, OutlinedInput } from "@mui/material";
import { createRef } from "react";
import { ColorPalette } from "../../shared/styles/colors";
import * as S from "./styles";
import React from "react";

export interface OptSearchFieldProps {
  placeholder?: string;
  onSearch: (searchTerm?: string) => void;
  width?: number;
  paddingX?: number;
  noBorder?: boolean;
}

export const OptSearchField = ({
  placeholder = "Pesquisar",
  onSearch,
  noBorder,
  // width,
  paddingX,
}: OptSearchFieldProps) => {
  const ref = createRef<HTMLInputElement>();

  function onClickSearchButton() {
    onSearch(ref.current?.value ? ref.current?.value : undefined);
  }

  function verificarTeclaPressionadaEnter(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      onSearch(ref.current?.value ? ref.current?.value : undefined);
    }
  }

  return (
    <S.AdvancedSearchContainer
      $noborder={noBorder}
      // width={width}
      paddingx={paddingX}
    >
      <OutlinedInput
        type="text"
        placeholder={placeholder}
        ref={ref}
        onKeyDown={verificarTeclaPressionadaEnter}
        endAdornment={
          <InputAdornment position="end">
            <ButtonBase onClick={onClickSearchButton}>
              <Icon size={0.8} path={mdiMagnify} color={ColorPalette.primary} />
            </ButtonBase>
          </InputAdornment>
        }
      />
    </S.AdvancedSearchContainer>
  );
};
