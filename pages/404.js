import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout title="Page Not Found - Hope Foundation">
      <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', color: '#2c5530', marginBottom: '1rem'}}>404</h1>
        <h2 style={{marginBottom: '1rem'}}>Page Not Found</h2>
        <p style={{marginBottom: '2rem', color: '#666'}}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </Layout>
  );
}