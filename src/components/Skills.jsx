export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap ",
        "JavaScript",
        "React.js",
        
      ],
    },

    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "PHP",
        "Node.js",
       
      ],
    },

    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MySQL",
        "PostgreSQL",

      ],
    },

    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        "Java",
        "C",
        "C++",
        "Python",
       
      ],
    },

    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
       
      ],
    },
  ];

  return (
    <section
      className="skills-section py-5"
      id="skills"
      data-aos="zoom-in"
    >
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-info">My Expertise</h5>
          <h2 className="text-white fw-bold">Technical Skills</h2>
        </div>

        <div className="row">

          {skillCategories.map((category, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="skill-category-card h-100">

                <h4 className="text-info mb-4">
                  {category.icon} {category.title}
                </h4>

                <div className="d-flex flex-wrap gap-2">

                  {category.skills.map((skill, i) => (
                    <span className="skill-badge" key={i}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}