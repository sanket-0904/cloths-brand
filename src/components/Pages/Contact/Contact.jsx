import React from "react";
import styles from "./../Contact/contact.module.css";
import pone from "./../../../../public/img/people/1.png";
import ptwo from "./../../../../public/img/people/2.png";
import pthree from "./../../../../public/img/people/3.png";

const Contact = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.banner}>
          <h1>#let's_talk</h1>
          <p>LEAVE A MESSAGE, We love to hear from you!</p>
        </div>
      </div>
      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h4>GET IN TOUCH</h4>
          <h2>
            Visit one of our agency locations
            <br />
            or contact us today
          </h2>

          <h3>Head Office</h3>
          <p>📍 56 Glassford Street Glasgow G1 1UL New York</p>
          <p>📧 contact@example.com</p>
          <p>📞 contact@example.com</p>
          <p>🕒 Monday to Saturday: 9.00am to 16.00pm</p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0949997838946!2d-1.2553848851840104!3d51.75481699907861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6aa570b7195%3A0xe5bcb8ea3b40b3f!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1633965148592!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h4>LEAVE A MESSAGE</h4>
          <h2>We love to hear from you</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.infoSection}>
          {[
            {
              name: "John Doe",
              title: "Senior Marketing Manager",
              phone: "+ 000 123 000 77 88",
              email: "contact@example.com",
              img: pone,
            },
            {
              name: "William Smith",
              title: "Senior Marketing Manager",
              phone: "+ 000 123 000 77 88",
              email: "contact@example.com",
              img: ptwo,
            },
            {
              name: "Emma Stone",
              title: "Senior Marketing Manager",
              phone: "+ 000 123 000 77 88",
              email: "contact@example.com",
              img: pthree,
            },
          ].map((person, index) => (
            <div className={styles.contactCard} key={index}>
              <img src={person.img} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.title}</p>
                <p>Phone: {person.phone}</p>
                <p>Email: {person.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
