export default function Skills() {
  // if /
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          <article className="col-sm-4">
            <ul className="feature-description">
              <li>Node.js, Express, NestJS</li>
              <li>mongoose, sqlite3, Sequelize, Passport</li>
              <li>SQL (PostgreSQL, SQLite), MongoDB</li>
              <li>HTTP, REST</li>
              <li>React, Redux</li>
              <li>JavaScript (ES6), TypeScript</li>
              <li>Jest, RTL, Mocha/Chai, Manual Testing</li>
            </ul>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <ul className="feature-description">
              <li>HTML5, CSS3, Bootstrap, Sass</li>
              <li>Python</li>
              <li>Git</li>
              <li>Mnemonics (fast learning, mind maps), speed reading</li>
              <li>Time management</li>
              <li>Teamwork, Scrum (Trello)</li>
              <li>MS Office, Photoshop, Premiere Pro</li>
            </ul>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <ul className="feature-description">
              <li>Application Testing</li>
              <li>Wordpress Webpage Management, Improvement</li>
              <li>Project team management (15 people)</li>
              <li>Public speaking, mentoring</li>
              <li>Specialized interpretation, translation</li>
              <li>NGO external relations</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
  // if /translator
  return null;
}
