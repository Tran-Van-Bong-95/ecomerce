import React, { useState } from 'react'

function ProductImages({ images = [[]] }) {
  const [main, setMain] = useState(images[0])
  // nhờ thiết lập mặc định images = [[]] => main = [] các lượt ấn tiếp theo main sẽ là 1 {}
  return (
    <div className='ProductImages'>
      <div className='image'>
        {images.map((image, index) => (
          <img
            src={image.url}
            alt=''
            className={`${image.url === main.url ? 'active' : null}`}
            onClick={() => {
              console.log('click')
              setMain(images[index])
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImages
