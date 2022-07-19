import { service } from '../utils/constant'
import styled from 'styled-components'
const Services = () => {
  return (
    <div className='services'>
      <article className='introduce'>
        <h1>Custom Furniture Built Only For You</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </article>
      <section>
        {service.map((item, index) => {
          const { icon, title, describe } = item
          return (
            <article key={index}>
              <p>{icon}</p>
              <p>{title}</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Services
