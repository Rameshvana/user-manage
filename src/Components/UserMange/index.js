import { useState } from 'react'
import { MdMode,MdPictureAsPdf,MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Spin } from 'antd';


import './index.css'
import { useEffect } from 'react'
import { deleteData, getData } from '../../service'
//import SharedComponent from '../Shared/shared.component'
import { Link } from 'react-router-dom';
import HeaderComponent from '../Header';
import { Pagination } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


//   const {name,email,registation_date,phoneNo,status,user_image} = con

let url = 'http://localhost:8000/users'
const headers = ['#', ' Name','Email','Phone No', 'Status','Registation','Actions', ]


function UserManageComponent(){
   const [usersData,setusersData] = useState([])
   const [query,setquery] = useState(null)
   const [filterData,setfilterData] = useState([])
   const [perpage,setperpage] = useState([])
   const [page,setpage] = useState(1)

   let content_count = 8;

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
         setusersData(res.data.slice(0,content_count))
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

  const handlePagenation = (e,p) => {
   console.log(filterData)
   let y = (content_count*p)
   let x = (p*content_count)-content_count
   console.log(x,y)
   let a = filterData.slice(x,y)
   setusersData(a)
   //setpage(a.length)
   //console.log(a.length,y)

   setpage(p)
  }
  const users = JSON.stringify(usersData)
  localStorage.setItem("users_data", users);
  localStorage.getItem("lastname"); 
   
   return(
   <div className='bg-cardc'>
        <HeaderComponent/>

         <div className='input-card'>
            <div className='mk'>
               <div className='input-section'>
               <CiSearch className='serch-icon' />
               <input type='text' placeholder='Search users' value={query} className='inputEl' onChange={handleChange} />
               </div>
               <button type='button' className='serch-btn'>Search</button>
            </div>
            <Link to='/register-user'><button type='button' className='adduser-btn'> + Add New</button></Link>
         </div> 

 

       <div className='table-card table-responsive-sm'>

         <table class="table table-hover">
           <thead className='bg-dry'>
              <tr> {headers.map((head) => <th >{head}</th> )} </tr>
           </thead>
            <tbody>
               {usersData.map((each,index) => (
                  <tr className='p-5'> 
                     <th scope="row">{'#'}</th>
                     <td><div className='table-user'><a href="#"><img src={each.user_image} class="avatar" alt="Avatar"/> {each.name}</a></div></td>
                     <td className='table-email'>{each.email}</td>
                     <td>{each.phoneNo}</td>
                     <td className='mo'><span className={each.status == 'Active' ? 'Activestatus' : 'deactivestatus' }>{each.status}</span></td>
                     <td>{each.registation_date}</td>
                     <td>
                        {/* <button className='btn btn-success'>Edit</button> &nbsp;
                        <button className='btn btn-danger'>Delete</button> 
                        <a href='#' onClick={() => {}} ><MdMode className='bomma'/> </a> */}
                        <Link to={`/update-user/${each._id}`} title='Update'><MdMode className='update-icon'/></Link>
                        <Link href='#' onClick={() => {deleteUser(each._id)}} title='Delete'><RiDeleteBinFill className='delete-icon'/> </Link>
                     </td>
                  </tr>
               ))}

               </tbody>
         </table>
         <div className='pagination-card'>
         <Pagination count={8} variant="outlined" shape="rounded" color='primary' onChange={handlePagenation}/>
         </div>
         
       </div>
       <strong>Ramesh Vana{page}</strong>


   </div>

    
   ) 
}

export default UserManageComponent