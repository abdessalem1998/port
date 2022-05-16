import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
          <div className="container about__contanier">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon"/>
                  <h5>Experience</h5>
                  <small>3+ Years Working Experience</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon"/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h5>Projects</h5>
                  <small>80+ Completed</small>
                </article>
              </div>
              <p>
                dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim. Donec pede justo,
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </section>
    )
}

export default About;
