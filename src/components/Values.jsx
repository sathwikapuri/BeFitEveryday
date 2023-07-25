import React from 'react'
import image from '../images/values.jpg'
import {GiCutDiamond} from 'react-icons/gi';
import {values} from '../data';
import Cards from './Cards';
function Card(props)
{
    return <div className='programs_head'>
    <span>{props.icon}</span>
    <h2>{props.title}</h2>
</div>
}

const Values = () => {
  return (
    <section className='values'>
       <div className="container values_container">
         <div className="values_left">
           <div className="values_image">
            <img src={image} alt="" />
           </div>
         </div>
         <div className="values_right">
            <Card icon={<GiCutDiamond/>} title="values"/>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam voluptatum aspernatur!
            </p>
            <div className="values_wrapper">
                {
                    values.map(({id,icon,title,desc})=>{
                        return <Cards key={id} className="values_value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Cards>
                    })
                }
            </div>
         </div>
       </div>
    </section>
  )
}

export default Values
