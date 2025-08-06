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
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Program Not Found</h1>
          <p>The program you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const progressPercentage = Math.round((program.raisedAmount / program.targetAmount) * 100);

  return (
    <Layout title={`${program.title} - Hope Foundation`}>
      <section className="detail-header" style={{ marginTop: '2.3rem' }}>
        <div className="container">
          <h1 className="detail-title">{program.title}</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{program.shortDescription}</p>
        </div>
      </section>

      <section className="detail-content">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              className="detail-image-wrapper"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                height: '400px',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src={program.image}
                alt={program.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>

         <div className="progress-section">
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem',
  }}>
    {/* Left side: Raised, Goal, Donations */}
    <div style={{ flex: 1, minWidth: '280px' }}>
      <div style={{ 
        fontSize: '1.8rem', 
        fontWeight: 'bold', 
        color: '#2c5530',
        marginBottom: '0.5rem'
      }}>
        €{program.raisedAmount.toLocaleString()} raised
      </div>
      <div style={{ 
        fontSize: '1.1rem', 
        color: '#666', 
        marginBottom: '1rem'
      }}>
        €{(program.targetAmount / 1000).toFixed()}K goal &middot; {program.donationCount || Math.floor(program.raisedAmount / 50)} donations
      </div>
    </div>

    {/* Right side: Circular progress bar */}
    <div style={{ 
      width: '70px', 
      height: '70px', 
      position: 'relative',
      flexShrink: 0
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: `conic-gradient(#2c5530 ${progressPercentage * 3.6}deg, #e9ecef ${progressPercentage * 3.6}deg)`,
        padding: '6px'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          color: '#2c5530',
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12)',
        }}>
          {progressPercentage}%
        </div>
      </div>
    </div>
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


          <div className="donate-section" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a
              href={program.donationUrl}
              target="gofundme.com"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
            >
              Donate Now - Make a Difference
            </a>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Donate safely – this campaign is verified and supported by our team. Your contribution goes directly to the communities in need.
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
  const program = donationPrograms.find((p) => p.slug === params.slug);

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
