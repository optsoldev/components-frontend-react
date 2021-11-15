import color from 'color';
import styled from 'styled-components';

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

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.0075em;
  padding: 12px 24px;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;

  tbody tr:hover {
    background-color: ${({ theme }) => color(theme.divider).lighten(0.03).hex()};
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

export const StyledTh = styled.th<{ customWidth?: number }>`
  ${({ customWidth: width }) => {
    if (!!width) {
      return `width: ${width}px`;
    }
    return '';
  }}
`;