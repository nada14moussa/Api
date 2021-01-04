import React,{useEffect,useState} from 'react';
import axios from 'axios';

const UserList=()=>{
 const [data,setData]=useState([]);
 useEffect(()=>{
   const getUsers =async()=>{
   const result = await axios.get("https://jsonplaceholder.typicode.com/users");setData(result.data);};  
   getUsers();
 },[]);

 return(
  <div>
     {data.map(el=>(
         <div className='el'>
          <h4>{el.id}</h4>   
          <h4>{el.name}</h4>   
          <h4>{el.email}</h4> 
        </div>   
     ))}
  </div> )   
}
export default UserList;