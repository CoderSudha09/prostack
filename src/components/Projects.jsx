import login from "../assets/images/school/index.png";
import adminDashboard from "../assets/images/school/dashboard.png";


export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "School Management System",
      description:
        "School Management System with Login, Dashboard, Staff, Student Management, Fee Management and Admin Panel.",
      images: [
        login,
        adminDashboard,
        // adminProfile,
        // staffDashboard,
        // manageStaff,
      ],
    },

  ];

  return (
    <section
      className="projects-section py-5"
      id="projects"
    >

      {projects.map((project) => (

        <div key={project.id} className="mb-5">

          <div className="container">

            <div className="text-center mb-5">

              <h5 className="text-info">
                My Project
              </h5>

              <h2 className="section-title">
                {project.title}
              </h2>

              <p className="mt-3">
                {project.description}
              </p>

            </div>

          </div>

          <div className="marquee">

            <div className="marquee-content">

              {[...project.images, ...project.images].map((img, index) => (

                <div
                  className="project-image-card"
                  key={index}
                >

                  <img
                    src={img}
                    alt={project.title}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      ))}

    </section>
  );


  return (
    <section
      className="projects-section py-5"
      id="projects"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-info">My Work</h5>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="row">

          {projects.map((project, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="p-3">

                  <h4>{project.title}</h4>

                  <p>{project.desc}</p>

                  <div className="mb-3">

                    {project.tech.map((item, i) => (
                      <span className="tech-badge me-2 mb-2" key={i}>
                        {item}
                      </span>
                    ))}

                  </div>

                  <div className="d-flex gap-2">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info flex-fill"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-info flex-fill"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}