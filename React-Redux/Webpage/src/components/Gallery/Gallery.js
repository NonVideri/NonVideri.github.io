export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
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
          <img
            src="img/peace.jpg"
            alt="My presentation on building peace at Warsaw Stock Exchange"
          />
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
    </section>
  );
}
