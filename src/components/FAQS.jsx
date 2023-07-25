import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'
function Card(props)
{
    return <div className='programs_head'>
    <span>{props.icon}</span>
    <h2>{props.title}</h2>
</div>
}
const FAQS = () => {
  return (
    <section className='faqs'>
      <div className='container faqs_container'>
       <Card icon={FaQuestion} title="FAQs"/>
       <div className="faqs_wrapper">
        {
            faqs.map(({id,question,answer})=>{
                return <FAQ key={id} question={question} answer={answer}/>
            })
        }
       </div>
      </div>
    </section>
  )
}

export default FAQS
