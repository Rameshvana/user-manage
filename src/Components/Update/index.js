import { useParams } from 'react-router-dom';
import './index.css'
import { useEffect, useRef,useState } from 'react';
import { getData } from '../../service';

function UserupdateCom() {
    const { id } = useParams()
    let Url = `http://localhost:8000/users/${id}`
    console.log(id)
    const [values,setvalues] = useState([])

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneNoRef = useRef()
    const registationRef = useRef()
    const statusRef = useRef()

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
            registation_date : registationRef.current.value,
            user_image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"}
           console.log(data) 
    }       

    return (
        <div>
            
            <div className='up'>
            <h4>Update User Details here</h4>
                <form onSubmit={Updatedata}>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="User name" ref={nameRef}/>
                        </div>
                        <div class="col">
                            <input type='email' class="form-control" placeholder="User email" ref={emailRef}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <input type='date' class="form-control" placeholder="User Restation date" ref={registationRef}/>
                        </div>
                        <div class="col">
                            <input type='password' class="form-control" placeholder="User PhoneNo" ref={phoneNoRef}/>
                        </div>
                    </div>
                    <div class="form-group col">
                      <select id="inputState" class="form-control" ref={statusRef}>
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