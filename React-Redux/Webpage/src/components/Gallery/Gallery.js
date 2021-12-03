import { GalleryContent } from '../../contents';

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      {GalleryContent}
    </section>
  );
}
