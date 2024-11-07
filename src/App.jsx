import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import ArticleCard from './components/ArticleCard'
import './App.css'
import { UserContext } from './context/users'
import UserCard from './components/UserCard'
import Topics from './components/Topics'
import GetArticleByTopic from './components/GetArticleByTopic'


function App() {
const [loggedInUser, setLoggedInUser] = useState({})
const isLoggedIn = Object.keys(loggedInUser).length > 0


  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, isLoggedIn}}>
<>
<Header/>
<NavBar/>
<Routes>
<Route path='/' element={<Homepage />}/>
<Route path='/articles/:article_id' element={<ArticleCard />}/>
<Route path='/login' element={<UserCard/>}/>
<Route path='/topics' element={<Topics/>}/>
<Route path='/topics/:topic' element={<GetArticleByTopic/>}/>
</Routes>

</>
</UserContext.Provider>
  )
}
 

export default App
