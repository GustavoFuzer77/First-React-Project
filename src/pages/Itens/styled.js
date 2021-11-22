import styled from 'styled-components';

export const Show = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 0.2px solid black;
`;

export const ItemContainer = styled.div`
  margin-top: 12px;

  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div + div{
    border-top: 0.1px solid #eee;
  }

`;

export const EditDel = styled.div`
  a{
    margin-left: 6px;

  }
`;
