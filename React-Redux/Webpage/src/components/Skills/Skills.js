export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          <article className="col-sm-4">
            <h3 className="feature-title">Coding</h3>
            <ul className="feature-description">
              <li>Node.js, Express, mongoose</li>
              <li>React, Redux</li>
              <li>JavaScript (ES6), TypeScript</li>
              <li>Jest, RTL</li>
              <li>REST, SQL, MongoDB, GraphQL</li>
              <li>HTML5, CSS3, Bootstrap, Sass</li>
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
              <li>Time management (Eisenhower matrix, pomodoro)</li>
              <li>Scrum, Trello</li>
              <li>MS Office, Photoshop, Premiere Pro</li>
            </ul>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <h3 className="feature-title">Experience</h3>
            <ul className="feature-description">
              <li>Wordpress</li>
              <li>Specialized interpretation, translation</li>
              <li>Project team management (15 people)</li>
              <li>Public speaking, training</li>
              <li>Customer contact</li>
              <li>NGO external relations</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
