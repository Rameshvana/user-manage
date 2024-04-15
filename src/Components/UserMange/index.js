import { useState } from 'react'
import { MdMode,MdPictureAsPdf,MdDelete } from "react-icons/md";
import './index.css'
import { useEffect } from 'react'
import { deleteData, getData } from '../../service'
//import SharedComponent from '../Shared/shared.component'
import { Link } from 'react-router-dom';

//   const {name,email,registation_date,phoneNo,status,user_image} = con

let url = 'http://localhost:8000/users'
const headers = ['sNo', ' Name','Email','Phone No', 'Status','Registation','Actions', ]


function UserManageComponent(){
   const [usersData,setusersData] = useState([])
   const [query,setquery] = useState(null)
   const [filterData,setfilterData] = useState([])

   function deleteUser(id){
    let delUrl = `http://localhost:8000/delete-user/${id}`
    console.log(id)

    deleteData(delUrl)
    .then(() => {
      alert('Delete user data successfully..')
      callTheData()
    })
    .catch(() => {
      alert('Delete user data failed..')
    })
   }

   function callTheData() {
      getData(url)
      .then((res) => {
         //alert('get the data Successfully..')
         //console.log(res.data)
         setusersData(res.data)
         setfilterData(res.data)  
      })
      .catch(() => {
         alert('get data failed..')
      })
   }

   useEffect(callTheData,[])

  
   function handleChange(e) {
      let user_search_value = (e.target.value);
      
      if (user_search_value.length > 0){
         const searchdata = filterData.filter((item) => item.name.toLowerCase().includes(user_search_value));
         setusersData(searchdata)
         console.log(searchdata.length)
      } else {
         setusersData(filterData)
      }
      setquery(user_search_value)

  }
   
   return(
   <div className='mt-5'>

      <div className='input-card'>
        <input type='text' placeholder='Search for User..' value={query} className='serch-input' onChange={handleChange} />
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
                        <Link to={`/update-user/${each._id}`} title='Update'><MdMode className='bomma'/></Link>
                        <Link href='#' onClick={() => {deleteUser(each._id)}} title='Delete'><MdDelete className='bomma1'/> </Link>
                        <Link title='Info' onClick={() => {}} ><MdPictureAsPdf className='bomma2'/></Link>
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