// pages/about.js
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout title="About Us - Hope Foundation">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Dedicated to promoting transparency in Gaza fundraising campaigns</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          {/* About Us Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>About Us</h3>
            <p>
              "We are an independent platform committed to promoting transparency in fundraising for Gaza. In times of crisis, trust is essential. Our mission is to ensure that every dollar donated reaches those who need it most."
            </p>
          </div>

          {/* How It Works Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>How It Works</h3>
            <div style={{textAlign: 'left'}}>
              <div style={{marginBottom: '1.5rem'}}>
                <h4 style={{color: '#2c5530', marginBottom: '0.5rem'}}>1. Campaign Submission</h4>
                <p>Anyone can submit a fundraising campaign for Gaza to our platform.</p>
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <h4 style={{color: '#2c5530', marginBottom: '0.5rem'}}>2. Verification Process</h4>
                <p>We check the authenticity of the campaign, organizer, and funds distribution.</p>
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <h4 style={{color: '#2c5530', marginBottom: '0.5rem'}}>3. Transparency Report</h4>
                <p>Each verified campaign includes a transparency score, sources, and verification status.</p>
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <h4 style={{color: '#2c5530', marginBottom: '0.5rem'}}>4. Continuous Monitoring</h4>
                <p>We follow up with campaigns post-verification to ensure funds are used properly.</p>
              </div>
            </div>
          </div>

          {/* Verification Policy Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>Verification Policy</h3>
            <p>
              "We rely on public records, interviews, digital forensics, and crowd-sourced confirmations to assess campaign legitimacy. We are not affiliated with any fundraising platform or political group. All assessments are based on evidence."
            </p>
          </div>

          {/* Privacy & Terms Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>Privacy & Terms</h3>
            <p>
              "We respect the privacy of donors and campaign organizers. All submitted data is handled confidentially. We do not sell or share data with third parties."
            </p>
          </div>

          {/* Submit a Campaign Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>Submit a Campaign</h3>
            <p style={{marginBottom: '2rem'}}>
              "Know of a Gaza fundraising campaign you'd like verified? Submit the details below. We evaluate every request carefully to ensure fair, unbiased verification."
            </p>
            <form style={{textAlign: 'left'}}>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Campaign Link *</label>
                <input 
                  type="url" 
                  required 
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Organizer Name *</label>
                <input 
                  type="text" 
                  required 
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Platform Used *</label>
                <select 
                  required 
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Platform</option>
                  <option value="gofundme">GoFundMe</option>
                  <option value="launchgood">LaunchGood</option>
                  <option value="kickstarter">Kickstarter</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Reason for Verification *</label>
                <textarea 
                  required 
                  rows="4"
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }} 
                />
              </div>
              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Additional Evidence (Optional)</label>
                <textarea 
                  rows="3"
                  placeholder="Any additional information or evidence you'd like to provide..."
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }} 
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{width: '100%'}}
              >
                Submit Campaign for Verification
              </button>
            </form>
          </div>

          {/* Contact Us Section */}
          <div className="about-card" style={{maxWidth: '800px', margin: '3rem auto 4rem'}}>
            <h3>Contact Us</h3>
            <p style={{marginBottom: '2rem'}}>
              "Have questions or want to partner with us? Reach out."
            </p>
            <form style={{textAlign: 'left'}}>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Name *</label>
                <input 
                  type="text" 
                  required 
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              <div style={{marginBottom: '1rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Email *</label>
                <input 
                  type="email" 
                  required 
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }} 
                />
              </div>
              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Message *</label>
                <textarea 
                  required 
                  rows="5"
                  style={{
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }} 
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{width: '100%'}}
              >
                Send Message
              </button>
            </form>
          </div>

      

          {/* Trusted Section */}
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