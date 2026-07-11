import profileImg from "../assets/images/yy.png";

export default function About() {
  return (
    <section
      className="about-section py-5"
      id="about"
      data-aos="fade-right"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h5 className="text-info">Get To Know</h5>
          <h2 className="fw-bold text-white">About Me</h2>
        </div>

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profileImg}
              alt="Sudha Gupta"
              className="about-img img-fluid shadow"
            />
          </div>

          {/* Right Side */}
          <div className="col-lg-7">

            <h3 className="text-white mb-3">
              I'm <span className="text-info">Sudha Gupta</span>
            </h3>

            <p className="text-light">
              I am a BCA student and an aspiring Software Engineer with a
              strong interest in software development and modern web
              technologies. I enjoy learning new technologies, solving
              real-world problems, and building responsive, user-friendly
              applications. I am always eager to improve my programming
              skills and contribute to meaningful projects.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div className="info-card">
                  <h5>🎓 Education</h5>
                  <p>Bachelor of Computer Applications (BCA)</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="info-card">
                  <h5>💼 Experience</h5>
                  <p>Fresher</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="info-card">
                  <h5>📍 Location</h5>
                  <p>Bihar, India</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="info-card">
                  <h5>📧 Email</h5>
                  <p>sudhakumari91280@gmail.com</p>
                </div>
              </div>

            </div>

            <a
              href="/Sudha_Gupta_Resume.pdf"
              download
              className="btn btn-info btn-lg mt-3"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}