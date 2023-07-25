import React from 'react'
import {FaCrown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { programs } from '../data';
import Cards from './Cards';

function Card(props)
{
    return <div className='programs_head'>
    <span>{props.icon}</span>
    <h2>{props.title}</h2>
</div>
}
const Programs = () => {
  return (
    <section className='programs'>
     <div className='container programs_container'>
       < Card icon={<FaCrown/>} title="programs"/> 
     
     <div className='programs_wrapper'>
     {
        programs.map(({id,icon,title,info,path})=>{
           return (
            <Cards className="programs_program" key={id}>
               <span>{icon}</span>
               <h4>{title}</h4>
               <small>{info}</small>
               <Link to={path} className="btn sm ab">Learn More </Link>
            </Cards>
           )
        })
     }
     </div>
     </div>
    </section>
      
    
  )
}

export default Programs
