
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, deleteUsers, upDateUserName } from './features/UserSlice';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch();


  return (
    <>
      <div className='text-center py-6 bg-lime-200 mb-5'>
        <input className=' bg-slate-500 py-3 px-4 rounded-md mr-5' type="text"  placeholder='Name...' onChange={(e) => setName(e.target.value)}/>
        <input className=' bg-slate-500 py-3 px-4 rounded-md mr-5' type="text" placeholder='UserName...' onChange={(e) => setUsername(e.target.value)}/>
        <button className=' bg-green-400' onClick={() => {dispatch(addUsers({id: userList[userList.length -1].id + 1, name, username }))}}>Add User</button>
      </div>
      <div className=' grid grid-cols-4 gap-5'>
        {userList.map((user) => {
          return(
            <div key={user.id} className=' bg-slate-400 py-6 px-3 text-center rounded-lg'>
              <h2>{user.name}</h2>
              <h2>{user.username}</h2>
              <div className='mt-5'>
                <input className='mb-5 py-2 px-3 rounded-md' type="text" placeholder='new Username' onChange={(e) => setNewUserName(e.target.value)}/>
                <button onClick={() => dispatch(upDateUserName({id: user.id, username: newUserName}))} className=' bg-green-600 py-2'>Update user</button>
                <button onClick={() => dispatch(deleteUsers({id: user.id}))} className=' bg-red-500 py-2 ml-3 px-3'>delete user</button>
              </div>
            </div>
          )
        })}
      </div>
      
    </>
  )
}

export default App
