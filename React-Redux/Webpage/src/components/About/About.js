export default function About() {
  return (
    <section className="about" id="about">
      <div className="container-fluid">
        <div className="row">
          <img className="col-sm-5 about-img" src="img/KM-webpage.jpg" alt="" />
          <div className="col-sm-7 about-text">
            <h2 className="section-title">About me</h2>
            {
              // if /
            }
            <article>
              <p>
                Since childhood, I have always been fascinated by systems. It started with
                languages, and extended to psychology, economics and philosophy. Now I am
                challenging my mind with some of the most practical and precise systems known to man
                — programming languages.
              </p>
              <p>
                I love to learn new things and continuously find new ways to challenge myself.
                Currently my main professional interests lie in creating working backends in Node.js
                and learning about blockchain. I am developing my skills with the same passion and
                strife for perfection I have for every other system-related activity — from board
                games to Japanese tea ceremony.
              </p>
              <p>
                Pursuing self-mastery is one of the main themes of my life. My friends often
                describe me as one of the most development-oriented people they know. I certainly
                used to struggle with perfectionism, but I have overcome my fear of mistakes and
                learned to get things done effectively.
              </p>
              <p>
                Below you will find a short list of my skills, as well as some small projects I have
                been working on. If you are interested in my services, feel free to{' '}
                <a href="#contact">contact me</a>.
              </p>
              <p>
                <a href="content/CV Krzysztof Moszyński.pdf">Click here to take a look at my CV.</a>
              </p>
            </article>
            {
              // if /translator...
            }
          </div>
        </div>
      </div>
    </section>
  );
}
