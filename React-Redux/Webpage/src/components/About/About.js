import { ProgrammerAboutContent } from '../../contents';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container-fluid">
        <div className="row">
          <img className="col-sm-5 about-img" src="img/KM-webpage.jpg" alt="" />
          <div className="col-sm-7 about-text">
            <h2 className="section-title">About me</h2>
            {ProgrammerAboutContent}
          </div>
        </div>
      </div>
    </section>
  );
}
