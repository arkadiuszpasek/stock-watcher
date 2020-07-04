import React from 'react';
import styled from 'styled-components';
import * as styles from '../styles/vars';

const Table = styled.table`
  border-left: 4px solid ${styles.COMPLEMENTARY_COLOR};
  border-collapse: collapse;
  table-layout: fixed;
  width: 80%;
  margin: 0 auto;
  th,
  td {
    padding: 0.5rem 1rem;
  }

  @media screen and (max-width: 1024px) {
    thead {
      display: none;
    }
    tr {
      display: block;
    }
    td:nth-child(odd) {
      background: ${styles.SECOND_COLOR};
    }
    td {
      display: block;
      text-align: right;
    }
    td::before {
      content: attr(data-label);
      float: left;
    }
  }
`;

interface PropsInterface {
  entries: Object;
}

const StockTable = (props: PropsInterface) => {
  const renderTable = (data: any) => {
    if (!data || data.length <= 0) {
      return;
    }

    const lastWeek = Object.entries(data).slice(0, 7);
    const headers = lastWeek.map(([date, value]: [string, string]) => (
      <th key={date}>{date}</th>
    ));

    const values = lastWeek.map(([date, value]: [string, string]) => (
      <td data-label={date} key={date}>
        {value}
      </td>
    ));
    console.log(headers);

    return (
      <Table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>
          <tr>{values}</tr>
        </tbody>
      </Table>
    );
  };

  return <div>{renderTable(props.entries)}</div>;
};

export default StockTable;
