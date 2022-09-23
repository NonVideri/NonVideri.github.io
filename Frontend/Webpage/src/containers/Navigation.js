import styled from 'styled-components';

const NavigationBar = styled.nav`
  background-color: ${(props) => props.theme.colorBackground};
  padding: 12px 0;
  text-align: center;
  position: static;
  top: 0;
  width: 100%;
  z-index: 9999;

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 8px;
      color: ${(props) => props.theme.colorTitles};
      font-family: ${(props) => props.theme.fontTitles};
      font-size: 16px;
      transition: ${(props) => props.theme.transition};
      text-decoration: none;

      a:hover {
        background-color: lighten(${(props) => props.theme.colorBackground}, 30%);
        color: lighten(${(props) => props.theme.colorTitles}, 25%);
        transition: ${(props) => props.theme.transition};
      }
    }
  }

  @media (min-width: 992px) {
    position: fixed;
  }
`;

export default function Navigation({ mode }) {
  if (mode === 'translations')
    return (
      <NavigationBar>
        <div className="container">
          <ul>
            <li>
              <a href="#about">Introduction</a>
            </li>
            <li>•</li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>•</li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>•</li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </NavigationBar>
    );
  return (
    <NavigationBar>
      <div className="container">
        <ul>
          <li>
            <a href="#about">Introduction</a>
          </li>
          <li>•</li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>•</li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>•</li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>•</li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </NavigationBar>
  );
}
