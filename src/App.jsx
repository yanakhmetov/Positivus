import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import CompanyLogos from './components/company-logos/CompanyLogos';
import Services from './components/services/Services';
import CaseStudies from './components/case-studies/CaseStudies';
import WorkingProcess from './components/working-process/WorkingProcess';
import Team from './components/team/Team';
import Testimonials from './components/testimonials/Testimonials';
import ContactUs from './components/contact-us/ContactUs';
import Footer from './components/footer/Footer';
import './App.css'



const App = () => {
  return (
    <>
    <main>
      <Navbar />
      <Header />
      <CompanyLogos />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
    </>
  );
};

export default App;
