import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <div className='content'>
        <h1>Join our newsletter and get 20% off</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </div>

      <form>
        <input type='email' placeholder='enter your email' />
        <button>Subcribe</button>
      </form>
    </div>
  )
}

export default Contact
