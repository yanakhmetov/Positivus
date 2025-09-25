import Amazon from '../amazon/Amazon';
import Dribble from '../dribble/Dribble';
import Hubspot from '../hubspot/Hubspot';
import Notion from '../Notion/Notion';
import Netflix from '../netflix/Netflix';
import Zoom from '../zoom/Zoom';

import './CompanyLogos.css'

const CompanyLogos = () => {
  return (
    <section className="container company-logos-block">
      <div className="company-logos-ul">
        <Amazon />
        <Dribble />
        <Hubspot />
        <Notion />
        <Netflix />
        <Zoom />
      </div>
    </section>
  );
};

export default CompanyLogos;
