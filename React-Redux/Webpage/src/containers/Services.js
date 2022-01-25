import React from 'react';
import { useTable } from 'react-table';
import SectionIntro from '../components/SectionIntro';
import SectionTitle from '../components/SectionTitle';

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
    <section id="services">
      <div className="container">
        <SectionTitle>My services</SectionTitle>
        <SectionIntro>
          Below you will find some of my services and fees. I deliver quality translations all over
          the world, accepting payments in PLN, USD and Bitcoin. In most cases, I don't raise the
          prices just for dealing with specialized terminology, as I enjoy the challenge.
        </SectionIntro>
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
                    return (
                      <td
                        {...cell.getCellProps()}
                        rowSpan={`${cell.rowSpan ?? 1}`}
                        style={cell.displayNone ? { display: 'none' } : {}}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <SectionIntro>
          * A standard page is 1800 characters in either English or Polish, depending on the
          language used, including spaces.
        </SectionIntro>
        <SectionIntro>
          ** In case of interpretation, the Customer is expected to cover possible travel (from
          Warsaw) and lodging expenses.
        </SectionIntro>
      </div>
    </section>
  );
  // if /

  return (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Billing unit</th>
          <th>Price in PLN</th>
          <th>Price in USD</th>
          <th>Price in BTC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Written Japanese translation</td>
          <td>1 standard page</td>
          <td>100 PLN</td>
          <td>25 USD</td>
          <td rowSpan="4">
            Price in USD exchanged to BTC, at the mutually agreed rate from the day when the
            translation order is accepted.
          </td>
        </tr>
        <tr>
          <td>Written Polish-English translation</td>
          <td>1 standard page</td>
          <td>50 PLN</td>
          <td>12.5 USD</td>
        </tr>
        <tr>
          <td>Japanese interpretation**</td>
          <td>4 hours</td>
          <td>750 PLN</td>
          <td>187 USD</td>
        </tr>
        <tr>
          <td>Polish-English interpretation**</td>
          <td>4 hours</td>
          <td>500 PLN</td>
          <td>125 USD</td>
        </tr>
      </tbody>
    </table>
  );
}