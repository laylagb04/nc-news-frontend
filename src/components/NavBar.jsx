import {Link} from 'react-router-dom'

function NavBar(){
    return (
       <div className='navbar-div'>
    <nav>
    <div className='navbar-div-inner'>
       <div className='navbar-homepage'>
       <Link to='/' className='link navbar'>Homepage</Link>
       </div>
    
    
       <div className='navbar-login'>
       <Link to='/login' className='link navbar'>Login</Link>
       </div>
    
    
       <div className='navbar-topics'>
       <Link to='/topics' className='link navbar'>Topics</Link>
       </div>
    </div>
    
    
    </nav>
       </div>
    )
    
    
    }
    

export default NavBar