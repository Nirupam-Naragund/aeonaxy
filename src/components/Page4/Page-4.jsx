import React from 'react';
import './Page-4.css';

const EmailVerificationPage = () => {
  return (
    <div className="email-verification-page">
      <header className="page-header">
        <div className="logo">
          <img src="/dribble.png" alt="Dribbble" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Learn Design</a></li>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Hire Designers</a></li>
          </ul>
        </nav>
        <div className="search-and-profile">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </header>
      <main className="page-content">
        <h1 className="page-title">Please verify your email...</h1>
        <div className="email-icon">
          <img src="/email.png" alt="Email" />
        </div>
        <p className="email-description">
          Please verify your email address. We've sent a confirmation email to: <span>account@refero.design</span>
        </p>
        <p className="email-instructions">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="email-note">
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#">resend the confirmation email.</a>
        </p>
        <p className="email-change">
          Wrong email address? <a href="#">Change it.</a>
        </p>
      </main>
      <div className="navigation-page">
     
      <main className="pagee-content">
        <div className="content-section">
          <h2>For designers</h2>
          <ul>
            <li><a href="#">Go Pro!</a></li>
            <li><a href="#">Explore design work</a></li>
            <li><a href="#">Design blog</a></li>
            <li><a href="#">Overtime podcast</a></li>
            <li><a href="#">Playoffs</a></li>
            <li><a href="#">Weekly Warm-Up</a></li>
            <li><a href="#">Refer a Friend</a></li>
            <li><a href="#">Code of conduct</a></li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Hire designers</h2>
          <ul>
            <li><a href="#">Post a job opening</a></li>
            <li><a href="#">Post a freelance project</a></li>
            <li><a href="#">Search for designers</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Advertise with us</a></li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Company</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Media kit</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Directories</h2>
          <ul>
            <li><a href="#">Design jobs</a></li>
            <li><a href="#">Designers for hire</a></li>
            <li><a href="#">Freelance designers for hire</a></li>
            <li><a href="#">Tags</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Design assets</a></li>
            <li><a href="#">Dribbble Marketplace</a></li>
            <li><a href="#">Creative Market</a></li>
            <li><a href="#">Fontspring</a></li>
            <li><a href="#">Font Squirrel</a></li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Design Resources</h2>
          <ul>
            <li><a href="#">Freelancing</a></li>
            <li><a href="#">Design Hiring</a></li>
            <li><a href="#">Design Portfolio</a></li>
            <li><a href="#">Design Education</a></li>
            <li><a href="#">Creative Process</a></li>
            <li><a href="#">Design Industry Trends</a></li>
          </ul>
        </div>
      </main>
      <footer className="page-footer">
        {/* <div className="footer-content">
          <div className="about-dribbble">
            <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <img src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="social-link">
              <img src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="social-link">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-link">
              <img src="/pinterest.svg" alt="Pinterest" />
            </a>
          </div>
        </div> */}
        <p className="copyright">© 2023 Dribbble. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default EmailVerificationPage;