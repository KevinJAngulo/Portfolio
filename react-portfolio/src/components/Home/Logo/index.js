import './index.scss';
import LogoS from '../../../assets/images/front.png';
import {useRef} from 'react'


const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()
    const outlineLogoRef = useRef()
    return(
        <div className="logo-container">
            <img className="solid-logo" src={LogoS} alt='Kevin'/>


            
        </div>
        
    )

}

export default Logo