import './index.css'
import image from '../../Images/findBubai_image.jpg'
import { TextField } from '@mui/material'
import { FaRegUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";
import { TbBrandSamsungpass } from "react-icons/tb";
import { useRef } from 'react';
import { saveData } from '../../service';
import { Alert, Space } from 'antd';


function UserRegistationCom() {

  let userName = useRef();
  let userEmail = useRef();
  let userPassword = useRef();

  const date = new Date()
  let day = date.getMonth()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let fullDate = `${day}-${month}-${year}`
  console.log(fullDate)

  function handleSubmit(event){
    event.preventDefault()

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNo: document.getElementById('mobileNo').value,
        status: "Active",
        registation_date : fullDate,
        user_image: "https://sea2.discourse-cdn.com/sitepoint/community/user_avatar/www.sitepoint.com/shyflower/48/9500_2.png"
    }
    console.log(data)
    let Url = 'http://localhost:8000/add-user'
    
    saveData(Url,data)
    .then((res) => {
      alert('User registation Successfully..')
    })
    .catch(() => {
      alert('User registation Failed..')
    })
  }

  return (
    <div className='registati'>
       <div className='user-card'>

         <img src='https://t4.ftcdn.net/jpg/05/58/06/81/360_F_558068185_sZmfyrWuzHTfzLdwJuj1ALQcBtbKAtbA.jpg'
          className='regi-img'/>
       
         <form onSubmit={handleSubmit}>
           <h3 className='form-hed'>User Registation Form</h3>

           <div className='m'>
            <FaRegUser/>
           <input type='text ' placeholder='Enter user name' className='name-input' id='name'/> <br/>
           </div>

           <div className='m'>
            <MdMarkEmailRead/>
            <input tyoe='email' placeholder='Enter Email'  className='name-input' id='email'/> <br/>
           </div>

           <div className='m'>
            <MdMobileFriendly/>
            <input type='text' placeholder='Enter MobileNo'  className='name-input'id='mobileNo'/> <br/>
           </div>

           <div className='m'>
            <TbBrandSamsungpass/>
            <input type='password' placeholder='Enter password'  className='name-input'id='password'/> <br/>
           </div>

          
           <div>
            <button type='submit' className='btn btn-primary re-btn'>Submit</button>
           </div>
         </form>

      </div>

    </div>
  )
}

export default UserRegistationCom