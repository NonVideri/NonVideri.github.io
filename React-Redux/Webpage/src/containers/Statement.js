import styled from 'styled-components';

const StyledStatement = styled.section`
  background-image: url('https://i.imgur.com/Iie96jJ.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom 25% center;
  background-attachment: fixed;
  padding: 20px 0;
  color: ${props => props.theme.colorMuted};
`;

const StyledQuote = styled.blockquote`
  padding: 12px 20px;
  margin: 0;
  font-family: ${props => props.theme.fontTitles};
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  font-style: italic;
`;

export default function Statement() {
  return (
    <StyledStatement>
      <div className="container">
        <article>
          <StyledQuote>
            <q>You either grow or regress. Nothing stands still.</q>
          </StyledQuote>
        </article>
      </div>
    </StyledStatement>
  );
}
