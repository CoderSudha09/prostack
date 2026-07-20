import { useState } from "react";

// Images
import login from "../assets/images/school/index.png";
import adminDashboard from "../assets/images/school/dashboard.png";

// Videos
import loginVideo from "../assets/videos/login.mp4";
import dashboardVideo from "../assets/videos/dashboard.mp4";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState("");

  const projects = [
    {
      id: 1,
      title: "Creative Digital Solutions",
      description:
        "Discover a collection of projects built with modern technologies and diverse programming languages, each designed to solve real-world challenges while showcasing practical development skills.",

      images: [
        {
          image: login,
          video: loginVideo,
        },
        {
          image: adminDashboard,
          video: dashboardVideo,
        },
      ],
    },
  ];

  return (
    <>
      <section className="projects-section py-5" id="projects">

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

                {[...project.images, ...project.images].map((item, index) => (

                  <div
                    className="project-image-card"
                    key={index}
                  >

                    <img
                      src={item.image}
                      alt={project.title}
                    />

                    <button
                      className="btn btn-info demo-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      onClick={() => setSelectedVideo(item.video)}
                    >
                      ▶ Watch Demo
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </section>

      {/* Video Modal */}

      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
      >

        <div className="modal-dialog modal-xl modal-dialog-centered">

          <div className="modal-content bg-dark">

            <div className="modal-header border-0">

              <h5 className="text-white">
                Project Demo
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>

            </div>

            <div className="modal-body">

              <video
                src={selectedVideo}
                controls
                autoPlay
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

            </div>

          </div>

        </div>

      </div>
    </>
  );
}