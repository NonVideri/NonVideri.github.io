import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';

const SkillsSection = styled.section`
  padding: 60px 0 80px;
  background-color: $color-boxes;
`;

const SkillsList = styled.ul`
  padding: 0 24px;
`;

export default function Skills() {
  // if /
  return (
    <SkillsSection id="skills">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <div className="row">
          <article className="col-sm-4">
            <SkillsList>
              <li>Node.js, Express, NestJS</li>
              <li>mongoose, sqlite3, Sequelize, Passport</li>
              <li>SQL (PostgreSQL, SQLite), MongoDB</li>
              <li>HTTP, REST</li>
              <li>React, Redux</li>
              <li>JavaScript (ES6), TypeScript</li>
              <li>Jest, RTL, Mocha/Chai, Manual Testing</li>
            </SkillsList>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <SkillsList>
              <li>HTML5, CSS3, Bootstrap, Sass</li>
              <li>Python</li>
              <li>Git</li>
              <li>Mnemonics (fast learning, mind maps), speed reading</li>
              <li>Time management</li>
              <li>Teamwork, Scrum (Trello)</li>
              <li>MS Office, Photoshop, Premiere Pro</li>
            </SkillsList>
          </article>
          <div className="divider"></div>
          <article className="col-sm-4">
            <SkillsList>
              <li>Application Testing</li>
              <li>Wordpress Webpage Management, Improvement</li>
              <li>Project team management (15 people)</li>
              <li>Public speaking, mentoring</li>
              <li>Specialized interpretation, translation</li>
              <li>NGO external relations</li>
            </SkillsList>
          </article>
        </div>
      </div>
    </SkillsSection>
  );
  // if /translator
  return null;
}
