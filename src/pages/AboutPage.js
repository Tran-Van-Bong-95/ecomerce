import React from 'react'
import PageHero from '../components/PageHero'
import image from '../assets/hero-bcg.jpeg'
function AboutPage() {
  return (
    <div className='about'>
      <PageHero title='about' />
      <section>
        <div className='image'>
          <img src={image} alt='image_1' />
        </div>
        <div className='content'>
          <h1>Our Story</h1>
          <div className='underline'></div>
          <div className='content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem earum veniam corrupti perferendis recusandae? Tempora
            porro dolores, eius inventore excepturi amet necessitatibus,
            asperiores, debitis doloremque quaerat accusantium iusto hic
            praesentium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem earum veniam corrupti perferendis recusandae?
            Tempora porro dolores, eius inventore excepturi amet necessitatibus,
            asperiores, debitis doloremque quaerat accusantium iusto hic
            praesentium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem earum veniam corrupti perferendis recusandae?
            Tempora porro dolores, eius inventore excepturi amet necessitatibus,
            asperiores, debitis doloremque quaerat accusantium iusto hic
            praesentium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem earum veniam corrupti perferendis recusandae?
            Tempora porro dolores, eius inventore excepturi amet necessitatibus,
            asperiores, debitis doloremque quaerat accusantium iusto hic
            praesentium?
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
