import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
      <section id="services">
        <h5>What Skills I Have</h5>
        <h2>Technical Skills</h2>

        <div className="container services__container">
          {/* Frontend Development */}
          <article className="service">
            <div className="service__head">
              <h3>Frontend Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>HTML5 (Hypertext Markup Language)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>CSS </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Javascript</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>JQuery</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Bootstrap</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>React JS</p>
              </li>
            </ul>
          </article>
          {/* WEB DEVEOPLMENT */}
          <article className="service">
            <div className="service__head">
              <h3>Backend Deveoplment</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Ruby on Rails</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Rails API</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>MySQL</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>PostgreSQL</p>
              </li>
            </ul>
          </article>
          {/* Content Creation */}
          <article className="service">
            <div className="service__head">
              <h3>More Skills</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Git/GitHub</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Bitbucket</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Docker(Basic) </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>XML(Basic)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Visual Studio Code</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Postman</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    )
}

export default Services
