import styled from 'styled-components';

export const Table = styled.table`
  font-family: 'Roboto';
  width: 400px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;

  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid grey;
`;

export const Head = styled.thead`
  font-size: 20px;
  font-weight: 700;
  border: 1px solid grey;
  letter-spacing: 2px;
`;

export const Body = styled.tbody`
  border: 1px solid grey;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
export const Title = styled.th`
  border: 1px solid grey;
  padding: 15px 5px;
  background-color: white;
`;
export const Data = styled.td`
  border: 1px solid grey;
  padding: 15px 5px;
`;

export const Row = styled.tr`
  &:nth-child(2n + 1) {
    background-color: rgba(151, 151, 151, 0.233);
  }
`;
