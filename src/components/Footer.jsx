export default function Footer() {
  return (

    <footer className="footer-section py-4" data-aos="fade-up" >
      <div className="container">

        <div className="row">

          {/* Left */}
          <div className="col-lg-4 mb-4">
            <h2 className="footer-logo">
              Sudha <span>Gupta</span>
            </h2>

            <p className="footer-text mt-3">
              Passionate Full Stack Developer creating modern,
              responsive and user-friendly web applications using
              React, Bootstrap, JavaScript, MySQL and PHP.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">

            <h4 className="footer-title">
              Get In Touch
            </h4>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              sudhk9120@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 92341 75236
            </p>

            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Bihar, India
            </p>

            <div className="social-icons mt-4">

              <a href="https://github.com/sudha-coders-dev"><i className="bi bi-github"></i></a>

              <a href="https://www.linkedin.com/in/sudha-gupta-2216353b0"><i className="bi bi-linkedin"></i></a>

              <a href="#"><i className="bi bi-instagram"></i></a>

              <a href="#"><i className="bi bi-facebook"></i></a>
              
              <a href="https://t.me/technologywithsudha8897"><i className="bi bi-telegram"></i></a>

            </div>

          </div>

        </div>

        <hr className="footer-line" />

        <div className="text-center">

          <p className="copyright">
            © 2026 <strong>Sudha Gupta</strong>. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

