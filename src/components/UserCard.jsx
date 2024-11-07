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
    <h3> Login</h3>
    {loggedInUser ? (
    <div>
        <h3> Welcome {loggedInUser.name} </h3>
    </div>
    ) : (
        <p> Select a user to login </p>
    )
    }
    <div className='user-div'>
    {users.map(user => (
        <div onClick={() => setLoggedInUser(user)}>
        <img className='avatar-img' src={user.avatar_url}></img>
        <p>{user.name}</p>
        </div>
        
))}
  </div>
</>
)
}

export default UserCard