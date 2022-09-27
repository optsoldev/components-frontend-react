import { Checkbox } from "@mui/material";
import color from "color";
import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.divider};
  border-radius: 16px;

  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const PaginationContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding: 12px 24px;
  display: flex;
  justify-content: end;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

export const Title = styled.div<{ titleBgColor?: string }>`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.0075em;
  padding: 12px 24px;
  background-color: ${(prop) => prop.titleBgColor ?? ""};
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;

  tbody tr:hover {
    background-color: ${({ theme }) =>
      color(theme.divider).lighten(0.03).hex()};
    cursor: pointer;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    border-right: 1px solid ${({ theme }) => theme.divider};

    /* But "collapsed" cells should be as small as possible */
    &.collapse {
      width: 0.0000000001%;
    }

    :last-child {
      border-right: 0;
    }
  }
`;

export const StyledTh = styled.th<{
  customWidth?: string | number;
  position?: "start" | "center" | "end";
}>`
  text-align: ${(prop) => prop.position ?? "start"};
  ${({ customWidth: width }) => {
    if (!!width) {
      return `width: ${width}px`;
    }
    return "";
  }}
`;

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.checked === nextProps.checked &&
  prevProps.indeterminate === nextProps.indeterminate;

export const CustomCheckbox = React.memo(
  styled(Checkbox)({
    fontSize: "1rem",
    margin: "-8px 0 -8px -15px",
    padding: "8px 9px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& svg": {
      width: 24,
      height: 24,
    },
    display: "flex",
    justifySelf: "center",
  }),
  areEqual
);
