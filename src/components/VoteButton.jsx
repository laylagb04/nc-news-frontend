
import {useState, useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { updateVotes } from '../axios';


function VoteButton({article_id, articleVotes}){
    const [votes, setVotes] = useState(articleVotes)
const[error, setError] = useState('')


useEffect(()=> {
    setVotes(articleVotes)
}, [articleVotes])

    function HandleVotes(num){
        const newVotes = votes + num
        setVotes(newVotes)

        updateVotes(article_id, num).then(() => {
            setError('')
        }).catch(() => {
            setVotes(votes)
            setError('Something went wrong')
        })
    }


  


    return (
        <>
        <div className='like-sad-icons'>
        <button type='button' onClick={() => HandleVotes(1)}>
          <FavoriteBorderIcon sx={{fontSize:100}}/>
          </button>
          <button type='button' onClick={() => HandleVotes(-1)}>
  <MoodBadIcon sx={{fontSize:100}}/>
          </button>
          </div>
          {error }
          <div className='article-vote-id-parent'>
              <div className='left'> 
               
          <p className='article-vote-id-child'>Votes: {votes}</p>
          </div>
          </div>
          </>
    )
}


export default VoteButton