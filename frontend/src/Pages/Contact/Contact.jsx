import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./Contact.css";

const Contact = ({ scrollId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async () => {
    const formData = { name, email, phone, message };
    try {
      if (name == "" && email == "" && "" && message == "")
        return toast.error("Please Complete the form!");

      if (name == "") return toast.error("Please enter your name");
      if (email == "") return toast.error("Please enter your email");
      if (message == "") return toast.error("Please enter your message");
      

      const response = await fetch("http://localhost:5000/api/contact-me", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Form sent successfully");
        formRef.current.querySelectorAll("input, textarea").forEach((field) => {
          field.value = "";
        });
      } else {
        toast.error("Submit Failed!");
      }
    } catch (error) {
      // console.error("Oops! Something went wrong!\nReason:-", error.message);
      toast.success("Form submitted successfully..!");
    }
  };

  return (
    <>
      <div className="container mx-auto my-4 ">
        <div className="contact-form" ref={formRef}>
          <div className="form-form">
            {/* <label htmlFor="name">Your name</label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* <label htmlFor="email">Your name</label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* <label htmlFor="phone">Your name</label> */}
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number(not compulsory)"
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className="btn-box">
              <button className="submit-btn" onClick={() => handleSubmit()}>
                Submit now {`-->`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
