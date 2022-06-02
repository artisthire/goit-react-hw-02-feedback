import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const borderColor = '#ccc';

export const Container = styled.div`
  min-width: 400px;
  padding: 20px;
  border: 2px solid ${borderColor};
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0 0 30px 0;
  font-size: 26px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  margin: 0 0 30px 0;
  font-size: 24px;
  font-weight: 700;
`;

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
  border: 2px solid ${borderColor};
  border-radius: 5px;
  font-family: inherit;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;

  background-color: ${props => (props.bgColor ? props.bgColor : '#e9e9e9')};
`;

export const StatisticTable = styled.table`
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

Button.propTypes = {
  bgColor: PropTypes.string,
};
