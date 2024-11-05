import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import ArticleCard from './components/ArticleCard'




import './App.css'

function App() {
  return (
<>
<Header/>
<NavBar/>
<Routes>
<Route path='/' element={<Homepage />}/>
<Route path='/articles/:article_id' element={<ArticleCard />}/>
</Routes>




</>
  )
}
 

export default App
