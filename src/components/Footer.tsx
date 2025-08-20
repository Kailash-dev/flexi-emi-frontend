export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flexi-footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>Flexi-EMI</h3>
          <p>Smart EMI solutions for everyone. Flexible, reliable, and transparent.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {currentYear} Flexi-EMI. All rights reserved.
      </div>
    </footer>
  );
}
