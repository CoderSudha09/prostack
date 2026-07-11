import java from "../assets/certificates/java.jpg";
// import react from "../assets/certificates/react.jpg";
// import php from "../assets/certificates/php.jpg";
// import mysql from "../assets/certificates/mysql.jpg";
// import bootstrap from "../assets/certificates/bootstrap.jpg";

export default function Certificates() {

  const certificates = [
    {
      title: "Java Certificate",
      image: java,
    },
    // {
    //   title: "React Certificate",
    //   image: react,
    // },
    // {
    //   title: "PHP Certificate",
    //   image: php,
    // },
    // {
    //   title: "MySQL Certificate",
    //   image: mysql,
    // },
    // {
    //   title: "Bootstrap Certificate",
    //   image: bootstrap,
    // },
  ];

  return (
    <section className="certificate-section py-5" id="certificates">

      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-info">Achievements</h5>
          <h2 className="section-title">Certificates</h2>
        </div>

        <div className="row">

          {certificates.map((item, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="certificate-card">

                <img
                  src={item.image}
                  alt={item.title}
                  className="certificate-img"
                />

                <div className="p-3">

                  <h5>{item.title}</h5>

                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info mt-2"
                  >
                    View Certificate
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}