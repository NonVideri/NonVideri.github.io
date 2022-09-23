import Randomizer from './Randomizer/Randomizer';
import Clock from './Clock/Clock';
import ToDoApp from './ToDoApp/ToDoApp';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import SectionIntro from '../../components/SectionIntro';

const ProjectTitle = styled.h4`
  margin: 14px 0;
  padding: 14px 0;
  font-family: ${(props) => props.theme.fontTitles};
`;

export default function Projects({ mode }) {
  if (mode === 'translations') return null;
  return (
    <section id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <SectionIntro>
          <a href="https://github.com/NonVideri">Click here to see my GitHub repository.</a>
        </SectionIntro>
        <ProjectTitle>React-Redux Randomizer</ProjectTitle>
        {/*<div className="description">
          I love board games. Out of this love was born the Randomizer — an app
          created to serve as an aid for picking random items from a list. Its
          biggest use is in picking random cards from a list, although you can
          also use it for tasks such as throwing dice. Who needs actual
          components when you have the Randomizer?
          </div>*/}
        <Randomizer />
        <ProjectTitle>React Clock</ProjectTitle>
        <Clock />
        <ProjectTitle>React Programmer's To-Do</ProjectTitle>
        <ToDoApp />
      </div>
    </section>
  );
}
