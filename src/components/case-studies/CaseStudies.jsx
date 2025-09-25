import SectionHeading from '../ui/SectionHeading';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './CaseStudies.css'

const CaseStudies = () => {
  return (
    <section id='case-studies' className="case-studies-section container">
      <SectionHeading
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        heading="Case Studies"
      />

      <div className="case-studios-cards-block">
        {/* Card 1 */}
        <div className="case-studies-block">
          <p >
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="case-studies-card">
            <p >Learn More</p>
            <MdOutlineArrowOutward  />
          </div>
        </div>

        {/* Card 2 */}
        <div className="case-studies-block">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="case-studies-card">
            <p >Learn More</p>
            <MdOutlineArrowOutward  />
          </div>
        </div>

        {/* Card 3 */}
        <div className="case-studies-block">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="case-studies-card">
            <p >Learn More</p>
            <MdOutlineArrowOutward  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
