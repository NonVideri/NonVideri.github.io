import styled from 'styled-components';

const PageFooter = styled.footer`
  background-color: ${props => props.theme.colorBoxes};
  font-size: 12px;
  padding: 12px 0;

  .container {
    text-align: center;
  }

  p {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <PageFooter>
      <div className="container">
        <p>© Krzysztof Moszyński</p>
      </div>
    </PageFooter>
  );
}
