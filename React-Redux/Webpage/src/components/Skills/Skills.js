export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          <article className="col-sm-4">
            <h3 className="feature-title">Coding</h3>
            <ul className="feature-description">
              <li>HTML5 (Bootstrap)</li>
              <li>CSS3 (Sass)</li>
              <li>JavaScript (ES6), TypeScript</li>
              <li>React, Redux</li>
              <li>Jest, RTL</li>
              <li>REST, GraphQL</li>
              <li>Python</li>
              <li>Git</li>
            </ul>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <h3 className="feature-title">Other</h3>
            <ul className="feature-description">
              <li>Mnemonics, mind maps</li>
              <li>Speed reading</li>
              <li>
                Time management (Eisenhower matrix, pomodoro, task
                decomposition)
              </li>
              <li>Scrum, Trello</li>
              <li>Excel, Word, Wordpress</li>
              <li>Photoshop, Premiere Pro</li>
            </ul>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <h3 className="feature-title">Experience</h3>
            <ul className="feature-description">
              <li>Specialized interpretation, translation</li>
              <li>Project team management (15 people)</li>
              <li>Public speaking, training</li>
              <li>Event management</li>
              <li>Customer contact</li>
              <li>NGO external relations</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
