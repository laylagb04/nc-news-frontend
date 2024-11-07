import {useState, useEffect, useContext} from 'react'

import {Link} from 'react-router-dom'


function Topics(){
const [topic, setTopic] = useState('')


function handleTopicChange(event){
if (event.target.value !== ''){
    setTopic(event.target.value)
}else {setCategory('')}
}


return (
    <>
    <h1>Select topic</h1>
    <div className='topic-selector-div'>
<select onChange={handleTopicChange} className='topic-selector'>
    <option>Select a topic</option>
    <option>coding</option>
    <option>cooking</option>
    <option>football</option>
</select>
    </div>

<div className= 'select-topic-drop'>
    {topic && (
        <Link to={`/topics/${topic}`} className='link'>
            Click here to see all {topic} articles
            </Link>
    )}
  </div>
     

    </>
)
}


export default Topics