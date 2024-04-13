import { useState } from 'react'
import { MdMode,MdPictureAsPdf,MdDelete } from "react-icons/md";
import './index.css'
import { useEffect } from 'react'
import { getData } from '../../service'
import SharedComponent from '../Shared/shared.component'
import { Link } from 'react-router-dom';

//   const {name,email,registation_date,phoneNo,status,user_image} = con

let url = 'http://localhost:8000/users'
const headers = ['sNo', ' Name','Email','PhoneNo', 'Status','Registation','Actions', ]


function UserManageComponent(){
   const [usersData,setusersData] = useState([])
   const [query,setquery] = useState(null)
   const [filterData,setfilterData] = useState([])

   useEffect(() => {
      getData(url)
      .then((res) => {
         //alert('get the data Successfully..')
         console.log(res.data)
         setusersData(res.data)
         setfilterData(res.data)  
      })
      .catch(() => {
         alert('get data failed..')
      })
   },[])

   function UserSearch(event){
      console.log(event.target.value)
      alert('Onchange')

   }
   

   function handleChange(e) {
      let user_search_value = (e.target.value);
      
      if (user_search_value.length > 0){
         const searchdata = usersData.filter((item) => item.name.toLowerCase().includes(user_search_value));
         setusersData(searchdata)
      } else {
         setusersData(filterData)
      }
      setquery(user_search_value)

  }
   
   return(
   <div className='mt-5'>

      <div className='input-card'>
        <input type='search' placeholder='Search for User..' value={query} className='serch-input' onChange={handleChange} />
        <button type='button' className='serch-btn'>Search</button>
      </div> 

       <div className='table-card'>
         <table class="table table-hover">
           <thead>
              <tr> {headers.map((head) => <th scope="col">{head}</th> )} </tr>
           </thead>
            <tbody>
               {usersData.map((each,index) => (
                  <tr className='p'>
                     <th scope="row">{index+1}</th>
                     <td>{each.name}</td>
                     <td className='table-email'>{each.email}</td>
                     <td>{each.phoneNo}</td>
                     <td className='mo'>{each.status}</td>
                     <td>{each.registation_date}</td>
                     <td>
                        {/* <button className='btn btn-success'>Edit</button> &nbsp;
                        <button className='btn btn-danger'>Delete</button> 
                        <a href='#' onClick={() => {}} ><MdMode className='bomma'/> </a> */}
                        <Link to={`/update-user/${each._id}`}><MdMode className='bomma'/></Link>
                        <a href='#' onClick={() => {}} ><MdDelete className='bomma1'/> </a>
                        <a href='#' onClick={() => {}} ><MdPictureAsPdf className='bomma2'/></a>
                     </td>
                  </tr>
               ))}

               </tbody>
         </table>
       </div>

   </div>

    
   ) 
}

export default UserManageComponent