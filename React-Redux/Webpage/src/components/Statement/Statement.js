// import styled from 'styled-components';
import { StatementContent } from '../../contents';

// const StyledStatement = styled.section`
//   background-image: url('https://i.imgur.com/Iie96jJ.jpg');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: bottom 25% center;
//   background-attachment: fixed;
//   padding: 20px 0;
//   color: $color-muted;
// `;

// const StyledQuote = styled.quote`
//   padding: 12px 20px;
//   margin: 0;
//   font-family: $font-main;
//   font-weight: 500;
//   font-size: 22px;
//   text-align: center;
//   font-style: italic;
// `;

export default function Statement() {
  return (
    <section className="statement">
      <div className="container">{StatementContent}</div>
    </section>
  );
}
