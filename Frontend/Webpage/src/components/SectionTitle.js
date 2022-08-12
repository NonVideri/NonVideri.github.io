import styled from 'styled-components';

export default styled.h2`
  position: relative;
  margin: 0 0 60px 0;
  text-align: center;
  color: ${props => props.theme.colorTitles};
  font-family: ${props => props.theme.fontTitles};
  font-weight: bold;

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    width: 200px;
    height: 5px;
    background: ${props => props.theme.colorMain};
    left: 50%;
    bottom: -16px;
    margin-left: -100px;
  }
`;
