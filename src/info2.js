import React from 'react'
import './info2.css'

function Info2({
  image,
  title,
  info,
  background,
  color,
}) {
  return (
    <div
      className='info'
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt='' className='info__image' />
      <div className='info__text'>
        <h4>{title}</h4>
        <h6>{info}</h6>
      </div>
    </div>
  )
}

export default Info2
