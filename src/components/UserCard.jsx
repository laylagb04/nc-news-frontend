import { UserContext } from "../context/users";
import { useContext, useState, useEffect
 } from "react";
import { getUsers } from "../axios";


function UserCard(){
    const [users, setUsers] =useState([])

    const {loggedInUser, setLoggedInUser} = useContext(UserContext)


const [selectedUser, setSelectedUser] = useState(null)


function UserSelection(user){
    setLoggedInUser(user)
    setSelectedUser(user)
}

useEffect(() => {
getUsers().then((usersFromApi) => {
setUsers(usersFromApi)
})
}, [])


return (
    <>
   
    {Object.keys(loggedInUser).length === 0 ? (
    <div>
         <h3 className='user-login-msg'> Select a user to login </h3>
        
    </div>
    ) : (
        <h3 className='user-login-msg'> Welcome {loggedInUser.name} ! </h3>
    )
    }
    <div className='user-login-div-parent'>
    {users.map(user => (
        <div onClick={() => setLoggedInUser(user)}>
           <div className='avatar-login-pairs'>

         <div className='avatar-login-div'> 
        <img className='avatar-login-img' src={user.avatar_url}></img>
        </div> 
        
        <div className='avatar-login-div'>
        <p className='avatar-login-name'>{user.name}</p>
        </div>
        </div>
        </div> 
        
))}
  </div>
</>
)
}

export default UserCard