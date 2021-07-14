export default function Gallery() {
  return (
    <section class="gallery" id="gallery">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-wrapper">
        <figure class="gallery-item">
          <img src="img/teaching.jpg" />
          <figcaption>
            Teaching Economics to high schoolers
            <br /> is a lot of fun!
          </figcaption>
        </figure>
        <figure class="gallery-item">
          <img src="img/interpreting.jpg" />
          <figcaption>
            Interpreting medical Japanese
            <br /> with neurosurgeon prof. Morita
          </figcaption>
        </figure>
        <figure class="gallery-item">
          <img src="img/peace.jpg" />
          <figcaption>
            My presentation on building peace
            <br /> at Warsaw Stock Exchange
          </figcaption>
        </figure>
        <figure class="gallery-item">
          <img src="img/training.jpg" />
          <figcaption>
            Training future Economics teachers
            <br /> in educational psychology
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
