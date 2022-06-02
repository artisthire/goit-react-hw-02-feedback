import { Component } from 'react';

import {
  Container,
  Title,
  SubTitle,
  Controls,
  Button,
  StatisticTable,
} from './Statistics.styled';

const FEEDBACK_DATA = [
  { id: '01', name: 'good', bgColor: '#77ef77' },
  { id: '02', name: 'neutral', bgColor: '#f3f31c' },
  { id: '03', name: 'bad', bgColor: '#f54343' },
];

const POSITIVE_FEEDBACK_NAMES = ['good'];

class Statistics extends Component {
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

    const positiveFeedbackPrecentage =
      positiveFeedbackCount > 0
        ? Math.round((positiveFeedbackCount / totalFeedback) * 1000) / 10
        : 0;

    return positiveFeedbackPrecentage;
  };

  handleClick = feedbackName => {
    return () => {
      this.setState(prevState => ({
        [feedbackName]: prevState[feedbackName] + 1,
      }));
    };
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Controls>
          {FEEDBACK_DATA.map(({ id, bgColor, name }) => (
            <Button key={id} bgColor={bgColor} onClick={this.handleClick(name)}>
              {name}
            </Button>
          ))}
        </Controls>
        <SubTitle>Statistics</SubTitle>
        <StatisticTable>
          <tbody>
            {FEEDBACK_DATA.map(({ id, name }) => (
              <tr key={id}>
                <th scope="row">{name}:</th>
                <td>{this.state[name]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total:</th>
              <td>{this.countTotalFeedback()}</td>
            </tr>
            <tr>
              <th scope="row">Positive feedback:</th>
              <td>{this.countPositiveFeedbackPercentage() + '%'}</td>
            </tr>
          </tfoot>
        </StatisticTable>
      </Container>
    );
  }
}

export default Statistics;
