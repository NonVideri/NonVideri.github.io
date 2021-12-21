import React from 'react';
import { useTable } from 'react-table';

const data = React.useMemo(() => [
  {
    service: 'Written Japanese translation',
    unit: '1 standard page*',
    pricePLN: '100 PLN',
    priceUSD: '25 USD',
    priceBTC: 'multi'
  },
  {
    service: 'Written Polish-English translation',
    unit: '1 standard page*',
    pricePLN: '50 PLN',
    priceUSD: '12.5 USD',
    priceBTC: 'multi'
  },
  {
    service: 'Japanese interpretation**',
    unit: '4 hours',
    pricePLN: '750 PLN',
    priceUSD: '187 USD',
    priceBTC: 'multi'
  },
  {
    service: 'Polish-English interpretation**',
    unit: '4 hours',
    pricePLN: '500 PLN',
    priceUSD: '125 USD',
    priceBTC: 'multi'
  }
]);

const columns = React.useMemo(() => [
  { Header: 'Service', accessor: 'service' },
  { Header: 'Billing unit', accessor: 'unit' },
  { Header: 'Price in PLN', accessor: 'pricePLN' },
  { Header: 'Price in USD', accessor: 'priceUSD' },
  { Header: 'Price in BTC', accessor: 'priceBTC' }
]);

export default function Services() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  // if /translator
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">My services</h2>
        <div className="section-intro">
          Below you will find some of my services and fees. I deliver quality translations all over
          the world, accepting payments in PLN, USD and Bitcoin. In most cases, I don't raise the
          prices just for dealing with specialized terminology, as I enjoy the challenge.
        </div>
        {
          // Tu React Table?
          // arkusz 1800 znaków w angielskim/polskim — 100 PLN / 25 USD / Price in USD exchanged with current rate
        }
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="section-intro">
          * A standard page is 1800 characters in either English or Polish, depending on the
          language used, including spaces.
        </div>
        <div className="section-intro">
          ** In case of interpretation, the Customer is expected to cover possible travel (from
          Warsaw) and lodging expenses.
        </div>
      </div>
    </section>
  );
  // if /
  return null;
}
