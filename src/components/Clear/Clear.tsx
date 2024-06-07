import './Clear.css';
import vectorImage from './Vector 516.png'; 
import vectorImage2 from './Vector 515.png'

const Clear = () => {
  return (
    <div className='clear'>
      <div className='clearAll'>
        <div>Убераем запятые</div>
      </div>
      <div className='vectorPardiv'>
        <img className='vector1' src={vectorImage2} alt='Vector Image 1' />
        <img className='vector2' src={vectorImage} alt='Vector Image 2' />
      </div>
    </div>
  );
}

export default Clear;
