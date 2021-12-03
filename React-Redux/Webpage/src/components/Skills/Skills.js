import { ProgrammerSkillsContent } from '../../contents';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        {ProgrammerSkillsContent}
      </div>
    </section>
  );
}
