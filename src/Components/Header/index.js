import { useParams,useNavigate } from 'react-router-dom';

import { FcSearch } from "react-icons/fc";
import { SiGoogletranslate } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import image from '../../Images/findBubai_image.jpg'
import imag from '../../Images/findBubai_image.jpg'

//let a = <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' className="a1" onClick={() => (navigate('/'))}/>

import './index.css'

function HeaderComponent(){
  const navigate = useNavigate()

  return(
    <div>
      <div className='bg-card'>
            <img src={imag} className="findbubai-icon" onClick={() => (navigate('/'))}/>
      </div>
    </div>
  )  
}

export default HeaderComponent;