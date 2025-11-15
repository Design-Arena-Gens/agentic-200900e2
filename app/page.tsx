export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <span>💻</span>
              <span>CyberHub Nigeria</span>
            </div>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Your Digital Gateway in Nigeria</h1>
          <p>Fast Internet • Printing Services • Computer Training • Gaming Zone</p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>High-Speed Internet</h3>
              <p>Lightning-fast broadband connection with reliable uptime. Perfect for browsing, streaming, and downloads.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🖨️</div>
              <h3>Printing & Scanning</h3>
              <p>Professional printing, scanning, and photocopying services. Color and black & white available.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Business Services</h3>
              <p>Document typing, CV formatting, business proposals, and professional document services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Computer Training</h3>
              <p>Learn Microsoft Office, graphic design, web development, and essential computer skills.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h3>Gaming Zone</h3>
              <p>Latest games on high-performance PCs and gaming consoles. Tournaments and events regularly.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Services</h3>
              <p>Email setup, social media management, online applications, and digital assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose CyberHub?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h4>24/7 Operation</h4>
                <p>Open round the clock to serve you whenever you need us</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div className="feature-content">
                <h4>Secure & Private</h4>
                <p>Your data and privacy are our top priority with secure networks</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">👨‍💼</div>
              <div className="feature-content">
                <h4>Expert Staff</h4>
                <p>Trained professionals ready to assist with technical support</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <h4>Affordable Rates</h4>
                <p>Competitive pricing with flexible packages for everyone</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🖥️</div>
              <div className="feature-content">
                <h4>Modern Equipment</h4>
                <p>Latest computers and technology for the best experience</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">❄️</div>
              <div className="feature-content">
                <h4>Comfortable Space</h4>
                <p>Air-conditioned environment with comfortable seating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Hourly</h3>
              <div className="price">₦200</div>
              <div className="price-period">per hour</div>
              <ul className="pricing-features">
                <li>High-speed internet access</li>
                <li>Modern computer systems</li>
                <li>Printing (extra charge)</li>
                <li>Technical support</li>
              </ul>
              <a href="#contact" className="cta-button">Choose Plan</a>
            </div>

            <div className="pricing-card featured">
              <h3>Daily Pass</h3>
              <div className="price">₦1,500</div>
              <div className="price-period">per day</div>
              <ul className="pricing-features">
                <li>Unlimited internet access</li>
                <li>Priority seating</li>
                <li>5 free prints included</li>
                <li>Free refreshments</li>
                <li>Technical support</li>
              </ul>
              <a href="#contact" className="cta-button">Choose Plan</a>
            </div>

            <div className="pricing-card">
              <h3>Weekly</h3>
              <div className="price">₦8,000</div>
              <div className="price-period">per week</div>
              <ul className="pricing-features">
                <li>Unlimited internet access</li>
                <li>Reserved workstation</li>
                <li>20 free prints included</li>
                <li>Free scanning services</li>
                <li>Priority technical support</li>
              </ul>
              <a href="#contact" className="cta-button">Choose Plan</a>
            </div>

            <div className="pricing-card">
              <h3>Monthly</h3>
              <div className="price">₦25,000</div>
              <div className="price-period">per month</div>
              <ul className="pricing-features">
                <li>Unlimited internet access</li>
                <li>Dedicated workstation</li>
                <li>100 free prints included</li>
                <li>Free all services</li>
                <li>24/7 priority support</li>
                <li>10% discount on training</li>
              </ul>
              <a href="#contact" className="cta-button">Choose Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Visit Us Today</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h4>Location</h4>
              <p>123 Lagos-Ibadan Expressway<br/>Lagos, Nigeria</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <p>+234 801 234 5678<br/>+234 802 345 6789</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>info@cyberhubnigeria.com<br/>support@cyberhubnigeria.com</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <h4>Hours</h4>
              <p>Open 24/7<br/>Always here to serve you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 CyberHub Nigeria. All rights reserved.</p>
          <p>Empowering Nigeria's Digital Future</p>
        </div>
      </footer>
    </>
  )
}
