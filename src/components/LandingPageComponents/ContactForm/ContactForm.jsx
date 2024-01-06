import React, { useState } from "react";
import "./style.scss";

const ContactForm = () => {
  const [selectedRequirement, setSelectedRequirement] = useState("");

  const handleRequirementChange = (event) => {
    setSelectedRequirement(event.target.value);
  };
  return (
    <section className="contact-form-section">
      <div className="form-element">
        <h1>Connect with us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">Enter Your Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <input
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
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              placeholder="Confirm Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="requirements">Requirements</label>
            <select
              id="requirements"
              name="requirements"
              onChange={handleRequirementChange}
              value={selectedRequirement}
              required
            >
              <option value="" disabled>
                Select a requirement
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
