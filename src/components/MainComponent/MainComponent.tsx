import React from 'react'
import './MainComponent.css'
import MainHeader from '../MainHeader/MainHeader'
import Mainforexrs from '../Mainforexrs/Mainforexrs'

const Maincomponent = () => {
  return (
    <div className='mainComponent'>
        <MainHeader/>
        <Mainforexrs/>
        
    </div>
  )
}

export default Maincomponent