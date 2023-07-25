import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import StoryImage2 from '../../images/about2.jpg'
import StoryImage3 from '../../images/about3.jpg'
import './About.css'
const About = () => {
  return (
    <>
   <Header title="About us" image={HeaderImage}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam deserunt magni numquam fuga officiis quidem dolores cupiditate eum ipsa!

   </Header>
   <section className='about_story'>
      <div className='container about_story-container'>
        <div className='about_section-image'>
        <img src={StoryImage} alt="our story image" />
        </div>
        <div className="about_section-content">
          <h1>our story</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi itaque, delectus, facilis minima, laboriosam error quis eos quae iusto officia vero deleniti corporis quibusdam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos laboriosam nobis dignissimos exercitationem culpa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vero!</p>
        </div>
      </div>
   </section>
   <section className='about_vision'>
      <div className='container about_vision-container'>
      
        <div className="about_section-content">
          <h1>our Vision</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi itaque, delectus, facilis minima, laboriosam error quis eos quae iusto officia vero deleniti corporis quibusdam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos laboriosam nobis dignissimos exercitationem culpa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vero!</p>
        </div>
        <div className='about_section-image'>
        <img src={StoryImage2} alt="our story image" />
        </div>
      </div>
   </section>
   <section className='about_mission'>
      <div className='container about_mission-container'>
      <div className='about_section-image'>
        <img src={StoryImage3} alt="our story image" />
        </div>
        <div className="about_section-content">
          <h1>our Mission</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi itaque, delectus, facilis minima, laboriosam error quis eos quae iusto officia vero deleniti corporis quibusdam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos laboriosam nobis dignissimos exercitationem culpa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vero!</p>
        </div>
      
      </div>
   </section>
  </>
  )
}

export default About
