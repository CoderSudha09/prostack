import { useState } from "react";

import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Confirmation Popup
    const confirm = await Swal.fire({
      title: "Send Message?",
      text: "Do you want to send this message?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Send",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0dcaf0",
      cancelButtonColor: "#6c757d",
    });

    if (!confirm.isConfirmed) {
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status) {
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: result.message,
          confirmButtonText: "OK",
          confirmButtonColor: "#0dcaf0",
        });

        // Form Clear
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message,
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to connect to the server.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section
      className="contact-section py-5"
      id="contact"
      data-aos="fade-left"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="text-info">Get In Touch</h5>
          <h2 className="text-white fw-bold">Contact Me</h2>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="contact-info">
              <h4 className="text-info mb-4">
                Let's Work Together 🚀
              </h4>

              <p>
                I am currently looking for internship and full-time opportunities in Web Development.
                Feel free to contact me if you have any suitable opportunity.
              </p>

              <p><strong>Email :</strong> sudhkumari91280@gmail.com</p>
              <p><strong>Phone :</strong> +91 92341 75236</p>
              <p><strong>Location :</strong> Bihar, India</p>
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="subject"
                className="form-control mb-3"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn btn-info btn-lg">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}