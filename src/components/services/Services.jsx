import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>Frontend</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Match figma design</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Consume api </p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Responsive design</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Fix design</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Fullstack</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Fullstack Apps</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Deploy and Maintenance</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Server rendering</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>mentoring and support</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Web development tutoring</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Backend</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>crud implementation</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Rest Apis</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>app maintenance</p>
                </li>
                <li>
                  <BiCheck className='service_list-icon' />
                  <p>Database design</p>
                </li>
              </ul>
            </article>
          </div>
        </section>
    )
}

export default Services
