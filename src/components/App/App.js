import { Component } from 'react';
import { Wrapper, Container } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const FEEDBACK_DATA = [
  { name: 'good', bgColor: '#77ef77' },
  { name: 'neutral', bgColor: '#f3f31c' },
  { name: 'bad', bgColor: '#f54343' },
];

const POSITIVE_FEEDBACK_NAMES = ['good'];

class App extends Component {
  state = FEEDBACK_DATA.reduce(
    (obj, current) => ({ ...obj, [current.name]: 0 }),
    {}
  );

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((summ, cur) => summ + cur, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackCount = Object.entries(this.state).reduce(
      (summ, [name, value]) => {
        if (POSITIVE_FEEDBACK_NAMES.includes(name)) {
          return summ + value;
        }

        return summ;
      },
      0
    );

    const percentage =
      positiveFeedbackCount > 0
        ? Math.round((positiveFeedbackCount / totalFeedback) * 1000) / 10
        : 0;

    return percentage + '%';
  };

  handleClick = feedbackName => {
    return () => {
      this.setState(prevState => ({
        [feedbackName]: prevState[feedbackName] + 1,
      }));
    };
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Wrapper>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={FEEDBACK_DATA}
              onLeaveFeedback={this.handleClick}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback > 0 ? (
              <Statistics
                options={this.state}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
