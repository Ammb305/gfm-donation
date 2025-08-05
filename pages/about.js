// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Us - Hope Foundation">
      <section className="about-hero">
        <div className="container">
          <h1>About Hope Foundation</h1>
          <p>Dedicated to creating lasting positive change in communities around the world</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                We envision a world where every person has access to basic necessities like clean water, 
                education, healthcare, and sustainable livelihood opportunities. Through collaborative 
                efforts and community-driven solutions, we strive to break the cycle of poverty and 
                create lasting positive change.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To empower communities worldwide by providing sustainable solutions to fundamental 
                challenges. We work directly with local partners to implement programs that address 
                immediate needs while building long-term capacity for self-sufficiency and growth.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Impact</h3>
              <p>
                Since our founding, we have reached over 100,000 people across 25 countries. Our 
                programs have a 95% success rate, and 85% of our projects continue to operate 
                successfully five years after completion, demonstrating our commitment to sustainable impact.
              </p>
            </div>
          </div>

          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto'}}>
            <h3>Our 2024 Goals</h3>
            <p>
              This year, we aim to raise $500,000 to expand our programs and reach 25,000 more people 
              in need. Our focus areas include:
            </p>
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              <li>Establishing 10 new clean water projects in rural Africa</li>
              <li>Supporting 1,000 additional children through our education programs</li>
              <li>Building 5 new healthcare clinics in underserved areas</li>
              <li>Launching 20 sustainable energy projects</li>
              <li>Expanding our emergency relief capacity</li>
            </ul>
          </div>

          <div className="social-links">
            <a href="https://facebook.com/hopefoundation" target="gofundme.com" rel="noopener noreferrer" className="social-link">
              f
            </a>
            <a href="https://twitter.com/hopefoundation" target="gofundme.com" rel="noopener noreferrer" className="social-link">
              t
            </a>
            <a href="https://instagram.com/hopefoundation" target="gofundme.com" rel="noopener noreferrer" className="social-link">
              ig
            </a>
            <a href="https://linkedin.com/company/hopefoundation" target="gofundme.com" rel="noopener noreferrer" className="social-link">
              in
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}