import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './Gallery.css'
const Gallery = () => {
  const galleryLength=15;
  const images=[]
  for(let i=1;i<=galleryLength;i++)
  {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
   <>
   <Header title="our Gallery" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, commodi porro! Ad quod omnis vero unde atque? Accusantium, porro laborum</Header>
     <section className='gallery'>
      <div className="container gallery_container">
        {
          images.map((image,index)=>{
              return <article key={index}>
                <img src={image} alt="" />
                </article>
          })
        }
      </div>
     </section>
   </>
  )
}

export default Gallery
