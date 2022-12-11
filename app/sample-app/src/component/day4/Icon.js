import html5 from './html5.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import './Icon.css';

function Icon() {
    return (
        <div className='Icon'>
            <p className='title'>Front End Technologies</p>
            <div className='iconImageBox'>
                <div className='iconImage'><img alt='HTML 5' src={html5} /></div>
                <div className='iconImage'><img alt='CSS' src={css} /></div>
                <div className='iconImage'><img alt='js' src={js} /></div>
                <div className='iconImage'><img alt='React' src={react} /></div>
            </div>
        </div>
    );
}

export default Icon;