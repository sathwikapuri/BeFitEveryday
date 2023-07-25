import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, minus.
                </p>
                <div className='footer_socials'>
                   <a href="#" target="_blank"><FaLinkedin/></a>
                   <a href="#" target="_blank"><FaFacebookF/></a>
                   <a href="#" target="_blank"><AiOutlineTwitter/></a>
                   <a href="#" target="_blank"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact us</Link>
                <Link to="/s">Support</Link>

            </article>
        </div>
        
    </footer>
  )
}

export default Footer
