import PropTypes from 'prop-types';

import {
  Table,
  Head,
  Body,
  Title,
  Data,
  Row,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <Head>
      <Row>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
      </Row>
    </Head>

    <Body>
      {items.map(({ id, type, amount, currency }) => (
        <Row key={id}>
          <Data>{type}</Data>
          <Data>{amount}</Data>
          <Data>{currency}</Data>
        </Row>
      ))}
    </Body>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
