// pages/donate/[slug].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { donationPrograms } from '../../data/programs';

export default function ProgramDetail({ program }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!program) {
    return (
      <Layout title="Program Not Found - Hope Foundation">
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <h1>Program Not Found</h1>
          <p>The program you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const progressPercentage = Math.round((program.raisedAmount / program.targetAmount) * 100);

  return (
    <Layout title={`${program.title} - Hope Foundation`}>
      <section className="detail-header">
        <div className="container">
          <h1 className="detail-title">{program.title}</h1>
          <p style={{fontSize: '1.2rem', opacity: 0.9}}>{program.shortDescription}</p>
        </div>
      </section>

      <section className="detail-content">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <Image
              src={program.image}
              alt={program.title}
              width={800}
              height={400}
              style={{borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)'}}
            />
          </div>

          <div className="progress-section">
            <h3 style={{textAlign: 'center', marginBottom: '1rem', color: '#2c5530'}}>
              Fundraising Progress
            </h3>
            <div className="progress-text">
              <span>${program.raisedAmount.toLocaleString()} raised</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${progressPercentage}%`}}
              ></div>
            </div>
            <div style={{textAlign: 'center', marginTop: '0.5rem', color: '#666'}}>
              Goal: ${program.targetAmount.toLocaleString()}
            </div>
          </div>

          <div className="detail-body">
            {program.fullDescription.split('\n\n').map((paragraph, index) => (
              <div key={index}>
                {paragraph.includes('•') ? (
                  <ul>
                    {paragraph.split('•').filter(item => item.trim()).map((item, i) => (
                      <li key={i}>{item.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{paragraph.trim()}</p>
                )}
              </div>
            ))}
          </div>

          <div className="donate-section">
            <a 
              href={program.donationUrl} 
              target="gofundme.com" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-large"
              style={{fontSize: '1.2rem', padding: '1rem 3rem'}}
            >
              Donate Now - Make a Difference
            </a>
            <p style={{marginTop: '1rem', color: '#666'}}>
              Your donation goes directly to supporting this program and the communities it serves.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Generate static paths for all programs
export async function getStaticPaths() {
  const paths = donationPrograms.map((program) => ({
    params: { slug: program.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Generate static props for each program
export async function getStaticProps({ params }) {
  const program = donationPrograms.find(p => p.slug === params.slug);

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      program,
    },
  };
}