import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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

  background-color: ${props => (props.bgColor ? props.bgColor : '#e9e9e9')};
`;

Button.propTypes = {
  bgColor: PropTypes.string,
};
