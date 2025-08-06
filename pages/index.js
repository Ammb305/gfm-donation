// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { donationPrograms } from '../data/programs';

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <h1>Verify Before You Donate, Supporting Gaza Starts with Trust.</h1>
          <p>Empowering donors with verified information about Gaza fundraising campaigns. 
            We investigate, verify, and help you give with confidence.</p>
          <Link href="#programs" className="btn btn-primary btn-large">
            Browse Verified Campaigns
          </Link>
        </div>
      </section>

      <section id="programs" className="programs-section">
        <div className="container">
          <h2 className="section-title">Trusted & Verified Campaigns</h2>
          <div className="programs-grid">
            {donationPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image-wrapper">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="program-image"
                  />
                </div>
                <div className="program-content">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.shortDescription}</p>
                  <div className="program-actions">
                    <Link href={`/donate/${program.slug}`} className="btn btn-primary">
                      More Info
                    </Link>
                    <a 
                      href={program.donationUrl} 
                      target="gofundme.com" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="container">
          <h2 className="trusted-title">Trusted by those you trust</h2>
          <div className="trusted-image-container">
            <Image
              src="/people.png"
              alt="Trusted by those you trust"
              width={800}
              height={400}
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}