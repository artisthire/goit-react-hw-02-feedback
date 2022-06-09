import styled from '@emotion/styled';

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: block;
  min-width: 75px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  background-color: #e9e9e9;

  &:nth-of-type(1) {
    background-color: #77ef77;
  }

  &:nth-of-type(2) {
    background-color: #f3f31c;
  }

  &:nth-of-type(3) {
    background-color: #f54343;
  }
`;
