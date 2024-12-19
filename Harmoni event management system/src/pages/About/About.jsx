import React from "react";
import moun from "../../assets/mountain.jpeg";
import harmoni from "../../assets/harmoni.png";
import "./About.css";
import Foot from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";

import "react-vertical-timeline-component/style.min.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="first">
          <img src={moun} alt="mountain" />
          <div className="headercontent">
            <h3 className="all">
              A L L &nbsp; Y O U &nbsp; N E E D &nbsp; T O &nbsp; K N O W{" "}
            </h3>
            <h3 className="aa">
              <span className="ab">ABOUT </span> &nbsp;{" "}
              <span className="har">HARMONI</span>
            </h3>
            <p className="bc">Home &nbsp;|&nbsp; About us</p>
          </div>
        </div>
        <div className="M">
          <div className="Middle">
            <div className="left">
              <p>we are harmoni</p>
              <h3>
                No.1 Events <br />
                Management
              </h3>
              <p>Get started!</p>
            </div>

            <div className="mid">
              <h3>
                <b>Our Mission</b>
              </h3>
              <p>
                <i>
                At Harmoni, our mission is to create unforgettable experiences that leave a lasting impact. We believe that every event is a unique opportunity to bring people together, inspire, and celebrate. Our dedicated team of professionals is committed to delivering exceptional service, innovative solutions, and meticulous attention to detail, ensuring that each event is perfectly executed and reflects the vision of our clients.
                </i>
              </p>
              <p className="la">
                <b>
                We go above and beyond to ensure that every event surpasses the expectations of our clients and their guests. From intimate gatherings to grand celebrations, our goal is to deliver outstanding results.
                </b>
              </p>
            </div>
            <div className="right">
              <h3>
                <b>Our Vision</b>
              </h3>
              <p>
                <i>
                  At Harmoni, our vision is to be the leading force in event management, setting the standard for excellence, creativity, and innovation. We aspire to transform the ordinary into the extraordinary, creating events that are not just memorable but legendary.
                </i>
              </p>
              <p className="lab">
                <b>
                We are dedicated to making a positive impact on our planet. Our vision includes integrating sustainable practices into every aspect of our events, ensuring that we contribute to a healthier, greener future.
                </b>
              </p> 
            </div>
          </div>
          
          <div className="caard">
            <div className="ca">
              <h3>Study With Us</h3>
              <p>
                Visit Our World class facil ity for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
            <div className="ca">
              <h3> Study With Us</h3>
              <p>
                Visit Our World class facility for South African Scientist and
                Spectrum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
