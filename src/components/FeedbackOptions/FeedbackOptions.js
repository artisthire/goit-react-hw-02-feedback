import PropTypes from 'prop-types';
import { Controls, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Controls>
      {options.map(({ name, bgColor = '' }) => (
        <Button key={name} bgColor={bgColor} onClick={onLeaveFeedback(name)}>
          {name}
        </Button>
      ))}
    </Controls>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      bgColor: PropTypes.string,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
