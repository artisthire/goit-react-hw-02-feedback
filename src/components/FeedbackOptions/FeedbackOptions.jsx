import PropTypes from 'prop-types';
import { Controls, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Controls>
      {options.map(name => (
        <Button type="button" key={name} onClick={onLeaveFeedback(name)}>
          {name}
        </Button>
      ))}
    </Controls>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
