import React from 'react'
import avatar from './Avatar.png'
import './Awesom.css'

const Awesome = () => {
  return (
    <div className='Awesome'>
        <img src={avatar} alt="" />
        <button>Молодец!</button>
    </div>
  )
}

export default Awesome