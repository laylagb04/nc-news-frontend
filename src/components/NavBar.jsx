import {Link} from 'react-router-dom'
import home from '../assets/images/home.png'
import login from '../assets/images/login.png'
import topic from '../assets/images/topic.png'

function NavBar(){
    return (
       <div className='navbar-outside-div'>
    <nav>
    <div className='navbar-inner-div'>
       <div className='navbar-homepage-div'>
       <Link to='/' className='link navbar navigation'>Homepage</Link>
       <img className='navbar-homepage-img' src={home}></img>
       </div>
    
    
       <div className='navbar-login-div '>
       <Link to='/login' className='link navbar navigation'>Login</Link>
       <img className='navbar-login-img' src={login}></img>
       </div>
    
    
       <div className='navbar-topics-div '>
       <Link to='/topics' className='link navbar navigation'>Topics</Link>
       <img className='navbar-topics-img' src={topic}></img>
       </div>
    </div>
    
    
    </nav>
       </div>
    )
    
    
    }
    

export default NavBar