import { ContactContent } from '../../contents';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        {ContactContent}
      </div>
    </section>
  );
}
