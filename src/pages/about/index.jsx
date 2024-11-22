import { Fragment } from "react";
import './Style.css'
import Header from "../../component/header";


 function About() {
    return(
        <Fragment>
            <Header/>
            <div className="about-us">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Your trusted partner in Google.</p>
      </div>
      <div className="about-us-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At CorpField, we aim to provide exceptional service and
            innovative solutions to help our customers achieve their goals. Our
            focus is on quality, reliability, and exceeding expectations.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            We strive to be a leader in [industry/field], delivering outstanding
            value to our clients, employees, and stakeholders while positively
            impacting the community.
          </p>
        </section>
        <section className="team">
          <h2>Meet the Team</h2>
          <p>
            Our team consists of dedicated professionals with expertise in
            [relevant skills/fields]. Together, we bring passion, creativity,
            and commitment to every project.
          </p>
        </section>
      </div>
    </div>
        </Fragment>
    )
 }
 export default About;