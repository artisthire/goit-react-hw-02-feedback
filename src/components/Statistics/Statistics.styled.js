import styled from '@emotion/styled';

export const Table = styled.table`
  border: none;
  border-collapse: collapse;

  tr {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 5px;
  }

  th {
    text-transform: capitalize;
  }

  tfoot {
    display: block;
    margin-top: 15px;
    padding-top: 5px;
    border-top: 1px solid black;
  }
`;
