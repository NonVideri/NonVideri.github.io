import Randomizer from './Randomizer/Randomizer';
import Clock from './Clock/Clock';
import ToDoApp from './ToDoApp/ToDoApp';

export default function Projects() {
  // if (location.pathname !== '/translator')
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="section-intro">
          <a href="https://github.com/NonVideri">Click here to see my GitHub repository.</a>
        </div>
        <h4 className="project">React-Redux Randomizer</h4>
        {/*<div className="feature-description">
          I love board games. Out of this love was born the Randomizer — an app
          created to serve as an aid for picking random items from a list. Its
          biggest use is in picking random cards from a list, although you can
          also use it for tasks such as throwing dice. Who needs actual
          components when you have the Randomizer?
          </div>*/}
        <Randomizer />
        <h4 className="project">React Clock</h4>
        <Clock />
        <h4 className="project">React Programmer's To-Do</h4>
        <ToDoApp />
      </div>
    </section>
  );

  // return null;
}
