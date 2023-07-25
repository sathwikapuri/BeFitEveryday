import React from 'react'
import './Plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Cards from '../../components/Cards'
import {plans} from '../../data'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deleniti veniam beatae quod voluptatum iste necessitatibus earum natus veritatis amet tempore.

    </Header>
    <section className='plans'>
           <div className="container plans_container">
            {
              plans.map(({id,name,desc,price,features})=>{
                   return <Cards key={id} className="plan">
                     <h3>{name}</h3>
                     <small>{desc}</small>
                     <h1>{`$${price}`}</h1><h2>/mo</h2>
                     <h4>Feautures</h4>
                     {
                      features.map(({feature,available},index)=>{
                        return <p key={index} className={!available?'disabled':''}>
                          {feature}
                        </p>
                      })
                     }
                     <button className='btn lg'>Choose plan</button>
                   </Cards>
              })
            }
           </div>
    </section>
    </>
  )
}

export default Plans
