import { Component } from 'react';
import { Wrapper, Container } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = feedbackName => {
    return () => {
      this.setState(prevState => ({
        [feedbackName]: prevState[feedbackName] + 1,
      }));
    };
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((summ, value) => summ + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackCount = Object.entries(this.state).reduce(
      (summ, [feedbackName, value]) =>
        feedbackName === 'good' ? summ + value : summ,
      0
    );

    const percentage =
      positiveFeedbackCount > 0
        ? Math.round((positiveFeedbackCount / totalFeedback) * 100)
        : 0;

    return percentage + '%';
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackBtns = Object.keys(this.state);
    const statisticData = Object.entries(this.state);

    return (
      <Wrapper>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={feedbackBtns}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback > 0 && (
              <Statistics
                options={statisticData}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            )}

            {!totalFeedback && <Notification message="There is no feedback" />}
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
