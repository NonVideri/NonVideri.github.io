import styled from 'styled-components';
import SectionTitle from `../components/SectionTitle`

const GallerySection = styled.section`
  padding: 60px 0 10px 0;
  background-color: ${props => props.theme.colorBoxes};
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 72px 0 0 0;
`;

const GalleryItem = styled.figure`
  position: relative;
  margin: 0;
  flex: 0 0 50%;
  max-width: 50%;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:before {
    position: absolute;
    display: none;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colorBackground};
    opacity: 0.6;
  }

  figcaption {
    position: absolute;
    display: none;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colorMain};
    font-family: $;
    font-size: 18px;
  }

  &:hover:before,
  &:hover figcaption {
    display: block;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export default function Gallery() {
  return (
    <GallerySection id="gallery">
      <SectionTitle>Gallery</SectionTitle>
      <GalleryWrapper>
        <GalleryItem>
          <img src="img/teaching.jpg" alt="Teaching economics to high schoolers is a lot of fun!" />
          <figcaption>
            Teaching economics to high schoolers
            <br /> is a lot of fun!
          </figcaption>
        </GalleryItem>
        <GalleryItem>
          <img
            src="img/interpreting.jpg"
            alt="Interpreting medical Japanese with neurosurgeon prof. Morita"
          />
          <figcaption>
            Interpreting medical Japanese
            <br /> with neurosurgeon prof. Morita
          </figcaption>
        </GalleryItem>
        <GalleryItem>
          <img
            src="img/peace.jpg"
            alt="My presentation on building peace at Warsaw Stock Exchange"
          />
          <figcaption>
            My presentation on building peace
            <br /> at Warsaw Stock Exchange
          </figcaption>
        </GalleryItem>
        <GalleryItem>
          <img
            src="img/training.jpg"
            alt="Training future economics teachers in educational psychology"
          />
          <figcaption>
            Training future economics teachers
            <br /> in educational psychology
          </figcaption>
        </GalleryItem>
      </GalleryWrapper>
    </GallerySection>
  );
}
