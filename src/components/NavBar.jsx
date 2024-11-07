import {Link} from 'react-router-dom'

function NavBar(){
return (
    <div className='navbar'> 
<nav>
<div>
    <Link to='/' className='link'>Homepage</Link>
    <Link to='/login' className='link'>Login</Link>
    <Link to='/topics' className='link'>Topics</Link>
</div>

</nav>





    </div>
)

}

export default NavBar