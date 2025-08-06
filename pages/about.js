// pages/about.js
import Layout from '../components/Layout';
import Image from 'next/image';

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
            <h3>Who Are We</h3>
            <p>
              "We are an independent platform committed to promoting transparency in fundraising for Gaza. In times of crisis, trust is essential. Our mission is to ensure that every dollar donated reaches those who need it most."

            </p>
            <br />
            We achieve this through:
            <br/>
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              
              <li>Campaign Submission</li>
              <li>Verification Process</li>
              <li>Transparency Report</li>
              <li>Continuous Monitoring</li>
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

          <div className="trusted-section" style={{ paddingTop: '4rem' }}>
            <h2 className="trusted-title">Trusted by those you trust</h2>
            <div className="trusted-image-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <Image
                src="/people.png"
                alt="Trusted by those you trust"
                width={300}
                height={150}
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}