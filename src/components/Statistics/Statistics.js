import PropTypes from 'prop-types';
import { Table } from './Statistics.styled';

function Statistics({ options, total, positivePercentage }) {
  return (
    <Table>
      <tbody>
        {Object.entries(options).map(([name, value]) => (
          <tr key={name}>
            <th scope="row">{name}:</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Total:</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th scope="row">Positive feedback:</th>
          <td>{positivePercentage}</td>
        </tr>
      </tfoot>
    </Table>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
