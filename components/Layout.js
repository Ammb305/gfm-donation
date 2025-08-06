// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Layout({ children, title = "Hope Foundation - Making a Difference" }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsHeaderVisible(true);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Join us in making a positive impact on communities worldwide through our donation programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`header ${!isHeaderVisible ? 'header-hidden' : ''}`}>
        <div className="container">
          <nav className="nav">
            <Link href="/" className="logo">
              <Image
                src="/Logo.png"
                alt="Hope Foundation Logo"
                width={185}
                height={80}
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#programs">Campaigns</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Hope Foundation</h4>
              <p>Making a positive impact on communities worldwide through sustainable programs and initiatives.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <p><Link href="/">Home</Link></p>
              <p><Link href="/about">About Us</Link></p>
              <p><Link href="/#programs">Our Programs</Link></p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@hopefoundation.org</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Hope Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}