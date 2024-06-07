import './SolidMain.css'
import Solid from './Solid/Solid'
import SolidP from './SolidP/SolidP'
import Button1 from '../Button/Button1/Button1'
import Button2 from '../Button/Button2/Button2'

const SolidMain = () => {
  return (
    <div className='Solidmainn'>
        <div  className='SolidMain'>
        <SolidP/>
        <Solid />
        </div>
        <div>
        <p>Решено этапов в примере 0 из 5</p>
        </div>
        <div className='btnSolid'>
            <Button1/>
            <Button2/>
        </div>
        
    </div>
  )
}

export default SolidMain