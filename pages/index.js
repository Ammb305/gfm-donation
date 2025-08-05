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
          <h1>Building Hope, Changing Lives 🤲</h1>
          <p>Join us in making a positive impact on communities worldwide through our sustainable programs and initiatives.</p>
          <Link href="#programs" className="btn btn-primary btn-large">
            Explore Programs
          </Link>
        </div>
      </section>

      <section id="programs" className="programs-section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="programs-grid">
            {donationPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={500}
                  height={300}
                  className="program-image"
                />
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
    </Layout>
  );
}