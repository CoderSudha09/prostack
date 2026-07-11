import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/images/yy.png";

export default function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Section */}
          <div className="col-lg-6 text-white">

            <h5 className="text-info fw-bold mb-2">
              👋 Hello, I'm
            </h5>

            <h1 className="display-2 fw-bold mb-3">
              Sudha <span className="text-info">Gupta</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="text-light fw-semibold mb-4"
            />

            <p className="lead text-light">

              Passionate Full Stack Developer and aspiring Software Engineer,
              dedicated to building modern, responsive, and user-friendly web applications.

            </p>

            <div className="mt-4">

              <a
                href="#contact"
                className="btn btn-info btn-lg me-3 px-4"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn btn-outline-light btn-lg px-4"
              >
                Download CV
              </a>

            </div>

          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <div className="image-box">

              <img
                src={profileImg}
                alt="Sudha Gupta"
                className="profile-img"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}