import { useParams } from 'react-router-dom';
import './index.css'
import { useEffect, useRef,useState } from 'react';
import { getData, updateData } from '../../service';
import React from 'react';
import Popup from 'reactjs-popup';
import{ Switch }from"antd";
import 'reactjs-popup/dist/index.css';

function UserupdateCom() {
    const { id } = useParams()
    let Url = `http://localhost:8000/users/${id}`
    let updateUrl = `http://localhost:8000/update-user/${id}`
    console.log(id)
    const [values,setvalues] = useState([])

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneNoRef = useRef()
    const registationRef = useRef()
    const statusRef = useRef()
    const imageRef = useRef()

    useEffect(() => {
        getData(Url)
        .then((res) => {
           //alert('get the data Successfully..')
           let data = res.data 
           console.log(data)
           setvalues(data)
           nameRef.current.value = data.name
           emailRef.current.value = data.email
           phoneNoRef.current.value = data.phoneNo
           registationRef.current.value = data.registation_date
           statusRef.current.value = data.status
           imageRef.current.value = data.user_image
          
        })
        .catch(() => {
           alert('get data failed..')
        })
     },[])

    const Updatedata = (event) => {
        event.preventDefault();
        let data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phoneNo: phoneNoRef.current.value,
            status: statusRef.current.value,
            registation_date : values.registation_date,
            user_image: values.user_image,
        }
        console.log(data) 

        updateData(updateUrl,data)
        .then((res) => {
          alert('Update user data successfully..')  
        })
        .catch(() => {
          alert('Update user data failed..')  
        })
        }       

    return (
        <div className='card'>
            
            <div className='user-update-card'>
            <h4 className='head'>Update User Details Here</h4>
                <form onSubmit={Updatedata}>
                    <div class="row">
                        <div class="col-6 ">
                            <input type="text" class="form-control" placeholder="User name" ref={nameRef} className='update-input'/>
                        </div>
                        <div class="col-6 ">
                            <input type='email' class="form-control" placeholder="User email" ref={emailRef} className='update-input'/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 ">
                            <input type='date' class="form-control" placeholder="User Restation date" ref={registationRef} className='update-input'/>
                        </div>
                        <div class="col-6">
                            <input type='text' class="form-control" placeholder="User PhoneNo" ref={phoneNoRef} className='update-input'/>
                        </div>
                    </div>
                    <div class="form-group col-12">
                      <select id="inputState" class="form-control" ref={statusRef} className='dropdown-user-status'>
                       <option selected>Choose user Status</option>
                       <option>Active</option>
                       <option>Inactive</option>
                     </select>
                    </div>
                    <button type='submit' class="btn btn-primary bu">Update</button>
                </form>
            </div>
   
        </div>
    )
}

export default UserupdateCom;