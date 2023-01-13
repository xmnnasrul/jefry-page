import React from 'react'
import { FaDiscord, FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiWhatsappFill } from 'react-icons/ri'
import './Contact.css'

function Contact() {
    return (
        <div>

            <section id="contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <div className="content">
                        <ul>
                            <li><RiWhatsappFill size={100} className="large-icons" /></li>
                            <li><FaDiscord size={100} className="large-icons" /></li>
                            <li><FaInstagramSquare size={100} className="large-icons" /></li>
                            <li><SiGmail size={100} className="large-icons" /></li>
                            <li><FaGithub size={100} className="large-icons" /></li>
                        </ul>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Contact