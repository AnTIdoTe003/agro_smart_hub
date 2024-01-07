import { useState } from "react";
import "./style.scss";
import { useMutation } from "react-query";
import { axiosInstance } from "../../../helpers/axiosInstance";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
  });
  const handleLogin = useMutation(
    () => {
      return axiosInstance({
        url: "/create-users",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  return (
    <section className="contact-form-section">
      <div className="form-element">
        <h1>Connect with us</h1>
        <form className="contact-form">
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
            <label htmlFor="phoneNumber">Password</label>
            <input
              placeholder="Enter your password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>
          <button onClick={() => handleLogin.mutate()} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
