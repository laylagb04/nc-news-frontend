
import {useState, useEffect, useContext} from 'react'
import { getCommentsById } from '../axios'
import CommentButton from './CommentButton'
import { UserContext } from '../context/users';
import { deleteComment } from '../axios';
import ErrorHandling from './ErrorHandling';


function CommentCard({article}){
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)   
    const [deleteMsg, setDeleteMsg] = useState('')
    const {article_id} = article
    const [comments, setComments] = useState([])
    const [showPopup, setShowPopup] = useState(false)
const [error, setError] = useState(null)



    useEffect(()=> {
if(article_id){


       getCommentsById(article_id).then((comments)=> {
        
            setComments(comments)
        }).catch((err)=>{
          setError(err)
        })
      }
    }, [article_id])

function HandleDelete(commentID){
    deleteComment(commentID).then(() => {

   setComments((prevComments) => {

   const newComments = prevComments.filter((comment) => comment.comment_id !== commentID)


   if (newComments.length < prevComments.length){
    setDeleteMsg('comment deleted')
    setShowPopup(true);
    setTimeout(()=> {
        setShowPopup(false)
    }, 3000)
   }
   else {
    setDeleteMsg('comment not deleted')
  }

  return newComments
   })
   
}).catch((err)=>{
  setError(err)
})


}  

if(error){
  return <ErrorHandling message={error.message}/>
}
return (
  <>
<CommentButton setComments={setComments}/>
  <div>
    {comments.map((comment) => (
        <div className='comment-div'> 
        <p className='comment'>{comment.author}</p>
        <p className='comment body'>{comment.body}</p>
        <p className='comment '> Votes:{comment.votes}</p>
        <p className='comment'> Created at: {new Date(comment.created_at).toLocaleDateString()}</p>
        {loggedInUser.username === comment.author ? (<button onClick={() => HandleDelete(comment.comment_id)} >
            Delete comment </button>) : null  }
           
    </div>
 
    ))}
    
      </div> 
      {showPopup && <div className='popup'>{deleteMsg} </div>}
        </>
)
   
}


export default CommentCard