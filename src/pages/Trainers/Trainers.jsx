import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './Trainers.css'
const Trainers = () => {
  return (
   <>
   <Header title="our trainers" image={HeaderImage} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor omnis ipsam officiis eligendi iste sequi maxime quia. Obcaecati, totam accusamus!</Header>
   <section className="trainers">
    <div className="container trainers_container">
      {
        trainers.map(({id,image,name,job,socials})=>{
          return <Trainer key={id} image={image} name={name} job={job} socials={[
            {icon:<BsInstagram/>,link:socials[0]},
            {icon:<AiOutlineTwitter/>,link:socials[1]},
            {icon:<FaLinkedinIn/>,link:socials[2]}
          ]}/>
        })
      }
    </div>
   </section>
   </>
  )
}

export default Trainers
