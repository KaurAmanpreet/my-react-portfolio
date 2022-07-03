import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>Interpersonal Skills</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            {/* <h3>Frontend Development</h3> */}
            <div className="experience__content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Communication</h4>
                  {/* <small className="text-light">Experienced</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Motivated</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Flexible </h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Responsible </h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Organization </h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Problem Solver</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Initiative</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Leadership</h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            {/* <h3>Backend Development</h3> */}
            <div className="experience__content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Analytical Skills </h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Multitasker </h4>
                  {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Resourceful </h4>
                  {/* <small className="text-light">Experienced</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Team Player </h4>
                  {/* <small className="text-light">Experienced</small> */}
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>Customer Service </h4>
                  {/* <small className="text-light">Experienced</small> */}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Experience
