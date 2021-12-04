export const ProgrammerMenuContent = (
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
);

export const ProgrammerSplashContent = (
  <div className="page-intro">
    <h1 className="main-title">Krzysztof Moszyński</h1>
    <h2 className="main-subtitle">Javascript Developer</h2>
    <a className="btn btn-solid main-btn" href="#projects">
      See my work
    </a>
  </div>
);

export const ProgrammerAboutContent = (
  <article>
    <p>
      Since childhood, I have always been fascinated by systems. It started with languages, and
      extended to psychology, economics and philosophy. Now I am challenging my mind with some of
      the most practical and precise systems known to man — programming languages.
    </p>
    <p>
      I love to learn new things and continuously find new ways to challenge myself. Currently my
      main professional interests lie in creating working backends in Node.js and learning about
      blockchain. I am developing my skills with the same passion and strife for perfection I have
      for every other system-related activity — from board games to Japanese tea ceremony.
    </p>
    <p>
      Pursuing self-mastery is one of the main themes of my life. My friends often describe me as
      one of the most development-oriented people they know. I certainly used to struggle with
      perfectionism, but I have overcome my fear of mistakes and learned to get things done
      effectively.
    </p>
    <p>
      Below you will find a short list of my skills, as well as some small projects I have been
      working on. If you are interested in my services, feel free to{' '}
      <a href="#contact">contact me</a>.
    </p>
    <p>
      <a href="content/CV Krzysztof Moszyński.pdf">Click here to take a look at my CV.</a>
    </p>
  </article>
);

export const ProgrammerSkillsContent = (
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
);

export const StatementContent = (
  <article>
    <blockquote className="quote">
      <q>You either grow or regress. Nothing stands still.</q>
    </blockquote>
  </article>
);

export const GalleryContent = (
  <div className="gallery-wrapper">
    <figure className="gallery-item">
      <img src="img/teaching.jpg" alt="Teaching economics to high schoolers is a lot of fun!" />
      <figcaption>
        Teaching economics to high schoolers
        <br /> is a lot of fun!
      </figcaption>
    </figure>
    <figure className="gallery-item">
      <img
        src="img/interpreting.jpg"
        alt="Interpreting medical Japanese with neurosurgeon prof. Morita"
      />
      <figcaption>
        Interpreting medical Japanese
        <br /> with neurosurgeon prof. Morita
      </figcaption>
    </figure>
    <figure className="gallery-item">
      <img src="img/peace.jpg" alt="My presentation on building peace at Warsaw Stock Exchange" />
      <figcaption>
        My presentation on building peace
        <br /> at Warsaw Stock Exchange
      </figcaption>
    </figure>
    <figure className="gallery-item">
      <img
        src="img/training.jpg"
        alt="Training future economics teachers in educational psychology"
      />
      <figcaption>
        Training future economics teachers
        <br /> in educational psychology
      </figcaption>
    </figure>
  </div>
);

export const ContactContent = (
  <p>
    Feel free to contact me on{' '}
    <a href="https://www.linkedin.com/in/krzysztof-moszyński-10695290/">LinkedIn</a>.
  </p>
);
