import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import { useState } from 'react'
import Cards from './Cards'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'
function Card(props)
{
    return <div className='programs_head test'>
    <span>{props.icon}</span>
    <h2>{props.title}</h2>
</div>
}
const Testimonials = () => {
    const [index,setIndex]=useState(0);
    const {name,quote,job,avatar}=testimonials[index];
    const prevTestimonialHandler=()=>{
    
        setIndex(prev =>prev-1);
    if(index<=0)
    {
       setIndex(0);
    }

    }
 const nextTestimonialHandler=()=>{
        setIndex(prev =>prev+1);
        if(index>=testimonials.length-1)
        {
            setIndex(0);
        }
    }
  return (
    <section className='testimonials'>
    <div className='container testimonials_container'>
        
      <Card icon={<ImQuotesLeft/>} title="Testimonials" />
      <Cards className="testimonials">
        <div className='testimonial_avatar'>
             <img src={avatar}  />

        </div>
        
        <p className='testimonials_quote '>
           {quote}
        </p>
        <h5>{name}</h5>
        <small className='testimonial_title'>{job}</small>
      </Cards>
  <div className="testimonials_btn-container">
    <button className="testimonials_btn" onClick={prevTestimonialHandler}>
        <IoIosArrowDropleftCircle/>
    </button>
    <div className="testimonials_btn">
    <button className="testimonials_btn" onClick={nextTestimonialHandler}>
        <IoIosArrowDroprightCircle/>
    </button>
    </div>
  </div>
    </div>
    </section>
  )
}

export default Testimonials
