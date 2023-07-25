import React from 'react'
import Cards from './Cards'
const Trainer = ({image,name,job,socials}) => {
  return (
    
    <Cards className="trainer">
        <div className="trainer_img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer_socials">
            {
                socials.map(({icon,link},index)=>{
                    return <a key={index} href={link}>{icon}</a>
                })
            }
        </div>
    </Cards>
  )
}

export default Trainer
