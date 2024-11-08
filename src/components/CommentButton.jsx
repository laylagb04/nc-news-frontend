import {useState, useEffect, useContext} from 'react'
import { postComment } from '../axios';
import { UserContext } from '../context/users';
import { useParams } from 'react-router-dom';

function CommentButton({ setComments}){

    const {loggedInUser, isLoggedIn} = useContext(UserContext)
    const [comment, setComment] = useState('')
const [message, setMessage] = useState('')
const [isLoading, setIsLoading] = useState(false)
const {article_id} = useParams()
const articleID = Number(article_id)
const [showPopup, setShowPopup] = useState(false)
const [popupMsg, setPopupMsg] = useState('')

function handleSubmit(event){
    event.preventDefault()
    setIsLoading(true)
    if(!isLoggedIn){
        setMessage('please login to post a comment')
    }

    let newComment = {
        username: loggedInUser.username,
        body: comment,
    }



   return postComment(articleID, newComment).then((response) =>{
    setComments((currComments) => {
        let newComments = [response, ...currComments]
        return newComments
    })
    setIsLoading(false)
        setComment('');
    
       setPopupMsg('posted')
       setShowPopup(true)
       setTimeout(() => {
        setShowPopup(false)
       }, 3000);
   })
       .catch((err) => {
        if(!isLoggedIn){
            setMessage('please login to post a comment')
        }
        else {
           setPopupMsg('failed to post')
           setShowPopup(true)
           setTimeout(() => {
            setShowPopup(false)
           }, 3000);
        }
       })
}


    return (
        <>
   <form className='comment-form' onSubmit={handleSubmit}>
<label>Comment</label>
<input type='text' value={comment} id='comment' required onChange={(e)=> setComment(e.target.value)}></input>
 <button type='submit'>Post comment</button>
   </form>
   {message}
        
      
            {showPopup && <div className='popup'>{popupMsg}
        </div>}
        
        </>
    )
}


export default CommentButton