import GroupImg from './Group 12.png';
import './Input.css';
import ravno from './=.png';
import elips from './Ellipse 3.png';

const Inputs = () => {
  return (
    <div className="input-container">
      <div className="divFirst">
        <input type="text" value="2" readOnly />
        <img src={GroupImg} alt="Group" className="groupImg" />
        <input type="text" value="7" readOnly />
        <img src={elips} alt="Ellipse" className="elips" />
        <input type="text" value="0" readOnly />
        <img src={GroupImg} alt="Group" className="groupImg" />
        <input type="text" value="8" readOnly />
        <input type="text" value="5" readOnly />
      </div>
      <img src={ravno} alt="Equals" className="ravno" />
      <div className="divSecond">
        <input type="text" value="2" readOnly />
        <img src={GroupImg} alt="Group" className="groupImg" />
        <input type="text" value="7" readOnly />
        <img src={elips} alt="Ellipse" className="elips" />
        <input type="text" value="0" readOnly />
        <img src={GroupImg} alt="Group" className="groupImg" />
        <input type="text" value="8" readOnly />
        <input type="text" value="5" readOnly />
      </div>
    </div>
  );
}

export default Inputs;
