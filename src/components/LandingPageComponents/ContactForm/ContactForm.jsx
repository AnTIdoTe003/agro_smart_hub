import { useState } from "react";
import "./style.scss";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/create-users",
        formData
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="form-element">
        <h1>Connect with us</h1>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="firstName">Enter Your Name</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              placeholder="Enter your phone number"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button onClick={handleLogin} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
