// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Layout({ children, title = "Hope Foundation - Making a Difference" }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
      
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
  }, [lastScrollY, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Prevent body scroll when menu is open
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

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
                width={255}
                height={100}
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#programs">Campaigns</Link></li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <div 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Mobile Navigation Menu */}
            <ul className={`nav-links mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link href="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link href="/about" onClick={closeMobileMenu}>About</Link></li>
              <li><Link href="/#programs" onClick={closeMobileMenu}>Campaigns</Link></li>
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
              <p>In times of crisis, trust is essential. Our mission is to ensure that every dollar donated reaches those who need it most.</p>
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
              <p>Phone: +1 (000) 123-4567</p>
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